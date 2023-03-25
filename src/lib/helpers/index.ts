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

export const calculatePayouts = (payouts: any) => {
  let approved = 0
  let notYetProcessed = 0
  payouts.forEach((payout: any) => {
    approved += payout.approvedAmount
    notYetProcessed += payout.notYetProcessedAmount
  })

  return { approved, notYetProcessed }
}

export const calculateUsersStatus = (users: any) => {
  let active = 0
  let deactivated = 0
  let invited = 0
  users && users.forEach((user: any) => {
    if (user.status === 'Active') {
      active += 1
    }
    if (user.status === 'Deactivated') {
      deactivated += 1
    }
    if (user.status === 'Invited') {
      invited += 1
    }
  })
  return { active, deactivated, invited }
}

export const getFormattedDate = (date: string) => {
  const dateObj = new Date(date)
  return `${dateObj.getMonth() + 1}/${dateObj.getDate()}/${dateObj.getFullYear()}`
}