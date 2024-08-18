'use client';

import Image from 'next/image';
import db from '../../assets/images/database.png';

const Positions = () => {
  return (
    <div className="flex flex-col gap-4 h-full p-2 md:p-0">
      <div className="grid grid-cols-3 gap-2 md:gap-4">
        <div className="bg-[#008566] text-white rounded-lg p-2  md:p-4 text-left">
          <p className="  text-[10px] md:text-sm">Total<br /> Investment</p>
          <p className="text-[15px] md:text-lg font-bold">₹ 0</p>
        </div>
        <div className="border-2 border-[#008566] rounded-lg p-2  md:p-4 text-left">
          <p className="  text-[10px] md:text-sm">Your<br />  Portfolio</p>
          <p className="text-[15px] md:text-lg font-bold">₹ 0</p>
        </div>
        <div className="bg-[#008566] text-white rounded-lg p-2  md:p-4 text-left">
          <p className="  text-[10px] md:text-sm">Current<br />  Value</p>
          <p className="text-[15px] md:text-lg font-bold">₹ 0</p>
        </div>
      </div>

      <div className="text-center relative top-[50%] items-center w-full h-full flex flex-col justify-center mt-8">
        <div className="mb-4 w-full flex justify-center">
          <Image src={db} alt="No Open Position" width={100} height={100} priority />
        </div>
        <div className='flex flex-col md:max-w-full max-w-44 justify-center items-center md:w-full'>
      <p className="text-lg font-bold text-gray-800">No Open Position</p>
        <p className="text-sm text-center text-gray-600">
        Buy your favorite stocks and see its performance
        </p>
      </div>
      
      </div>
    </div>
  );
};

export default Positions;
