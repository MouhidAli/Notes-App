import express from "express"
import { Create, Delete, GetNotes, UpdateNotes } from "../controllers/Notes.js"
import { VerficationToken } from "../middlewares/Verficationtoken.js"


const NotesRoutes= express.Router()

NotesRoutes.post("/createnote", VerficationToken ,Create)
NotesRoutes.put("/updateNotes/:id",VerficationToken, UpdateNotes)
NotesRoutes.delete("/deleteNotes/:id",VerficationToken, Delete)
NotesRoutes.get('/getNotes',VerficationToken, GetNotes)
export default NotesRoutes