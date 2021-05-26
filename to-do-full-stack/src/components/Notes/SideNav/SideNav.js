import React, { useEffect,useState, useRef } from 'react'
import './SideNav.css'
import {useDispatch} from 'react-redux'
import {showModal} from '../../../redux/actionCreator'
import AddNoteButton from '../../AddNoteButton/AddNoteButton'
import {withRouter} from 'react-router-dom'
import axios from 'axios'
import {Icon} from 'semantic-ui-react'
import {v4 as uuidv4} from 'uuid'
import {Tab} from 'semantic-ui-react'


//for sidenotes you can set loader to true then to false to get the desired data on sidebar
//or maybe use sockets or watch evernote clone tutorial or maybe just use redux tutorial

function SideNav(props) {
	const [visible, setVisible] = useState(true)
	const [notes,setnotes] = useState()
	const [todos,settodos] = useState()
	const [sideNavclass, setClass] = useState('')

	const dispatch = useDispatch()
	const sideBarRef = useRef(null)
	const showNoteModal = () => {
		dispatch(showModal(true))
		const id = uuidv4()
		props.history.push(`/task/${id}`)
	}

	const fetchFromDb = async() => {
		const res = await axios.get('http://localhost:7777/task')
		setnotes(res.data)
	}

	const fetchTodoFromDb = async() => {
		axios.get('http://localhost:7777/todo').then(res=>{
			settodos(res.data)
		}).catch(err=>{
			console.log(err)
		})
	}

	useEffect(() => {
		fetchFromDb()
		fetchTodoFromDb()
	},[])

	useEffect(() => {
			if(!props.location.pathname.includes('edit')){
					dispatch(showModal(false))
			}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	},[props.location.pathname])

	
	const sideBarShowHandler = () => {
		sideBarRef.current.style.width = "270px"
		sideBarRef.current.style.display = "flex"
		setVisible(false)
	}

	const hideSideBarHandler = () => {
		sideBarRef.current.style.width = "0"
		// sideBarRef.current.style.display = "none"
		setVisible(true)
	}

	//use loading prop inside tab.pane
	const sideTodo = todos?.map(todo=>{
		return (
			<div 
				key={uuidv4()}
				className={props.location.pathname.includes(todo._id)
					?"sidenotes activenote"
					: "sidenotes"}
				// onClick={()=>{props.history.push(`/task/${todo._id}/edit`)}}
				>
					<span style={{marginLeft:"14px"}}>
					<Icon name="pencil alternate" />
					{todo.task}
					</span>
			</div>
		)
	}) 

	const panes = [
		{
			menuItem: 'Notes',
			render: () => <Tab.Pane attached={false}>{sidenotes}</Tab.Pane>
		},
		{
			menuItem: 'Todos',
			render: () => <Tab.Pane attached={false}>{sideTodo}</Tab.Pane>
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

	const sideBar = (
		<div className="sideNav" ref={sideBarRef}>
		<p
			onClick={()=>{props.history.push('/task')}}
			className="sidenav-header"
			style={{fontSize:'27px'}}>
		NeverNote
		</p>
		<AddNoteButton  onClick={showNoteModal}>Add Note</AddNoteButton>
		<div className="TabWrapper" style={{marginTop:"27px ",width:"270px"}}>
			<Tab panes={panes}/>
			</div>
			<div className="leftArrow"  onClick={hideSideBarHandler}>
				<Icon name="arrow left"/>
			</div>
	</div>
	)

	return (
		<>
			{ sideBar}
			{visible && 
				<div className="arrowContainer" onClick={() => sideBarShowHandler()}>
					<Icon name="arrow right"/>
				</div>
			}
		</>
	)
}

export default withRouter(SideNav)