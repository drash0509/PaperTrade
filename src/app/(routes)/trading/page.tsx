'use client';

import { useState } from 'react';
import { Tabs, Tab, Box, Typography, useTheme, useMediaQuery } from '@mui/material';
import StockCard from '@/app/components/SrockCard';
import Watchlist from '@/app/components/TradingTabs/Watchlist';
import Positions from '@/app/components/TradingTabs/Positions';
import Performencetab from '@/app/components/TradingTabs/Performencetab';

const TradingPage = () => {
  const [activeTab, setActiveTab] = useState('watchlist');

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const renderPanel = () => {
    switch (activeTab) {
      case 'watchlist':
        return <Watchlist />;
      case 'positions':
        return <Positions />;
      case 'performance':
        return <Performencetab/>;
      default:
        return null;
    }
  };

  return (
    <Box sx={{ p: { xs: 0, md: 4 }, width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Tabs
        value={activeTab}
        onChange={handleTabChange}
        centered
        variant="fullWidth"
        TabIndicatorProps={{
          style: { backgroundColor: isMobile ? 'white' : '#008566' },
        }}
        sx={{
          mb: 4,
          width: '100%',
          backgroundColor: isMobile ? '#008566' : 'white',
          borderRadius: { xs: 0, md: '10px' },
          '& .MuiTabs-flexContainer': {
            justifyContent: 'space-between',
          },
          '& .MuiTab-root': {
            color: isMobile ? 'white' : '#008566',
            fontWeight: 'bold',
            fontSize: isMobile ? '10px':'auto'
          },
          '& .MuiTab-root.Mui-selected': {
            color:{ xs: 0 ,md: '#008566'},
          },
        }}
      >
        <Tab value="watchlist" label="Watchlist" />
        <Tab value="positions" label="Positions" />
        <Tab value="performance" label="Performance" />
      </Tabs>
      <Box sx={{ width: '100%' }}>{renderPanel()}</Box>
    </Box>
  );
};

export default TradingPage;
