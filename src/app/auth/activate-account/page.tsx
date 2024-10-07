import React from 'react'
import { headers } from 'next/headers'
import { deleteNewUser, getNewUserByEmail } from '@/lib/services/invite-users'
import { createEmployee, getEmployeeByEmail } from '@/lib/services/employee'
import { redirect } from 'next/navigation'

const ActivateAccount = async () => {
  const headersList = headers()
  const queryParams: any = headersList.get('x-invoke-query')
  // list of all things related to user agent
  // const params: any = headersList.entries()

  // decode query params
  const queryString: string = decodeURIComponent(queryParams as string) || ''
  const query: any = JSON.parse(queryString)

  const email = query ? query.email : null
  if (!email) return <div>Link not valid! Please contact support.</div>
  let success = false;

  try {
    const user = await getNewUserByEmail(email);
    if (!user) return <div>Link already used or expired.</div>;
    user.status = 'Active';

    const employee = await getEmployeeByEmail(email);

    if (!employee) {
      await createEmployee(user);
    }

    await deleteNewUser(user.id);
    success = true;

  } catch (error) {
    success = false;
    return <div>Oops! something went wrong, contact support.</div>;
  }
  if (success) {
    redirect('/auth/login');
  }
}

export default ActivateAccount