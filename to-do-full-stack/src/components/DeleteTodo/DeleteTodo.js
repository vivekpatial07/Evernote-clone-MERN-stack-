import React from 'react'

function DeleteTodo({id}) {
    const deleteHandler = (e,id) =>{
console.log(e)
console.log(id)
    }
    return (
        <div>
            <button onClick={(e)=>deleteHandler(e,id)}>X</button>
        </div>
    )
}

export default DeleteTodo
