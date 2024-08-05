import React from 'react'

const Btns = ({handleclick,btnTitle}) => {
    
  return (
    <button className="bg-white font-semibold hover:bg-slate-200 hover:text-black py-1 px-3 rounded-md border-solid border-2"
       onClick={handleclick}> {btnTitle}
   </button> 
  )
}

export default Btns