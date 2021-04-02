import AddTodo from './components/Todo/AddTodo/AddTodo'
// import Login from './components/Login/Login'
import './App.css'
import Main from './components/Notes/Main/Main'
import Nav from './components/Nav/Nav'
import {Route, Switch} from 'react-router-dom'
// import SideNav from './components/Notes/SideNav/SideNav'
// import AddNoteModal from './components/Notes/AddNoteModal/AddNoteModal'
// font style to be changed
function App() {
  return (
    <div className="App">
      <Nav/>
        <Switch>
          <Route path='/todo'>  
            <AddTodo/>  
          </Route>
          <Route path='/task'>
            <Main/>
          </Route>
          {/* <Route path='/login'> */}
            {/* <Login/> */}
          {/* </Route> */}
        </Switch>
        {/* <Redirect to='todo'/> */}
    </div>
  );
}

export default App;
