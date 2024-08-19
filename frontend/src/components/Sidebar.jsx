import React from 'react'
import { FaPlus } from "react-icons/fa";
import ImageNotes from '../ImageNotes';




const Sidebar = () => {
  return (
    <>
    <div className='mt-5 mx-5 '>
        <h1 className='fs-3 fw-bold '><ImageNotes /></h1>
        
        

        <div className='  mt-5 mx-2 d-flex justify-content-center align-items-center' style={{backgroundColor:"black", height:"50px", width:"50px", borderRadius:"15px", cursor:"pointer"}}
        data-bs-toggle="modal" data-bs-target="#exampleModal"><FaPlus size={30}  className='text-white'/></div>

       
    </div>
    <br></br>
    <br></br>
     <p className='fs-5 fw-' style={{ fontFamily: "Roboto Slab"}}>Quick Note-Taking: Jot down ideas, reminders, and tasks quickly without the need for physical paper.</p>

     </>
   
  )
}

export default Sidebar