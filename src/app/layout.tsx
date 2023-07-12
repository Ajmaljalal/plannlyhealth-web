'use client'
import '../globals.css'
import { Lato } from '@next/font/google';
import NextAuthSessionProvider from '../lib/providers/sessionProvider';
import { MsalProvider } from '@azure/msal-react';
import { EventType, PublicClientApplication } from '@azure/msal-browser';
import { msalConfig } from '@/lib/services/auth';

const lato = Lato({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
})
// export const metadata = {
//   title: 'Plannly Health | Plann the way forward',
//   description: 'Plannly Health is dedicated to addressing the risk of human errors in healthcare by offering a digital health solution that focuses on chronic stress, burnout, and life events.'
// }

const msalInstance: any = new PublicClientApplication(msalConfig);
msalInstance.addEventCallback((event: any) => {
  try {
    if (event.eventType === EventType.LOGIN_SUCCESS && event.payload.account) {
      msalInstance.setActiveAccount(event.payload.account);
    }
  } catch (error) {
    console.error("Something wrong in msalInstance.addEventCallback - ", error);
  }
});


const RootLayout = ({ children }: { children: React.ReactNode }) => {

  return (
    <html lang="en">
      <body className={`${lato.className} text-basic_black`}>
        <NextAuthSessionProvider>
          <MsalProvider instance={msalInstance}>
            {children}
          </MsalProvider>
        </NextAuthSessionProvider>
      </body>
    </html >
  )
}

export default RootLayout