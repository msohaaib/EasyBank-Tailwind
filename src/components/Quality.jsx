import React from 'react'
import online from '../../public/images/icon-online.svg'
import budget from '../../public/images/icon-budgeting.svg'
import onboard from '../../public/images/icon-onboarding.svg'
import api from '../../public/images/icon-api.svg'

export default function Quality() {
  return (
    <div className='container mx-auto'>
      <div className='flex flex-col text-center sm:text-start px-10'>
        <h2 className='text-4xl my-8 '>Why choose Easybank?</h2>
        <p className='text-[#6B7280]'>We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.</p>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 flex-wrap'>
        <div className="flex flex-col items-center sm:items-start px-6 py-10">
          <img src={online} alt="" className='w-16 h-auto py-2' />
          <h3 className='text-2xl py-2 text-start'>Online Banking</h3>
          <p className='text-[#6B7280] text-center sm:text-start py-2'>Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.</p>
        </div>
        <div className="flex flex-col items-center sm:items-start px-6 py-10">
          <img src={budget} alt="" className='w-16 h-auto py-2' />
          <h3 className='text-2xl py-2 text-start'>Simple Budgeting</h3>
          <p className='text-[#6B7280] text-center sm:text-start py-2'>See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.</p>
        </div>
        <div className="flex flex-col items-center sm:items-start px-6 py-10">
          <img src={onboard} alt="" className='w-16 h-auto py-2' />
          <h3 className='text-2xl py-2 text-start'>Fast Onboarding</h3>
          <p className='text-[#6B7280] text-center sm:text-start py-2'>We don’t do branches. Open your account in minutes online and start taking control of your finances right away.</p>
        </div>
        <div className="flex flex-col items-center sm:items-start px-6 py-10">
          <img src={api} alt="" className='w-16 h-auto py-2' />
          <h3 className='text-2xl py-2 text-start'>Open API</h3>
          <p className='text-[#6B7280] text-center sm:text-start py-2'>Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.</p>
        </div>
      </div>
    </div>
  )
}
