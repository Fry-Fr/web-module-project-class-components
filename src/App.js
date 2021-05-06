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

  Completed = (taskId) => {
    this.setState({
      toDo: this.state.toDo.map( item => {
        if (item.id === taskId) {
          return {
            ...item,
            completed: !item.completed
          }
        }
        return item;
      })
    })
  }

  ClearCompleted = () => {
    this.setState({
      toDo: this.state.toDo.filter( item => !item.completed)
    })
  }

  render() {
    return (
      <div className="main">
        <h2>Welcome to your Todo App!</h2>
        <ToDoForm addToDo={this.AddToDo} clear={this.ClearCompleted} />
        <ToDoList todo={this.state.toDo} completed={this.Completed} />
      </div>
    );
  }
}

export default App;
