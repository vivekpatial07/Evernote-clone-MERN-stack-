import React, { useEffect,useState } from 'react'
import './SideNav.css'
import {useDispatch} from 'react-redux'
import {showModal} from '../../../redux/actionCreator'
import { Button } from 'semantic-ui-react'
import {withRouter} from 'react-router-dom'
import axios from 'axios'
import {Icon} from 'semantic-ui-react'
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[props.location.pathname])
    return (
        <div className='sideNav'>
            <p style={{fontSize:'27px'}}>
            NeverNote
            </p>
            <Button primary onClick={showNoteModal}>Add Note</Button>
           <div className="sidenote-container">{notes?.map(note=>{
                return(  
                    <div 
                    className={props.location.pathname.includes(note._id)
                        ?"sidenotes activenote"
                        : "sidenotes"}
                    
                    onClick={()=>{props.history.push(`/task/${note._id}`)}}
                    >
                    <Icon name="pencil alternate" />
                    <span style={{marginLeft:"14px"}}>
                    {note.title}
                    </span>
                </div>
                )
            })}
            </div>


        </div>
    )
}
export default withRouter(SideNav)