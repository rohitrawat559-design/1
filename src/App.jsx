import { useState } from "react";
import Navbar from "./component/Navbar";
const { v4: uuidv4 } = require('uuid');

export default function App() {
  const[todo,setTodo] = useState('');
  const[todos,setTodos] = useState([]);

const handleEdit =() => {
  
}

const handleDelete =() => {
  
}

const handleAdd =() => {
  setTodo([...todos,{todo,iscompleted:false}]);
  setTodo('')
  console.log(todos);
}
const handleChange =(e) => {
  setTodo(e.target.value);
}
handleCheckbox(e) => {
  let id = e.target.name;
  todos.filter()
  
}


  return (
    <>
  <Navbar />
    <div className="container mx-auto my-5 rounded-xl p-5 bg-violet-300 min-h-[80vh]">
      <div className="addTodo my-5">
        <input onChange={handleChange} value={todo} type="text" className=" px-3 py-2 rounded-md text-gray-700 focus:outline-none w-1/2 " placeholder="Add a new todo..."/>
        <button onClick={handleAdd} className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 margin mx-1">Add</button>
      
       <h1 className="text-xl font-bold"> Your Todos </h1>
      </div>
      <div className="todos">
        {todos.map(item=>{
          return <div key={item} className="todo-flex w-1/2 justify-between">
            <input onChange={handleCheckbox} type="checkbox"  value = {item.iscompleted} name={todo.id}/>
          <div className={item.iscompleted?"line-through":""}>{item.todo}</div>
          <div className="todo-actions">
            <button onClick={handleEdit} className="bg-violet-800 text-white-800 hover:bg-gray-400 px-2 py-1 font-bold  rounded-md mx-1">Edit</button>
            <button onClick={handleDelete}className="bg-violet-800 text-white-800 hover:bg-gray-400 px-2 py-1 font-bold  rounded-md mx-1">Delete</button>
    
        </div>
        
      </div>
    })}
    </div>   
    </div>
    </>

  
    

    
  )
}