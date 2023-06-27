import React from 'react'
import Input from './Input'
import List from './List'
import {useState,useEffect} from 'react'


function Todo() {

    const [todos, setTodos] = useState([
        {
            id: 1,
            yapilacak: 'todo1'

        },
        {
            id: 2,
            yapilacak: 'todo2'
        }
    ])

    useEffect(() =>{
        console.log(todos)
      },[todos])

    const deleteTodo = (index) =>{
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos)
    }  

  return (
    <div>
      todos
        <Input eklenicekTodo={setTodos} varolanTodo={todos} />
        <List varolanTodo={todos} deleteTodo={deleteTodo} />
    </div>
  )
}

export default Todo
