/**
 * Created by nick on 2017/7/18.
 */
import React from 'react';


export default class TodosListItem extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            isEditing:false
        };
    }

    onEditClick(){
        this.setState({isEditing:true});
    }
    onCancelClick(){
        this.setState({isEditing:false});
    }


    onDeleteClick(){
        alert('You don\'t delete');
    }

    renderTaskSection(){
        const { task,isCompleted} = this.props;
        const taskStyle={
            color:isCompleted? 'green' : 'red',
            cursor:'pointer'
        };

        return(
            <td style={taskStyle}
                >{task}
            </td>
        )
    }


    renderActionsSection(){
        if (this.state.isEditing) {
            return (
                <td>
                    <button>Save</ button>
                    <button onClick={this.onCancelClick.bind(this)}>Cancle</button>
                </td>
            );
        }
        return (
            <td>
                <button onClick={this.onEditClick.bind(this)}>Edit</ button>
                <button onClick={this.onDeleteClick.bind(this)}>Delete</button>
            </td>
        );
    }

    render(){
        return(

            <tr>
               <td>
                   {this.renderTaskSection()}
               </td>
                {this.renderActionsSection()}


            </tr>
        );
    }

}