const notifications = [
  {
    id: 1,
    title: 'March allowances',
    description: 'A purchase made 2-3 days before the end of the month might post the following month and lower your April balance. #UseBenefitsNow',
    company: 'Plannly',
    dateSent: '4/3/2023'
  },
  // create more notifications here with random data to all fields like above:
  {
    id: 2,
    title: 'April allowances',
    description: 'A purchase made 2-3 days before the end of the month might post the following month and lower your April balance. #UseBenefitsNow',
    company: 'Tulsa Remote',
    dateSent: new Date().toLocaleDateString(),
  },
  {
    id: 3,
    title: 'May allowances',
    description: 'A purchase made 2-3 days before the end of the month might post the following month and lower your April balance. #UseBenefitsNow',
    company: 'Plannly',
    dateSent: new Date().toLocaleDateString(),
  },
  {
    id: 4,
    title: 'June allowances',
    description: 'A purchase made 2-3 days before the end of the month might post the following month and lower your April balance. #UseBenefitsNow',
    company: 'Tulsa Remote',
    dateSent: new Date().toLocaleDateString(),
  },
]

let filteredNotifications = notifications

export const data = {
  filteredNotifications,
}