import React from 'react';
import ToDo from './Todo'

const ToDoList = ({ todo, clear, completed }) => {

    return (
        <div className="todo-list">
            {todo.map( (item, index) => {
                return (
                    <ToDo completed={completed} key={item.id} todo={item} />
                )
            })}
        </div>
    )
}
export default ToDoList;