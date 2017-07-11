import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
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






function App() {
    return (
        <div>
            <Welcome name="sara"/>
            <Welcome name = "Cahal"/>
            <Welcome name = 'nick'/>
        </div>
    );
}


class Clock extends React.Component {
    constructor(props){
        super(props);
        this.state = {date : new Date()}    // every we call it . the time will change.
    }
    // these two methods called lifecycle hooks.
    componentDidMount() {    // this function is called every time after the render( )
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}



class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render() {
        return (
            <a href="http://www.baidu.com">
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'yes' : 'no'}
            </button> </a>
        );
    }
}



class CurrentTime extends React.Component{
    constructor(props){
        super(props);
        this.state={date: new Date().toLocaleString(),
            name: 'zelongs'
        }
    }


    render(){

        return(
            <div>
                {this.state.name}
                </div>
        );
    }

}

ReactDOM.render(

    <CurrentTime />,        // render an object to the index . id= root
    document.getElementById('root')
);


registerServiceWorker();
