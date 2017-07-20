/**
 * Created by nick on 2017/7/18.
 */
/**
 * Created by nick on 2017/7/18.
 */

import React from 'react'
import _ from 'lodash'


export default class CreateTodo extends React.Component {


    handleCreate(event){
        event.preventDefault();
        const createInput=this.refs.createInput;
        const task= createInput.value;
        const validateinput = this.validateInput(task);


        this.props.createTask(this.refs.createInput.value)
        //this function  [createTask] is Passed from todo-list-item.
    }

    validateInput(task){
        if (!task){
            return 'please enter a task!' ;

        }else if (_.find(this.props.todos,todo=> task.todo ===task)){
            return 'task already exists!'
        }else{
            return null;
        }
    }


    render(){
        return (

            <form onSubmit={this.handleCreate.bind(this)}>

                <input type="text" placeholder="what do i need to do?" ref ='createInput'/>
                <button >Save</button>
            </form>

        );
    };
}
