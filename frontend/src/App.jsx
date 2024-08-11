import React, { useEffect, useRef } from 'react';
import {Routes,Route} from 'react-router-dom';
import WishesCreatingPage from './components/wishesCreatingPage';
import GreetingCard from './components/greetingCardPage';
import ConvertScreenText from './screen/ConvertScreenText';
import NotFoundPage from './screen/NotFoundPage';
import { dataTrans } from './context/dataContext';
import { SERVER_API_URL } from './utils/staticContent';
import Loader from './components/shared/Loader';
import gsap from 'gsap';
// import Footer from './components/Footer';


const App = () => {
  const dataTran = dataTrans();
  const counts = useRef(null);

  useEffect(()=>{
    const userCount = counts.current;
    if(userCount){
      gsap.fromTo(userCount,{x:'2%',display:'block',duration:1},{x:'-2%'});
    }
    const getUsers = async() => {
      try {
        const res = await fetch(SERVER_API_URL+'/api/person/getUsers',{ method: 'GET',headers: {'Content-Type': 'application/json'}});
        const data = await res.json();
        if(res.status === 200){
          dataTran?.setUsersCount(data.length);
        }
      } catch (error) {
        console.log(error)
      }
    }
    getUsers();
  },[]);
  return (
    <>
    <section className='w-full px-3 py-3 md:hidden h-screen bg-[#fbf6e234] relative'>
      <Routes>
        <Route path='/' element={<WishesCreatingPage/>}/>
        <Route path='/:id' element={<GreetingCard/>}/>
        <Route path='*' element={<NotFoundPage/>}/>

      </Routes>

      <div className='w-full h-fit px-2 py-3'>
        <div className='text-[12px] font-[400] w-full h-fit text-end px-1'>
          <p className='hidden' ref={counts}><span className='text-[13px] font-semibold text-orange-500'>{!dataTran?.usersCount? <Loader/> : dataTran?.usersCount}</span> users & counting!..</p>
        </div>
        {/* <Footer/> */}
      </div>
    </section>
    <section className='w-screen h-screen hidden md:block'>
      <ConvertScreenText/>
    </section>
    </>
  )
}

export default App
