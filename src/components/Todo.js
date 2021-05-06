import React from 'react';

const ToDo = ({ todo }) => {
    return (
        <div>
            <p>{todo.task}</p>
            <p>{todo.id}</p>
            <p>{todo.completed.toString()}</p>
        </div>
    )
}
export default ToDo;