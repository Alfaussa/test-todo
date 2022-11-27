
import React, {useState} from "react";
import {v4 as uuid} from "uuid"
import FileUpload from "../FileUploader/FileUploader"
import storageRef from "../FileUploader/FileUploader"
import s from './NewTask.module.css'

/** Создаем компоненту NewTask */
function NewTask({todo, setTodo}){

    /** Hookи для хранения значений полей ввода(по умолчанию пустые)
 *
 */
  const[taskName, setTaskName] = useState('');

  const[description, setDescription] = useState('');

  const[date, setDate] = useState('');

  /** Функция обновления state
 * @description создается массив с объектами
 *  
 */

  function saveToDo(){
    if(taskName === "") return;
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

    /** Возвращаем элементы для создания новой задачи
 
 */
  return (
    <div className={s.newContainer}>
      <input placeholder ='Type the task name' value={taskName} onChange={(e)=>setTaskName(e.target.value)} />
      <textarea placeholder ='Type the task description' value={description} onChange={(e)=>setDescription(e.target.value)} />
      <div> <input type='date' value={date} onChange={(e)=>setDate(e.target.value)} /></div>
      <FileUpload  />
     <div><button onClick={saveToDo}>Save</button></div> 
    </div>
  )
}

export default NewTask;

