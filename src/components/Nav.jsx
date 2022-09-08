

import React, { useState } from 'react'

const Nav = () => {
    let Links =[
      {name:"Home",link:"/"},
      {name:"About",link:"/"},
      {name:"Experience",link:"/"},
      {name:"Contact",link:"/"},
    ];
    let [open,setOpen] = useState(false);

  return (

    <div className='shadow-md w-full fixed top-0 left-0'>
      <div className='md:flex items-center justify-between bg-sec-blue py-4 md:px-10 px-7'>
      <div className='font-bold text-2xl cursor-pointer flex items-center 
      text-lightest-slate'>
        <span className='text-3xl mr-1 pt-2'>
        <ion-icon name="skull-outline"></ion-icon>        </span>
        0xraidr
      </div>
      
      <div onClick={() => setOpen(!open)} className='text-2xl text-lightest-slate absolute right-8 top-6 cursor-pointer md:hidden'>
      <ion-icon name={open ? 'close':'menu'}></ion-icon>
      </div>

      <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-sec-blue md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
        {
          Links.map((link)=>(
            <li key={link.name} className='md:ml-8 text-md md:my-0 my-7'>
              <a href={link.link} className='text-lightest-slate hover:blur-xs'>{link.name}</a>
            </li>
          ))
        }
      </ul>
      </div>
    </div>
  )
}

export default Nav

/* 
<div className='flex justify-end'>
<div className='border-b-2 border-an-slate'>
  <span className='px-2 hover:cursor-pointer hover:blur-xs'>01. Home</span>
  <span className='px-2 hover:cursor-pointer hover:blur-xs'>02. Experience</span>
  <span className='px-2 hover:cursor-pointer hover:blur-xs'>03. Contact</span>
  </div>
</div> */
