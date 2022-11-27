import React, {useState} from "react";
import s from './ListToDos.module.css'

function Todos({todo, setTodo}) {

  
  const[edit, setEdit] = useState('')
  const[taskName, setTaskName] = useState('');
  const[description, setDescription] = useState('');
  const[date, setDate] = useState('');


  function deleteToDo(id){
    let newToDo = [...todo].filter(item => item.id !== id);
    setTodo(newToDo)
  }
  function statusToDo(id){
    let newToDo = [...todo].filter(item => {
      if(item.id === id){
        item.status = !item.status
      }
      return item
    })
    setTodo(newToDo)
  }
  function editToDo(id, title, desc, time){
    setEdit(id)
    setTaskName(title)
    setDescription(desc)
    setDate(time)
  }
  function saveToDo(id){
    
    let newToDo = [...todo].map(item => {
      if(item.id == id){
        item.title = taskName
        item.desc = description
        item.time = date
      }
  return item
      
      })
   
    setTodo(newToDo)
    setEdit(null)
  }
  return (
    <div>
   {   
   todo.map(item => (
    <div key={item.id} className={s.listItems} >
       
       
      {
          edit  == item.id ?
          <div>
            <input value={taskName} onChange={(e)=>setTaskName(e.target.value)}/>
            <input value={description} onChange={(e)=>setDescription(e.target.value)}/>
            <input value={date} onChange={(e)=>setDate(e.target.value)}/>
          </div> : 
          <><><div className={!item.status ? s.close : ''}>{item.title}</div>
             <div>{item.desc}</div></>
             <div>{item.time}</div></>
      }
       
      {
         edit  == item.id ?
         <div>
          <button onClick={() => saveToDo(item.id)}>Save</button> 
         </div>
         :
         <div>
        <button onClick={() => deleteToDo(item.id)}>Delete</button>
        <button onClick={() => editToDo(item.id, item.title, item.desc, item.time)}>Edit</button>
        <button onClick={() => statusToDo(item.id)}>Close</button>
           </div>
      }
       
       
        </div>
      ))}
    </div>
  )
}

export default Todos;