import React from 'react'
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";


const Notes = ({title,date,handleUpdate}) => {
  return (
    <>
    <div className="card position-relative  rounded-4 border-0" style={{width:"18rem",backgroundColor:"#ffe7be"}}>
  <div class="card-body position-relative">
    <h5 class="card-title">{title}</h5>

    <div className='bottomContent'>
        <div className='Date d-flex justify-content-between align-items-center'>
            <h5 className='fs-6 ' >{date}</h5>
             <div  className='d-flex justify-content-center flex-column align-items-center position-relative  '
             data-bs-toggle="modal" data-bs-target="#exampleModal">
                <div className='Dropdown'>
              
               
               <FaEdit size={20} cursor={"pointer"}  data-bs-toggle="modal" data-bs-target="#updatemodel" onClick={handleUpdate}/>
               <MdDelete size={25} cursor={"pointer"} color='red' data-bs-toggle="modal" data-bs-target="#deleteEmployeeModal" onClick={handleUpdate} />
                </div>
            
             </div>
        </div>
    </div>

    
  </div>
  </div>
    </>
  )
}

export default Notes