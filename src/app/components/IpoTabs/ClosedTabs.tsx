import React from 'react';
import ClosedIpoCard from './Cards/ClosedCard';

const closedIpoData = [
  {
    title: 'Firstcry IPO',
    fireRating: 3,
    status: 'Closed',
    price: 465,
    gmp: 84,
    estListing: '549 (18.06%)',
    ipoSize: '4193.73',
    subStatus: '12.22x',
    openDate: '6-Aug',
    closeDate: '8-Aug',
    boaDate: '9-Aug',
    listingDate: '13-Aug',
    gmpUpdated: '12-Aug 11:25',
  },
  {
    title: 'Unicommerce eSolutions IPO',
    fireRating: 4,
    status: 'Closed',
    price: 108,
    gmp: 69,
    estListing: '177 (63.89%)',
    ipoSize: '276.57',
    subStatus: '168.35x',
    openDate: '6-Aug',
    closeDate: '8-Aug',
    boaDate: '9-Aug',
    listingDate: '13-Aug',
    gmpUpdated: '12-Aug 11:29',
  },
];

const ClosedTab = () => {
  return (
    <div>
      {closedIpoData.map((ipo, index) => (
        <ClosedIpoCard key={index} ipo={ipo} />
      ))}
    </div>
  );
};

export default ClosedTab;
