import { Container } from '@/components/container'
import { MainContainer } from '@/components/main-container'
import { Table } from '@/components/table/table'
import { TableHead } from '@/components/table/table-head'
import React from 'react'

const primaryBank: any = {
  bankName: 'Bank of America',
  accountNumber: '123456756891',
  issuingBalance: 33431.23,
}

const issuingTransactions: any = [
  {
    id: 1,
    date: '2021/01/01',
    amount: 1000,
    transactionId: '1234567890',
  },
  {
    id: 2,
    date: '2021/01/02',
    amount: 200230,
    transactionId: '1234567890',
  },
  {
    id: 3,
    date: '2021/01/03',
    amount: 300023,
    transactionId: '123456789890'
  },
]

const bankAccounts: any = [
  {
    id: 0,
    bankName: 'Bank of America',
    accountNumber: '123456756891',
    isPrimary: true,
  },
  {
    id: 1,
    bankName: 'Bank of China',
    accountNumber: '234567893454',
    isPrimary: false,
  },
  {
    id: 2,
    bankName: 'Bank of Singapore',
    accountNumber: '234567892303',
    isPrimary: false,
  },
]

const bankAccountWrapper = `
  flex 
  items-center 
  justify-between
  border-2 
  border-pBackground 
  rounded-[16px] 
  p-[24px] 
  flex-1
  min-w-[385px]
`

const tableHeaders = ['Amount', 'Date', 'Transaction Id']

const renderBankAccountNumber = (accountNumber: any) => {
  const asteriskedAccountNumber = accountNumber.replace(/.(?=.{4})/g, '*')
  const spacedAccountNumber = asteriskedAccountNumber.replace(/(.{4})/g, '$1 ')
  return spacedAccountNumber
}

const formatAmount = (amount: number) => {
  // separate amount with dot every 3 digits in thousands and add comma for thousands
  // add two decimal places for cents as well at the end if not present
  let formattedAmount = amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  if (!formattedAmount.includes('.')) {
    formattedAmount = `${formattedAmount}.00`
  }
  return formattedAmount
}


const renderTransactions = () => {
  return issuingTransactions.map((transaction: any) => {
    return (
      <tr key={transaction.id} className='table-row border-t border-pLight'>
        <td>${formatAmount(transaction.amount)}</td>
        <td>{transaction.date}</td>
        <td>{transaction.transactionId}</td>
      </tr>
    )
  })
}

export const BankAccountContainer = () => {
  return (
    <MainContainer>
      <div className='flex flex-col gap-4'>
        <Container>
          <div className='flex items-center w-1/3 gap-4 mb-3'>
            <h3>{primaryBank.bankName}</h3>
            <p>{renderBankAccountNumber(primaryBank.accountNumber)}</p>
          </div>
          <p>Current Issuing balance <span className='font-bold'>${formatAmount(primaryBank.issuingBalance)}</span></p>
        </Container>
        <Container>
          <h3 className='mb-8'>Bank accounts</h3>
          <div className='flex flex-wrap gap-3'>
            {bankAccounts.map((account: any) => {
              return (
                <div key={account.id} className={bankAccountWrapper}>
                  <div>
                    <h3 className='mb-3'>{account.bankName}</h3>
                    <p>{renderBankAccountNumber(account.accountNumber)}</p>
                  </div>
                  {account.isPrimary && <p className='text-pWhite bg-pDark rounded-[16px] text-[14px] px-3 py-1'>Primary</p>}
                </div>
              )
            })}
          </div>
        </Container>
        <Container>
          <h3 className='mb-8'>Issuing transactions</h3>
          <Table>
            <TableHead headers={tableHeaders} />
            <tbody>
              {renderTransactions()}
            </tbody>
          </Table>
        </Container>
      </div>
    </MainContainer>
  )
}
