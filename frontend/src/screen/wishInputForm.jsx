import React, { useState } from 'react';
import { CiUser } from "react-icons/ci";
import { IoIosTimer } from "react-icons/io";
import { TbMessageCircleHeart } from "react-icons/tb";
import { GoLink } from "react-icons/go";
import candles from '../assets/candles.png'
import Loader from '../components/shared/Loader';
import { dataTrans } from '../context/dataContext';
// import axios from 'axios';

const WishInputForm = () => {
    const [loader,setLoader]=useState(false);

    const dataTran = dataTrans()

    const handleInputs = async(e) => {
        e.preventDefault();
        let fomData = new FormData(e.currentTarget);
        let name = fomData.get('name');
        let age = fomData.get('age');
        let message = fomData.get('message');
        let customeEnd = fomData.get('customeEnd');

        setLoader(true);
        try {
            const res = await fetch('http://localhost:8080/api/person/storeP', { method: 'POST',headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                  name: name,
                  age: age,
                  message: message,
                  customeEnd: customeEnd
                })
              });
            const data = await res.json();
            if(data){
                dataTran?.setData(data);
            };

            // const res = await axios.post('/person/storeP',{name,age,message,customeEnd});
            // if(res.status === 200){
            //     dataTran?.setData(res?.data);
            //     console.log(res);
            // }
            setLoader(false);
            dataTran?.setWishesSubmit(true)
        } catch (error) {
            setLoader(false);
        }
    }
  return (
    <section className='w-[96%] h-fit bg-white m-auto py-4 px-2 mt-7 rounded-sm shadow relative'>
      <p className='py-2 px-2 text-[14px] text-gray-800 font-thin'>Enter your special person's name, age & heartfelt speech that will appear 
        aften they blow out their candles. your also customize the URL slg. If you leave it empty, we'll make one for you.</p>

        <form onSubmit={handleInputs} className='w-full h-fit px-2 flex flex-col gap-3 mt-5 mb-10 z-10 pb-6'>
            <div className='border-2 flex gap-2 px-1 py-2 text-[15px] items-center rounded shadow-sm cursor-pointer'>
                <label htmlFor="name">
                    <CiUser size={22} color='black'/>
                </label>
                <input required type="text" className='w-full h-full p-1 outline-none' placeholder='Name' name='name'/>
            </div>
            <div className='border-2 flex gap-2 px-1 py-2 text-[15px] items-center rounded shadow-sm cursor-pointer'>
                <label htmlFor="age">
                    <IoIosTimer size={22} color='black'/>
                </label>
                <input id='age' required className='w-full h-full p-1 outline-none' type="number" placeholder='Age' name='age'/>
            </div>
            <div className='border-2 flex gap-2 px-1 py-2 text-[15px] items-center rounded shadow-sm cursor-pointer'>
                <label htmlFor="message">
                    <TbMessageCircleHeart size={22} color='black'/>
                </label>
                <input id='message' className='w-full h-full p-1 outline-none' type="text" placeholder='Message' name='message'/>
            </div>
            <div className='border-2 flex gap-2 px-1 py-2 text-[15px] items-center rounded shadow-sm cursor-pointer'>
                <label htmlFor="slug">
                    <GoLink size={22} color='black'/>
                </label>
                <input id='slug' className='w-full h-full p-1 outline-none' type="text" placeholder='Slug' name='customeEnd'/>
            </div>
            <div style={{
                boxShadow:'0px 4px 3px #4F1787'
            }} className='flex gap-2 px-1 text-[17px] items-center rounded cursor-pointer mt-3 bg-[#4f1787c7] z-20'>
                {loader? (<div className=' w-full py-2 h-10  text-white text-[12px] tracking-wider flex justify-center items-center gap-2 capitalize cursor-default'>
                    <Loader color={'#4F1384'}/>
                    <p>loading ..</p>
                </div>) :(<button className='uppercase w-full py-2 h-10 tracking-tight text-white font-medium text-[16px]'>Create</button>)}
            </div>
            <div className='absolute bottom-0 left-1/4 '>
                <img className='h-[150px]' src={candles} alt="" />
            </div>
        </form>
    </section>
  )
}

export default WishInputForm
