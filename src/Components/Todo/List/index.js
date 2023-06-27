import {useState} from 'react'

function List({varolanTodo,deleteTodo}) {


  return (
    <div>
    <ul>
      {
        varolanTodo.map((todo,id) =>{
            return( 
            <div key={id}>
                <li>
                    <h1>{todo.yapilacak}</h1>
                </li>  
                <div className='btnDiv'>   
                    <button className='dltBtn' onClick={() => deleteTodo(varolanTodo.id)}><h4>Delete</h4></button> 
                </div>
            </div>)        
            }
        )
      }
    </ul>
    </div>
  )
}

export default List
