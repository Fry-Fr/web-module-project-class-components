import React from 'react';
import ToDoForm from './components/TodoForm'
import ToDoList from './components/TodoList';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor(){
    super();
    this.state = {
      toDo: []
    };
  };

  AddToDo = (newTask) => {

    this.setState({
     toDo:[...this.state.toDo,{
       task: newTask,
       id: Date.now(),
       completed: false
     }]
    });
  };

  ClearCompleted = () => {

  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <ToDoForm addToDo={this.AddToDo} />
        <ToDoList todo={this.state.toDo} />
      </div>
    );
  }
}

export default App;
