import React, { useEffect,useState } from 'react'
import './SideNav.css'
import {useDispatch} from 'react-redux'
import {showModal} from '../../../redux/actionCreator'
import { Button } from 'semantic-ui-react'
import {withRouter} from 'react-router-dom'
import axios from 'axios'
import {Icon} from 'semantic-ui-react'
import {v4 as uuidv4} from 'uuid'
import {Tab} from 'semantic-ui-react'


//for sidenotes you can set loader to true then to false to get the desired data on sidebar
//or maybe use sockets or watch evernote clone tutorial

function SideNav(props) {
    const [notes,setnotes] = useState()
    const dispatch = useDispatch()
    const showNoteModal = () => {
        dispatch(showModal(true))
        const id = uuidv4()
        props.history.push(`/task/${id}`)
    }
    const fetchFromDb = async() => {
        const res = await axios.get('http://localhost:7777/task')
        // console.log(res.data)
        setnotes(res.data)
    }
    useEffect(() => {
        fetchFromDb()
    },[])

    useEffect(() => {
        if(!props.location.pathname.includes('edit')){
            dispatch(showModal(false))
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[props.location.pathname])
    //use loading prop inside tab.pane
    const panes = [
        {
            menuItem: 'Notes',
            render: () => <Tab.Pane attached={false}>{sidenotes}</Tab.Pane>
        },
        {
            menuItem: 'Todos',
            render: () => <Tab.Pane attached={false}>TODOS will be shown here</Tab.Pane>
        }
    ]
    const sidenotes = notes?.map(note=>{
        return(  
            <div 
            key={uuidv4()}
            className={props.location.pathname.includes(note._id)
                ?"sidenotes activenote"
                : "sidenotes"}
            
            onClick={()=>{props.history.push(`/task/${note._id}/edit`)}}
            >
            <span style={{marginLeft:"14px"}}>
            <Icon name="pencil alternate" />
            {note.title}
            </span>
            {note.noteType==="important"&&<span><Icon name="star"/></span>}
        </div>
        )
    })
    return (
        <div className='sideNav'>
            <p
                onClick={()=>{props.history.push('/task')}}
                className="sidenav-header"
                style={{fontSize:'27px'}}>
            NeverNote
            </p>
            <Button  onClick={showNoteModal}>Add Note</Button>
           <div className="TabWrapper" style={{marginTop:"27px ",width:"270px"}}>
               <Tab panes={panes}/>
               </div> 
           {/* <div className="sidenote-container">{}
            </div> */}


        </div>
    )
}
export default withRouter(SideNav)