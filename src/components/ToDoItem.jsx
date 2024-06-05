import React, { useState } from 'react';
import './ToDoListStyle.css'


function toDoItem({ task, deleteTask, toggleCompleted }) {

    function handleChange() {
        toggleCompleted(task.id)
    }

    return (
        // on precise le type de l'input un "check box" checked
        <div className='TODO-ITEM'>

            <input type="checkbox" checked={task.completed} onChange={handleChange} />

            <p>{task.text}</p>

            <button className="delete-button" onClick={() => deleteTask(task.id)}>
                X
            </button>
        </div>

    )
}

export default toDoItem;