import '../globals.css'
import { Lato } from '@next/font/google';
import NextAuthSessionProvider from '../lib/providers/sessionProvider';
import { StoreProvider } from '@/store/provider';

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