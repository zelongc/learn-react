import React from 'react';
import './App.css';
import Todolist from './todo-list';
import CreateTodo from './create-todo'
const todos = [

    {
        task:'eat launch',
        isCompleted:false
    },
    {
        task:'eat dinner',
        isCompleted:true
    }
];

export default class App extends React.Component {
    constructor(props){
        super(props);
        this.state={
            todos
        };
    }

  render(){
    return (
        <div>
            <h1>this is my TO DO LIST</h1>
            <CreateTodo createTask={this.createTask.bind(this)} />
            <Todolist todos={this.state.todos} />
        </div>

    );
  };

    createTask(task){
      this.state.todos.push({
          task,
          isCompleted:false
        });
      this.setState({todos:this.state.todos});
}
}


