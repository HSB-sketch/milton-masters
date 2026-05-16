'use client';

import { useState, useMemo, useEffect, FormEvent } from 'react';

// ─── Types ────────────────────────────────────────────────────────────────────
type CategoryKey = '40+' | '50+' | '60+' | 'Open' | 'XD';
type Role = 'none' | 'organizer' | 'spectator';
type SubView = 'players' | 'scoreboard' | 'standings' | 'brackets';

interface Player { id: number; name: string; }
interface RRMatch { id: string; p1Id: number; p2Id: number; s1: number | null; s2: number | null; }
interface SemiMatch { id: string; p1Id: number; p2Id: number; s1: number | null; s2: number | null; }
interface FinalGame { s1: number | null; s2: number | null; }
interface FinalMatch { id: string; p1Id: number; p2Id: number; games: FinalGame[]; }
interface CategoryState {
  players: Player[];
  rrMatches: RRMatch[];
  semiMatches: SemiMatch[];
  finalMatches: FinalMatch[];
}

// ─── Constants ────────────────────────────────────────────────────────────────
const CATS: CategoryKey[] = ['40+', '50+', '60+', 'Open', 'XD'];
const CAT_LABELS: Record<CategoryKey, string> = {
  '40+': "Men's 40+ Doubles",
  '50+': "Men's 50+ Doubles",
  '60+': "Men's 60+ Doubles",
  'Open': 'Open Doubles',
  'XD':   'Mixed Doubles',
};
const PASSWORD   = 'Milton2026';
const STORAGE_KEY = 'mm2026_data';

// ─── Helpers ──────────────────────────────────────────────────────────────────
const mkCat  = (): CategoryState => ({ players: [], rrMatches: [], semiMatches: [], finalMatches: [] });
const mkData = (): Record<CategoryKey, CategoryState> =>
  Object.fromEntries(CATS.map(c => [c, mkCat()])) as Record<CategoryKey, CategoryState>;

function calcStandings(cat: CategoryState) {
  const s: Record<number, { w: number; l: number; pf: number; pa: number }> = {};
  cat.players.forEach(p => { s[p.id] = { w: 0, l: 0, pf: 0, pa: 0 }; });
  cat.rrMatches.forEach(m => {
    if (m.s1 === null || m.s2 === null) return;
    s[m.p1Id].pf += m.s1; s[m.p1Id].pa += m.s2;
    s[m.p2Id].pf += m.s2; s[m.p2Id].pa += m.s1;
    if (m.s1 > m.s2) { s[m.p1Id].w++; s[m.p2Id].l++; }
    else              { s[m.p2Id].w++; s[m.p1Id].l++; }
  });
  return cat.players
    .map(p => ({ ...p, ...s[p.id], diff: s[p.id].pf - s[p.id].pa }))
    .sort((a, b) => b.w !== a.w ? b.w - a.w : b.diff - a.diff);
}

function calcChampion(cat: CategoryState): number | null {
  if (!cat.finalMatches.length) return null;
  const f = cat.finalMatches[0];
  let w1 = 0, w2 = 0;
  f.games.forEach(g => {
    if (g.s1 === null || g.s2 === null) return;
    if (g.s1 > g.s2) w1++; else w2++;
  });
  if (w1 >= 2) return f.p1Id;
  if (w2 >= 2) return f.p2Id;
  return null;
}

// ─── Shared score display ─────────────────────────────────────────────────────
function ScoreCell({ val, onChange, readOnly }: {
  val: number | null;
  onChange?: (v: string) => void;
  readOnly: boolean;
}) {
  if (readOnly) {
    return <span className="w-10 text-center text-white font-bold text-sm inline-block">{val ?? '–'}</span>;
  }
  return (
    <input
      type="number" min="0" max="30"
      value={val ?? ''}
      onChange={e => onChange?.(e.target.value)}
      placeholder="0"
      className="w-10 text-center px-1 py-1 bg-white/10 border border-white/20 rounded text-white text-sm focus:outline-none focus:ring-1 focus:ring-amber-500"
    />
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function LiveTournamentPage() {
  const [role,         setRole]         = useState<Role>('none');
  const [password,     setPassword]     = useState('');
  const [loginError,   setLoginError]   = useState('');
  const [showOrgForm,  setShowOrgForm]  = useState(false);
  const [data,         setData]         = useState<Record<CategoryKey, CategoryState>>(mkData());
  const [activeCat,    setActiveCat]    = useState<CategoryKey>('40+');
  const [subView,      setSubView]      = useState<SubView>('players');
  const [newName,      setNewName]      = useState('');
  const [showWinners,  setShowWinners]  = useState(false);
  const [copied,       setCopied]       = useState(false);

  // Persist to localStorage
  useEffect(() => {
    try { const s = localStorage.getItem(STORAGE_KEY); if (s) setData(JSON.parse(s)); } catch {}
  }, []);
  useEffect(() => {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(data)); } catch {}
  }, [data]);

  const cat      = data[activeCat];
  const standings = useMemo(() => calcStandings(cat), [cat]);
  const top4      = standings.slice(0, 4);
  const champion  = useMemo(() => calcChampion(cat), [cat]);
  const readOnly  = role === 'spectator';

  const pName = (id: number, catKey?: CategoryKey) =>
    (catKey ? data[catKey] : cat).players.find(p => p.id === id)?.name ?? '?';

  // Computed semi / final matches
  const semiMatches: SemiMatch[] = useMemo(() => {
    if (cat.semiMatches.length) return cat.semiMatches;
    if (top4.length < 4) return [];
    return [
      { id: 'sf1', p1Id: top4[0].id, p2Id: top4[3].id, s1: null, s2: null },
      { id: 'sf2', p1Id: top4[1].id, p2Id: top4[2].id, s1: null, s2: null },
    ];
  }, [cat.semiMatches, top4]);

  const finalMatches: FinalMatch[] = useMemo(() => {
    if (cat.finalMatches.length) return cat.finalMatches;
    const finalists = semiMatches
      .map(m => (m.s1 !== null && m.s2 !== null) ? (m.s1 > m.s2 ? m.p1Id : m.p2Id) : null)
      .filter((id): id is number => id !== null);
    if (finalists.length < 2) return [];
    return [{ id: 'final', p1Id: finalists[0], p2Id: finalists[1],
              games: [{s1:null,s2:null},{s1:null,s2:null},{s1:null,s2:null}] }];
  }, [cat.finalMatches, semiMatches]);

  // ─── Mutators ───────────────────────────────────────────────────────────────
  const upCat = (fn: (c: CategoryState) => CategoryState) =>
    setData(d => ({ ...d, [activeCat]: fn(d[activeCat]) }));

  const addPlayer = () => {
    if (!newName.trim()) return;
    upCat(c => {
      const id = Math.max(0, ...c.players.map(p => p.id)) + 1;
      return { ...c, players: [...c.players, { id, name: newName.trim() }] };
    });
    setNewName('');
  };

  const removePlayer = (id: number) =>
    upCat(c => ({ ...c, players: c.players.filter(p => p.id !== id) }));

  const generateRR = () => {
    const { players } = cat;
    if (players.length < 2) return;
    const ms: RRMatch[] = [];
    for (let i = 0; i < players.length; i++)
      for (let j = i + 1; j < players.length; j++)
        ms.push({ id: `${players[i].id}-${players[j].id}`, p1Id: players[i].id, p2Id: players[j].id, s1: null, s2: null });
    upCat(c => ({ ...c, rrMatches: ms, semiMatches: [], finalMatches: [] }));
    setSubView('scoreboard');
  };

  const upRR = (id: string, f: 's1'|'s2', v: string) => {
    const n = v === '' ? null : parseInt(v);
    upCat(c => ({ ...c, rrMatches: c.rrMatches.map(m => m.id === id ? { ...m, [f]: isNaN(n as number) ? null : n } : m) }));
  };

  const initSemis = () => {
    if (!cat.semiMatches.length && top4.length === 4)
      upCat(c => ({ ...c, semiMatches: [
        { id: 'sf1', p1Id: top4[0].id, p2Id: top4[3].id, s1: null, s2: null },
        { id: 'sf2', p1Id: top4[1].id, p2Id: top4[2].id, s1: null, s2: null },
      ]}));
  };

  const upSemi = (id: string, f: 's1'|'s2', v: string) => {
    const n = v === '' ? null : parseInt(v);
    upCat(c => ({ ...c, semiMatches: c.semiMatches.map(m => m.id === id ? { ...m, [f]: isNaN(n as number) ? null : n } : m) }));
  };

  const initFinals = () => {
    if (!cat.finalMatches.length && finalMatches.length)
      upCat(c => ({ ...c, finalMatches }));
  };

  const upFinal = (id: string, gi: number, f: 's1'|'s2', v: string) => {
    const n = v === '' ? null : parseInt(v);
    upCat(c => ({ ...c, finalMatches: c.finalMatches.map(m => m.id === id ? {
      ...m, games: m.games.map((g, i) => i === gi ? { ...g, [f]: isNaN(n as number) ? null : n } : g)
    } : m) }));
  };

  const resetCategory = () => {
    if (!confirm(`Reset ALL data for ${activeCat}? This cannot be undone.`)) return;
    upCat(() => mkCat());
    setSubView('players');
  };

  // ─── Winners snippet ─────────────────────────────────────────────────────────
  const winnersText = CATS.map(c => {
    const champ = calcChampion(data[c]);
    const name  = champ ? data[c].players.find(p => p.id === champ)?.name ?? 'TBA' : 'TBA';
    return `${CAT_LABELS[c]}: ${name}`;
  }).join('\n');

  const winnersJSX = `{['40+ Doubles', '50+ Doubles', '60+ Doubles', 'Open Doubles', 'Mixed Doubles'].map((cat, i) => {
  const winners = [
    '${CATS.map(c => { const ch = calcChampion(data[c]); return ch ? data[c].players.find(p => p.id === ch)?.name ?? 'TBA' : 'TBA'; }).join("', '")}',
  ];
  return (
    <div key={cat} className="border border-amber-600/20 rounded p-6 bg-slate-900 text-center">
      <div className="text-3xl mb-3">🏆</div>
      <p className="text-amber-600 text-xs uppercase tracking-wider font-semibold mb-2">{cat}</p>
      <p className="text-white text-sm font-semibold">{winners[i]}</p>
      <p className="text-gray-500 text-xs mt-2">2026 Winners</p>
    </div>
  );
})}`;

  const copyWinners = () => {
    navigator.clipboard.writeText(winnersText).then(() => { setCopied(true); setTimeout(() => setCopied(false), 2000); });
  };

  // ─── Entry screen ─────────────────────────────────────────────────────────
  if (role === 'none') {
    return (
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-sm">
          <div className="text-center mb-10">
            <div className="text-7xl mb-4">🏸</div>
            <h1 className="text-4xl font-bold text-white mb-2">Milton Masters</h1>
            <p className="text-amber-500 text-sm uppercase tracking-widest font-semibold">2026 Live Tournament</p>
          </div>

          {!showOrgForm ? (
            <div className="space-y-3">
              <button
                onClick={() => setRole('spectator')}
                className="w-full py-4 bg-slate-800 hover:bg-slate-700 border border-white/10 text-white font-semibold rounded-lg transition-all flex items-center justify-center gap-3 text-lg"
              >
                <span className="text-2xl">👁</span> Watch Live
                <span className="text-xs text-white/40 font-normal ml-1">(Public)</span>
              </button>
              <button
                onClick={() => setShowOrgForm(true)}
                className="w-full py-4 bg-amber-600 hover:bg-amber-500 text-white font-semibold rounded-lg transition-all flex items-center justify-center gap-3 text-lg"
              >
                <span className="text-2xl">🔐</span> Organizer Login
              </button>
              <a href="/" className="block text-center text-white/30 hover:text-white/60 text-sm mt-6 transition-colors">
                ← Back to Milton Masters
              </a>
            </div>
          ) : (
            <div className="bg-slate-900 border border-white/10 rounded-xl p-6">
              <h2 className="text-white font-semibold mb-4 text-center">Organizer Access</h2>
              <form
                onSubmit={(e: FormEvent) => {
                  e.preventDefault();
                  if (password === PASSWORD) { setRole('organizer'); setLoginError(''); }
                  else { setLoginError('Incorrect password'); setPassword(''); }
                }}
                className="space-y-3"
              >
                <input
                  type="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="Tournament password"
                  autoFocus
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
                <button type="submit" className="w-full py-3 bg-amber-600 hover:bg-amber-500 text-white font-semibold rounded-lg transition-all">
                  Enter
                </button>
                {loginError && <p className="text-red-400 text-sm text-center">{loginError}</p>}
              </form>
              <button onClick={() => { setShowOrgForm(false); setLoginError(''); setPassword(''); }}
                className="w-full mt-3 text-white/40 hover:text-white text-sm transition-colors text-center">
                ← Back
              </button>
            </div>
          )}
        </div>
      </main>
    );
  }

  // ─── Main App ──────────────────────────────────────────────────────────────
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 py-6 px-4">
      <div className="max-w-5xl mx-auto space-y-4">

        {/* ── Header ── */}
        <div className="bg-slate-900 border border-white/10 rounded-xl p-4 flex items-center justify-between flex-wrap gap-3">
          <div>
            <h1 className="text-xl font-bold text-white">🏸 Milton Masters 2026</h1>
            <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 mt-1 rounded-full text-xs font-semibold ${
              role === 'organizer' ? 'bg-amber-600/20 text-amber-400' : 'bg-green-600/20 text-green-400'
            }`}>
              <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
              {role === 'organizer' ? 'Organizer Mode' : 'Spectator View — Live'}
            </span>
          </div>
          <div className="flex gap-2">
            {role === 'organizer' && (
              <button onClick={() => setShowWinners(true)}
                className="px-3 py-1.5 bg-amber-600 hover:bg-amber-500 text-white text-xs font-semibold rounded-lg transition-colors">
                🏆 Export Winners
              </button>
            )}
            <button onClick={() => { setRole('none'); setShowOrgForm(false); setPassword(''); }}
              className="px-3 py-1.5 bg-white/10 hover:bg-white/20 text-white text-xs rounded-lg border border-white/10 transition-colors">
              Exit
            </button>
          </div>
        </div>

        {/* ── Category Tabs ── */}
        <div className="flex gap-2 overflow-x-auto pb-1">
          {CATS.map(c => {
            const champ = calcChampion(data[c]);
            return (
              <button key={c} onClick={() => { setActiveCat(c); setSubView(readOnly ? 'scoreboard' : 'players'); }}
                className={`flex-shrink-0 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                  activeCat === c
                    ? 'bg-amber-600 text-white shadow-lg shadow-amber-600/20'
                    : 'bg-slate-900 border border-white/10 text-white/70 hover:text-white hover:bg-slate-800'
                }`}>
                {c}{champ ? ' 🏆' : ''}
              </button>
            );
          })}
        </div>

        {/* ── Category Panel ── */}
        <div className="bg-slate-900 border border-white/10 rounded-xl overflow-hidden">

          {/* Category header */}
          <div className="px-5 py-3 border-b border-white/10 flex items-center justify-between flex-wrap gap-2">
            <h2 className="text-white font-bold">{CAT_LABELS[activeCat]}</h2>
            <div className="flex items-center gap-3">
              {champion && (
                <span className="text-xs bg-amber-600/20 text-amber-400 px-3 py-1 rounded-full font-semibold">
                  🏆 {pName(champion)}
                </span>
              )}
              {role === 'organizer' && (
                <button onClick={resetCategory}
                  className="text-red-400/60 hover:text-red-400 text-xs transition-colors">
                  Reset
                </button>
              )}
            </div>
          </div>

          {/* Sub-tabs */}
          <div className="flex gap-1 px-3 py-2 border-b border-white/10">
            {(readOnly
              ? ['scoreboard', 'standings', 'brackets'] as SubView[]
              : ['players', 'scoreboard', 'standings', 'brackets'] as SubView[]
            ).map(v => (
              <button key={v}
                onClick={() => {
                  if (v === 'brackets') { initSemis(); initFinals(); }
                  setSubView(v);
                }}
                className={`px-3 py-1.5 rounded text-xs font-semibold transition-all capitalize ${
                  subView === v ? 'bg-amber-600 text-white' : 'text-white/50 hover:text-white hover:bg-white/5'
                }`}>
                {v}
              </button>
            ))}
          </div>

          {/* ── Panel content ── */}
          <div className="p-5">

            {/* ───── PLAYERS ───── */}
            {subView === 'players' && role === 'organizer' && (
              <div>
                <div className="flex gap-2 mb-4">
                  <input type="text" placeholder="Player / Team name"
                    value={newName}
                    onChange={e => setNewName(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && addPlayer()}
                    className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm"
                  />
                  <button onClick={addPlayer}
                    className="px-5 py-2 bg-amber-600 hover:bg-amber-500 text-white font-semibold rounded-lg transition-colors text-sm">
                    Add
                  </button>
                </div>

                {cat.players.length === 0 ? (
                  <p className="text-white/40 text-sm">No players yet — add some above.</p>
                ) : (
                  <div className="space-y-2 mb-5">
                    {cat.players.map(p => (
                      <div key={p.id} className="flex justify-between items-center px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg">
                        <span className="text-white text-sm">{p.name}</span>
                        <button onClick={() => removePlayer(p.id)}
                          className="text-red-400 hover:text-red-300 text-xs px-2 py-1 border border-red-400/20 rounded hover:bg-red-400/10 transition-colors">
                          Remove
                        </button>
                      </div>
                    ))}
                  </div>
                )}

                <button onClick={generateRR} disabled={cat.players.length < 2}
                  className="w-full py-3 bg-amber-600 hover:bg-amber-500 disabled:opacity-30 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition-all text-sm">
                  Generate Round-Robin
                  {cat.players.length >= 2 && ` (${cat.players.length * (cat.players.length - 1) / 2} matches)`}
                </button>
              </div>
            )}

            {/* ───── SCOREBOARD ───── */}
            {subView === 'scoreboard' && (
              <div className="space-y-8">

                {/* Round-Robin */}
                <div>
                  <h3 className="text-amber-500 text-xs uppercase tracking-widest font-semibold mb-3">Round-Robin</h3>
                  {cat.rrMatches.length === 0 ? (
                    <p className="text-white/40 text-sm">
                      {role === 'organizer' ? 'Add players and generate matches in the Players tab.' : 'Matches not started yet.'}
                    </p>
                  ) : (
                    <div className="space-y-2">
                      {cat.rrMatches.map(m => {
                        const done = m.s1 !== null && m.s2 !== null;
                        return (
                          <div key={m.id}
                            className={`flex items-center gap-3 px-4 py-3 rounded-lg border ${
                              done ? 'bg-white/5 border-white/10' : 'bg-amber-600/5 border-amber-600/20'
                            }`}>
                            <span className={`flex-1 text-right text-sm font-medium ${done && m.s1! > m.s2! ? 'text-amber-400' : 'text-white'}`}>
                              {pName(m.p1Id)}
                            </span>
                            <ScoreCell val={m.s1} readOnly={readOnly} onChange={v => upRR(m.id, 's1', v)} />
                            <span className="text-white/30 text-xs">vs</span>
                            <ScoreCell val={m.s2} readOnly={readOnly} onChange={v => upRR(m.id, 's2', v)} />
                            <span className={`flex-1 text-sm font-medium ${done && m.s2! > m.s1! ? 'text-amber-400' : 'text-white'}`}>
                              {pName(m.p2Id)}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>

                {/* Semi-Finals */}
                {top4.length === 4 && (
                  <div>
                    <h3 className="text-amber-500 text-xs uppercase tracking-widest font-semibold mb-3">Semi-Finals</h3>
                    {semiMatches.length === 0 && role === 'organizer' && (
                      <button onClick={initSemis}
                        className="mb-3 px-4 py-2 bg-amber-600/20 border border-amber-600/30 text-amber-400 text-xs rounded-lg hover:bg-amber-600/30 transition-colors">
                        Initialize Semi-Finals
                      </button>
                    )}
                    <div className="space-y-2">
                      {semiMatches.map((m, i) => {
                        const done = m.s1 !== null && m.s2 !== null;
                        return (
                          <div key={m.id}
                            className={`flex items-center gap-3 px-4 py-3 rounded-lg border ${
                              done ? 'bg-white/5 border-white/10' : 'bg-amber-600/5 border-amber-600/20'
                            }`}>
                            <span className="text-white/40 text-xs w-8">SF{i + 1}</span>
                            <span className={`flex-1 text-right text-sm font-medium ${done && m.s1! > m.s2! ? 'text-amber-400' : 'text-white'}`}>
                              {pName(m.p1Id)}
                            </span>
                            <ScoreCell val={m.s1} readOnly={readOnly} onChange={v => upSemi(m.id, 's1', v)} />
                            <span className="text-white/30 text-xs">vs</span>
                            <ScoreCell val={m.s2} readOnly={readOnly} onChange={v => upSemi(m.id, 's2', v)} />
                            <span className={`flex-1 text-sm font-medium ${done && m.s2! > m.s1! ? 'text-amber-400' : 'text-white'}`}>
                              {pName(m.p2Id)}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Finals */}
                {finalMatches.length > 0 && (
                  <div>
                    <h3 className="text-amber-500 text-xs uppercase tracking-widest font-semibold mb-3">Finals — Best of 3</h3>
                    {role === 'organizer' && !cat.finalMatches.length && (
                      <button onClick={initFinals}
                        className="mb-3 px-4 py-2 bg-amber-600/20 border border-amber-600/30 text-amber-400 text-xs rounded-lg hover:bg-amber-600/30 transition-colors">
                        Initialize Finals
                      </button>
                    )}
                    {finalMatches.map(f => {
                      let w1 = 0, w2 = 0;
                      f.games.forEach(g => { if (g.s1 !== null && g.s2 !== null) { if (g.s1 > g.s2) w1++; else w2++; }});
                      return (
                        <div key={f.id} className="border border-amber-600/20 rounded-lg overflow-hidden">
                          <div className="flex items-center justify-between px-4 py-3 bg-amber-600/10 border-b border-amber-600/20">
                            <span className={`text-sm font-bold ${w1 >= 2 ? 'text-amber-400' : 'text-white'}`}>{pName(f.p1Id)}</span>
                            <span className="text-white font-bold px-3">{w1} – {w2}</span>
                            <span className={`text-sm font-bold ${w2 >= 2 ? 'text-amber-400' : 'text-white'}`}>{pName(f.p2Id)}</span>
                          </div>
                          <div className="divide-y divide-white/5">
                            {f.games.map((g, gi) => (
                              <div key={gi} className="flex items-center gap-3 px-4 py-2.5">
                                <span className="text-white/40 text-xs w-14">Game {gi + 1}</span>
                                <span className="flex-1" />
                                <ScoreCell val={g.s1} readOnly={readOnly} onChange={v => upFinal(f.id, gi, 's1', v)} />
                                <span className="text-white/30 text-xs">–</span>
                                <ScoreCell val={g.s2} readOnly={readOnly} onChange={v => upFinal(f.id, gi, 's2', v)} />
                                <span className="flex-1" />
                              </div>
                            ))}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}

                {/* Champion */}
                {champion && (
                  <div className="p-6 bg-gradient-to-r from-amber-600 to-amber-500 rounded-xl text-center">
                    <p className="text-amber-900 text-xs font-bold uppercase tracking-widest mb-2">🏆 Champion</p>
                    <p className="text-white text-3xl font-bold">{pName(champion)}</p>
                  </div>
                )}
              </div>
            )}

            {/* ───── STANDINGS ───── */}
            {subView === 'standings' && (
              <div>
                <h3 className="text-amber-500 text-xs uppercase tracking-widest font-semibold mb-4">Round-Robin Standings</h3>
                {standings.length === 0 ? (
                  <p className="text-white/40 text-sm">No matches yet.</p>
                ) : (
                  <div className="space-y-2">
                    {standings.map((s, i) => (
                      <div key={s.id}
                        className={`grid grid-cols-[32px_1fr_70px_90px] gap-3 items-center px-3 py-3 rounded-lg border text-sm ${
                          i < 4 ? 'bg-amber-600/10 border-amber-600/30' : 'bg-white/5 border-white/10'
                        }`}>
                        <div className={`text-center font-bold text-sm ${i < 4 ? 'text-amber-400' : 'text-white/40'}`}>{i + 1}</div>
                        <div className="text-white font-medium">{s.name}</div>
                        <div className="text-white/60 text-xs">{s.w}W – {s.l}L</div>
                        <div className="text-white/60 text-xs">{s.pf}–{s.pa} ({s.diff > 0 ? '+' : ''}{s.diff})</div>
                      </div>
                    ))}
                  </div>
                )}
                {standings.length > 0 && (
                  <p className="text-white/30 text-xs mt-3">Top 4 advance to semi-finals. Tiebreaker: point differential.</p>
                )}
              </div>
            )}

            {/* ───── BRACKETS ───── */}
            {subView === 'brackets' && (
              <div className="space-y-6">
                {semiMatches.length === 0 && finalMatches.length === 0 && (
                  <p className="text-white/40 text-sm">Complete round-robin matches to unlock brackets.</p>
                )}

                {/* Semi-Finals bracket */}
                {semiMatches.length > 0 && (
                  <div>
                    <h3 className="text-amber-500 text-xs uppercase tracking-widest font-semibold mb-3">Semi-Finals</h3>
                    <div className="space-y-3">
                      {semiMatches.map((m, i) => {
                        const done  = m.s1 !== null && m.s2 !== null;
                        const w1    = done && m.s1! > m.s2!;
                        const w2    = done && m.s2! > m.s1!;
                        const seed1 = top4.findIndex(x => x.id === m.p1Id) + 1;
                        const seed2 = top4.findIndex(x => x.id === m.p2Id) + 1;
                        return (
                          <div key={m.id} className="grid grid-cols-[1fr_60px_1fr] gap-2">
                            <div className={`p-3 rounded-lg border text-center ${w1 ? 'bg-amber-600/20 border-amber-500' : 'bg-white/5 border-white/10'}`}>
                              <div className="text-amber-600/70 text-xs mb-1">Seed {seed1}</div>
                              <div className={`text-sm font-semibold ${w1 ? 'text-amber-400' : 'text-white'}`}>{pName(m.p1Id)}</div>
                            </div>
                            <div className="flex items-center justify-center">
                              <span className="text-white font-bold text-sm">{m.s1 ?? '–'}&nbsp;:&nbsp;{m.s2 ?? '–'}</span>
                            </div>
                            <div className={`p-3 rounded-lg border text-center ${w2 ? 'bg-amber-600/20 border-amber-500' : 'bg-white/5 border-white/10'}`}>
                              <div className="text-amber-600/70 text-xs mb-1">Seed {seed2}</div>
                              <div className={`text-sm font-semibold ${w2 ? 'text-amber-400' : 'text-white'}`}>{pName(m.p2Id)}</div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Finals bracket */}
                {finalMatches.length > 0 && (
                  <div>
                    <h3 className="text-amber-500 text-xs uppercase tracking-widest font-semibold mb-3">Finals — Best of 3</h3>
                    {finalMatches.map(f => {
                      let w1 = 0, w2 = 0;
                      f.games.forEach(g => { if (g.s1 !== null && g.s2 !== null) { if (g.s1 > g.s2) w1++; else w2++; }});
                      const done = w1 >= 2 || w2 >= 2;
                      return (
                        <div key={f.id} className="space-y-2">
                          <div className="grid grid-cols-[1fr_60px_1fr] gap-2">
                            <div className={`p-3 rounded-lg border text-center ${done && w1 > w2 ? 'bg-amber-600/20 border-amber-500' : 'bg-white/5 border-white/10'}`}>
                              <div className={`text-sm font-semibold ${done && w1 > w2 ? 'text-amber-400' : 'text-white'}`}>{pName(f.p1Id)}</div>
                              <div className="text-white/40 text-xs mt-1">{w1} game{w1 !== 1 ? 's' : ''}</div>
                            </div>
                            <div className="flex items-center justify-center">
                              <span className="text-white font-bold text-sm">{w1}&nbsp;:&nbsp;{w2}</span>
                            </div>
                            <div className={`p-3 rounded-lg border text-center ${done && w2 > w1 ? 'bg-amber-600/20 border-amber-500' : 'bg-white/5 border-white/10'}`}>
                              <div className={`text-sm font-semibold ${done && w2 > w1 ? 'text-amber-400' : 'text-white'}`}>{pName(f.p2Id)}</div>
                              <div className="text-white/40 text-xs mt-1">{w2} game{w2 !== 1 ? 's' : ''}</div>
                            </div>
                          </div>
                          <div className="bg-white/5 border border-white/10 rounded-lg p-3 text-xs text-white/50 flex gap-4 justify-center">
                            {f.games.map((g, i) => (
                              <span key={i}>Game {i + 1}: {g.s1 !== null && g.s2 !== null ? `${g.s1}–${g.s2}` : 'Pending'}</span>
                            ))}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}

                {/* Champion */}
                {champion && (
                  <div className="p-5 bg-gradient-to-r from-amber-600 to-amber-500 rounded-xl text-center">
                    <p className="text-amber-900 text-xs font-bold uppercase tracking-widest mb-1">🏆 Champion — {CAT_LABELS[activeCat]}</p>
                    <p className="text-white text-2xl font-bold">{pName(champion)}</p>
                  </div>
                )}
              </div>
            )}

          </div>
        </div>

        {/* ── All Categories Summary ── */}
        <div className="bg-slate-900 border border-white/10 rounded-xl p-5">
          <h3 className="text-white font-bold mb-4">All Categories Overview</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {CATS.map(c => {
              const champ  = calcChampion(data[c]);
              const name   = champ ? data[c].players.find(p => p.id === champ)?.name : null;
              const count  = data[c].players.length;
              const played = data[c].rrMatches.filter(m => m.s1 !== null).length;
              const total  = data[c].rrMatches.length;
              return (
                <button key={c} onClick={() => { setActiveCat(c); setSubView(readOnly ? 'scoreboard' : 'players'); }}
                  className={`p-3 rounded-lg border text-left transition-all hover:border-amber-600/50 ${
                    activeCat === c ? 'border-amber-600 bg-amber-600/10' : 'border-white/10 bg-white/5'
                  }`}>
                  <div className="text-amber-500 font-bold text-lg mb-1">{c}</div>
                  {name ? (
                    <div className="text-amber-400 text-xs font-semibold">🏆 {name}</div>
                  ) : count === 0 ? (
                    <div className="text-white/30 text-xs">No players</div>
                  ) : (
                    <div className="text-white/50 text-xs">{count} players • {played}/{total} played</div>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        <div className="text-center pb-4">
          <a href="/" className="text-white/30 hover:text-white/60 text-sm transition-colors">← Milton Masters Home</a>
        </div>
      </div>

      {/* ── Winners Modal ── */}
      {showWinners && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-slate-900 border border-white/20 rounded-2xl p-6 w-full max-w-lg shadow-2xl">
            <div className="flex justify-between items-center mb-5">
              <h2 className="text-white font-bold text-lg">🏆 2026 Champions</h2>
              <button onClick={() => setShowWinners(false)} className="text-white/40 hover:text-white text-xl">✕</button>
            </div>

            <div className="space-y-2 mb-5">
              {CATS.map(c => {
                const champ = calcChampion(data[c]);
                const name  = champ ? data[c].players.find(p => p.id === champ)?.name ?? 'TBA' : 'TBA';
                return (
                  <div key={c} className="flex justify-between items-center px-4 py-3 bg-white/5 border border-white/10 rounded-lg">
                    <span className="text-white/70 text-sm">{CAT_LABELS[c]}</span>
                    <span className={`text-sm font-semibold ${name !== 'TBA' ? 'text-amber-400' : 'text-white/30'}`}>
                      {name !== 'TBA' ? `🏆 ${name}` : 'TBA'}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="bg-black/30 border border-white/10 rounded-lg p-4 mb-4">
              <p className="text-white/40 text-xs mb-2 uppercase tracking-wider">Copy this to update your homepage</p>
              <pre className="text-amber-400 text-xs whitespace-pre-wrap">{winnersText}</pre>
            </div>

            <div className="flex gap-3">
              <button onClick={copyWinners}
                className="flex-1 py-2.5 bg-amber-600 hover:bg-amber-500 text-white text-sm font-semibold rounded-lg transition-all">
                {copied ? '✓ Copied!' : '📋 Copy to Clipboard'}
              </button>
              <button onClick={() => setShowWinners(false)}
                className="flex-1 py-2.5 bg-white/10 hover:bg-white/20 text-white text-sm rounded-lg transition-colors">
                Close
              </button>
            </div>

            <p className="text-white/30 text-xs mt-4 text-center">
              After copying, send these to your developer to update the Past Champions section on your homepage.
            </p>
          </div>
        </div>
      )}
    </main>
  );
}
