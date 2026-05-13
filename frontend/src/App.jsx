import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [todos, setTodos] = useState([])
  const [editId, setEditId] = useState(null);
  const [editForm, setEditForm] = useState({ Title: "", Description: "" });

  useEffect(() => {
    fetchTodos();
  }, [todos]);

  // Function to add a new todo
  const addTodo = async (title, description) => {
    try {
      await axios.post("http://localhost:5000/create", { Title: title, Description: description });
      fetchTodos(); // Refresh the todo list after adding a new todo
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  }

  // Function to fetch all todos from the backend
  const fetchTodos = async () => {
    try {
      const response = await axios.get("http://localhost:5000/");
      setTodos(response.data);
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  }
  // Function to update a todo 
  const handleEditClick = (todo) => {
    setEditId(todo._id);
    setEditForm({ Title: todo.Title, Description: todo.Description });
  };

  const handleSaveUpdate = async (id) => {
    try {
      await axios.put(`http://localhost:5000/update/${id}`, editForm);
      setEditId(null); // This triggers the re-render back to the simple card
      fetchTodos();    // Refresh the list with updated data
    } catch (error) {
      console.error("Update failed:", error);
    }
  };

  // Function to delete a todo
  const deleteTodo = async (id) => {
    try {
      await axios.delete("http://localhost:5000/delete/" + id);
      fetchTodos(); // Refresh the todo list after deletion
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  }

  return (
    <div className="bg-gray-400 h-screen">
      <h1 className="text-3xl text-center underline decoration-sky-500 mb-5">TODO App</h1>

      <form onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        addTodo(formData.get("title"), formData.get("description"));
      }} className="w-1/2 mx-auto mb-5 border-2 border-gray-300 rounded-md p-5 bg-gray-200">
        <label for="title">Title</label><br />
        <input type="text" id="title" name="title" className="border-2 border-gray-300 rounded-md p-1 mb-3 w-full" /><br />
        <label for="description">Description</label><br />
        <input type="text" id="description" name="description" className="border-2 border-gray-300 rounded-md p-1 mb-3 w-full" /><br />
        <button type="submit" className="bg-blue-400 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Add Todo</button>
      </form>

      {todos.map((todo) => (
        <div key={todo._id} className="bg-purple-100 grid grid-cols-6 border-2 border-[#96907d] p-2 mx-5 mb-2 text-center ">
          {editId === todo._id ? (
            /* --- EDITABLE FORM VIEW --- */
            <div className="flex justify-between items-center">
              <div className="flex flex-col gap-2 w-full pr-10">
                <input
                  type="text"
                  className="border p-1 rounded w-full font-bold"
                  value={editForm.Title}
                  onChange={(e) => setEditForm({ ...editForm, Title: e.target.value })}
                />
                <textarea
                  className="border p-1 rounded w-full text-sm"
                  value={editForm.Description}
                  onChange={(e) => setEditForm({ ...editForm, Description: e.target.value })}
                />
              </div>
              <div className="flex flex-col gap-2">
                <button
                  onClick={() => handleSaveUpdate(todo._id)}
                  className="bg-green-500 text-white px-4 py-1 rounded font-bold">
                  Save
                </button>
                <button onClick={() => setEditId(null)} className="bg-gray-400 text-white px-4 py-1 rounded font-bold">Cancel</button>
              </div>
            </div>
          ) : (
            /* --- SIMPLE CARD VIEW --- */
            <div className="flex justify-between items-center">
              <div className="text-center w-full">
                <h2 className="text-xl font-bold">{todo.Title}</h2>
                <p className="text-gray-700">{todo.Description}</p>
              </div>
              <div className="flex flex-col gap-2">
                <button onClick={() => deleteTodo(todo._id)} className="bg-blue-400 text-white px-4 py-1 rounded font-bold hover:bg-blue-600">Delete</button>
                <button onClick={() => handleEditClick(todo)} className="bg-blue-400 text-white px-4 py-1 rounded font-bold hover:bg-blue-600">Update</button>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default App
