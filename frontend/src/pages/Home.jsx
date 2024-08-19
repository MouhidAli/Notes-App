import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import Notes from '../components/Notes'
import NotesModel from '../components/NotesModel'
import { dele, get, post, put } from '../../services/ApiEndPoint'
import toast from 'react-hot-toast'
import UpdateModel from '../components/UpdateModel'
import DeleteModel from '../components/DeleteModel'


const Home = () => {
  const [notes, setNotes]= useState([])
  const [tittle, setTitle]=useState("")
  const [updatenote , setUpdatenote]= useState("")
  const [refresh , setRefresh]=useState(false)
  const [notesId, setNotesId]=useState("")
  if(notes){
    console.log("response", notes)
  }
  useEffect(()=>{
    const getnotes=async()=>{
      try {
        const request = await get ('/notes/getNotes')
        const response = request.data
        setNotes(response.Notes)
        console.log("response", response)
      } catch (error) {
        console.log(error)
      }
    }

    getnotes()
    
  },[refresh])

  const formateDate = (dateString) =>{
    const options = {year :"numeric", month:"long", day:"numeric"};
    return new Date(dateString).toLocaleDateString(undefined,options)
  };

  const handleCreateNote=async()=>{
    try {
      const request= await post("/notes/createnote",{tittle})
      const response =request.data
      setRefresh(!refresh)
      if(response.success){
        toast.success(response.message)
      }
      console.log("createNoteResponse", response)
    } catch (error) {
      if(error.response){
        toast.error(error.response.data.message)
      }
      console.log(error)
    }
  }

  const handleUpdateNote =async()=>{
    try {
      
      const request=await put(`/notes/updateNotes/${notesId}` , {tittle:updatenote})
      const response= request.data
      
      if(response.success){
        toast.success(response.message)
        setRefresh(!refresh)
      }
      console.log(response)
    } catch (error) {
      if(error.response){
        toast.error(error.response.data.message)
      }
      console.log(error)
    }
  }

  const handleDelet= async()=>{
    try {
    const request=await dele(`/notes//deleteNotes/${notesId}`)
    const response= request.data
    if(response.success){
      toast.success(response.message)
      setRefresh(!refresh)
    }
    } catch (error) {
      if(error.response){
        toast.error(error.response.data.message)
      }
    }
  }




  return (
   <>
<NotesModel title={"Create Notes"} value={tittle} handelTitleChange={(e)=>setTitle(e.target.value)} handleCreateNote={handleCreateNote}/>
  <UpdateModel title={"Update Notes"} value={updatenote} handelTitleChange={(e)=> setUpdatenote(e.target.value)} handleUpdateNote={handleUpdateNote}/>
    <DeleteModel handleDelet={handleDelet} />
   <div className='container-fluid'>
    <div className='row'>
        <div className='col-lg-2 col-md-2 min-vh-100 shadow ' style={{backgroundColor:"#ffe7be"}}>
          <Sidebar/>  
        </div>
        <div className='col-lg-10 col-md-10'>
                <Navbar/> 
                <div className='mt-3 mx-5'>
              <h1 className='fs-2 fw-bold'>NOTES</h1>
            </div>


            <div className='row mt-4 mx-5'>
              {notes && notes.map((elem)=>{
                return(
                  <div className='col-lg-4 col-md-4 mb-5'> 
                  <Notes date={formateDate(elem.createdAt)} title={elem.tittle} handleUpdate={()=>setNotesId(elem._id)}/>
                </div>
                )
              })}
                 
                  
            </div>

            
          
        </div>
    </div>
   </div>
   </>
  )
}

export default Home