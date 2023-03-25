
const transactions = [
  {
    id: 1,
    user: 'Ajmal',
    vendor: 'Barber shop',
    program: 'Health & Wellness',
    category: 'Haircut',
    amount: 3.456,
    status: 'Approved',
    date: '03/01/2023',
    frequency: 'One time',
    authorizationId: '123456',
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use."
  },
  {
    id: 2,
    user: 'Meena',
    vendor: 'Very long vendor name',
    program: 'Health & Wellness',
    category: 'Haircut',
    amount: 3.456,
    status: 'Approved',
    date: '03/20/2023',
    frequency: 'Monthly',
    authorizationId: '123456',
  },
  {
    id: 3,
    user: 'Ajmal',
    vendor: 'Malcolm Lockyer',
    program: 'Health & Wellness',
    category: 'Haircut',
    amount: 3.456,
    status: 'Requested',
    date: '04/01/2023',
    frequency: 'Monthly',
    authorizationId: '123456',
  }
]

let filteredTransactions = transactions



export const data = {

  filteredTransactions,
}