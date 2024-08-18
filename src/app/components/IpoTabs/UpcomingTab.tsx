import React from 'react';
import UpcomingIpoCard from './Cards/UpcomingCard';

const ipoData = [
  {
    title: 'Solve Plastic Products NSE SME',
    fireRating: 3,
    status: 'Upcoming',
    price: 91,
    gmp: '--',
    estListing: '91 (0.00%)',
    ipoSize: '11.85',
    subStatus: '2',
    openDate: '13-Aug',
    closeDate: '16-Aug',
    boaDate: '19-Aug',
    listingDate: '21-Aug',
    gmpUpdated: '12-Aug 11:27',
  },
  {
    title: 'Broach Lifecare Hospital BSE SME',
    fireRating: 2,
    status: 'Upcoming',
    price: 25,
    gmp: '--',
    estListing: '25 (0.00%)',
    ipoSize: '4.02',
    subStatus: '2',
    openDate: '13-Aug',
    closeDate: '16-Aug',
    boaDate: '19-Aug',
    listingDate: '21-Aug',
    gmpUpdated: '12-Aug 11:26',
  },
];

const UpcomingTab = () => {
  return (
    <div>
      {ipoData.map((ipo, index) => (
        <UpcomingIpoCard key={index} ipo={ipo} />
      ))}
    </div>
  );
};

export default UpcomingTab;
