'use client';

import Image from 'next/image';
import db from '../../assets/images/database.png';

const Performencetab  = () => {
  return (
    <div className="flex flex-col gap-4 h-full p-2 md:p-0">
      <div className='w-full p-4 md:p-6  bg-[#008566] rounded-md justify-between flex flex-row px-10 md:px-24'>
        <div className='w-1/2 text-left text-white font-semibold text-[10px] md:text-sm'><p>Stock</p></div>
        <div className='w-1/2 font-semibold text-right text-white text-[10px] md:text-sm'><p>P&L</p></div>
      </div>

      <div className="text-center  relative top-[50%] items-center w-full h-full flex flex-col justify-center mt-8">
        <div className="mb-4 w-full flex justify-center">
          <Image src={db} alt="No Open Position" width={100} height={100} priority />
        </div>
      <div className='flex flex-col md:max-w-full max-w-44 justify-center items-center md:w-full'>
      <p className="text-lg font-bold text-gray-800">No Trades yet</p>
        <p className="text-sm text-center text-gray-600">
          sell your stocks and see its Performence
        </p>
      </div>
      </div>
    </div>
  );
};


export default Performencetab
