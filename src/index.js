import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      placeInUniverse: 'World'
    }
  }

  render(){
    return (
      <div className="App">
          <h1>Hello {this.state.placeInUniverse}</h1>
      </div>
    );  
  }
}


ReactDOM.render(<App />, document.getElementById('root'));