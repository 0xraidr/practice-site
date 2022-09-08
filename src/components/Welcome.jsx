import React from 'react'
import Typewriter from 'typewriter-effect';

const Welcome = () => {
  return (
    <div>

       <div>
        <h1 className='text-xl pl-10 md:pr-20 md:text-3xl md:flex justify-center text-lightest-slate mt-10'>Welcome, my name's</h1>
        </div>
        <div>
          <h1 className='flex justify-center font-extrabold text-7xl mt-10 text-transparent bg-clip-text
           bg-gradient-to-r from-lightest-slate to-regal-green'>0xraidr.</h1>
        </div>
        <div>
          <h2 className='flex mt-10 justify-center text-2xl text-lightest-slate'>Currently Under Construction...</h2>
        </div>
    <div className='w-full pt-10 flex items-center justify-center pb-10'>
      <div className='mb-10 text-center text-transparent pt-10 mt-10
      text-4xl bg-clip-text bg-gradient-to-r from-lightest-slate to-regal-green'>
          <Typewriter 
          options={{
              loop: true,
          }}
              onInit={(typewriter) => {
                  typewriter
                  .changeDelay(100)
                  .changeDeleteSpeed(10)
                  .typeString("I'm a Fullstack Developer.")
                  .pauseFor(1000)
                  .deleteChars(22)
                  .pauseFor(300)
                  .typeString("a Professional Googler =)")
                  .pauseFor(1000)
                  .deleteChars(31)
                  .pauseFor(300)
                  .typeString("and a Web3 Enjoyer.")
                  .pauseFor(1000)        
                  .start();
              }}
          />
      </div>   
  </div>
  <div className='animate-bounce mt-10'>
                <span className='flex justify-center text-regal-green'>
                <ion-icon name="chevron-down-outline"></ion-icon>
                </span>
              </div>
  </div>
    )
  }

export default Welcome