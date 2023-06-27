import {useState} from 'react'

const initialValue = { yapilacak: ''}

function Input({eklenicekTodo,varolanTodo}) {

    const [value, setValue] = useState(initialValue)

    const onChangeInput = (e) =>{
        setValue({...value, [e.target.name]: e.target.value})
      }

    const onSubmit = (e) =>{
        e.preventDefault();
        if(value.yapilacak === ''){
          return false
        }
    
        eklenicekTodo([...varolanTodo,value])
        setValue(initialValue)
      }

  return (
    <div>
        <form onSubmit={onSubmit}>
            <input name='yapilacak' placeholder='What needs to be done?' value={value.yapilacak} onChange={onChangeInput} />
        </form>
    </div>
  )
}

export default Input
