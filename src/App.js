import React from 'react';
import ToDoForm from './components/TodoForm'
import ToDoList from './components/TodoList';

const toDo = [];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor(){
    super();
    this.state = {
      name: '',
      id: 0,
      completed: false
    };
  };

  handleAddToDo = (event) => {
    event.preventDefault();
  }

  handleClearCompleted = (event) => {
    event.preventDefault();
  }

  handleOnChange = (event) => {
    event.preventDefault();
    this.setState(
      [...toDo,{}]
    )

  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <ToDoForm 
          addToDo={this.handleAddToDo} 
          clear={this.handleClearCompleted} 
          onChangeHandler={this.handleOnChange}
          data={this.state}
          />

        <ToDoList />
      </div>
    );
  }
}

export default App;
