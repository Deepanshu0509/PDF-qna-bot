import React from 'react'
import UploadPDF from './UploadPDF'
const Navbar = ({handleFileChange, selectedFile}) => {
  return (
    <div className='flex flex-row p-6 justify-between shadow-sm'>
      <img src="/ai_planet_logo.svg" alt="Ai Planet" />
      <UploadPDF handleFileChange={handleFileChange} selectedFile={selectedFile} />
    </div>
  )
}

export default Navbar
