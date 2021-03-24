import React from 'react'
import './SideNav.css'
import {useDispatch} from 'react-redux'
import {showModal} from '../../../redux/actionCreator'
import { Button } from 'semantic-ui-react'
import {withRouter} from 'react-router-dom'
function SideNav(props) {
    const dispatch = useDispatch()
    const showNoteModal = () => {
        dispatch(showModal(true))
        // props.history.push('/task/fasjjf')
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
export default withRouter(SideNav)