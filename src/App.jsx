import { useEffect, useState } from "react";
import Navbar from "./component/Navbar";
import { v4 as uuidv4 } from "uuid";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

export default function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [showFinished, setShowFinished] = useState(true);

  useEffect(() => {
    const todoString = localStorage.getItem("todos");
    if (todoString) {
      const todos = JSON.parse(todoString);
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleEdit = (e, id) => {
    const t = todos.find((i) => i.id === id);
    setTodo(t.todo);
    const newTodos = todos.filter((item) => item.id !== id);
    setTodos(newTodos);
  };

  const handleDelete = (e, id) => {
    const newTodos = todos.filter((item) => item.id !== id);
    setTodos(newTodos);
  };

  const handleAdd = () => {
    setTodos([...todos, { id: uuidv4(), todo, iscompleted: false }]);
    setTodo("");
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleCheckbox = (e) => {
    const id = e.target.name;
    const updatedTodos = todos.map((item) =>
      item.id === id ? { ...item, iscompleted: !item.iscompleted } : item
    );
    setTodos(updatedTodos);
  };

  const filteredTodos = todos.filter(
    (item) => showFinished || !item.iscompleted
  );

  return (
    <>
      <Navbar />
      <div className="mx-3 md:container md:mx-auto my-2 rounded-xl p-5 bg-violet-300 min-h-[80vh] md:w-1/2">
        <h1 className="font-bold text-bold text-3xl">
          iTask - Manage your todos at one
        </h1>
        <div className="addTodo my-5 flex flex-col">
          <h2 className="text-2xl font-bold">Add a Todo</h2>
          <div className="flex">
            <input
              onChange={handleChange}
              value={todo}
              type="text"
              className="px-3 py-2 rounded-full text-gray-700 focus:outline-none w-full"
              placeholder="Add a new todo..."
            />
            <button
              onClick={handleAdd}
              disabled={todo.length <= 3}
              className="bg-blue-500 text-white p-4 py-2 rounded-full hover:bg-blue-700 margin mx-1 disabled:bg-violet-400"
            >
              Save
            </button>
          </div>
          {todo.length <= 3 && (
            <p className="text-red-500">Todo must be at least 4 characters long.</p>
          )}
        </div>
        <input
          className="my-4"
          onChange={() => setShowFinished(!showFinished)}
          type="checkbox"
          checked={showFinished}
        />
        Show Finished
        <h2 className="text-xl font-bold">Your Todos</h2>
        <div className="todos">
          {filteredTodos.length === 0 && (
            <div className="m-5">No Todos to Display</div>
          )}
          {filteredTodos.map((item) => (
            <div key={item.id} className="todo-flex justify-between">
              <div className="flex gap-5">
                <input
                  onChange={handleCheckbox}
                  type="checkbox"
                  checked={item.iscompleted}
                  name={item.id}
                />
                <div className={item.iscompleted ? "line-through" : ""}>
                  {item.todo}
                </div>
                <div className="todo-actions">
                  <button
                    onClick={(e) => handleEdit(e, item.id)}
                    className="bg-violet-800 text-white-800 hover:bg-gray-400 px-2 py-1 font-bold rounded-md mx-1 my-3"
                  >
                    <FaEdit />
                  </button>
                  <button
                    onClick={(e) => handleDelete(e, item.id)}
                    className="bg-violet-800 text-white-800 hover:bg-gray-400 px-2 py-1 font-bold rounded-md mx-1 my-3"
                  >
                    <MdDelete />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
