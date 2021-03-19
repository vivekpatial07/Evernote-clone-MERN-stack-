import React from 'react'
import './NotesContainer.css'
function NotesContainer({notes}) {
    const data = notes.map(note=>{
        return <div key={note.id} className="single-note" >{note.mainNote}</div>
    })
    return (
        <div className="container-right" >
            <div className="notes-heading">NeverNote</div>
            <div className="notes-container">
                {data.length===0?<p style={{margin:"auto"}}>Add Notes</p>:data}
            </div>
        </div>
    )
}

export default NotesContainer
