import React, { createContext, useContext, useState } from 'react'
import './style.css'
function Task(props){
    function deleteOnTodo(indexElement){
        const newArray = props.todoListState.todoList.filter((value, index) => index !== indexElement)
        props.todoListState.setTodoList([...newArray])

    }
    return (
        <div className={`task`}>
            <input type="checkbox" name="" id={props.id} onChange={(e)=> {
                document.getElementById(`task${e.target.id}`).classList.toggle('checked')
            }}/>
            <p id={`task${props.id}`} >{props.nameTask}</p>
            <button onClick={()=> {
                deleteOnTodo(props.id)
            }}>Deletar</button>
        </div>
    )
}
export default Task