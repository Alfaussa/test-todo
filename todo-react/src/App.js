import React, { useState } from "react";
import Header from './components/Header/Header';
import NewTask from "./components/AddToDo/NewTask";
import Todos from "./components/ListToDos/ToDos";

function App(){

const [todo, setTodo] = useState([
  {
    id:1,
    title: 'first todo',
    desc:'making first to do',
    time: '05.10.2022',
    status:true
  },
  {
    id:2,
    title: 'second todo',
    desc:'making second to do',
    time: '06.10.2022',
    status:true
  },
  {
    id:3,
    title: 'third todo',
    desc:'making third to do',
    time: '07.10.2022',
    status:true
   
  },
])



  return (
    <div className="App">
      <Header/>
      <NewTask setTodo={setTodo} todo={todo}/>
      <Todos todo={todo} setTodo={setTodo}/>
    </div>
  )
}


export default App;