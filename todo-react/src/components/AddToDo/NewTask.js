
import React, {useState} from "react";
import {v4 as uuid} from "uuid"
import dayjs from 'dayjs'
import FileUpload from "../FileUploader/FileUploader"
import storageRef from "../FileUploader/FileUploader"

function NewTask({todo, setTodo}){

  const[taskName, setTaskName] = useState('');

  const[description, setDescription] = useState('');

  const[date, setDate] = useState('');

  function saveToDo(){
    if(taskName === "") return;
      setTodo(
        [...todo,{
          id:uuid(),
          title:taskName,
          desc:description,
          time:date,
          file:storageRef,
          status:true
        }]
      )
      setTaskName('')
      setDescription('')
      setDate('')
  }
  return (
    <div>
      <input placeholder ='Введите задачу' value={taskName} onChange={(e)=>setTaskName(e.target.value)} />
      <input placeholder ='Введите описание' value={description} onChange={(e)=>setDescription(e.target.value)} />
      <input type='date' value={date} onChange={(e)=>setDate(e.target.value)} />
      <FileUpload  />
      <button onClick={saveToDo}>Сохранить</button>
    </div>
  )
}

export default NewTask;

