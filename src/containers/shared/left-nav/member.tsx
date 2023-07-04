import { NavItem } from '@/components/left-nav/nav-item'
import { icons } from '@/lib/icons'
import React from 'react'

export const MemberNav = () => {
  return (
    <div>
      <NavItem text='My Benefits' href='/my-benefits' icon={icons.myBenefits} />
      <NavItem text='Marketplace' href='/marketplace' icon={icons.marketPlace} />
      <NavItem text='My Claims' href='/my-claims' icon={icons.claims} />
      <NavItem text='My Card' href='/my-cards' icon={icons.card} />
      <NavItem text='My Account' href='/my-account' icon={icons.account} />
      <NavItem text='Wellness Policy' href='/wellness-policy' icon={icons.policy} />
    </div>
  )
}
