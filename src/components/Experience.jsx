import React from 'react'
import html from '../assets/html.png';
import css from '../assets/css.png';
import javascript from '../assets/javascript.png';
import reactImg from '../assets/react.png';
import github from '../assets/github.png';
import tailwind from '../assets/tailwind.png';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';




const Experience = () => {

    const techs = [
        {
            id: 1,
            src: html,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            src: css,
            title: 'CSS',
            style: 'shadow-blue-500'
        },
        {
            id: 3,
            src: javascript,
            title: 'Javascript',
            style: 'shadow-yellow-500'
        },
        {
            id: 4,
            src: reactImg,
            title: 'React',
            style: 'shadow-sky-400'
        },
        {
            id: 5,
            src: tailwind,
            title: 'Tailwind',
            style: 'shadow-sky-400'
        },
        {
            id: 6,
            src: github,
            title: 'GitHub',
            style: 'shadow-gray-400'
        },
    ]


  return (
    <div name='experience' className='bg-gradient-to-t from-sec-blue via-main-blue to-black w-full h-screen'>
        <div className='max-w-screen-lg mx-auto
         flex flex-col justify-center w-full h-full text-center text-lightest-slate'>
           
            <div>
            <Fade left big>
                <h2 className='text-4xl font-bold p-2 inline'>02. Experience</h2>
                <p className='py-6 text-an-slate'>These are the technologies I've worked with.</p>
            </Fade>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-3
             gap-8 text-center py-8 px-12 sm:px-0'>
                
                <Zoom bottom>
            {
                techs.map(({id, src, title, style}) => (
<div key={id} className={`shadow-md hover:scale-105 duration-500
                 py-2 rounded-lg ${style}`}>
                    <img src={src} alt='' className='w-20 mx-auto'/>
                    <p className='mt-4'>{title}</p>
                </div>
                ))
            }
                </Zoom>
            </div>
        </div>
    </div>
  )
}

export default Experience