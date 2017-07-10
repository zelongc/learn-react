import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const name = 'nick';
const  age = 10;

const mytest = (<p>test,{name+age},test</p>);

const element2 = <div>
    <p1>the first line {name} </p1>
    <p1>the second line {age+'_'+name} </p1>
</div>;



/////////////////////////////////////////////////////
//   element_create and the element_create_2 are the same thing.

const element_create=React.createElement(
    'h2',   // name of the tag
    {className:'myname'},   // classname
    mytest              // content, an object.
    );

const element_create_2=<h2 classname="myname">mytest</h2>

///////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////
///////            This is component    //////////
function Welcome(props){
    return <h1>Hello, {props.name}</h1>;  // name = sara in this case.
}

class Welcome3 extends React.Component{
    render(){
        return <h1>hello,{this.props.name}</h1>;
    }
}

////// convert the component to element.////
const element= <Welcome name='sara'/>;
const element3 = <Welcome3 name = 'sara'/>;
///////////////////////////////////////////////


ReactDOM.render(
    element3,        // render an object to the index . id= root
    document.getElementById('root')
);


registerServiceWorker();
