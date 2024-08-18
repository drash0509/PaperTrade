import React from 'react';

interface StockCardProps {
  name: string;
  company: string;
  price: number;
  change: number;
  changePercent: number;
}

const StockCard: React.FC<StockCardProps> = ({ name, company, price, change, changePercent }) => {
  const isPositive = change > 0;

  return (
    <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg shadow-sm mb-2">
      <div>
        <h3 className="font-bold text-sm">{name}</h3>
        <p className="text-xs text-gray-500">{company}</p>
      </div>
      <div className="text-right">
        <p className="font-semibold">₹ {price.toFixed(2)}</p>
        <p className={`text-sm ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
          {isPositive ? '▲' : '▼'} {change.toFixed(2)} ({changePercent.toFixed(2)}%)
        </p>
      </div>
    </div>
  );
};

export default StockCard;
