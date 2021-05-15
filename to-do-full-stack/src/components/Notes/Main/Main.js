import React,{useState,useEffect} from 'react'
import SideNav from '../SideNav/SideNav'
import './Main.css'
import {useSelector,useDispatch} from 'react-redux'
import { authSelector, noteSelector } from '../../../redux/selector'
import axios from 'axios'
import NotesContainer from './NotesContainer/NotesContainer'
import AddNoteModal from '../AddNoteModal/AddNoteModal'
// import { showModal } from '../../../redux/actionCreator'
import {storeNotes} from '../../../redux/actionCreator'
import { withRouter } from 'react-router-dom'
import ReactLoader from '../../Loader/ReactLoader'
function Main(props) {
    const state = useSelector(noteSelector)
    const auth = useSelector(authSelector)
    const dispatch = useDispatch()
    const [allNotes,setAllNotes] = useState([])
    console.log('fasdlk')
    // const fetchFromDb = async() =>{
    //     const res = await axios.get('http://localhost:7777/task')
    //     console.log(res)
    //     console.log(res.data)
    //     setAllNotes(res.data)
    //     // store notes in redux store
    //     dispatch(storeNotes(res.data))
    // }
    // useEffect(()=>{
    //     // will use redux saga after this
    //     fetchFromDb()
    // },[])
    return (
        <div>
            {auth.loading ? <ReactLoader /> :
            <div style={{display:"flex", flexDirection:'row',height:"100vh"}}>
                <div>
                <SideNav/>
                </div>
                {
                   state.showModal 
                    ||props.location.pathname.includes('task/')?
                    <AddNoteModal/>:<NotesContainer notes={allNotes}/>
                }
            </div>
}
        </div>
    )
}

export default withRouter(Main)
