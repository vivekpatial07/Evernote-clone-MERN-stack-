import React,{useState,useEffect} from 'react'
import SideNav from '../SideNav/SideNav'
import './Main.css'
import {useSelector,useDispatch} from 'react-redux'
import { noteSelector } from '../../../redux/selector'
import axios from 'axios'
import NotesContainer from './NotesContainer/NotesContainer'
import AddNoteModal from '../AddNoteModal/AddNoteModal'
import { showModal } from '../../../redux/actionCreator'
import { withRouter } from 'react-router-dom'
function Main(props) {
    const state = useSelector(noteSelector)
    const dispatch = useDispatch()
    const initialState = {
        mainNote: undefined,
        noteType:'normal'
    }
    const [note,setnote] = useState(initialState)
    const [allNotes,setAllNotes] = useState([])
    const changeHandler = (e) => {
        const currentNote = {...note};
        currentNote.mainNote = e.target.value
        setnote(currentNote)
    }
    const addnotes = () => {
        console.log(note)
        axios.post('http://localhost:7777/task',note).then(res=>{
            fetchFromDb()
            console.log(res)
            dispatch(showModal(false))
        })
    }
    const fetchFromDb = async() =>{
        const res = await axios.get('http://localhost:7777/task')
        console.log(res)
        console.log(res.data)
        // setnote
        setAllNotes(res.data)
    }
    useEffect(()=>{
        // will use redux saga after this
        fetchFromDb()
    },[])
    return (
        <div>
            <div style={{display:"flex", flexDirection:'row',height:"100vh"}}>
                <div>
                <SideNav/>
                </div>
                {
                   state.showModal 
                    ||props.location.pathname.includes('task/')?
                    <AddNoteModal/>:<NotesContainer notes={allNotes}/>
                    // <div style={{position:'absolute',left:"770px"}}>
                    // {/* <AddNoteModal /> */}
                    // <input type='text' onChange={changeHandler}/>
                    // <button onClick={addnotes}>Add</button>
                    // </div>
                }
             {/* {!state.showModal?/>} */}
            </div>
        </div>
    )
}

export default withRouter(Main)
