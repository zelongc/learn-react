/**
 * Created by nick on 2017/7/18.
 */
import React from 'react';
import TodoListHeader from './todo-list-header'
import _ from 'lodash'
import TodosListItem from './todos-list-item'
import CreateTodo from "./create-todo";
export default class TodoList extends React.Component {
    renderItems(){
        return _.map(this.props.todos, (todo,index) => <TodosListItem key ={index} {...todo} />)
    }                                   // for each one in todos, build <TodosListItem ...with key = index>




    render(){


        console.log(this.props.todos);

        return (
            <table>

               <TodoListHeader />
                <tbody>
                    {this.renderItems()}
                </tbody>
            </table>
        );
    };
}
