import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

const defaultState={
  placeInUniverse: 'World',
  photosFromTheWorld:[]
}

async function getPhotos(){
  const response = await axios.get('https://picsum.photos/list');
  return response.data.slice(0,10);
}

function PhotosList(props){
  return (
    <ul style={{listStyle: 'none'}}>
    {
      props.photos.map((photo)=>{
        return  <li key={photo.id}><img 
          alt={`From ${photo.author}`}
          src={`https://picsum.photos/200/300?image=${photo.id}`} /></li>
      })
    }
    </ul>  
  )
}

class AppContainer extends Component{
  constructor(props){
    super(props);
    this.state=defaultState
  }

  async componentDidMount(){
    const photosFromTheWorld = await getPhotos();
    this.setState({photosFromTheWorld})
  }

  render(){
    return <App 
              placeInUniverse = {this.state.placeInUniverse} 
              photosFromTheWorld = {this.state.photosFromTheWorld} />
  }
}

class App extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="App">
          <h1>Hello {this.props.placeInUniverse}</h1>
          <h2>Some photos from around the world</h2>
          <div>Retrieved from <a href='https://picsum.photos/'>api</a></div>
          <PhotosList photos={this.props.photosFromTheWorld} />
      </div>
    );  
  }
}


ReactDOM.render(<AppContainer />, document.getElementById('root'));