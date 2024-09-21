import { useState,useEffect } from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

function App() {
  const [todos,setTodos] = useState([]);
  const [todoValue, setTodoValue] = useState('')

  function persistData(newList){
    localStorage.setItem('todos' , JSON.stringify({todos: newList}))
  }

  function handleAdd(newTodo){
    const newTodoList = [...todos,newTodo]
    persistData(newTodoList)
    setTodos(newTodoList)
  }
function handleDeleteButton (index){
  const newTodoList = todos.filter((todo,todoIndex) =>{
    return todoIndex !== index
  })
  persistData(newTodoList)
  setTodos(newTodoList)
}
function handleEditButton (index){
  const editedValue = todos[index]
  setTodoValue(editedValue)
  handleDeleteButton(index)
}

useEffect(()=>{
if(!localStorage){
  return
}
let localTodos = localStorage.getItem('todos')
if(!localTodos){
  return
}
localTodos = JSON.parse(localTodos).todos
setTodos(localTodos)
},[])

  return (
    <main>
      <TodoInput todoValue={todoValue} setTodoValue={setTodoValue} handleAdd={handleAdd}/>
      <TodoList handleEditButton={handleEditButton} handleDeleteButton={handleDeleteButton} todos={todos}/>
    </main>
  )
}

export default App
