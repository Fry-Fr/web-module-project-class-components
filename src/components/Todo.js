import React from 'react';

const ToDo = ({ todo, completed }) => {

    const onClick = (event) => {
        event.preventDefault();
        completed(todo.id)
    }

    return (
        <div className={`task${todo.completed ? ' completed' : ''}`}>
            <p onClick={onClick}>{todo.task}</p>
        </div>
    )
}
export default ToDo;