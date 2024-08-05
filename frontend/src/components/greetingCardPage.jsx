import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { dataTrans } from '../context/dataContext';
import ErrorPage from '../screen/errorPage';
import MicrophoneInput from './shared/microphoneInput';
import './component.css';

import gsap from 'gsap';

const GreetingCard = () => {
    const {id} = useParams();
    const findId = id.split('-');
    const [level, setLevel] = useState(0);
    const [loading,setLoading] = useState(false);

    const dataTran = dataTrans();

    // const greetingCardMain = useRef(null);

    // useEffect(()=>{
    //     const greetingCard = greetingCardMain.current;
    //     if(dataTran?.specialPersonData && greetingCard){
    //         gsap.to(greetingCard, {
    //             background: 'linear-gradient(to bottom, red, transparent)',
    //             duration:2
    //         });
    //     }
    // },[]);

    // console.log()

    useEffect(()=>{
        setLoading(true);
        async function findingUser(){
            try {
                const res = await fetch('http://localhost:8080/api/person/'+id, { method: 'GET',headers: {'Content-Type': 'application/json'}});
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
    <div className='w-full h-full celebrationpage bg-[#f5eded7e]'>
      <MicrophoneInput level={level} setLevel={setLevel}/>

    </div>
  )
}

export default GreetingCard
