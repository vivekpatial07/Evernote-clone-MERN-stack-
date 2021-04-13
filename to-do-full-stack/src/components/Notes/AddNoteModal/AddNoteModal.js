import React,{ useEffect, useState, useCallback,useRef} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import ReactQuill from "react-quill";
import './AddNoteModal.css'
import { withRouter,useLocation } from 'react-router';
import {debounce} from "lodash";
import ReactLoader from '../../Loader/ReactLoader';
import {
    fetchCurrentNote,
    editNoteInit,
    saveNote
} from '../../../redux/actionCreator';
import { noteSelector } from '../../../redux/selector';
function AddNoteModal() {
    const initalState = {
        title:"",
        mainNote:""
    }
    const dispatch = useDispatch()
    const shouldRun = useRef(false)
    const state = useSelector(noteSelector)
    const [text,settext] = useState(initalState)
    let location = useLocation()
    useEffect(()=>{
        if(!location.pathname.includes('add')){
            settext(state.currentNote)
        }
        else{
            settext(initalState)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[state,location.pathname])
    const dbcall = (note, id) =>{
        if(id.includes('add')){
            dispatch(saveNote(note,id))
        }
        else {
            dispatch(editNoteInit(note))

        }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const dbSave = useCallback(
        debounce((note,id) => dbcall(note,id), 1400)
		, []
	)
    const changeHandler = (e) => {
        if(shouldRun.current){
        const id = location.pathname.split('/')[2]
        const note = {...text}
        note.mainNote = e
        console.log(note)
        settext(note)
        dbSave(note,id)
    }
        shouldRun.current = true
    }

    const changeHandlerTitle = (e) => {
        const id = location.pathname.split('/')[2]
        const note = {...text}
        note.title = e.target.value
        console.log(note)
        dbSave(note,id)
        settext(note)
    }

    useEffect(()=>{
        dispatch(fetchCurrentNote(location.pathname))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[location.pathname])

    const modules = {
        toolbar: [
          [{ 'header': [1, 2, false] }],
          ['bold', 'italic', 'underline','strike', 'blockquote'],
          [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
          ['clean']
        ],
      }
    return (
        <div className="notes-modal">
            {
            state.notesLoader
            ?
                <ReactLoader/>
            :
             <div className="notes-modal">
                 <textarea
                  className="header-input"
                  placeholder="Title"
                  value={text&&text.title}
                  onChange={changeHandlerTitle}
                  />
                 <ReactQuill
                     value={text&&text.mainNote}
                     onChange={changeHandler}   
                     placeholder="Write your note here"
                     modules={modules}
             />
             </div>
            }
        </div>
    )
}

export default withRouter(AddNoteModal)
