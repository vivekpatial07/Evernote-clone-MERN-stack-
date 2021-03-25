import React, { useEffect,useState } from 'react'
import './SideNav.css'
import {useDispatch} from 'react-redux'
import {showModal} from '../../../redux/actionCreator'
import { Button } from 'semantic-ui-react'
import {withRouter} from 'react-router-dom'
import axios from 'axios'
function SideNav(props) {
    const [notes,setnotes] = useState()
    const dispatch = useDispatch()
    const showNoteModal = () => {
        dispatch(showModal(true))
        props.history.push('/task/add-new-note')
    }
    const fetchFromDb = async() => {
        const res = await axios.get('http://localhost:7777/task')
        console.log(res.data)
        setnotes(res.data)
    }
    useEffect(() => {
        fetchFromDb()
    },[])

    useEffect(() => {
        if(!props.location.pathname.includes('/task/')){
            dispatch(showModal(false))
        }
    },[props.location.pathname])
    return (
        <div className='sideNav'>
            <p style={{fontSize:'27px'}}>
            NeverNote
            </p>
            <Button primary onClick={showNoteModal}>Add Note</Button>
           <div
            style={{
                height:"500px",
                width:'100%',
                overflow:"auto",
                margin:"10px auto",
                display:"flex",
                flexDirection:'column',
                alignItems:"center"
            }}
           >{notes?.map(note=>{
                return(  
                <div style={{
                    height:"27px",
                    margin:"7px",
                    border:'1px solid white',
                    width:"70%",
                    borderRadius:"10px"
                }}>
                    {note.mainNote}
                </div>
                )
            })}
            </div>


        </div>
    )
}
export default withRouter(SideNav)