import React, { useEffect, useRef } from 'react';
import cake404 from '../assets/cake404.png'
import { Link } from 'react-router-dom';
import gsap from 'gsap';

const ErrorPage = () => {
  const imge = useRef(null);
  const text = useRef(null);

  useEffect(()=>{
    const img = imge.current;
    const txt = text.current;

    if(img && txt){
      gsap.fromTo(img,{
        x:'-20%',
        duration:1,
        display:'block'
      },{
        x:'0%'
      });

      gsap.fromTo(txt,{
        x:'-20%',
        duration:1.5,
        display:'block'
      },{
        x:'0%'
      })
    }

  },[]);
  return (
    <div className='w-full h-full flex justify-center items-center gap-1'>
      <img ref={imge} className='w-[150px] h-[150px] hidden' src={cake404} alt="404" />
      <div ref={text} className='flex justify-start flex-col items-start text-[#333]'>
        <h3 className='text-[26px] capitalize'>whoopsie!!</h3>
        <p className='text-[14px] font-[400] tracking-wider'>Looks like something went to wrong..</p>
        <br />
        <Link to='/'>
          <button className=' rounded-lg px-2 py-1 text-[14px] font-[500] bg-pink-100 shadow tracking-widest'>Let's go back</button>
        </Link>
      </div>
    </div>
  )
}
export default ErrorPage
