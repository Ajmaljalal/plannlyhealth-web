import React from 'react'

const User = ({
  params,
  searchParams,
}: {
  params: { userId: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) => {
  console.log('params', params.userId)
  console.log('searchParams', searchParams)
  return (
    <div>User</div>
  )
}

export default User