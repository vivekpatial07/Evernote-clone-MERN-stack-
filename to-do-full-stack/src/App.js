import AddTodo from './components/Todo/AddTodo/AddTodo'
import Login from './components/Login/Login'
import SignUp from './components/Auth/SignUp'
import './App.css'
import Main from './components/Notes/Main/Main'
import Nav from './components/Nav/Nav'
import {Redirect, Route, Switch} from 'react-router-dom'
import ProtectedRoute from './components/Auth/ProtectedRoute'
// import SideNav from './components/Notes/SideNav/SideNav'
// import AddNoteModal from './components/Notes/AddNoteModal/AddNoteModal'
// font style to be changed
//check for expired token here
function App() {

  return (
    <div className="App">
        <Nav />
        <Switch>
          <Route path="/signup" component={SignUp}/>
          <Route path='/todo'>  
            <AddTodo/>  
          </Route>
          <ProtectedRoute path='/task' component={Main}/>
          <Route path='/login'>
            <Login/>
          </Route>
          <Redirect from="/" to="/task" />
        </Switch>

    </div>
  );
}

export default App;
