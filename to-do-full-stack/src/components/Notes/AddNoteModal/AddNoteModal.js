import React,{ useState } from 'react'
import ReactQuill from "react-quill";
import './AddNoteModal.css'
import {removeHTMLTags} from '../helpers/helpers'
import { Button } from "semantic-ui-react";
import axios from 'axios'
import { withRouter } from 'react-router';
function AddNoteModal(props) {
    const [text,settext] = useState()
    const changeHandler = (e) => {
        const x = removeHTMLTags(e)
        console.log(x)
    }
    const fetchValue = () => {
    axios.get(`http://localhost:7777${props.location.pathname}`).then(res=>{

            return res.data.mainNote
        }).then((blah)=>{
            settext(blah)
        })
    }
    return (
        <div className="notes-modal">
            <ReactQuill 
                value={text || ""}
                onChange={changeHandler}   
                placeholder="Write your note here" 
            />
            <Button size="big" onClick={fetchValue}>fjd</Button>
        </div>
    )
}

export default withRouter(AddNoteModal)
