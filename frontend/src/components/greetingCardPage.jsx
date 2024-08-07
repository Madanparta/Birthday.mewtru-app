import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { dataTrans } from '../context/dataContext';
import ErrorPage from '../screen/errorPage';
import MicrophoneInput from './shared/microphoneInput';
import cover01 from '../assets/cover01.png';
import cover02 from '../assets/cover02.png';
import desgin from '../assets/desgin.png';
import cake from '../assets/cake.png';
import light from '../assets/light.png';
import { BsBalloonHeart } from "react-icons/bs";
import './component.css';

import gsap from 'gsap';
import FinalMessageWishes from './shared/finalTextWishesMessage';
import { SERVER_API_URL } from '../utils/staticContent';

const GreetingCard = () => {
    const {id} = useParams();
    const findId = id.split('-');
    const [level, setLevel] = useState(0);
    const [loading,setLoading] = useState(false);
    const [bluring,setBluring] = useState(false);

    const dataTran = dataTrans();

    const greetingMain = useRef(null);
    const finalMessage = useRef(null);
    function bluringCall(){
      setTimeout(() => {
        setBluring(true);
      }, 1000);
    }

    useEffect(()=>{
        const greetingCard = greetingMain.current;
        if(dataTran?.specialPersonData && greetingCard){
          bluringCall();
            gsap.to(greetingCard,
            {
              y: '180%',
              x:'28%',
              rotation: -12,
              scale:1.7,
              duration: 3, 
              zIndex:100,
              ease: 'power2.out',
            },
          );
        }
    },[dataTran?.specialPersonData]);

    // final message
    useEffect(()=>{
      const finalText = finalMessage.current;
      if(finalText){
        gsap.to(finalText,{
          y:'-40%',
          fontSize:30,
          duration:3,
          rotate:-6,
        })
      }
    },[]);

    useEffect(()=>{
        setLoading(true);
        async function findingUser(){
            try {
                const res = await fetch(`${SERVER_API_URL}/api/person/`+id, { method: 'GET',headers: {'Content-Type': 'application/json'}});
                const data = await res.json();
                if(data){
                    dataTran?.setSpecialPersonData(data);
                    setLoading(false)
                };
            } catch (error) {
                console.log(error.message);
                setLoading(false)
            }
        }
        findingUser(id);
    },[id]);

    if(dataTran?.specialPersonData && dataTran?.specialPersonData._id !== findId[0])return <ErrorPage/>
  return (
    <div className={`w-full h-full celebrationpage bg-[#f5ededc4] shadow overflow-hidden`}>

      <MicrophoneInput level={level} setLevel={setLevel}/>

      <div className='w-full h-[360px] flex justify-center items-end relative'>

        {/* final message */}
      {level === 3 && <div style={{fontFamily:"Style Script"}} ref={finalMessage} className='text-[0px] top-[80%] absolute w-full h-full flex justify-center pt-20'>
              <FinalMessageWishes messages={dataTran?.specialPersonData?.message}/>
      </div>}
        <div className='w-[250px] h-[265px] relative rotate-12'>
          <img className={`absolute top-0 left-0 z-0 ${bluring? 'hidden' : 'block'}`} src={cover01} alt="" />
          <img className={`absolute bottom-0 left-0 z-20 ${bluring? 'hidden' : 'block'}`} src={cover02} alt="" />

        <div ref={greetingMain} className={`absolute bottom-18 w-[225px] h-[180px] -rotate-12 shadow rounded-sm bg-white z-10 overflow-hidden`}>
          <div className='w-full h-full bg-[#1a2130f1] relative overflow-hidden'>
            <p style={{fontFamily:"Style Script"}} className='absolute text-[15px] left-[32%] top-[18%] w-fit h-fit flex flex-col text-[white] tracking-wider'>
            <span className='text-[15px]'>Blow!</span>
            <span className='text-[8px]'>[ for your surprise ]</span>
            <div className='flex justify-normal items-center gap-1'>
              {dataTran?.specialPersonData?.name}
              <BsBalloonHeart className=''/>..
            </div>
            </p>

            <img className='w-[60%] absolute top-0 left-0' src={desgin} alt="" />

            <div className='w-full h-full relative'>
            <img className='w-full h-auto scale-125 absolute -bottom-10' src={cake} alt="" />
              { level === 1?<></>
                :(<>
                <img className='w-[5px] h-auto absolute bottom-[58px] left-[134px]' src={light} alt="" />
                <img className='w-[5px] h-auto absolute bottom-[72px] left-[65px]' src={light} alt="" />
                <img className='w-[3px] h-auto absolute bottom-[74px] left-[75px]' src={light} alt="" />
                </>)
              }
              {level === 3 ?<></>
              :(<>
              <img className='w-[4px] h-auto absolute bottom-[74px] left-[97px]' src={light} alt="" />
              <img className='w-[5px] h-auto absolute bottom-[73px] left-[115px]' src={light} alt="" />
              <img className='w-[3px] h-auto absolute bottom-[73px] left-[135px]' src={light} alt="" />
              <img className='w-[5px] h-auto absolute bottom-[58px] left-[89px]' src={light} alt="" />
              </>)}
              { level === 2  ? <></>
              :(<>     
              <img className='w-[5px] h-auto absolute bottom-[62px] left-[144px]' src={light} alt="" />
              <img className='w-[4px] h-auto absolute bottom-[65px] left-[165px]' src={light} alt="" />
              <img className='w-[5px] h-auto absolute bottom-[62px] left-[186px]' src={light} alt="" /></>)}
              
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default GreetingCard
