import React from 'react'
import "./css/TodoListItem.css"

interface TodoListItemProps {
    todo: Todo;
    toggleTodo: ToggleTodo;
}

export const TodoListItem: React.FC<TodoListItemProps> = ({ todo, toggleTodo }) => {
    return (
        <div  className={`App_list-item ${todo.complete ? "complete" : ""}`}>
            <li>
                <label>
                    <input 
                        type="checkbox" 
                        checked={todo.complete}
                        onChange={() => toggleTodo(todo)}
                    />
                    {todo.text}
                </label>
            </li>
        </div>
);
}