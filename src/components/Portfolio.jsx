import React from 'react'
import bankSite from '../assets/portfolio/modernbanksite.png'
import candyCrush from '../assets/candycrush.png'


const Portfolio = () => {

    const portfolios = [
        {
            id: 1,
            src: bankSite,
            demo: 'https://modsite-taupe.vercel.app/',
            code: 'https://github.com/0xraidr/modsite',

        },
        {
            id: 2,
            src: candyCrush,
            demo: 'https://candy-crush-omega.vercel.app/',
            code: 'https://github.com/0xraidr/candy_crush',

        },
        {
            id: 3,
            src: bankSite,
            demo: 'https://modsite-taupe.vercel.app/',
            code: 'https://github.com/0xraidr/modsite',

        },

    ]


  return (
    <div name='portfolio' className='
     w-full text-white md:h-screen'>
        
    <div className='max-w-screen-lg p-4 mx-auto
     flex flex-col justify-center w-full h-full text-center'>
        <div className='pb-8'>
            <h2 className='text-4xl font-bold inline'>03. Portfolio</h2>
            <p className='py-6'>Check out some of my work right here.</p>
         </div>



        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8
         px-12 sm:px-0'>

{
            portfolios.map(({id, src, demo, code}) => (

                <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                <img src={src} alt='modsite' className='rounded-md
                 duration-200 hover:scale-105' />
                <a className='flex items-center justify-center' href={demo}>
                    <button target='_blank' className='w-1/2 px-6 py-3 m-4 duration-200
                    hover:scale-105'>Demo</button>
                
                </a>
                <a className='flex items-center justify-center' href={code}>
                <button target='_blank' className='w-1/2 px-6 py-3 m-4 duration-200
                    hover:scale-105'>Code</button>
                </a>
            </div>
            ))
        }
        </div>
    </div>

    </div>
  )
}

export default Portfolio