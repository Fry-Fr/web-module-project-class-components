import React from 'react';
import ToDo from './Todo'

const ToDoList = ({ todo, clear }) => {

    return (
        <div className="todo-list">
            {todo.map( (item, index) => {
                return (
                    <ToDo key={index} todo={item} clear={clear} />
                )
            })}
        </div>
    )
}
export default ToDoList;