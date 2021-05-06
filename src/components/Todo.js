import React from 'react';

const ToDo = ({ todo, clear }) => {

    const onClick = (event) => {
        const toggle = event.target;
        toggle.classList.toggle("completed");
        clear()
    }

    return (
        <>
        <p className="task" onClick={onClick}>{todo.task}</p>
        </>
    )
}
export default ToDo;