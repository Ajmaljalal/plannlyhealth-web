import React from 'react'
import { headers } from 'next/headers'

function ActivateAccountContainer() {
  const headersList = headers()
  const domain = headersList.get('host')
  const protocol = headersList.get('x-forwarded-proto')

  return (
    <div>ActivateAccount</div>
  )
}

export default ActivateAccountContainer