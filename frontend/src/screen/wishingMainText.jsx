import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const WishingText = () => {
  const one = useRef(null);
  const two = useRef(null);
  const three = useRef(null);
  const four = useRef(null);
  useEffect(()=>{
    const one1 = one.current;
    const two1 = two.current;
    const three1 = three.current;
    const four1 = four.current;
    if(one1 && two1 && three1 && four1){
      gsap.fromTo(one1,{ x:'-25%', display:'block',duration:1 },{  x:'0' });
      gsap.fromTo(two1,{ x:'3%', display:'block', duration:1.3},{  x:'0'});
      gsap.fromTo(three1,{ x:'-25%', display:'block', duration:1.6 },{  x:'0' });
      gsap.fromTo(four1,{ x:'3%', display:'block', duration:1.9 },{  x:'0' });
    }
  },[]);
  return (
    <section className='w-fit h-fit md:hidden wishingText m-auto'>
      <h1 className='text-6xl flex flex-col justify-center items-center my-2 capitalize tracking-wider text-[white]'>
        <span ref={one} className='hidden rotate-2 p-1 bg-yellow-600'>Create A </span>
        <span ref={two} className='hidden -rotate-2 p-1 bg-[#c75b5b]'>Birthday wishes </span>
        <span ref={three} className='hidden translate-x-10 p-1 bg-[#A2CA71]'>for </span>
        <span ref={four} className='hidden rotate-2 p-1 bg-[#B51B75] dots'>your special person</span>
      </h1>
    </section>
  )
}

export default WishingText
