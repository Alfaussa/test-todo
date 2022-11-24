import React from "react";

function Todos({todo, setTodo}) {

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

  return (
    <div>
   {   
   todo.map(item => (
    <div key={item.id}>
        <div>{ item.title }</div>
        <div>{ item.desc }</div>
        <div>{ item.time }</div>
        <button onClick={() => deleteToDo(item.id)}>Удалить</button>
        <button onClick={() => statusToDo(item.id)}>Завершить</button>
        </div>
      ))}
    </div>
  )
}

export default Todos;