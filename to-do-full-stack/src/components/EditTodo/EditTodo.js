import React,{useState} from 'react'
import './EditTodo.css'
import axios from 'axios'
import {Button, Input} from 'semantic-ui-react'
function EditTodo({id,fetchData}) {
    const initialState = {
        task:'',
        id:''
    }
    const [edit, setedit] = useState(false)
    const [data,setdata] = useState(initialState)
    const showTodoHandler = () =>{
        //will use modal or something else later on then it will not open differently for differnt todos
        setedit(true)
    }
    const editTodoHandler = async(e,id) => {
        console.log(id)
        setedit(false)
        const updateData = {...data}
        updateData.id = id
        console.log(updateData)
        const res = await axios.put('http://localhost:7777/', updateData)
        if(res.status===200){
            fetchData()

        }
    }
    const todoChangeHandler = (e) => {
        console.log(e.target.value)
        const updateddata = {
            ...data
        }
        updateddata.task = e.target.value
        setdata(updateddata)
    }
    return (
        <div>
            <button onClick={showTodoHandler}>Edit</button>
            {edit?
            <div>
                <Input onChange={todoChangeHandler}/>
                <Button onClick={(e)=>editTodoHandler(e,id)}>Edit</Button>
                </div>
            :null}
        </div>
    )
}

export default EditTodo
