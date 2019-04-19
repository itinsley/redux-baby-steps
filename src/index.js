import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import {createStore} from 'redux';

const defaultState={
  placeInUniverse: 'World',
  photosFromTheWorld:[
  ]
}

const store = createStore(photosReducer);

function photosReducer(state = defaultState, action) {
  switch (action.type) {
    case 'GET_PHOTOS':
      return { ...state, photosFromTheWorld: action.photosFromTheWorld }
    default:
    return state
  }
}

async function getPhotos(){
  const response = await axios.get('https://picsum.photos/list');
  return response.data.slice(0,10);
}

function getPhotoAction(photosFromTheWorld){
  return {
    type: 'GET_PHOTOS',
    photosFromTheWorld
  }
}

function PhotosList(props){
  return (
    <li >
    {
      props.photos.map((photo)=>{
        return  <ul key={photo.id}><img 
          alt={`From ${photo.author}`}
          src={`https://picsum.photos/200/300?image=${photo.id}`} /></ul>
      })
    }
    </li>  
  )
}

class AppContainer extends Component{
  async componentDidMount(){
    const photosFromTheWorld = await getPhotos();
    store.dispatch(getPhotoAction(photosFromTheWorld))

    // You would never use this, it's merely to allow us to show the smallest incremental
    // change to using Redux for storing state
    this.forceUpdate();
  }

  render(){
    const reduxState = store.getState();
    return <App 
              placeInUniverse = {reduxState.placeInUniverse} 
              photosFromTheWorld = {reduxState.photosFromTheWorld} />
  }
}

class App extends Component{
  render(){
    return (
      <div className="App" style={{listStyle: 'none'}}>
          <h1>Hello {this.props.placeInUniverse}</h1>
          <h2>Some photos from around the world</h2>
          <div>Retrieved from <a href='https://picsum.photos/'>api</a></div>
          <PhotosList photos={this.props.photosFromTheWorld} />
      </div>
    );  
  }
}


ReactDOM.render(<AppContainer />, document.getElementById('root'));