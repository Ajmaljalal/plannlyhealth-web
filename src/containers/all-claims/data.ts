const claims = [
  {
    id: 1,
    user: 'Ajmal',
    vendor: 'Barber shop',
    program: 'The Sliding Mr. Bones',
    requested: 3.456,
    reimbursed: 0,
    status: 'Requested',
    date: '03/01/2023',
  },
  {
    id: 2,
    user: 'Meena',
    vendor: 'Very long vendor name',
    program: 'The Sliding Mr. Bones',
    requested: 3.456,
    reimbursed: 3.456,
    status: 'Approved',
    date: '03/20/2023',
  },
  {
    id: 3,
    user: 'Ajmal',
    vendor: 'Malcolm Lockyer',
    program: 'The Sliding Mr. Bones',
    requested: 3.456,
    reimbursed: 0,
    status: 'Requested',
    date: '04/01/2023',
  }
]

let filteredClaims = claims



export const data = {
  filteredClaims,
}