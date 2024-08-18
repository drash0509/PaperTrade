import React from 'react';
import { Box, Typography, Grid, Chip } from '@mui/material';
import WhatshotIcon from '@mui/icons-material/Whatshot';

const LiveIpoCard = ({ ipo }) => {
  const {
    title,
    fireRating,
    status,
    price,
    gmp,
    estListing,
    ipoSize,
    subStatus,
    openDate,
    closeDate,
    boaDate,
    listingDate,
    gmpUpdated,
  } = ipo;

  return (
    <Box sx={{
      p: 2,
      mb: 2,
      border: '1px solid #E0E0E0',
      borderRadius: '10px',
      boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
      backgroundColor: 'white',
    }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
        <Typography variant="h6" fontWeight="bold" sx={{ color: '#008566' }}>
          {title}
        </Typography>
        <Chip
          label={`${status} (Sub:${subStatus})`}
          sx={{
            backgroundColor: '#008566',
            color: 'white',
            fontSize: '12px',
            fontWeight: 'bold',
            borderRadius: '5px',
          }}
        />
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
        <Typography sx={{ fontSize: '12px', fontWeight: 'bold', marginRight: '8px' }}>
          Fire Rating
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {Array.from({ length: 5 }, (_, i) => (
            <WhatshotIcon key={i} sx={{ color: i < fireRating ? '#FFA500' : '#E0E0E0', fontSize: '18px' }} />
          ))}
        </Box>
      </Box>

      <Grid container spacing={2} sx={{ mt: 1 }}>
        <Grid item xs={4}>
          <Typography sx={{ fontSize: '14px', fontWeight: 'bold' }}>Price</Typography>
          <Typography sx={{ fontSize: '14px', color: '#008566' }}>₹{price}</Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography sx={{ fontSize: '14px', fontWeight: 'bold' }}>GMP(₹)</Typography>
          <Typography sx={{ fontSize: '14px', color: '#008566' }}>{gmp}</Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography sx={{ fontSize: '14px', fontWeight: 'bold' }}>Est. Listing</Typography>
          <Typography sx={{ fontSize: '14px', color: '#008566' }}>{estListing}</Typography>
        </Grid>
      </Grid>

      <Grid container spacing={2} sx={{ mt: 1 }}>
        <Grid item xs={4}>
          <Typography sx={{ fontSize: '14px', fontWeight: 'bold' }}>IPO Size</Typography>
          <Typography sx={{ fontSize: '14px', color: '#008566' }}>₹{ipoSize} Cr</Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography sx={{ fontSize: '14px', fontWeight: 'bold' }}>Open</Typography>
          <Typography sx={{ fontSize: '14px', color: '#008566' }}>{openDate}</Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography sx={{ fontSize: '14px', fontWeight: 'bold' }}>Close</Typography>
          <Typography sx={{ fontSize: '14px', color: '#008566' }}>{closeDate}</Typography>
        </Grid>
      </Grid>

      <Grid container spacing={2} sx={{ mt: 1 }}>
        <Grid item xs={4}>
          <Typography sx={{ fontSize: '14px', fontWeight: 'bold' }}>BoA Dt</Typography>
          <Typography sx={{ fontSize: '14px', color: '#008566' }}>{boaDate}</Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography sx={{ fontSize: '14px', fontWeight: 'bold' }}>Listing</Typography>
          <Typography sx={{ fontSize: '14px', color: '#008566' }}>{listingDate}</Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography sx={{ fontSize: '14px', fontWeight: 'bold' }}>GMP Updated</Typography>
          <Typography sx={{ fontSize: '14px', color: '#008566' }}>{gmpUpdated}</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LiveIpoCard;
