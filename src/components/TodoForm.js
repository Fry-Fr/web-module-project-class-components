import React from 'react';

const ToDoForm = ({ onChangeHandler, addToDo, clear }) => {
    return (
        <form>
            <input type="text" name="task" onChange={onChangeHandler}/>
            <button onClick={addToDo}>add</button>
            <button onClick={clear}>clear completed</button>
        </form>
    )
}
export default ToDoForm;