
import React, {useState} from "react";
import {v4 as uuid} from "uuid"


function NewTask({todo, setTodo}){

  const[taskName, setTaskName] = useState('');

  const[description, setDescription] = useState('');

  const[date, setDate] = useState('');

  function saveToDo(){
      setTodo(
        [...todo,{
          id:uuid(),
          title:taskName,
          desc:description,
          time:date,
          status:true
        }]
      )
      setTaskName('')
      setDescription('')
      setDate('')
  }
  return (
    <div>
      <input placeholder ='введите задачу' value={taskName} onChange={(e)=>setTaskName(e.target.value)} />
      <input placeholder ='введите задачу' value={description} onChange={(e)=>setDescription(e.target.value)} />
      <input placeholder ='введите задачу' value={date} onChange={(e)=>setDate(e.target.value)} />
      <button onClick={saveToDo}>Сохранить</button>
    </div>
  )
}

export default NewTask;