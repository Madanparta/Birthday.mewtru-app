import React from 'react'

const FinalMessageWishes = ({messages}) => {
  return (
    <div style={{textShadow:'-3px 2px 4px rgba(0,0,0,0.4)'}} className='w-fit h-fit'>
      {messages}
    </div>
  )
}

export default FinalMessageWishes
