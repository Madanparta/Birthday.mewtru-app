import React from 'react';
import {Routes,Route} from 'react-router-dom';
import WishesCreatingPage from './components/wishesCreatingPage'

const App = () => {
  return (
    <section className='w-full px-3 py-3 md:p-10 h-screen bg-[#fbf6e234]'>
      <Routes>
        <Route path='/' element={<WishesCreatingPage/>}/>
      </Routes>
    </section>
  )
}

export default App
