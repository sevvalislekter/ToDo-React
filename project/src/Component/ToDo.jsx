import React, { useState } from 'react'
import { IoIosRemoveCircle } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import '../App.css'
import { FaCheck } from "react-icons/fa";

function ToDo({ todo, onRemove }) {
    const { id, content } = todo;
    const [editable, setEditable] = useState(false);

    const removeTodo = () => {
        onRemove(id);

    }

    return (
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', border: '1px solid lightgrey', padding: '10px', marginTop: '10px' }}>
            <div >
                {
                    editable ? <input className='todo-input' type='text' /> : content
                }
            </div>
            <div>
                <IoIosRemoveCircle className='todo-icons' onClick={removeTodo} />
                {
                    editable ? <FaCheck className='todo-icons' /> : <FaEdit className='todo-icons' onClick={() => setEditable(true)} />

                }
            </div>
        </div>
    )
}

export default ToDo