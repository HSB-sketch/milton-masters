'use client';

import { useState, useMemo, FormEvent } from 'react';

interface Player {
  id: number;
  name: string;
}

interface RoundRobinMatch {
  id: string;
  player1Id: number;
  player2Id: number;
  player1Score: number | null;
  player2Score: number | null;
}

interface SemiMatch {
  id: string;
  player1Id: number;
  player2Id: number;
  score1: number | null;
  score2: number | null;
}

interface FinalGame {
  score1: number | null;
  score2: number | null;
}

interface FinalMatch {
  id: string;
  player1Id: number;
  player2Id: number;
  games: FinalGame[];
}

interface Standing {
  id: number;
  name: string;
  wins: number;
  losses: number;
  pointsFor: number;
  pointsAgainst: number;
  pointDiff: number;
}

const TOURNAMENT_PASSWORD = 'Milton2026';

export default function LiveTournamentPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const [players, setPlayers] = useState<Player[]>([
    { id: 1, name: 'Player 1' },
    { id: 2, name: 'Player 2' },
    { id: 3, name: 'Player 3' },
    { id: 4, name: 'Player 4' },
  ]);
  const [newPlayer, setNewPlayer] = useState('');
  const [matches, setMatches] = useState<RoundRobinMatch[]>([]);
  const [semiMatches, setSemiMatches] = useState<SemiMatch[]>([]);
  const [finalMatches, setFinalMatches] = useState<FinalMatch[]>([]);
  const [view, setView] = useState<'players' | 'scoreboard' | 'standings' | 'brackets'>('players');

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    if (password === TOURNAMENT_PASSWORD) {
      setIsLoggedIn(true);
      setLoginError('');
    } else {
      setLoginError('Incorrect password');
      setPassword('');
    }
  };

  const addPlayer = () => {
    if (newPlayer.trim()) {
      const newId = Math.max(0, ...players.map((p) => p.id)) + 1;
      setPlayers([...players, { id: newId, name: newPlayer.trim() }]);
      setNewPlayer('');
    }
  };

  const removePlayer = (id: number) => {
    setPlayers(players.filter((p) => p.id !== id));
  };

  const generateMatches = () => {
    if (players.length < 2) {
      alert('Need at least 2 players');
      return;
    }
    const newMatches: RoundRobinMatch[] = [];
    for (let i = 0; i < players.length; i++) {
      for (let j = i + 1; j < players.length; j++) {
        newMatches.push({
          id: `${players[i].id}-${players[j].id}`,
          player1Id: players[i].id,
          player2Id: players[j].id,
          player1Score: null,
          player2Score: null,
        });
      }
    }
    setMatches(newMatches);
    setSemiMatches([]);
    setFinalMatches([]);
    setView('scoreboard');
  };

  const updateRRScore = (matchId: string, field: 'p1' | 'p2', value: string) => {
    const num = value === '' ? null : parseInt(value);
    setMatches(
      matches.map((m) =>
        m.id === matchId
          ? {
              ...m,
              player1Score: field === 'p1' ? (isNaN(num as number) ? null : num) : m.player1Score,
              player2Score: field === 'p2' ? (isNaN(num as number) ? null : num) : m.player2Score,
            }
          : m
      )
    );
  };

  const updateSemiScore = (matchId: string, field: 's1' | 's2', value: string) => {
    const num = value === '' ? null : parseInt(value);
    setSemiMatches(
      semiMatches.map((m) =>
        m.id === matchId
          ? {
              ...m,
              score1: field === 's1' ? (isNaN(num as number) ? null : num) : m.score1,
              score2: field === 's2' ? (isNaN(num as number) ? null : num) : m.score2,
            }
          : m
      )
    );
  };

  const updateFinalScore = (matchId: string, gameNum: number, field: 's1' | 's2', value: string) => {
    const num = value === '' ? null : parseInt(value);
    setFinalMatches(
      finalMatches.map((m) =>
        m.id === matchId
          ? {
              ...m,
              games: m.games.map((g, idx) =>
                idx === gameNum
                  ? {
                      score1: field === 's1' ? (isNaN(num as number) ? null : num) : g.score1,
                      score2: field === 's2' ? (isNaN(num as number) ? null : num) : g.score2,
                    }
                  : g
              ),
            }
          : m
      )
    );
  };

  const standings: Standing[] = useMemo(() => {
    const stats: Record<number, { wins: number; losses: number; pointsFor: number; pointsAgainst: number }> = {};
    players.forEach((p) => {
      stats[p.id] = { wins: 0, losses: 0, pointsFor: 0, pointsAgainst: 0 };
    });

    matches.forEach((m) => {
      if (m.player1Score !== null && m.player2Score !== null) {
        stats[m.player1Id].pointsFor += m.player1Score;
        stats[m.player1Id].pointsAgainst += m.player2Score;
        stats[m.player2Id].pointsFor += m.player2Score;
        stats[m.player2Id].pointsAgainst += m.player1Score;

        if (m.player1Score > m.player2Score) {
          stats[m.player1Id].wins++;
          stats[m.player2Id].losses++;
        } else {
          stats[m.player2Id].wins++;
          stats[m.player1Id].losses++;
        }
      }
    });

    return Object.entries(stats)
      .map(([id, stat]) => ({
        id: parseInt(id),
        name: players.find((p) => p.id === parseInt(id))?.name || '',
        ...stat,
        pointDiff: stat.pointsFor - stat.pointsAgainst,
      }))
      .sort((a, b) => {
        if (b.wins !== a.wins) return b.wins - a.wins;
        return b.pointDiff - a.pointDiff;
      });
  }, [matches, players]);

  const semiFinalists = standings.slice(0, 4);

  const computedSemiMatches: SemiMatch[] = useMemo(() => {
    if (semiMatches.length > 0) return semiMatches;
    if (semiFinalists.length < 4) return [];
    return [
      { id: 'sf1', player1Id: semiFinalists[0].id, player2Id: semiFinalists[3].id, score1: null, score2: null },
      { id: 'sf2', player1Id: semiFinalists[1].id, player2Id: semiFinalists[2].id, score1: null, score2: null },
    ];
  }, [semiMatches, semiFinalists]);

  const initSemis = () => {
    if (semiMatches.length === 0 && semiFinalists.length === 4) {
      setSemiMatches([
        { id: 'sf1', player1Id: semiFinalists[0].id, player2Id: semiFinalists[3].id, score1: null, score2: null },
        { id: 'sf2', player1Id: semiFinalists[1].id, player2Id: semiFinalists[2].id, score1: null, score2: null },
      ]);
    }
  };

  const computedFinalMatches: FinalMatch[] = useMemo(() => {
    if (finalMatches.length > 0) return finalMatches;
    if (computedSemiMatches.length < 2) return [];
    const finalists = computedSemiMatches
      .map((m) => {
        if (m.score1 === null || m.score2 === null) return null;
        return m.score1 > m.score2 ? m.player1Id : m.player2Id;
      })
      .filter((id): id is number => id !== null);

    if (finalists.length < 2) return [];

    return [
      {
        id: 'final',
        player1Id: finalists[0],
        player2Id: finalists[1],
        games: [
          { score1: null, score2: null },
          { score1: null, score2: null },
          { score1: null, score2: null },
        ],
      },
    ];
  }, [finalMatches, computedSemiMatches]);

  const initFinals = () => {
    if (finalMatches.length === 0 && computedFinalMatches.length > 0) {
      setFinalMatches(computedFinalMatches);
    }
  };

  const champion = useMemo(() => {
    if (computedFinalMatches.length === 0) return null;
    const final = computedFinalMatches[0];
    let wins1 = 0;
    let wins2 = 0;
    final.games.forEach((g) => {
      if (g.score1 === null || g.score2 === null) return;
      if (g.score1 > g.score2) wins1++;
      else wins2++;
    });
    if (wins1 >= 2) return final.player1Id;
    if (wins2 >= 2) return final.player2Id;
    return null;
  }, [computedFinalMatches]);

  const exportResults = () => {
    let csv = 'Milton Masters 2026 Badminton Tournament Results\n';
    csv += `Generated: ${new Date().toLocaleString()}\n\n`;
    csv += 'STANDINGS\n';
    csv += 'Rank,Player,Wins,Losses,Points For,Points Against\n';
    standings.forEach((s, i) => {
      csv += `${i + 1},${s.name},${s.wins},${s.losses},${s.pointsFor},${s.pointsAgainst}\n`;
    });
    csv += '\n\nROUND ROBIN RESULTS\n';
    csv += 'Player 1,Player 2,Score\n';
    matches.forEach((m) => {
      const p1 = players.find((p) => p.id === m.player1Id)?.name;
      const p2 = players.find((p) => p.id === m.player2Id)?.name;
      csv += `${p1},${p2},${m.player1Score}-${m.player2Score}\n`;
    });
    if (computedSemiMatches.length > 0) {
      csv += '\n\nSEMI-FINAL RESULTS\n';
      csv += 'Player 1,Player 2,Score\n';
      computedSemiMatches.forEach((m) => {
        const p1 = players.find((p) => p.id === m.player1Id)?.name;
        const p2 = players.find((p) => p.id === m.player2Id)?.name;
        csv += `${p1},${p2},${m.score1}-${m.score2}\n`;
      });
    }
    if (computedFinalMatches.length > 0) {
      csv += '\n\nFINAL RESULTS (Best of 3)\n';
      const final = computedFinalMatches[0];
      const p1 = players.find((p) => p.id === final.player1Id)?.name;
      const p2 = players.find((p) => p.id === final.player2Id)?.name;
      const games = final.games.map((g) => `${g.score1}-${g.score2}`).join(' | ');
      csv += `${p1},${p2},${games}\n`;
    }
    if (champion) {
      csv += `\n\nCHAMPION: ${players.find((p) => p.id === champion)?.name}\n`;
    }

    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/csv;charset=utf-8,' + encodeURIComponent(csv));
    element.setAttribute('download', 'milton-masters-2026-results.csv');
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  if (!isLoggedIn) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900 flex items-center justify-center px-4 py-12">
        <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-10 w-full max-w-md shadow-2xl">
          <div className="text-center mb-8">
            <div className="text-6xl mb-3">🏸</div>
            <h1 className="text-3xl font-bold text-white mb-2">Milton Masters</h1>
            <p className="text-emerald-300 text-sm uppercase tracking-widest">2026 Live Tournament</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm text-white/70 mb-2">Tournament Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                placeholder="Enter password"
                autoFocus
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-lg transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              Access Tournament
            </button>
            {loginError && <div className="text-red-400 text-sm text-center">{loginError}</div>}
          </form>
          <div className="mt-8 pt-6 border-t border-white/10 text-center">
            <p className="text-white/50 text-xs">🔒 Organizers Only</p>
            <a href="/" className="text-white/40 hover:text-white text-xs mt-3 inline-block">
              ← Back to Home
            </a>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 mb-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h1 className="text-3xl font-bold text-white flex items-center gap-3">
                <span>🏸</span> Milton Masters 2026
              </h1>
              <p className="text-emerald-300 text-sm mt-1">Live Tournament Tracker</p>
            </div>
            <button
              onClick={() => setIsLoggedIn(false)}
              className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white text-sm rounded-lg border border-white/20 transition-colors"
            >
              Logout
            </button>
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-2 mb-6 flex gap-2 overflow-x-auto">
          {(['players', 'scoreboard', 'standings', 'brackets'] as const).map((v) => (
            <button
              key={v}
              onClick={() => {
                if (v === 'scoreboard' || v === 'brackets') {
                  initSemis();
                  initFinals();
                }
                setView(v);
              }}
              className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                view === v
                  ? 'bg-emerald-600 text-white'
                  : 'text-white/70 hover:text-white hover:bg-white/10'
              }`}
            >
              {v.charAt(0).toUpperCase() + v.slice(1)}
            </button>
          ))}
        </div>

        <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6">
          {view === 'players' && (
            <div>
              <h2 className="text-xl font-bold text-white mb-4">Tournament Players</h2>
              <div className="flex gap-2 mb-4">
                <input
                  type="text"
                  placeholder="Player name"
                  value={newPlayer}
                  onChange={(e) => setNewPlayer(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && addPlayer()}
                  className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
                <button
                  onClick={addPlayer}
                  className="px-6 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-medium rounded-lg transition-colors"
                >
                  Add
                </button>
              </div>
              <div className="space-y-2 mb-6">
                {players.map((p) => (
                  <div
                    key={p.id}
                    className="flex justify-between items-center p-3 bg-white/5 border border-white/10 rounded-lg"
                  >
                    <span className="text-white">{p.name}</span>
                    <button
                      onClick={() => removePlayer(p.id)}
                      className="text-red-400 hover:text-red-300 text-sm px-3 py-1 border border-red-400/30 rounded hover:bg-red-400/10 transition-colors"
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
              <button
                onClick={generateMatches}
                className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-lg transition-all"
              >
                Generate Round-Robin ({players.length > 1 ? (players.length * (players.length - 1)) / 2 : 0} matches)
              </button>
            </div>
          )}

          {view === 'scoreboard' && (
            <div>
              <h2 className="text-xl font-bold text-white mb-4">Live Scoreboard</h2>

              <div className="mb-8">
                <h3 className="text-emerald-300 text-sm uppercase tracking-widest mb-3">Round-Robin</h3>
                {matches.length === 0 ? (
                  <p className="text-white/50">Generate matches from the Players tab</p>
                ) : (
                  <div className="space-y-3">
                    {matches.map((m) => {
                      const p1 = players.find((p) => p.id === m.player1Id)?.name;
                      const p2 = players.find((p) => p.id === m.player2Id)?.name;
                      return (
                        <div key={m.id} className="p-3 bg-white/5 border border-white/10 rounded-lg">
                          <div className="grid grid-cols-[1fr_60px_60px_1fr] gap-3 items-center">
                            <div className="text-right text-white font-medium text-sm">{p1}</div>
                            <input
                              type="number"
                              min="0"
                              max="30"
                              value={m.player1Score ?? ''}
                              onChange={(e) => updateRRScore(m.id, 'p1', e.target.value)}
                              placeholder="0"
                              className="text-center px-2 py-1 bg-white/10 border border-white/20 rounded text-white"
                            />
                            <input
                              type="number"
                              min="0"
                              max="30"
                              value={m.player2Score ?? ''}
                              onChange={(e) => updateRRScore(m.id, 'p2', e.target.value)}
                              placeholder="0"
                              className="text-center px-2 py-1 bg-white/10 border border-white/20 rounded text-white"
                            />
                            <div className="text-white font-medium text-sm">{p2}</div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

              {semiFinalists.length === 4 && (
                <div className="mb-8">
                  <h3 className="text-emerald-300 text-sm uppercase tracking-widest mb-3">Semi-Finals</h3>
                  <div className="space-y-3">
                    {computedSemiMatches.map((m) => {
                      const p1 = players.find((p) => p.id === m.player1Id)?.name;
                      const p2 = players.find((p) => p.id === m.player2Id)?.name;
                      return (
                        <div key={m.id} className="p-3 bg-white/5 border border-white/10 rounded-lg">
                          <div className="grid grid-cols-[1fr_60px_60px_1fr] gap-3 items-center">
                            <div className="text-right text-white font-medium text-sm">{p1}</div>
                            <input
                              type="number"
                              min="0"
                              max="30"
                              value={m.score1 ?? ''}
                              onChange={(e) => updateSemiScore(m.id, 's1', e.target.value)}
                              placeholder="0"
                              className="text-center px-2 py-1 bg-white/10 border border-white/20 rounded text-white"
                            />
                            <input
                              type="number"
                              min="0"
                              max="30"
                              value={m.score2 ?? ''}
                              onChange={(e) => updateSemiScore(m.id, 's2', e.target.value)}
                              placeholder="0"
                              className="text-center px-2 py-1 bg-white/10 border border-white/20 rounded text-white"
                            />
                            <div className="text-white font-medium text-sm">{p2}</div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {computedFinalMatches.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-emerald-300 text-sm uppercase tracking-widest mb-3">Finals (Best of 3)</h3>
                  {computedFinalMatches.map((m) => {
                    const p1 = players.find((p) => p.id === m.player1Id)?.name;
                    const p2 = players.find((p) => p.id === m.player2Id)?.name;
                    let wins1 = 0;
                    let wins2 = 0;
                    m.games.forEach((g) => {
                      if (g.score1 !== null && g.score2 !== null) {
                        if (g.score1 > g.score2) wins1++;
                        else if (g.score2 > g.score1) wins2++;
                      }
                    });
                    return (
                      <div key={m.id} className="p-4 bg-white/5 border border-white/10 rounded-lg">
                        <div className="flex justify-between items-center mb-4">
                          <span className="text-white font-semibold">{p1}</span>
                          <span className="text-emerald-300 text-lg font-bold">
                            {wins1} - {wins2}
                          </span>
                          <span className="text-white font-semibold">{p2}</span>
                        </div>
                        <div className="space-y-2">
                          {m.games.map((g, idx) => (
                            <div key={idx} className="grid grid-cols-[1fr_60px_60px_1fr] gap-3 items-center text-sm">
                              <div className="text-right text-white/60">Game {idx + 1}</div>
                              <input
                                type="number"
                                min="0"
                                max="30"
                                value={g.score1 ?? ''}
                                onChange={(e) => updateFinalScore(m.id, idx, 's1', e.target.value)}
                                placeholder="0"
                                className="text-center px-2 py-1 bg-white/10 border border-white/20 rounded text-white"
                              />
                              <input
                                type="number"
                                min="0"
                                max="30"
                                value={g.score2 ?? ''}
                                onChange={(e) => updateFinalScore(m.id, idx, 's2', e.target.value)}
                                placeholder="0"
                                className="text-center px-2 py-1 bg-white/10 border border-white/20 rounded text-white"
                              />
                              <div></div>
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

              {champion && (
                <div className="p-6 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-2xl text-center">
                  <div className="text-amber-900 font-bold text-sm uppercase tracking-widest mb-2">
                    🏆 Champion
                  </div>
                  <div className="text-3xl font-bold text-white">
                    {players.find((p) => p.id === champion)?.name}
                  </div>
                </div>
              )}
            </div>
          )}

          {view === 'standings' && (
            <div>
              <h2 className="text-xl font-bold text-white mb-4">Standings</h2>
              {standings.length === 0 || matches.length === 0 ? (
                <p className="text-white/50">Generate and enter matches to see standings</p>
              ) : (
                <div className="space-y-2">
                  {standings.map((s, rank) => (
                    <div
                      key={s.id}
                      className={`grid grid-cols-[40px_1fr_80px_100px] gap-3 p-3 rounded-lg items-center text-sm border ${
                        rank < 4 ? 'bg-emerald-600/20 border-emerald-500/30' : 'bg-white/5 border-white/10'
                      }`}
                    >
                      <div className="text-center font-bold text-emerald-300">{rank + 1}</div>
                      <div className="text-white font-medium">{s.name}</div>
                      <div className="text-white/70 text-xs">
                        {s.wins}W - {s.losses}L
                      </div>
                      <div className="text-white/70 text-xs">
                        {s.pointsFor}-{s.pointsAgainst}
                      </div>
                    </div>
                  ))}
                </div>
              )}
              <p className="text-white/40 text-xs mt-4">
                Top 4 qualify for semi-finals. Sorted by Wins, then Point Differential.
              </p>
            </div>
          )}

          {view === 'brackets' && (
            <div>
              <div className="flex justify-between items-center mb-6 flex-wrap gap-3">
                <h2 className="text-xl font-bold text-white">Tournament Bracket</h2>
                <button
                  onClick={exportResults}
                  className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-medium rounded-lg transition-colors"
                >
                  📥 Export CSV
                </button>
              </div>

              {semiFinalists.length < 4 ? (
                <p className="text-white/50">Complete round-robin matches to see brackets</p>
              ) : (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-emerald-300 text-sm uppercase tracking-widest mb-3">Semi-Finals</h3>
                    <div className="space-y-3">
                      {computedSemiMatches.map((m) => {
                        const p1 = players.find((p) => p.id === m.player1Id);
                        const p2 = players.find((p) => p.id === m.player2Id);
                        const seed1 = semiFinalists.findIndex((x) => x.id === m.player1Id) + 1;
                        const seed2 = semiFinalists.findIndex((x) => x.id === m.player2Id) + 1;
                        const isComplete = m.score1 !== null && m.score2 !== null;
                        const winner1 = isComplete && m.score1! > m.score2!;
                        const winner2 = isComplete && m.score2! > m.score1!;

                        return (
                          <div key={m.id} className="p-4 bg-white/5 border border-white/10 rounded-lg">
                            <div className="grid grid-cols-[1fr_80px_1fr] gap-3 items-center">
                              <div
                                className={`p-3 rounded-lg border ${
                                  winner1 ? 'bg-emerald-600/30 border-emerald-500' : 'bg-white/5 border-white/10'
                                }`}
                              >
                                <div className="text-emerald-300 text-xs mb-1">Seed {seed1}</div>
                                <div className="text-white font-medium">{p1?.name}</div>
                              </div>
                              <div className="text-center text-white font-bold">
                                {m.score1 ?? '-'} : {m.score2 ?? '-'}
                              </div>
                              <div
                                className={`p-3 rounded-lg border ${
                                  winner2 ? 'bg-emerald-600/30 border-emerald-500' : 'bg-white/5 border-white/10'
                                }`}
                              >
                                <div className="text-emerald-300 text-xs mb-1">Seed {seed2}</div>
                                <div className="text-white font-medium">{p2?.name}</div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {computedFinalMatches.length > 0 && (
                    <div>
                      <h3 className="text-emerald-300 text-sm uppercase tracking-widest mb-3">Finals (Best of 3)</h3>
                      {computedFinalMatches.map((m) => {
                        const p1 = players.find((p) => p.id === m.player1Id);
                        const p2 = players.find((p) => p.id === m.player2Id);
                        let wins1 = 0;
                        let wins2 = 0;
                        m.games.forEach((g) => {
                          if (g.score1 !== null && g.score2 !== null) {
                            if (g.score1 > g.score2) wins1++;
                            else if (g.score2 > g.score1) wins2++;
                          }
                        });
                        const isComplete = wins1 >= 2 || wins2 >= 2;

                        return (
                          <div key={m.id} className="p-4 bg-white/5 border border-white/10 rounded-lg">
                            <div className="grid grid-cols-[1fr_80px_1fr] gap-3 items-center mb-3">
                              <div
                                className={`p-3 rounded-lg border ${
                                  isComplete && wins1 > wins2
                                    ? 'bg-emerald-600/30 border-emerald-500'
                                    : 'bg-white/5 border-white/10'
                                }`}
                              >
                                <div className="text-white font-medium">{p1?.name}</div>
                                <div className="text-emerald-300 text-xs mt-1">Wins: {wins1}</div>
                              </div>
                              <div className="text-center text-white font-bold text-lg">
                                {wins1} - {wins2}
                              </div>
                              <div
                                className={`p-3 rounded-lg border ${
                                  isComplete && wins2 > wins1
                                    ? 'bg-emerald-600/30 border-emerald-500'
                                    : 'bg-white/5 border-white/10'
                                }`}
                              >
                                <div className="text-white font-medium">{p2?.name}</div>
                                <div className="text-emerald-300 text-xs mt-1">Wins: {wins2}</div>
                              </div>
                            </div>
                            <div className="bg-white/5 border border-white/10 rounded p-2 text-xs text-white/60 space-y-1">
                              {m.games.map((g, i) => (
                                <div key={i}>
                                  Game {i + 1}:{' '}
                                  {g.score1 !== null && g.score2 !== null
                                    ? `${g.score1} - ${g.score2}`
                                    : 'Pending'}
                                </div>
                              ))}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>

        <div className="text-center mt-6">
          <a href="/" className="text-white/40 hover:text-white text-sm transition-colors">
            ← Back to Milton Masters Home
          </a>
        </div>
      </div>
    </main>
  );
}
