export const calculateApprovedAndRequestedClaims = (claims: any) => {
  let approved = 0
  let requested = 0
  claims.forEach((claim: any) => {
    if (claim.status === 'Approved') {
      approved += claim.reimbursed
    }
    if (claim.status === 'Requested') {
      requested += claim.requested
    }
  })
  return { approved, requested }
}


export const getFormattedDate = (date: string) => {
  const dateObj = new Date(date)
  return `${dateObj.getMonth() + 1}/${dateObj.getDate()}/${dateObj.getFullYear()}`
}