import './globals.css';
import '@/node_modules/react-modal-video/scss/modal-video.scss';
import Navbar from './components/Navbar/index';
import Footer from './components/Footer/index';
import Script from 'next/script';


export const metadata = {
  title: 'SoleasPay Gateway',
  description: 'SoleasPay, an online payment gateway for every merchand',
  manifest : '/manifest.json',
  icons: {
    icon: '/images/Logo/logo.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
   
    <html lang="fr"> 
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
            rel="apple-touch-icon"
            href="/apple-icon.png"
            type="image/png"
            sizes="76x76"
          />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-7LCRVFFPN0" />
        <Script src='/tag.js'/>
      </body>
    </html>
  )
}
