import React, { createContext, useContext, useState } from 'react'
import { Theme } from './App'
import lightImg from '../images/bg-desktop-light.jpg'
import darkImg from '../images/bg-desktop-dark.jpg'
import './Home.css'
import Task from './components/Task'
function HomePage(){
    const {darkTheme, setDarkTheme} = useContext(Theme)
    const [todoList, setTodoList] = useState([])
    const [typed, setTyped] = useState(null)
    function addOnTodo(){
        setTodoList([...todoList, typed ])
        console.log(todoList)
    }
    
    return (
        <div className={`background ${darkTheme ? "dark" : "light"}`}>
            <div className="container">
                <div className="titleRow">
                    <h1>TODO</h1>
                </div>
                <div className="input">
                    <label htmlFor="inp">Digite sua tarefa:</label>
                    <input type="text" name="inp" id="" onChange={(e)=> {
                        setTyped(e.target.value)
                    }} />
                    <button onClick={addOnTodo}>Adicionar tarefa</button>
                </div>
                <div className="todo">
                    {todoList.map((value, index) => {
                        return <Task nameTask={value} id={index} key={index} todoListState={{todoList, setTodoList}} />
                    })}
                </div>
            </div>
        </div>
    )
}
export default HomePage