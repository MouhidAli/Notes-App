import NotesModel from "../models/Notes.js"


const Create = async(req,res)=>{
    try{
        const userId=req.userId
        const {tittle}= req.body
        if(!tittle){
            return res.status(303).json({message:"Tittle are requried"})
        }
            const NewNotes = new NotesModel({
                tittle, userId
            })
        await NewNotes.save()
        res.status(200).json({ success:true, message:"Notes created successfully", Notes:NewNotes})
    }catch (error) {
        console.log(error)
        return res.status(500).json({success:false, message:"Internal Server error"})
    }
}

const UpdateNotes=async(req,res)=>{
    try{
        const userId=req.userId
        console.log(userId)
        const NotesId = req.params.id
        const {tittle}= req.body

        const FindeNotes = await NotesModel.findById({_id:NotesId})
        if(!FindeNotes){
            return res.status(404).json({success:false, message:"Notes Not Found"})
        }
        const NotesuserId=FindeNotes.userId

        if( userId.toString() !== NotesuserId){
            return res.status(500).json({success:false, message:"Unauthorized User"})
        }

        const updateNotes = await NotesModel.findByIdAndUpdate(
            {_id:NotesId},
            {tittle}, {new:true}
        )

        res.status(200).json({success:true, message: "Notes Update Successfully",updateNotes})

    }catch (error) {
        console.log(error)
        return res.status(500).json({success:false, message:"Internal Server error"})
    }
}


const Delete=async(req,res)=>{
    try{
        const userId=req.userId
        console.log(userId)
        const NotesId = req.params.id

        const FindeNotes = await NotesModel.findById({_id:NotesId})
        if(!FindeNotes){
            return res.status(404).json({success:false, message:"Notes Not Found"})
        }

        const NotesuserId=FindeNotes.userId

        if( userId.toString() !== NotesuserId){
            return res.status(500).json({success:false, message:"Unauthorized User"})
        }

        const DeleteNotes=await NotesModel.findByIdAndDelete(NotesId)
        res.status(200).json({success:true, message: "Notes Delete Successfully",DeleteNotes})
    }catch (error){
        console.log(error)
        return res.status(500).json({success:false, message:"Internal Server error"})
    }
}

const GetNotes=async(req,res)=>{
    try{
        const userId=req.userId

        const Notes= await NotesModel.find({userId})
        if(!Notes){
            return res.status(404).json({success:false, message:"No Data Found"}) 
        }
        res.status(200).json({success:true,Notes})
    }catch(error){
        console.log(error)
        return res.status(500).json({success:false, message:"Internal Server error"})
    }
}

export {Create , UpdateNotes, Delete , GetNotes}