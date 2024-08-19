import React from 'react'
import { post } from '../../services/ApiEndPoint'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate=useNavigate("")
  const handleLogout=async()=>{
    try {
      const request=await post("/auth/logout")
      const response= request.data
      if(response.success){
        toast.success(response.message)
        navigate('/login')
      }
    } catch (error) {
      if(error.response){
        toast.error(error.response.data.message)
      }
    }
  }
  return (
    <nav className="navbar">
    <div className="container-fluid p-2">
      <h2 className='heading'>Welcome To The NotesApp</h2>
        <input className=" mx-3   SerachInput " type="search" placeholder="Search" />
        <button type="button" class="btn bg-dark text-white mx-3" onClick={handleLogout}>Logout</button>
      
    </div>
  </nav>
  )
}

export default Navbar