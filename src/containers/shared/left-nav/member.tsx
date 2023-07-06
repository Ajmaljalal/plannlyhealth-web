import { NavItem } from '@/components/left-nav/nav-item'
import { icons } from '@/lib/icons'
import React from 'react'

export const MemberNav = () => {
  return (
    <div>
      <NavItem text='My Benefits' href='/my-benefits' icon={icons.add} />
      <NavItem text='Marketplace' href='/marketplace' icon={icons.add} />
      <NavItem text='My Claims' href='/my-claims' icon={icons.add} />
      <NavItem text='My Card' href='/my-cards' icon={icons.add} />
      <NavItem text='My Account' href='/my-account' icon={icons.add} />
      <NavItem text='Wellness Policy' href='/wellness-policy' icon={icons.add} />
    </div>
  )
}
