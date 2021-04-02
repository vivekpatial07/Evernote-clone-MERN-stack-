import React,{ useEffect, useState, useCallback} from 'react'
import ReactQuill from "react-quill";
import './AddNoteModal.css'
import axios from 'axios'
import { withRouter } from 'react-router';
import {debounce} from "lodash";
import ReactLoader from '../../Loader/ReactLoader';
function AddNoteModal(props) {
    const initalNote = {
        mainNote: undefined,
        title: undefined,
        noteType: "normal",
    }
    const[isloading,setisloading] = useState(true)
    const dbcall = (note,id) =>{
        // console.log(note,id)
        axios.put(`http://localhost:7777/task/${id}`,note).then((res)=>{
                   console.log(res)
                }).catch((err)=>{
                       console.log(err)
                })
    }
    const [text,settext] = useState(initalNote)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const dbSave = useCallback(
        debounce((note,id) => dbcall(note,id), 2700)
		, []
	)
    const changeHandler = (e) => {
        // const x = removeHTMLTags(e)
        const note = {...text}
        note.mainNote = e
        const id = props.location.pathname.split('/')[2]
        
        //giving bugs here
        //needs to be changed
        //(maybe to useeffect)
        // maybe use redux store for all operations
        dbSave(note,id)
        // debounce(dbcall,1000)
        // if(note.title){
                // axios.put(`http://localhost:7777/task/${id}`,note).then((res)=>{
                //    console.log(res)
                // }).catch((err)=>{
                //        console.log(err)
                // })
            // } 
    }


    const changeHandlerTitle = (e) => {
        const note = {...text}
        note.title = e.target.value
        const id = props.location.pathname.split('/')[2]
        console.log(id)
        settext(note)
        console.log(note)
        dbSave(note,id)
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
            if(blah){
                note.mainNote = blah.mainNote
                note.title = blah.title
                settext(note)
                setisloading(false)
                return
            }
            settext(initalNote)
            // setisloading(true)
    })
    }
    useEffect(()=>{
        fetchValue()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[props.location.pathname])
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
            isloading

                ?
                <ReactLoader/>
            :<div className="notes-modal">
                <textarea
                 className="header-input"
                 placeholder="Title"
                 value={text.title||""}
                 onChange={changeHandlerTitle}
                 />
                <ReactQuill
                    value={text.mainNote || ""}
                    onChange={changeHandler}   
                    placeholder="Write your note here"
                    modules={modules}
            />
            </div>}
        </div>
    )
}

export default withRouter(AddNoteModal)
