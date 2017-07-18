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
                <button>Delete</button>
            </td>
        );
    }

    render(){
        return(

            <tr>
               <td>
                   {this.props.task}
               </td>
                {this.renderActionsSection()}


            </tr>
        );
    }

}