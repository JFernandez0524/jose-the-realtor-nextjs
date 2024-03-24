'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

const TopBar = () => {
  const pathName = usePathname();
  console.log(pathName);

  const [isHome, setIsHome] = useState(true);

  const checkPath = () => {
    if (pathName !== '/') {
      setIsHome(false);
    }
  };

  useEffect(() => {
    checkPath();
  }, [pathName]);

  return (
    <div id='top-bar' className=' bg-red-normal py-1 '>
      <div className='top-bar-container container flex flex-row justify-between mx-auto text-white'>
        <div className=' '>
          <p>973-384-1054</p>
        </div>
        <div className='top-bar-heading'>
          {isHome ? (
            <p>Welcome to Jose Fernandez Real Estate</p>
          ) : (
            <p>Thinking of Selling? Give Jose Fernandez a Call</p>
          )}
        </div>
        <div className='top-bar-phone'>
          <p>
            <Link href={'/login'}>Login / Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
