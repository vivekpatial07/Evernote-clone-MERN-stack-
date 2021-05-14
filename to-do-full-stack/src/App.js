import AddTodo from './components/Todo/AddTodo/AddTodo'
import Login from './components/Login/Login'
import SignUp from './components/Auth/SignUp'
import './App.css'
import Main from './components/Notes/Main/Main'
import Nav from './components/Nav/Nav'
import {Redirect, Route, Switch} from 'react-router-dom'
import { useEffect } from 'react'
// import SideNav from './components/Notes/SideNav/SideNav'
// import AddNoteModal from './components/Notes/AddNoteModal/AddNoteModal'
// font style to be changed
function App() {
  const user = localStorage.getItem('userInfo')

  return (
    <div className="App">
      {/* <Nav/> */}
      {
        !user ?
        <Switch>
          <Route path="/signup" component={SignUp}/>
          <Redirect from="/" to="signup" /> 
        </Switch>
        :   
        <Switch>
          <Route path='/todo'>  
            <AddTodo/>  
          </Route>
          <Route path='/task'>
            <Main/>
          </Route>
          <Route path='/login'>
            <Login/>
          </Route>
        </Switch>

      }
    </div>
  );
}

export default App;
