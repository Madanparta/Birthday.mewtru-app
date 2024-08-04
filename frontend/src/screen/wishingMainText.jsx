import React from 'react'

const WishingText = () => {
  return (
    <section className='w-fit h-fit md:hidden wishingText m-auto'>
      <h1 className='text-6xl flex flex-col justify-center items-center my-2 capitalize tracking-wider text-[white]'>
        <span className='rotate-2 p-1 bg-yellow-600'>Create A </span>
        <span className='-rotate-2 p-1 bg-[#c75b5b]'>Birthday wishes </span>
        <span className='translate-x-10 p-1 bg-[#A2CA71]'>for </span>
        <span className='rotate-2 p-1 bg-[#B51B75] dots'>your special person</span>
      </h1>
    </section>
  )
}

export default WishingText
