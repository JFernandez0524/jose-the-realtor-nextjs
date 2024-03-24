import Image from 'next/image';
import logo from '@/assets/images/logo.png';
import Link from 'next/link';

const Navbar = () => {
  return (
    <header
      id='header'
      className='container mx-auto flex flex-row justify-between py-2 items-center'
    >
      <div className='logo'>
        <Link href='/'>
          <Image src={logo} alt='The Borrero Group Remax Logo' />
        </Link>
      </div>
      <nav>
        <ul className='flex flex-row justify-between flex-1 px-32'>
          <li className='mx-4'>
            <Link
              href='/buying'
              target='_blank'
              className='hover:bg-red-normalHover hover:px-6 hover:text-white hover:py-2 active:bg-red-normalActive'
              rel='noopener noreferrer'
            >
              Buying
            </Link>
          </li>
          <li className='mx-4'>
            <Link
              href='/selling'
              target='_blank'
              className='hover:bg-red-normalHover hover:px-6 hover:text-white hover:py-2'
              rel='noopener noreferrer'
            >
              Selling
            </Link>
          </li>
          <li className='mx-4'>
            <Link
              href='/invest'
              target='_blank'
              className='hover:bg-red-normalHover hover:px-6 hover:text-white hover:py-2'
              rel='noopener noreferrer'
            >
              Invest
            </Link>
          </li>

          <li className='mx-4'>
            <Link
              href='/properties'
              target='_blank'
              className='hover:bg-red-normalHover hover:px-6 hover:text-white hover:py-2'
              rel='noopener noreferrer'
            >
              Properties
            </Link>
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
