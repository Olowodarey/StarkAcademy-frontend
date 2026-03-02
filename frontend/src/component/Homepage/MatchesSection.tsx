"use client";

import { useEffect, useState } from "react";

export enum MatchStatus {
  SCHEDULED = "SCHEDULED",
  LIVE = "LIVE",
  COMPLETED = "COMPLETED",
  CANCELLED = "CANCELLED",
}

export interface Match {
  id: string;
  homeTeam: string;
  awayTeam: string;
  homeScore: number | null;
  awayScore: number | null;
  matchTime: number;
  status: MatchStatus;
}

function formatMatchTime(unixTimestamp: number): string {
  const date = new Date(unixTimestamp * 1000);
  return date.toLocaleDateString("en-GB", {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function MatchStatusBadge({ status }: { status: MatchStatus }) {
  const config: Record<MatchStatus, { label: string; classes: string }> = {
    [MatchStatus.SCHEDULED]: {
      label: "Upcoming",
      classes: "bg-orange-500/20 text-orange-400 border-orange-500/40",
    },
    [MatchStatus.LIVE]: {
      label: "● Live",
      classes:
        "bg-green-500/20 text-green-400 border-green-500/40 animate-pulse",
    },
    [MatchStatus.COMPLETED]: {
      label: "Ended",
      classes: "bg-gray-500/20 text-gray-400 border-gray-500/40",
    },
    [MatchStatus.CANCELLED]: {
      label: "Cancelled",
      classes: "bg-red-500/20 text-red-400 border-red-500/40",
    },
  };

  const { label, classes } = config[status] ?? config[MatchStatus.SCHEDULED];

  return (
    <span
      className={`px-2.5 py-0.5 rounded-full text-xs font-semibold border ${classes}`}
    >
      {label}
    </span>
  );
}

function MatchCard({ match }: { match: Match }) {
  return (
    <div className="group bg-linear-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-orange-500/50 p-5 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/10 hover:-translate-y-0.5">
      {/* Status badge */}
      <div className="flex justify-end mb-3">
        <MatchStatusBadge status={match.status} />
      </div>

      {/* Teams */}
      <div className="flex items-center gap-3 mb-4">
        {/* Home Team */}
        <div className="flex-1 text-right">
          <p className="text-base font-bold text-white leading-tight group-hover:text-orange-300 transition-colors">
            {match.homeTeam}
          </p>
          <p className="text-xs text-gray-500 mt-0.5">Home</p>
        </div>

        {/* VS divider */}
        <div className="flex flex-col items-center gap-1 shrink-0">
          {match.homeScore !== null && match.awayScore !== null ? (
            <span className="text-2xl font-black text-orange-400">
              {match.homeScore} – {match.awayScore}
            </span>
          ) : (
            <span className="text-sm font-black text-gray-500 px-3 py-1 rounded-lg bg-gray-700/50">
              VS
            </span>
          )}
        </div>

        {/* Away Team */}
        <div className="flex-1 text-left">
          <p className="text-base font-bold text-white leading-tight group-hover:text-orange-300 transition-colors">
            {match.awayTeam}
          </p>
          <p className="text-xs text-gray-500 mt-0.5">Away</p>
        </div>
      </div>

      {/* Match Time */}
      <div className="flex items-center justify-center gap-1.5 text-xs text-gray-400 border-t border-gray-700/50 pt-3">
        <svg
          className="w-3.5 h-3.5 shrink-0"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>{formatMatchTime(match.matchTime)}</span>
      </div>
    </div>
  );
}

function SkeletonCard() {
  return (
    <div className="bg-gray-800/50 rounded-2xl border border-gray-700/30 p-5 animate-pulse">
      <div className="flex justify-end mb-3">
        <div className="h-5 w-16 bg-gray-700 rounded-full" />
      </div>
      <div className="flex items-center gap-3 mb-4">
        <div className="flex-1 space-y-1.5">
          <div className="h-4 bg-gray-700 rounded ml-auto w-3/4" />
          <div className="h-3 bg-gray-800 rounded ml-auto w-1/3" />
        </div>
        <div className="h-6 w-12 bg-gray-700 rounded" />
        <div className="flex-1 space-y-1.5">
          <div className="h-4 bg-gray-700 rounded w-3/4" />
          <div className="h-3 bg-gray-800 rounded w-1/3" />
        </div>
      </div>
      <div className="h-3 bg-gray-700 rounded w-2/3 mx-auto mt-3 pt-3" />
    </div>
  );
}

export default function MatchesSection() {
  const [matches, setMatches] = useState<Match[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        setLoading(true);
        setError(null);
        // Simulate loading then empty state as design mockup
        setTimeout(() => {
          if (!cancelled) setMatches([]);
          if (!cancelled) setLoading(false);
        }, 1500);
      } catch (err) {
        if (!cancelled)
          setError(
            "Could not load matches. Please check the backend is running.",
          );
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section className="relative py-20 px-6">
      {/* Section heading */}
      <div className="max-w-7xl mx-auto mb-12 text-center">
        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-orange-500/15 text-orange-400 border border-orange-500/30 mb-4">
          Live from API
        </span>
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
          Upcoming{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-yellow-400">
            Matches
          </span>
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto text-lg">
          Pick a match, predict the result, and earn points on-chain.
        </p>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Loading skeletons */}
        {loading && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        )}

        {/* Error state */}
        {!loading && error && (
          <div className="flex flex-col items-center justify-center py-20 gap-4">
            <div className="w-14 h-14 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center">
              <svg
                className="w-6 h-6 text-red-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            </div>
            <p className="text-red-400 font-medium">{error}</p>
          </div>
        )}

        {/* Empty state */}
        {!loading && !error && matches.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20 gap-4">
            <div className="w-14 h-14 rounded-full bg-gray-700/50 border border-gray-700 flex items-center justify-center">
              <svg
                className="w-6 h-6 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <p className="text-gray-400">
              No upcoming matches found. Sync the API from the backend first.
            </p>
          </div>
        )}

        {/* Grid of matches */}
        {!loading && !error && matches.length > 0 && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {matches.map((match) => (
              <MatchCard key={match.id} match={match} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
