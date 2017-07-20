import React from 'react';
import './App.css';
import Todolist from './todo-list';
import CreateTodo from './create-todo'
import _ from 'lodash'

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
            <CreateTodo todos={this.state.todos} createTask={this.createTask.bind(this)} />
            <Todolist
                todos={this.state.todos}
                toggleTask={this.toggleTask.bind(this)}
                saveTask={this.saveTask.bind(this)}
                deleteTask={this.deleteTask.bind(this)}
                />
        </div>

    );
  };

    toggleTask(task){
        const foundTodo = _.find(this.state.todos, todo => todo.task ===task);
        foundTodo.isCompleted = !foundTodo.isCompleted;
        this.setState({todos:this.state.todos});

}


    createTask(task){
      this.state.todos.push({
          task,
          isCompleted:false
        });
      this.setState({todos:this.state.todos});


}
    saveTask(oldTask,newTask){
        const foundTodo = _.find(this.state.todos,todo => todo.task===oldTask);
        foundTodo.task=newTask;
        this.setState({todos:this.state.todos});

    }

    deleteTask(taskToDelete){
        _.remove(this.state.todos , todo => todo.task ===taskToDelete);
        this.setState({todos:this.state.todos});
    }
}


