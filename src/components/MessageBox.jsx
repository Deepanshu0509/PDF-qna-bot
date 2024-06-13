import React from 'react'

const MessageBox = ({src, text}) => {
  return (
    <div className='flex flex-row gap-8'>
      <img src={src} alt="U" />
        <p>{text}</p>
    </div>
  )
}

export default MessageBox
