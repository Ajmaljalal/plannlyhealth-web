import CryptoJS from 'crypto-js';
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
  return `${dateObj.getMonth() + 1}/${dateObj.getDate()}/${dateObj.getFullYear()}` // returns 7/13/2023
}

export const formatDate = (dateString: string) => {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const date = new Date(dateString);
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  return `${day} ${month}, ${year}`; // returns 13 Jul, 2023
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

export const benefitPrograms = [
  { value: 'Health & Wellness', label: 'Health & Wellness' },
  { value: 'Family Care', label: 'Family Care' },
  { value: 'Food & Groceries', label: 'Food & Groceries' },
  { value: 'Recognition & Anniversaries', label: 'Recognition & Anniversaries' },
  { value: 'Give/Donation', label: 'Give/Donation' },
  { value: 'Student Loans', label: 'Student Loans' },
  { value: 'Work From Home', label: 'Work From Home' },
  { value: 'Learning & Development', label: 'Learning & Development' },
  { value: 'Commuter & Transportation', label: 'Commuter & Transportation' },
];

export const setSessionIdToCookie = (sessionId: string) => {
  const expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + 30); // set expiration to 30 days from now
  document.cookie = ''
  document.cookie = `sessionId=${sessionId}; Secure; SameSite=strict; HttpOnly path=/; Expires=${expirationDate.toUTCString()}`;
}

export const getSessionIdFromCookie = () => {
  const sessionIdFromCookie = document.cookie.split(';').find((c: any) => c.trim().startsWith('sessionId='));
  return sessionIdFromCookie ? sessionIdFromCookie.split('=')[1] : null;
}

export const removeSessionIdFromCookie = () => {
  document.cookie = 'sessionId=; Secure; SameSite=strict; HttpOnly path=/ Expires=Thu, 01 Jan 1970 00:00:00 UTC';

}

export const encryptData = (data: string) => {
  const encryptedData = CryptoJS.AES.encrypt(JSON.stringify(data), process.env.NEXT_PUBLIC_PLANNLY_ENCRYPT_KEY as string).toString();
  return encryptedData;
}

export const decryptData = (data: string) => {
  if (!data) return null;
  const decryptedData = CryptoJS.AES.decrypt(data, process.env.NEXT_PUBLIC_PLANNLY_ENCRYPT_KEY as string).toString(CryptoJS.enc.Utf8);
  return JSON.parse(decryptedData);
}

export const calculateWidthTailwindClass = (inputNumber: number) => {
  let widthClasses: any = {
    'w-1/2': 50,
    'w-1/3': 33.333333,
    'w-2/3': 66.666667,
    'w-1/4': 25,
    'w-2/4': 50,
    'w-3/4': 75,
    'w-1/5': 20,
    'w-2/5': 40,
    'w-3/5': 60,
    'w-4/5': 80,
    'w-1/6': 16.666667,
    'w-2/6': 33.333333,
    'w-3/6': 50,
    'w-4/6': 66.666667,
    'w-5/6': 83.333333,
    'w-1/12': 8.333333,
    'w-2/12': 16.666667,
    'w-3/12': 25,
    'w-4/12': 33.333333,
    'w-5/12': 41.666667,
    'w-6/12': 50,
    'w-7/12': 58.333333,
    'w-8/12': 66.666667,
    'w-9/12': 75,
    'w-10/12': 83.333333,
    'w-11/12': 91.666667,
    'w-full': 100
  };

  let closestClass = Object.keys(widthClasses).reduce((prev, curr) =>
    Math.abs(widthClasses[curr] - inputNumber) < Math.abs(widthClasses[prev] - inputNumber) ? curr : prev
  );

  return closestClass;
}

