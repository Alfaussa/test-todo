import React, { useState } from "react";
import Header from './components/Header/Header';
import NewTask from "./components/AddToDo/NewTask";
import Todos from "./components/ListToDos/ToDos";

function App(){

const [todo, setTodo] = useState([
  {
    id:1,
    title: 'first todo',
    status:true
  },
  {
    id:2,
    title: 'second todo',
    status:true
  },
  {
    id:2,
    title: 'third todo',
    status:true
  },
])



  return (
    <div className="App">
      <Header/>
      <NewTask/>
      <Todos todo={todo} setTodo={setTodo}/>
    </div>
  )
}


export default App;