export interface Program {
  budget: number
  name: string
  frequency: 'monthly' | 'quarterly' | 'yearly'
  description: string
  access: 'limited' | 'unlimited'
}