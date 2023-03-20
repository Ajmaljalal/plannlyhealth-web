import '../globals.css'
import { Lato } from '@next/font/google';

const lato = Lato({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
})
export const metadata = {
  title: 'Plannly | wellbeing simplified',
  description: 'Plannly is a wellbeing app that helps you to plan your day, track your mood and sleep, and set goals to achieve your best self.',
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={`${lato.className} text-pDark`}>
        {children}
      </body>
    </html >
  )
}

export default RootLayout