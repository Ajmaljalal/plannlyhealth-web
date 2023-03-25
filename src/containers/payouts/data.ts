const payouts = [
  {
    id: 1,
    user: 'Ajmal',
    vendor: 'Barber shop',
    program: 'Health & Wellness',
    category: 'Haircut',
    amount: 3.456,
    approvedAmount: 3.456,
    notYetProcessedAmount: 3.456,
    date: '03/01/2023',
  },
  {
    id: 2,
    user: 'Meena',
    vendor: 'Very long vendor name',
    program: 'Health & Wellness',
    category: 'Haircut',
    amount: 3.456,
    approvedAmount: 3.456,
    notYetProcessedAmount: 3.456,
    status: 'Approved',
    date: '03/20/2023',
  },
  {
    id: 3,
    user: 'Ajmal',
    vendor: 'Malcolm Lockyer',
    program: 'Health & Wellness',
    category: 'Haircut',
    amount: 3.456,
    approvedAmount: 3.456,
    notYetProcessedAmount: 3.456,
    status: 'Requested',
    date: '04/01/2023',
  }
]

let filteredPayouts = payouts



export const data = {

  filteredPayouts,
}