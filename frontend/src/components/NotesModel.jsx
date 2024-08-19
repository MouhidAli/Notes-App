    import React from 'react'
    
    const NotesModel = ({title, handelTitleChange, value,handleCreateNote}) => {
      return (
        <>


<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">{title}</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <form class="form-floating">
  <input type="email" class="form-control" id="floatingInputValue" value={value} onChange={handelTitleChange }/>
  <label for="floatingInputValue">Enter Your Notes</label>
</form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-dark" onClick={handleCreateNote}>Save changes</button>
      </div>
    </div>
  </div>
</div>

        </>
      )
    }
    
    export default NotesModel