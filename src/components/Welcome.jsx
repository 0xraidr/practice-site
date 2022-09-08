import React from 'react'
import Typewriter from 'typewriter-effect';

const Welcome = () => {
  return (

    <div>
      <div className='flex h-screen mt-10 text-transparent 
      text-4xl bg-clip-text bg-gradient-to-r from-lightest-slate to-regal-green px-3'>
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
    )
  }

export default Welcome