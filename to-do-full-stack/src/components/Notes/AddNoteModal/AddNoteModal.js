import React,{ useEffect, useState } from 'react'
import ReactQuill from "react-quill";
import './AddNoteModal.css'
import {removeHTMLTags} from '../helpers/helpers'
import axios from 'axios'
import { withRouter } from 'react-router';
function AddNoteModal(props) {
    const initalNote = {
        mainNote: undefined,
        noteType: "normal"
    }
    const [text,settext] = useState(initalNote)
    const changeHandler = (e) => {
        const x = removeHTMLTags(e)
        const note = {...initalNote}
        note.mainNote = x
        //have to use debounce function for this(defined in evernote clone project by freecodecamp)
        // setTimeout(()=>{
        //     if(note?.mainNote.length>text?.mainNote.length){
            
        //     console.log('hi')}
        // },700)

        // setTimeout(() => {
        //     axios.put('http://localhost:7777/task',note).then((res)=>{
        //         console.log(res)
        //     }).catch((err)=>{
        //         console.log(err)
        //     })
        // }, 2700);
    }



    const fetchValue = () => {
    axios.get(`http://localhost:7777${props.location.pathname}`).then(res=>{

            return res?.data?.mainNote
        }).then((blah)=>{
            const note = {...text};
            note.mainNote = blah
            console.log(note)
            settext(note)
        })
    }
    useEffect(()=>{
        fetchValue()
    },[props.location.pathname])
    return (
        <div className="notes-modal">
            {/* For Heading */}
            {/* <textarea>{}</textarea> */}
            <ReactQuill 
                value={text.mainNote || ""}
                onChange={changeHandler}   
                placeholder="Write your note here" 
            />
        </div>
    )
}

export default withRouter(AddNoteModal)
