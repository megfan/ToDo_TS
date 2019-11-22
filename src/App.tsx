import React, { useState } from 'react'
import { TodoList } from './TodoList'
import { AddTodoForm } from './AddTodoForm'


// types are taking from types.d.ts automaticlly without imports and exports :)

// list of props for invoking <TodoListItem/>>
const initialTodos:Array<Todo> = [
  {text: 'Walk the dog', complete: true },
  {text: 'Call my dentist', complete: false },
  {text: 'Wash the dishes', complete: false }
]

const App: React.FC = () => {
  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo: ToggleTodo = selectedTodo => {
    const newTodos = todos.map(todo => {
      if(todo === selectedTodo){
        return{
          ...todo,
          complete: !todo.complete
        }       
      }
      return todo;
    });
    setTodos(newTodos);
  };


  const addTodo: AddTodo = newTodo => {
    newTodo.trim() !== "" && setTodos([...todos, {text: newTodo, complete: false}]);
  };


  return (
    <div className="App">
      <div className="App_list">
        <h1>To Do list</h1>
        <React.Fragment>
          <TodoList todos={todos} toggleTodo={toggleTodo}/>
          <AddTodoForm addTodo={addTodo}/>
        </React.Fragment>
      </div>
    </div>
  );
}

export default App;
