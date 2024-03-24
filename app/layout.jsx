import '@/assets/styles/globals.css';
import { GoogleTagManager } from '@next/third-parties/google';
import { Roboto } from 'next/font/google';
import TopBar from '../components/TopBar';
import Navbar from '@/components/Navbar';

const roboto = Roboto({
  weight: ['400', '500', '700', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: 'Jose Fernandez Real Estate | Sell NJ House Fast',
  description: 'Sell your NJ House for top dollar',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <GoogleTagManager gtmId='GTM-N58TR9S' />
      <body className={roboto.className}>
        <TopBar />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
