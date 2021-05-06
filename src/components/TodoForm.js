import React from 'react';

class ToDoForm extends React.Component  {

    constructor(){
        super();
        this.state = {
            task: ''
        }
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.props.addToDo(this.state.task);
        this.setState({
            task: ''
        })
        
    }

    onChange = (event) => {
        this.setState({
            task: event.target.value
        }) 
    }

    render(){
        return (
            <form onSubmit={this.onSubmit}>
                <input type="text" name="task" value={this.state.task} onChange={this.onChange}/>
                <button>add</button>
                <button>clear completed</button>
            </form>
        );
    };
};
export default ToDoForm;