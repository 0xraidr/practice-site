import React, { useState } from 'react'
import { Link } from 'react-scroll';

const Nav = () => {
    let Links =[
      
      {name:"01. About",
      link:"/About"},

      {name:"02. Experience",
      link:"/Experience"},

      {name:"03. Work",
      link:"/Work"},

      {name:"04. Contact",
      link:"/Contact"},
    ];
    let [open,setOpen] = useState(false);

  return (

    <div className='shadow-md w-full fixed top-0 left-0 z-[999]'>
      <div className='md:flex items-center justify-between bg-gradient-to-tr from-sec-blue via-main-blue to-black py-4 md:px-10 px-7'>
      <div className='font-bold text-2xl cursor-pointer flex items-center 
      text-regal-green'>
        <span className='text-2xl mr-1 pt-2'>
        <ion-icon name="skull-outline"></ion-icon>       
        </span>
      0XR
      </div>
      
      <div onClick={() => setOpen(!open)} className='text-2xl text-lightest-slate absolute right-8 top-6 cursor-pointer md:hidden'>
      <ion-icon name={open ? 'close':'menu'}></ion-icon>
      </div>


      <ul className={`md:flex md:items-center md:pb-0 bg-gradient-to-b
       from-sec-blue via-main-blue to-black pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all 
       duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
        {
          Links.map((link)=>(
            <li key={link.name} className='md:ml-8 text-md md:my-0 my-7 text-center px-5'>
            <a href={link.link} className='text-lightest-slate hover:blur-xs'>{link.name}
            </a>
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
          Links.map((link)=>(
            <li key={link.name} className='md:ml-8 text-md md:my-0 my-7 text-center px-5'>
              <a href={link.link} className='text-lightest-slate hover:blur-xs'>{link.name}
              </a>
            </li>
          ))
        }
      </ul>
      </div>
    </div> */
