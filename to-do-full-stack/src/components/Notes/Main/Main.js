import React,{useState} from 'react'
import SideNav from '../SideNav/SideNav'
import './Main.css'
import {useDispatch, useSelector} from 'react-redux'
import { noteSelector } from '../../../redux/selector'
import axios from 'axios'
function Main() {
    const state = useSelector(noteSelector)
    // const dispatch = useDispatch()
    const initialState = {
        mainNote: undefined,
        noteType:'normal'
    }
    const [note,setnote] = useState(initialState)
    const changeHandler = (e) => {
        const currentNote = {...note};
        currentNote.mainNote = e.target.value
        setnote(currentNote)
    }
    const addnotes = () => {
        console.log(note)
        axios.post('http://localhost:7777/task',note)

    }
    return (
        <div>
            <h1>NeverNote</h1>
            <div style={{left:'0' ,position:'absolute',top:'42px'}}>
                <SideNav/>
            </div>
            {state.showModal&&
                <div>
                    {/* <AddNoteModal /> */}
                <input type='text' onChange={changeHandler}/>
                <button onClick={addnotes}>Add</button>
                </div>
                }
        </div>
    )
}

export default Main
