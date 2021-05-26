import React from 'react'
import './AddNoteButton.css'

const AddNoteButton = ({ children, onClick }) => {
  return (
    <div>
      <button className="curvyButton" onClick={onClick}>{ children }</button>
    </div>
  )
}

export default AddNoteButton
