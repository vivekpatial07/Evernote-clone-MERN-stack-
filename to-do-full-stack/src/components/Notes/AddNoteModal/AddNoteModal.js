import React from 'react'
import ReactQuill from "react-quill";
import './AddNoteModal.css'
import {removeHTMLTags} from '../helpers/helpers'
import { Button } from "semantic-ui-react";
function AddNoteModal() {
    const changeHandler = (e) => {
        const x = removeHTMLTags(e)
        console.log(x)
    }
    return (
        <div className="notes-modal">
            <ReactQuill 
                // value={"av"}
                onChange={changeHandler}   
                placeholder="Write your note here" 
            />
            <Button size="big">fjd</Button>
        </div>
    )
}

export default AddNoteModal
