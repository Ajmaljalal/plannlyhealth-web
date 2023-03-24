const claims = [
  {
    id: 1,
    user: 'Ajmal',
    vendor: 'Barber shop',
    program: 'Health & Wellness',
    requested: 3.456,
    reimbursed: 0,
    status: 'Requested',
    date: '03/01/2023',
    frequency: 'One time',
  },
  {
    id: 2,
    user: 'Meena',
    vendor: 'Very long vendor name',
    program: 'Health & Wellness',
    requested: 3.456,
    reimbursed: 3.456,
    status: 'Approved',
    date: '03/20/2023',
    frequency: 'Monthly',
  },
  {
    id: 3,
    user: 'Ajmal',
    vendor: 'Malcolm Lockyer',
    program: 'Health & Wellness',
    requested: 3.456,
    reimbursed: 0,
    status: 'Requested',
    date: '04/01/2023',
    frequency: 'Monthly',
  }
]

let filteredClaims = claims



export const data = {
  filteredClaims,
}