import React from 'react'
import Typewriter from 'typewriter-effect';

const Welcome = () => {
  return (
    <div className='flex mt-10 font-extrabold text-transparent 
    text-4xl bg-clip-text bg-gradient-to-r from-black via-slate-600 to-gray px-3'>
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
                .deleteChars(20)
                .typeString("Web3 Enjoyer.")
                .pauseFor(1000)
                .deleteChars(19)
                .typeString("and a lifelong student.")
                .pauseFor(1000)        
                .start();
            }}
        />
    </div>
  )
}

export default Welcome