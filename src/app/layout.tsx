import '../globals.css'
import { Lato } from '@next/font/google';
import NextAuthSessionProvider from '../lib/providers/sessionProvider';
import { StoreProvider } from '@/store/provider';
import Head from 'next/head';

const lato = Lato({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
})
export const metadata = {
  title: 'Plannly Health | Plann the way forward',
  description: 'Plannly Health is dedicated to addressing the risk of human errors in healthcare by offering a digital health solution that focuses on chronic stress, burnout, and life events.'
}
const RootLayout = ({ children }: { children: React.ReactNode }) => {

  return (
    <html lang="en">
      <Head>
        <meta name="application-name" content="Plannly Health" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Plannly Health" />
        <meta name="description" content="Addressing the risk of human errors in healthcare" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        {/* <meta name="msapplication-config" content="/icons/browserconfig.xml" /> */}
        <meta name="msapplication-TileColor" content="#2B5797" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content="#FFFFFF" />

        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        {/* <link rel="apple-touch-icon" sizes="152x152" href="/icons/touch-icon-ipad.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/icons/touch-icon-iphone-retina.png" />
          <link rel="apple-touch-icon" sizes="167x167" href="/icons/touch-icon-ipad-retina.png" /> */}

        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
        {/* <link rel="mask-icon" href="/icons/safari-pinned-tab.svg" color="#5bbad5" /> */}
        <link rel="shortcut icon" href="/favicon.ico" />

        {/* <meta name="twitter:card" content="Plannly Health: Job search and hiring made simple" />
        <meta name="twitter:url" content="https://Plannly Health.io" />
        <meta name="twitter:title" content="Plannly Health" />
        <meta name="twitter:description" content="Job search and hiring made simple" />
        <meta name="twitter:image" content="https://Plannly Health.io/android-chrome-192x192.png" /> */}
        {/* <meta name="twitter:creator" content="@DavidWShadow" /> */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Plannly Health" />
        <meta property="og:description" content="Addressing the risk of human errors in healthcare" />
        <meta property="og:site_name" content="Plannly Health" />
        <meta property="og:url" content="https://plannlyhealth.com" />
        {/* <meta property="og:image" content="https://Plannly Health.io/apple-touch-icon.png" /> */}
      </Head>
      <body className={`${lato.className} text-basic_black relative`}>
        <StoreProvider>
          <NextAuthSessionProvider>
            {children}
          </NextAuthSessionProvider>
        </StoreProvider>
      </body>
    </html >
  )
}

export default RootLayout