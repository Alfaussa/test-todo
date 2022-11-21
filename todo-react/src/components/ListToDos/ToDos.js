import React from "react";

function Todos({todo, setTodo}) {

  return (
    <div>
   {   todo.map(item => (
        <div>{ item.title }</div>
      ))}
    </div>
  )
}

export default Todos;