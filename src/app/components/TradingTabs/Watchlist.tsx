'use client';

import { useState } from 'react';
import StockCard from '../SrockCard';
import SearchIcon from '@mui/icons-material/Search';

const stockData = [
  { name: "ADANIENT", company: "Adani Enterprises", price: 3108.8, change: 68.7, changePercent: 2.26 },
  { name: "RELIANCE", company: "Reliance Industries", price: 2956.4, change: 32.7, changePercent: 1.12 },
  { name: "TCS", company: "Tata Consultancy Services", price: 4416.05, change: 120.8, changePercent: 2.81 },
  { name: "ADANIENT", company: "Adani Enterprises", price: 3108.8, change: 68.7, changePercent: 2.26 },
  { name: "RELIANCE", company: "Reliance Industries", price: 2956.4, change: 32.7, changePercent: 1.12 },
  { name: "TCS", company: "Tata Consultancy Services", price: 4416.05, change: 120.8, changePercent: 2.81 },
  { name: "ADANIENT", company: "Adani Enterprises", price: 3108.8, change: 68.7, changePercent: 2.26 },
  { name: "RELIANCE", company: "Reliance Industries", price: 2956.4, change: 32.7, changePercent: 1.12 },
  { name: "TCS", company: "Tata Consultancy Services", price: 4416.05, change: 120.8, changePercent: 2.81 },
];

const Watchlist = () => {
  const [search, setSearch] = useState('');

  const filteredStocks = stockData.filter(stock => 
    stock.name.toLowerCase().includes(search.toLowerCase()) ||
    stock.company.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex flex-col gap-4 p-4">
      <div className="relative mb-4">
        <input
          type="text"
          placeholder="Search stocks to add"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-10 pr-4 py-3 border border-gray-300 outline-none rounded-2xl bg-[#95c4ba] w-full placeholder-black"
        />
        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
          <SearchIcon sx={{ color: 'black' }} />
        </span>
      </div>

      {filteredStocks.map(stock => (
        <StockCard 
          key={stock.name} 
          name={stock.name} 
          company={stock.company} 
          price={stock.price} 
          change={stock.change} 
          changePercent={stock.changePercent} 
        />
      ))}
    </div>
  );
};

export default Watchlist;
