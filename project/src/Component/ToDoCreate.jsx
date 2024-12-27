import React, { useState } from 'react'
import '../App.css'

function ToDoCreate({ onCreateTodo }) {
    const [newTodo, setnewTodo] = useState(" ");
    const clearInput = () => {
        setnewTodo('');
    }

    const createTodo = () => {
        if (!newTodo) return;

        const request = {
            id: Math.floor(Math.random() * 999999999),
            content: newTodo
        }
        onCreateTodo(request);
    }
    return (
        <div className='todo-create'>
            <input value={newTodo} onChange={(e) => setnewTodo(e.target.value)} type="text" className='todo-input' placeholder='todo giriniz' />
            <button onClick={createTodo} className='todo-create-button'>Todo oluştur</button>
        </div>
    )
}

export default ToDoCreate