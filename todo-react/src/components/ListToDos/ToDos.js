/** @module */
import React, {useState} from "react";
import s from './ListToDos.module.css'

/** Создаем компоненту Todos
 * @param {string} todo - текущее состояние
 *  @param {function} setTodo - функция для обновления состояния
 */
function Todos({todo, setTodo}) {

  
  const[edit, setEdit] = useState('')
  const[taskName, setTaskName] = useState('');
  const[description, setDescription] = useState('');
  const[date, setDate] = useState('');

/** Функция удаления задачи
 * @param {number} id - уникальный идентификатор
 * @description создается копия массива, в котором нет, указанного нами элемента
 *  
 */

  function deleteToDo(id){
    let newToDo = [...todo].filter(item => item.id !== id);
    setTodo(newToDo)
  }
  /** Функция смены статуса
 * @param {number} id - уникальный идентификатор
 * @description создается копия массива, в котором есть элемент с id, который мы передали и если есть, меняем на противоположный
 */
  function statusToDo(id){
    let newToDo = [...todo].filter(item => {
      if(item.id === id){
        item.status = !item.status
      }
      return item
    })
    setTodo(newToDo)
  }
    /** Функция редактирования полей
 * @param {number} id - уникальный идентификатор
 * @param {string} title - название задачи
 * @param {string} desc - описание задачи 
 * @description появляется форма, где имеющееся значение становится значением этой формы
 */
  function editToDo(id, title, desc, time){
    setEdit(id)
    setTaskName(title)
    setDescription(desc)
    setDate(time)
  }

    /** Функция обновления значений
 * @param {number} id - уникальный идентификатор
 * @description создается копия массива, в котором есть элемент с id, который мы передали и если есть, передаем обновленные значения
 *  
 */
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
/** 
 * @description Возвращаем массив, каждый элемент которого будет лежать в переменной item, реализация функционала по собутию,навешанному на кнопки
 * @param {number} item.id - идентификатор каждого элемента
 * 
 */
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