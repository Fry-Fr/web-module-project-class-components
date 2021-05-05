import React, { useState } from 'react';

const ToDoForm = ({ addToDo }) => {

    const [ task, setTask ] = useState('')

    const onSubmit = (event) => {
        event.preventDefault();
        addToDo(task);
        setTask('');
    }

    const onChange = (event) => {
        const newTask = event.target.value;
        setTask(newTask)   
    }

    return (
        <form onSubmit={onSubmit}>
            <input type="text" name="task" value={task} onChange={onChange}/>
            <button>add</button>
            <button>clear completed</button>
        </form>
    );
};
export default ToDoForm;