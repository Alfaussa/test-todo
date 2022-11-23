
import React, {useState} from "react";
import {v4 as uuid} from "uuid"


function NewTask({todo, setTodo}){

  const[value, setValue] = useState('')

  function saveToDo(){
      setTodo(
        [...todo,{
          id:uuid(),
          title:value,
          status:true
        }]
      )
      setValue('')
  }
  return (
    <div>
      <input placeholder ='введите задачу' value={value} onChange={(e)=>setValue(e.target.value)} />
      <button onClick={saveToDo}>Сохранить</button>
    </div>
  )
}

export default NewTask;