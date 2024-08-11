import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const ConvertScreenText = () => {
    const texts = useRef(null)
    useEffect(() => {
        const text = texts.current;
        if(text){
            gsap.to(text,{
                y:'-30%',
                display:'block',
                duration:1,
                ease: 'power2.out',
            })
        }
      },[]);
  return (
    <div className="h-screen bg-gray-900 flex items-center justify-center">
      <div className="w-full max-w-sm text-white">
        <h2 ref={texts} className='text-[22px] tracking-wider hidden'>Please open with your Mobile you will get beast experience..!!</h2>
      </div>
    </div>
  )
}

export default ConvertScreenText
