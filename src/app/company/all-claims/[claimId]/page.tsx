import { ClaimDetailsContainer } from '@/containers/all-claims/details'
import { redirect } from 'next/navigation'

const ClaimDetails = () => {
  redirect('/login')
  return (
    <ClaimDetailsContainer />
  )
}

export default ClaimDetails
