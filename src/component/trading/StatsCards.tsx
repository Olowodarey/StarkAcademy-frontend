import React from "react";

const GiftIcon = () => (
  <svg width="24" height="24" fill="none" stroke="#A259FF" strokeWidth="2" viewBox="0 0 24 24">
    <rect x="3" y="8" width="18" height="13" rx="2" stroke="#A259FF" strokeWidth="2" fill="none"/>
    <path d="M12 8V21" stroke="#A259FF" strokeWidth="2"/>
    <path d="M3 12H21" stroke="#A259FF" strokeWidth="2"/>
    <path d="M7.5 8C6.11929 8 5 6.88071 5 5.5C5 4.11929 6.11929 3 7.5 3C8.88071 3 10 4.11929 10 5.5V8" stroke="#A259FF" strokeWidth="2"/>
    <path d="M16.5 8C17.8807 8 19 6.88071 19 5.5C19 4.11929 17.8807 3 16.5 3C15.1193 3 14 4.11929 14 5.5V8" stroke="#A259FF" strokeWidth="2"/>
  </svg>
);

interface StatsCardsProps {
  airdrops?: string;
  tournaments?: string;
  rank?: string;
  winnings?: string;
}

const cardData = [
  {
    title: "Community Airdrops",
    key: "airdrops",
    subtitle: (
      <span className="text-green-500 text-sm font-medium">
        +2.5% <span className="text-gray-400 font-normal">from yesterday</span>
      </span>
    ),
  },
  {
    title: "Active Tournaments",
    key: "tournaments",
    subtitle: <span className="text-gray-400 text-sm">2 free, 1 premium</span>,
  },
  {
    title: "Tournament Rank",
    key: "rank",
    subtitle: <span className="text-gray-400 text-sm">Weekly Challenge</span>,
  },
  {
    title: "Total Winnings",
    key: "winnings",
    subtitle: <span className="text-gray-400 text-sm">From 5 tournaments</span>,
  },
];

const StatsCards: React.FC<StatsCardsProps> = (props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 my-8">
      {cardData.map((card) => (
        <div
          key={card.key}
          className="border border-gray-400 rounded-xl px-8 py-7 flex flex-col min-h-[160px] justify-between relative bg-transparent"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="font-medium text-lg text-white">{card.title}</span>
            <span className="ml-2"><GiftIcon /></span>
          </div>
          <div className="text-3xl font-bold text-white mb-1">
            {props[card.key as keyof StatsCardsProps] || "$0.00"}
          </div>
          <div>{card.subtitle}</div>
        </div>
      ))}
    </div>
  );
};

export default StatsCards; 