import React,{ useEffect, useState } from 'react'
import ReactQuill from "react-quill";
import './AddNoteModal.css'
import {removeHTMLTags} from '../helpers/helpers'
import axios from 'axios'
import { withRouter } from 'react-router';
import {debounce} from "lodash";
function AddNoteModal(props) {
    const initalNote = {
        mainNote: undefined,
        noteType: "normal"
    }
    const [text,settext] = useState(initalNote)
    const changeHandler = (e) => {
        const x = removeHTMLTags(e)
        const note = {...text}
        note.mainNote = x
        const id = props.location.pathname.split('/')[2]
        axios.put(`http://localhost:7777/task/${id}`,note).then((res)=>{
            console.log(res)
        }).catch((err)=>{
            console.log(err)
        })
    }


    const changeHandlerTitle = (e) => {
        const note = {...text}
        note.title = e.target.value
        const id = props.location.pathname.split('/')[2]
        console.log(id)
        settext(note)
        console.log(note)
        axios.put(`http://localhost:7777/task/${id}`,note).then((res)=>{
            console.log(res)
        }).catch((err)=>{
            console.log(err)
        })

    }
    const fetchValue = () => {
    axios.get(`http://localhost:7777${props.location.pathname}`).then(res=>{
            console.log(res.data)
            return res?.data
    }).then((blah)=>{
            console.log(blah)
            const note = {...text};
            note.mainNote = blah.mainNote
            note.title = blah.title
            settext(note)
    })
    }
    useEffect(()=>{
        fetchValue()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[props.location.pathname])
    return (
        <div className="notes-modal">
            {/* For Heading */}
            {console.log(text.title)}
            <textarea
                className="header-input"
                placeholder="Title"
                value={text.title||""}
                onChange={changeHandlerTitle}
            />
            <hr/>
            <ReactQuill 
                value={text.mainNote || ""}
                onChange={changeHandler}   
                placeholder="Write your note here"
            />
        </div>
    )
}

export default withRouter(AddNoteModal)
