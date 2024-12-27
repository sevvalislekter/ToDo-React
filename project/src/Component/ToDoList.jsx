import React from 'react'
import ToDo from './ToDo'

function ToDoList({ todos, onRemove }) {
    return (
        <div style={{ width: '100%', marginTop: '5px', height: '100%', justifyContent: 'center' }}>
            {
                todos && todos.map((todo) => (
                    <ToDo key={todo.id} todo={todo} onRemove={onRemove} />
                ))
            }

        </div>
    )
}

export default ToDoList