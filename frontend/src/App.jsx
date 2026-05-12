import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await axios.get("http://localhost:5000/");
      setTodos(response.data);
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  }

  return (
    <>
      <u><h1>TODO App</h1></u><br /><br />

      {todos.map((todo) => (
        <div key={todo._id} style={{ border: "2px solid #96907d", padding: "10px", marginBottom: "10px" }}>
          <div>
            <h2>{todo.Title}</h2>
            <p>{todo.Description}</p>
          </div>
          <div>
            <button>Update</button><br/>
            <button>Delete</button>
          </div>
        </div>
      ))}
    </>
  )
}

export default App
