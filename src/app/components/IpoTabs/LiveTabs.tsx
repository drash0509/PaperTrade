import React from 'react';
import { Box } from '@mui/material';
import LiveIpoCard from './Cards/LiveCard';

const ipoData = [
  {
    title: 'Saraswati Saree Depot IPO',
    fireRating: 4,
    status: 'Open',
    price: 160,
    gmp: 60,
    estListing: '220 (37.50%)',
    ipoSize: 160.01,
    subStatus: '0.9x',
    openDate: '12-Aug',
    closeDate: '14-Aug',
    boaDate: '16-Aug',
    listingDate: '20-Aug',
  },
  {
    title: 'Sunlite Recycling Industries NSE SME',
    fireRating: 4,
    status: 'Open',
    price: 105,
    gmp: 25,
    estListing: '130 (23.81%)',
    ipoSize: 30.24,
    subStatus: '1.71x',
    openDate: '12-Aug',
    closeDate: '14-Aug',
    boaDate: '16-Aug',
    listingDate: '20-Aug',
  }
];

const LiveTabs = () => {
  return (
    <Box sx={{ p: { xs: 0, md: 4 }, width: '100%' }}>
      {ipoData.map((ipo, index) => (
        <LiveIpoCard key={index} ipo={ipo} />
      ))}
    </Box>
  );
};

export default LiveTabs;
