import Navbar from "./component/Navbar";

export default function App() {
  return (
    <div>
  <Navbar />
    <div className="container mx-auto my-5 rounded-xl p-5 bg-violet-300 min-h-[80vh]">
      <div className="addTodo">
        <input type="text" className="w-52 px-3 py-2 rounded-md text-gray-700 focus:outline-none " placeholder="Add a new todo..."/>
        <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 margin">Add</button>
      
       <h1 className="text-xl font-bold"> Your Todo</h1>
      </div>
      <div className="todos">
        <div className="todo-flex">
          <div className="todo-text">
            <p>This is a sample todo Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="todo-actions">
            <button className="bg-violet-800 text-white-800 hover:bg-gray-400 px-2 py-1 font-bold  rounded-mdx-2">Edit</button>
            <button className="bg-violet-800 text-white-800 hover:bg-gray-400 px-2 py-1 font-bold  rounded-mdx-2">Delete</button>
    
        </div>
      </div>
    </div>
    </div>
    </div>

  
    

    
  )
}