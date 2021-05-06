import React from 'react';

class ToDoForm extends React.Component  {

    constructor(){
        super();
        this.state = {
            newTask: ''
        }
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.props.addToDo(this.state.newTask);
        this.setState({
            newTask: ''
        })       
    }

    onChange = (event) => {
        this.setState({
            newTask: event.target.value
        }) 
    }

    handleClick = (event) => {
        event.preventDefault();
        event.stopPropagation();
        this.props.clear();
    }

    render(){
        return (
            <form onSubmit={this.onSubmit}>
                <input type="text" name="task" value={this.state.newTask} onChange={this.onChange}/>
                <button>add</button>
                <button onClick={this.handleClick}>clear completed</button>
            </form>
        );
    };
};
export default ToDoForm;