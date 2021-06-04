import React, { useEffect } from 'react'
import './NotesContainer.css'
import {useDispatch, useSelector} from 'react-redux'
import { AnimatePresence } from "framer-motion";
import ScratchPad from '../../ScratchPad/ScratchPad';
import { withRouter } from 'react-router';
// import { removeHTMLTags } from '../../helpers/helpers';
import ReactQuill from 'react-quill';
import { fetchNotes, fetchImportantNotes } from '../../../../redux/actionCreator';
import { noteSelector } from '../../../../redux/selector';
import ReactLoader from '../../../Loader/ReactLoader';
import MainTab from '../MainTab/MainTab';
// import IMG from '../Assets/img.jpg'
function NotesContainer({notes, history}) {
	
	const dispatch = useDispatch()
	const state = useSelector(noteSelector)
	
	const noteClicked = (e,id) =>{
		history.push(`task/${id}/edit`)
	}
	const userInfo = JSON.parse(localStorage.getItem('userInfo'))
	
	useEffect(()=>{
		if(userInfo){
			dispatch(fetchNotes(userInfo._id || userInfo.user._id))
			// dispatch(fetchImportantNotes(userInfo._id))
		}
	},[])
	
	const data = state.notes.map(note=>{
		return (
		<div 
			initial={{scale:0}}
			animate={{scale:1}}
			exit={{scale:0}}
			whileHover={{scale:1.06}}
			key={note.id}
			className="single-note"
			onClick={(e)=>noteClicked(e,note._id)}
		>
			<h2>
			{note.title}
			</h2>
			{/*
			blur() method from react quill documentation  
			to be used
			*/}
			<div className="containerQuill">
				<ReactQuill 
					theme={null}
					value={note.mainNote}
			>
			<div className="text-area"></div>
			</ReactQuill>
			</div>
		</div>
	)})

	const importantData = state.importantNotes.map((impNote)=>{
		return (
			<div
				key={impNote._id}
				className="single-note"
			>
				<h2>{impNote.title}</h2>
				<div className="containerQuill">
					<ReactQuill 
						theme={null}
						value={impNote.mainNote}
					>
						<div className="text-area"></div>
					</ReactQuill>
				</div>
			</div>
	)})
	return (
		<div className="container-right" >
			{/* <div className="notes-heading"> */}
			{/* <img src={IMG} alt="pc"/> */}
			{/* </div> */}
			{/* {state.notesLoader?<ReactLoader />: */}
			<div
				animate={{scale:1}}
				initial={{scale:0.7}}
				transition={{duration:0.7}}
				className="notes-container">
					{state.notesLoader ? <ReactLoader /> :
					<MainTab
					firstTabName="All Notes"
					secondTabName="Important Notes"
					firstChild={data.length===0
						?<p style={{margin:"auto"}}>Add Notes</p>
						:<AnimatePresence>{data}</AnimatePresence>
					}
					secondChild={importantData===0
						?<p style={{margin:'auto'}}>Star Notes</p>
						:importantData
					}
					/>
				}
			</div>
			{/* } */}
			<div style={{display: "flex"}}>
				<ScratchPad/>
				<ScratchPad/>
				<ScratchPad/>
				<ScratchPad/>
			</div>
			
		</div>
	)
}

export default withRouter(NotesContainer)
