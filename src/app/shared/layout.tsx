
export const metadata = {
  title: 'Plannly | wellbeing simplified',
  description: 'Plannly is a wellbeing app that helps you to plan your day, track your mood and sleep, and set goals to achieve your best self.',
}

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
    </>
  )
}

export default RootLayout