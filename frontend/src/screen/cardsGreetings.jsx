import React, { useEffect, useRef } from 'react';
import { BsBalloonHeart } from "react-icons/bs";
import cover from './../assets/cover.png'
import desgin from './../assets/desgin.png'
import paperCard from './../assets/paperCard.png'
import gsap from 'gsap';
import { dataTrans } from '../context/dataContext';

const CardsGreetings = ({setHiddenProperty}) => {
    const greetingsCard = useRef(null);
    const greetingCover = useRef(null);

    const dataTran = dataTrans();

    useEffect(()=>{
        const greetingCard = greetingsCard.current;
        const greetingCov = greetingCover.current;
    
        
    
        if(greetingCov){
          gsap.fromTo(greetingCov, {
            y: '100%',
            x:'20%',
            rotation: 0,
          }, {
            y: '0%',
            rotation: 12,
            duration: 2, 
            ease: 'power2.out',
          });
        }
    
        if(greetingCard){
          gsap.fromTo(greetingCard, {
            y: '100%',
            x:'-10%',
            rotation: 0,
          }, {
            y: '0%',
            rotation: -19,
            duration: 3, 
            ease: 'power2.out',
          });
        };
    
        const clearProperty = setTimeout(()=>{
          setHiddenProperty(false);
        },2500);
        
        return () => {
          clearTimeout(clearProperty);
        }
      },[]);
  return (
    <div  className='w-fit h-fit py-10 m-auto mt-6 relative'>
        <img ref={greetingCover} className='rotate-12 h-[190px] translate-x-10' src={cover} alt="" />
        <div ref={greetingsCard} style={{
            backgroundImage:`url(${paperCard})`,
            backgroundPosition: 'center', backgroundSize: 'cover',
            boxShadow:'8px 4px 9px rgba(0,0,0,0.3)'
        }} 
        className='rounded w-[250px] h-[190px] absolute top-28'>
            <div className='w-full h-full relative'>
                <img src={desgin} style={{zIndex:'10px'}} className='absolute top-0 left-0' alt="" />
                <div className='w-full h-full flex justify-center items-center flex-col'>
                    <h2 style={{fontFamily:"Style Script",fontWeight:600}} className='text-lg'>Happy Birthday</h2>
                    <p style={{fontFamily:"Style Script",fontWeight:600}} className='text-xl tracking-wider'>{dataTran?.data?.name}<span> ..</span><span className='inline-block'><BsBalloonHeart color='red'/></span></p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CardsGreetings
