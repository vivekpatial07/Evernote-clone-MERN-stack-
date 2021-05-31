import React,{useState,useEffect} from 'react'
import SideNav from '../SideNav/SideNav'
import './Main.css'
import {useSelector,useDispatch} from 'react-redux'
import { authSelector, noteSelector } from '../../../redux/selector'
import Nav from '../../Nav/Nav'
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
   
	return (
		<div>
			<Nav />
			{
				auth.loading
					? (
					<ReactLoader /> 
					)	:	(
					<div style={{display:"flex", flexDirection:'row',height:"94vh"}}>
						<div style={{display:"flex"}}>
							<SideNav/>
						</div>
						{
							state.showModal 
							||props.location.pathname.includes('task/')?
							<AddNoteModal/>:<NotesContainer notes={allNotes}/>
						}
				</div>
				)
			}
		</div>
  )
}

export default withRouter(Main)
