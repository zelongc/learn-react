/**
 * Created by nick on 2017/7/18.
 */
/**
 * Created by nick on 2017/7/18.
 */

import React from 'react'



export default class CreateTodo extends React.Component {


    handleCreate(event){
        event.preventDefault();
        this.props.createTask(this.refs.createInput.value)
        //this function  [createTask] is Passed from todo-list-item.
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
