import AddTodo from './components/Todo/AddTodo/AddTodo'
import './App.css'
import Main from './components/Notes/Main/Main'
import Nav from './components/Nav/Nav'
import {Route,Redirect, Switch} from 'react-router-dom'

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
        </Switch>
        <Redirect to='todo'/>
    </div>
  );
}

export default App;
