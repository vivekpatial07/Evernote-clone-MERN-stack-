import React from 'react'
import { withRouter } from 'react-router'
import {Menu} from 'semantic-ui-react'
import { useDispatch } from 'react-redux'
import { logoutInitate } from '../../redux/actionCreator'
import { useHistory } from 'react-router-dom'

function Nav(props) {
  const dispatch = useDispatch()
  const history = useHistory()
    return (
        <div style={{zIndex:'200',}}>
            <Menu>
       <Menu.Item
          name='Todo'
          active={props.location.pathname.includes('todo')}
          onClick={()=>{
              props.history.push('/todo')
          }}
        >

        </Menu.Item>
        <Menu.Item
          name='NeverNote'
          active={props.location.pathname.includes('task')}
          onClick={()=>{
            props.history.push('/task')
        }}
        >

        </Menu.Item>
        {/* <Menu.Item
          name='Login'
          active={props.location.pathname.includes('login')}
          onClick={()=>{
            props.history.push('/login')
        }}
        >

        </Menu.Item> */}
        <Menu.Item
          name='Logout'
          active={props.location.pathname.includes('task')}
          onClick={()=>{
            dispatch(logoutInitate(history))
          }}
        >
        </Menu.Item>
        
        </Menu>  
                   
        </div>
    )
}

export default withRouter(Nav)
