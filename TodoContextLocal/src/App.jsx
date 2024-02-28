import { useState } from 'react'
import { todoProvider } from './context'
import { useTodo } from './context'
import { TodoContext } from './context'
import './App.css'

function App() {
  const [todos, setTodos] = useState([])

  addTodo=(todo)=>{
    setTodos((prev)=>[{id:Date.now(), ...todo},...prev])
  }
  deleteTodo=(id)=>{
    setTodos((prev)=>prev.filter((todo)=>todo.id !==id))
  }
  updateTodo=(id,todo)=>{
    setTodos((prev)=>prev.map((prevtodo)=>(prevtodo.id==id? todo: prevtodo)))
  }
  toggleTodo=(id)=>{
    setTodos((prev)=>prev.map((prevtodo)=>prevtodo.id==id?  { ...prevtodo, 
      completed: !prevtodo.completed } : prevtodo))
  }

  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo) => (
                          <div key={todo.id}
                          className='w-full'
                          >
                            <TodoItem todo={todo} />
                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}


export default App
