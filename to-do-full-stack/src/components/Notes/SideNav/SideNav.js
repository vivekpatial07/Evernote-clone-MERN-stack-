import React from 'react'
import './SideNav.css'
import {useDispatch} from 'react-redux'
import {showModal} from '../../../redux/actionCreator'
import { Button } from 'semantic-ui-react'
function SideNav() {
    const dispatch = useDispatch()
    const showNoteModal = () => {
        dispatch(showModal(true))
    }
    return (
        <div className='sideNav'>
            <p style={{fontSize:'27px'}}>
            NeverNote
            </p>
            <Button primary onClick={showNoteModal}>Add Note</Button>
        </div>
    )
}
export default SideNav