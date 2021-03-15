import AddTodo from './components/Todo/AddTodo/AddTodo'
import './App.css'
import Main from './components/Notes/Main/Main'
import Nav from './components/Nav/Nav'
import {BrowserRouter,Route,Redirect, Switch} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Nav/>
       <h1>Mern</h1>
        <Switch>
          <Route path='/todo'>  
            <AddTodo/>  
          </Route>
          <Route path='/task'>
            <Main/>
          </Route>
        </Switch>
    </div>
  );
}

export default App;
