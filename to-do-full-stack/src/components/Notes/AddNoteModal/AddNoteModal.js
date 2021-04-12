import React,{ useEffect, useState, useCallback} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import ReactQuill from "react-quill";
import './AddNoteModal.css'
import axios from 'axios'
import { withRouter } from 'react-router';
import {debounce} from "lodash";
import ReactLoader from '../../Loader/ReactLoader';
import { fetchCurrentNote } from '../../../redux/actionCreator';
import { noteSelector } from '../../../redux/selector';
function AddNoteModal(props) {
    const initalNote = {
        mainNote: undefined,
        title: undefined,
        noteType: "normal",
    }
    const dispatch = useDispatch()
    const state = useSelector(noteSelector)
    console.log(state)
    const [text,settext] = useState(initalNote)
    const[isloading,setisloading] = useState(true)
    const dbcall = (note,id) =>{
      //for new note
        // if(props.location.pathname.includes('add')){
            // axios.post("http://localhost:7777/task",note).then((res)=>{
            //     console.log(res,'new note')
            // }).catch((err)=>{
            //     console.log(err)
            // })
        // }
        // else{
        // axios.put(`http://localhost:7777/task/${id}`,note).then((res)=>{
        //            console.log(res,'old note')
        //         }).catch((err)=>{
        //                console.log(err)
        //         })
        // }
        // dispatch()

        //saga implement
        // dispatch(editNoteInit())

    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const dbSave = useCallback(
        debounce((note,id) => dbcall(note,id), 1400)
		, []
	)
    const changeHandler = (e) => {
        const note = {...text}
        note.mainNote = e
        const id = props.location.pathname.split('/')[2]
        
        //giving bugs here
        //needs to be changed
        //(maybe to useeffect)
        // maybe use redux store for all operations
    //    counter && 
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
        settext(note)
        // counter && 
        dbSave(note,id)
    }
    // const fetchValue = () => {
    // // !props.location.pathname.includes("add")&&
    // axios.get(`http://localhost:7777${props.location.pathname}`).then(res=>{
    //         console.log(res.data)
    //         return res?.data
    // }).then((blah)=>{
    //         console.log(blah)
    //         const note = {...text};
    //         if(blah){
    //             note.mainNote = blah.mainNote
    //             note.title = blah.title
    //             settext(note)
    //             setisloading(false)
    //             // setcounter(1)
    //             return
    //         }
    //         settext(initalNote)
    //         // setisloading(true)
    // })
    // }
    useEffect(()=>{
        // fetchValue()
        dispatch(fetchCurrentNote(props.location.pathname))
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
            state.notesLoader
                ?
                <ReactLoader/>
            :
             <div className="notes-modal">
                 <textarea
                  className="header-input"
                  placeholder="Title"
                  value={state.currentNote?.title||""}
                  onChange={changeHandlerTitle}
                  />
                 <ReactQuill
                     value={state.currentNote?.mainNote || ""}
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
