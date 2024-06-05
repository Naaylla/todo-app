import React, { useState } from 'react';
import ToDoItem from './ToDoItem';
import './ToDoListStyle.css'

function ToDoList() {

    const [tasks, setTask] = useState([
        {
            id: 1,
            text: 'Doctor Appointement',
            completed: true
        },
        {
            id: 2,
            text: "Office Meeting",
            completed: false
        }
    ])

    const [text, setText] = useState('')

    function addTask(text) {
        const newTask = {
            id: Date.now,
            text,
            completed: false
        };
        // Mettre a jour tasks avec cette fonction, on crée une copie de tasks, et on ajoute a la fin  newTask 
        setTask([...tasks, newTask]);
        // Le champ pour mettre la nouvelle tache est vide apres l'insertion 
        setText('');
    }

    function deleteTask(id) {
        setTask(prevTasks => prevTasks.filter(task => task.id !== id))
    }


    function toggleCompleted(id) {
        // On map la liste de "tasks", on prend la task qui a l'id correspondant
        setTask(tasks.map(task => {
            if (task.id == id) {
                // on retourne la même task mais completed sera le contraire
                return { ...task, completed: !task.completed };
            }
            // si ce n'est pas la task correspondante on la retourne telle qu'elle est
            else return task;
        }));
    }



    return (
        <div className='TODO-LIST'>
            <h1>Simple To-Do List</h1>

            <div className='input-button'>
                <input
                    value={text}
                    onChange={e => setText(e.target.value)}
                />
                <button onClick={() => addTask(text)}>ADD</button>
            </div>

            <div className='list'>

                {tasks.map(task =>
                (
                    // cet element n'a pas d'enfants, donc pas besoin de closing tag (not nested)
                    <ToDoItem
                        // on va lui passer des props, c'est comme les parameters d'une fonction, sauf que les props, 
                        // sont passés uniquement dans l'utilisation et ne sont pas définis auparavant
                        // c'est comme des parametres dynamique

                        key={task.id} // To fix later : Make sure task.id is unique for each task
                        task={task}
                        deleteTask={deleteTask}
                        toggleCompleted={toggleCompleted}


                    />))}
            </div>
            <div className="footer">
                <span>Developed by R. Nayla </span>
                <span>5-19-2024 </span>
            </div>
        </div>

    )
}

export default ToDoList;