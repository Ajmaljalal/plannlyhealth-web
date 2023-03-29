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

export const formatAmount = (amount: number) => {
  // separate amount with dot every 3 digits in thousands and add comma for thousands
  // add two decimal places for cents as well at the end if not present
  let formattedAmount = amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  if (!formattedAmount.includes('.')) {
    formattedAmount = `${formattedAmount}.00`
  }
  return formattedAmount
}

export const formatAmountWithCurrency = (amount: number, currency: string) => {
  const formattedAmount = formatAmount(amount)
  return `${currency}${formattedAmount}`
}

export const maskAccountNumber = (accountNumber: any) => {
  const asteriskedAccountNumber = accountNumber.replace(/.(?=.{4})/g, '*')
  const spacedAccountNumber = asteriskedAccountNumber.replace(/(.{4})/g, '$1 ')
  return spacedAccountNumber
}

export const phonePattern = "[0-9]{3}-[0-9]{3}-[0-9]{4}"

export const sampleCSVContent = [{
  Birthday: "06/01/1972",
  Department: "Marketing",
  First_name: "John",
  Last_name: "Dow",
  Title: "Marketing Specialist",
  Phone: "9999999999",
  Address: "Scottsdale AZ USA",
  email: "test@test.com",
}]