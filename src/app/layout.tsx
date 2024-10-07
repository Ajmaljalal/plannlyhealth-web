import '../globals.css'
import { Lato } from '@next/font/google';
import NextAuthSessionProvider from '../lib/providers/next-auth-provider';
import { StoreProvider } from '@/store/provider';
import CustomMsalProvider from '@/lib/providers/msal-provider';

const lato = Lato({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
})


const Layout = ({ children }: { children: React.ReactNode }) => {

  return (
    <html lang="en">
      <body className={`${lato.className} text-basic_black relative`}>
        <StoreProvider>
          <NextAuthSessionProvider>
            <CustomMsalProvider>
              {children}
            </CustomMsalProvider>
          </NextAuthSessionProvider>
        </StoreProvider>
      </body>
    </html >
  )
}

export default Layout