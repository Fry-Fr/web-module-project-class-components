import React from 'react';
import ToDo from './Todo'

const ToDoList = ({ todo }) => {

    console.log(todo)
    return (
        <div className="todo-list">
            {todo.map( (item, index) => {
                return (
                    <ToDo key={index} todo={item} />
                )
            })}
        </div>
    )
}
export default ToDoList;