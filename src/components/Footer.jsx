import React from 'react'

const Footer = () => {
  return (
    <div className='bg-gradient-to-b from-sec-blue to-main-blue'>
        <div className='flex
         justify-center space-x-5 text-an-slate hover:text-regal-green'>
        <div className='flex justify-center text-4xl'>
        <a href='https://twitter.com/0xraidr' target='blank_'>
        <ion-icon name="logo-twitter"></ion-icon>
        </a>
        </div>
        <div className='flex justify-center hover:text-regal-green text-4xl pb-8'>
            <a href='https://github.com/0xraidr' target='blank_' className='text-4xl'>
            <ion-icon name="logo-github"></ion-icon>
            </a>
            </div>
            </div>
        <div className='flex pb-2 justify-center text-an-slate'>
            Built by 0xraidr
        </div>
    </div>
  )
}

export default Footer