import React, { useEffect, useRef, useState } from 'react'
import WishingText from '../screen/wishingMainText'
import WishInputForm from '../screen/wishInputForm'
import { dataTrans } from '../context/dataContext';
// import cover from './../assets/cover.png';
// import paperCard from './../assets/paperCard.png';
// import desgin from './../assets/desgin.png';
// import { BsBalloonHeart } from "react-icons/bs";
import { IoCopyOutline } from "react-icons/io5";
import {CopyToClipboard} from 'react-copy-to-clipboard';

import gsap from 'gsap';
import CardsGreetings from '../screen/cardsGreetings';
import { API_URL } from '../utils/staticContent';

const WishesCreatingPage = () => {
  const [hiddenProperty,setHiddenProperty]=useState(true);
  const [copy,setCopy]=useState(false);
  const dataTran = dataTrans();
  // const greetingsCard = useRef(null);
  // const greetingCover = useRef(null);
  const copyClipBord = useRef(null);
   
  // useEffect(()=>{
  //   const greetingCard = greetingsCard.current;
  //   const greetingCov = greetingCover.current;

    

  //   if(greetingCov){
  //     gsap.fromTo(greetingCov, {
  //       y: '100%',
  //       x:'20%',
  //       rotation: 0,
  //     }, {
  //       y: '0%',
  //       rotation: 12,
  //       duration: 2, 
  //       ease: 'power2.out',
  //     });
  //   }

  //   if(greetingCard){
  //     gsap.fromTo(greetingCard, {
  //       y: '100%',
  //       x:'-10%',
  //       rotation: 0,
  //     }, {
  //       y: '0%',
  //       rotation: -19,
  //       duration: 3, 
  //       ease: 'power2.out',
  //     });
  //   };

  //   const clearProperty = setTimeout(()=>{
  //     setHiddenProperty(false);
  //   },2500);
    
  //   return () => {
  //     clearTimeout(clearProperty);
  //   }
  // },[]);

  useEffect(()=>{
    const copyClip = copyClipBord.current;

    if(copyClip){
      gsap.fromTo(copyClip,{scale:0},{scale:1,duration:0,ease: 'power2.out'})
    }
  },[hiddenProperty])

  const onCopy = () => {
    setCopy(true)
    setTimeout(()=>{setCopy(false)},1000);
  }
  return (
    <div className='w-full h-fit relative'>
      <WishingText/>
      <WishInputForm/>

      {dataTran?.wishesSubmit && <div 
    //   style={{
    //   backdropFilter: 'blur(2.2px)',
    //   backgroundImage: 'linear-gradient(45deg, rgba(255,255,255,0.6), rgba(255,255,255,0.6))'
    // }}
       className=' w-full h-full bg-[#ffffffb0] absolute top-0 left-0 z-30'>
        <div className='w-full h-full py-4'>

          {hiddenProperty ? (
          //   <div  className='w-fit h-fit py-10 m-auto mt-6 relative'>
          //     <img ref={greetingCover} className='rotate-12 h-[190px] translate-x-10' src={cover} alt="" />
          //     <div ref={greetingsCard} style={{
          //       backgroundImage:`url(${paperCard})`,
          //       backgroundPosition: 'center', backgroundSize: 'cover',
          //       boxShadow:'8px 4px 9px rgba(0,0,0,0.3)'
          //     }} 
          //     className='rounded w-[250px] h-[190px] absolute top-28'>
          //       <div className='w-full h-full relative'>
          //         <img src={desgin} style={{zIndex:'10px'}} className='absolute top-0 left-0' alt="" />
          //         <div className='w-full h-full flex justify-center items-center flex-col'>
          //           <h2 style={{fontFamily:"Style Script",fontWeight:600}} className='text-lg'>Happy Birthday</h2>
          //           <p style={{fontFamily:"Style Script",fontWeight:600}} className='text-xl tracking-wider'>Partu<span> ..</span><span className='inline-block'><BsBalloonHeart color='red'/></span></p>
          //         </div>
          //       </div>
          //     </div>
          // </div>
          <CardsGreetings setHiddenProperty={setHiddenProperty}/>
          ) : 
          (<div ref={copyClipBord} className='w-full h-full flex justify-center py-10'>
            <div className='w-[80%] h-fit bg-white mt-20 px-4 py-3 shadow-lg relative'>
              <div className='w-full h-fit px-3'>
                <p className='text-[16px] text-gray-600 font-[400]'>Send this link:</p>
                <div className='w-full flex gap-3 bg-gray-50 px-1 py-1 items-center h-7'>
                  <IoCopyOutline size={20}/>
                  <CopyToClipboard text={`${API_URL}/${dataTran?.data?.id}-${dataTran?.data?.customeEnd}`} onCopy={onCopy}>
                    <p className='w-full h-full flex items-center cursor-copy overflow-hidden'>{`${API_URL}/${dataTran?.data?.id}-${dataTran?.data?.customeEnd}`}</p>
                  </CopyToClipboard>
                {copy && <span className='text-[12px] font-[300] text-[#4f1787cc] absolute top-2 right-4'>copy</span>}
                </div>
                <br />
                <button onClick={()=>dataTran?.setWishesSubmit(false)} className='capitalize w-full py-2 bg-[#4f1787af] active:bg-[#4f1787cc] shadow-md h-8 text-white tracking-wider flex justify-center items-center rounded-sm font-medium text-[13px]'>Close</button>
              </div>
            </div>
          </div>)}
        </div>
      </div>}
    </div>
  )
}

export default WishesCreatingPage
