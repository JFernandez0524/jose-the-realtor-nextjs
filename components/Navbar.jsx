import React from 'react';

const Navbar = () => {
  return (
    <header
      id='header'
      className='container mx-auto flex flex-row justify-between py-2 items-center'
    >
      <div className='logo'>
        <img src='./assets/images/logo.png' alt='' />
      </div>
      <nav className='container mx-auto'>
        <ul className='flex flex-row justify-between flex-1 px-32'>
          <li>
            <a
              href='http://'
              target='_blank'
              className='hover:bg-red-normalHover hover:px-6 hover:text-white hover:py-2'
              rel='noopener noreferrer'
            >
              Blog
            </a>
          </li>
          <li>
            <a
              href='http://'
              target='_blank'
              className='hover:bg-red-normalHover hover:px-6 hover:text-white hover:py-2'
              rel='noopener noreferrer'
            >
              Selling
            </a>
          </li>
          <li>
            <a
              href='http://'
              target='_blank'
              className='hover:bg-red-normalHover hover:px-6 hover:text-white hover:py-2'
              rel='noopener noreferrer'
            >
              Buying
            </a>
          </li>
          <li>
            <a
              href='http://'
              target='_blank'
              className='hover:bg-red-normalHover hover:px-6 hover:text-white hover:py-2'
              rel='noopener noreferrer'
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <div>
        <button className='bg-red-normal hover:bg-red-normalHover py-2 px-11 text-white'>
          Contact
        </button>
      </div>
    </header>
  );
};

export default Navbar;
