import React from 'react'
import { withRouter } from 'react-router'
import {Menu} from 'semantic-ui-react'

function Nav(props) {
    console.log(props.location.pathname)
    return (
        <div>
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
        
        
        </Menu>  
                   
        </div>
    )
}

export default withRouter(Nav)
