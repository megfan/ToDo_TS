import React, { useState, ChangeEvent, FormEvent } from 'react'

interface AddTodoProps {
    addTodo: AddTodo;
}

export const AddTodoForm: React.FC<AddTodoProps> = ({ addTodo }) => {
    const [newTodo, setNewTodo] = useState<string>('');
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTodo(e.target.value)
    }
    const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        addTodo(newTodo);
        setNewTodo('');
    }

    return (
        <form className="App_form">
            <input type="text" value={newTodo} onChange={handleChange}/>
            <button className="App_form-btn" type='submit' onClick={handleSubmit}>Add</button>
        </form>
    );
}