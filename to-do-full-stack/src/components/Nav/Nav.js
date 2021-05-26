import React from 'react'
import { withRouter } from 'react-router'
import { Menu, Dropdown } from 'semantic-ui-react'
import { useDispatch } from 'react-redux'
import { logoutInitate } from '../../redux/actionCreator'
import { useHistory } from 'react-router-dom'
import './Nav.css'

function Nav(props) {

  const dispatch = useDispatch()
  const history = useHistory()
    
  return (
    <div style={{zIndex:'200',}}>
      <Menu  secondary compact={/*if user if mobile then true but right now*/false}>
        <Menu.Item
          name='Todo'
          active={props.location.pathname.includes('todo')}
          onClick={()=>{
              props.history.push('/todo')
          }}
        />
        <Menu.Item
          name='NeverNote'
          active={props.location.pathname.includes('task')}
          onClick={()=>{
            props.history.push('/task')
          }}
        />
    {/* <Menu.Item
      name='Login'
      active={props.location.pathname.includes('login')}
      onClick={()=>{
        props.history.push('/login')
    }}
    >

    </Menu.Item> */}
          {/* <Menu.Item
            position='right'
            name='Logout'
            active={props.location.pathname.includes('task')}
            onClick={()=>{
              dispatch(logoutInitate(history))
            }}
          /> */}
        <Menu.Menu position="right">
          <Dropdown item icon='dropdown'>
            <Dropdown.Menu>
              <Dropdown.Item onClick={()=>{alert('profile clicked')}}>
                Profile
              </Dropdown.Item>
              <Dropdown.Item onClick={()=>{dispatch(logoutInitate(history))}}>
                Logout
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Menu>
      </Menu>  
                
    </div>
  )
}

export default withRouter(Nav)
