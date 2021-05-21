import React,{
	useEffect,
	useState,
	useCallback,
	useRef
} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import ReactQuill from "react-quill";
import './AddNoteModal.css'
import {
    withRouter,
    useLocation,
    // useHistory
} from 'react-router';
import {debounce} from "lodash";
import ReactLoader from '../../Loader/ReactLoader';
import {
    fetchCurrentNote,
    editNoteInit,
    saveNote,
    starUnstar
} from '../../../redux/actionCreator';
import { noteSelector } from '../../../redux/selector';
import { Icon } from 'semantic-ui-react';

function AddNoteModal() {

	let location = useLocation()
	// let history = useHistory()
	const initalState = {
		title:"",
		mainNote:"",
		noteType: "normal"
	}
	const dispatch = useDispatch()
	// const shouldRun = useRef(false)
	const [shouldRun, setShouldRun] = useState(false)
	const state = useSelector(noteSelector)
	const [text,settext] = useState(initalState)
	// const [shouldPush,setShouldPush] = useState(true)

	useEffect(()=>{
		if(location.pathname.includes('edit')){
			settext(state.currentNote)
			// dispatch(showModal(false))
		}
		else{
			settext(initalState)
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	},[state,location.pathname])

	useEffect(()=>{
		// alert('ss')
		setShouldRun(false)
	},[location.pathname])

	const dbcall = (note, id) =>{
		
		if (id.includes('edit')) {
			dispatch(editNoteInit(note))
		} else {
				dispatch(saveNote(note,id))
				// shouldPush&&history.push(`${id}/edit`)
				// setShouldPush(false)
		}
	}

	// eslint-disable-next-line react-hooks/exhaustive-deps
	const dbSave = useCallback(
		debounce((note,id) => dbcall(note,id), 1400)
	, []
	)

	const changeHandler = (e) => {
		if(shouldRun){
		const id = location.pathname.split('/')[2]
		const note = {...text}
		note._id = id
		note.mainNote = e
		console.log(note,'quill')
		settext(note)
		dbSave(note,id)
	}
		setShouldRun(true)
	}

	const changeHandlerTitle = (e) => {
		const id = location.pathname.split('/')[2]
		const note = {...text}
		note._id = id
		note.title = e.target.value
		console.log(note,'title')
		dbSave(note,id)
		settext(note)
	}

	useEffect(()=>{
		if(location.pathname.includes('edit')){
				dispatch(fetchCurrentNote(location.pathname.split('/')[2]))
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	},[location.pathname])

	const modules = {
		toolbar: [
			[{ 'header': [1, 2, false] }],
			['bold', 'italic', 'underline','strike', 'blockquote'],
			[{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
			['clean']
		],
	}

	const starNote = () => {
		const id = location.pathname.split('/')[2]
		const data ={
			id,
			noteType: 'important'
		}
		const note = {...text}
		note.noteType = "important"
		settext(note)
		dispatch(starUnstar(data))
	}

	const unstarNote = () => {
		const id = location.pathname.split('/')[2]
		const data ={
			id,
			noteType: 'normal'
		}
		const note ={...text}
		note.noteType = 'normal'
		settext(note)
		dispatch(starUnstar(data))
	}
	return (
		<div className="notes-modal">
			{
			state.notesLoader
				?(
					<ReactLoader/>
				) : (
					<div className="notes-modal">
						<div className="top-bar">
							<textarea
								className="header-input"
								placeholder="Title"
								value={text&&text.title}
								onChange={changeHandlerTitle}
							/>
							{/* use ref property here for handling multiple onclicks*/}
							<div className="header-icon">
								{text?.noteType === "important"
									?<Icon size="big" name="star" onClick={unstarNote}/>
									:<Icon size="big" name="star outline" onClick={starNote}/>}
							</div>
					</div>
						<ReactQuill
							value={text&&text.mainNote || ""}
							onChange={changeHandler}   
							placeholder="Write your note here"
							modules={modules}
						/>
				</div>
				)
			}
		</div>
	)
}

export default withRouter(AddNoteModal)
