import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider, connect } from 'react-redux';

const defaultState={
  placeInUniverse: 'World',
  photosFromTheWorld:[
  ]
}

function mapStateToProps(state, props){
  return {
    placeInUniverse: state.placeInUniverse,
    photosFromTheWorld: state.photosFromTheWorld
  }
}

const store = createStore(
  photosReducer,
  applyMiddleware(thunk));

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

function fetchPhotos() {
  return function (dispatch) {
    return getPhotos().then((photos)=>{
      dispatch(getPhotoAction(photos))
    });
  };
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
  render(){
    const AppContainer = connect(mapStateToProps, {})(App)
    return(
      <Provider store={store}>
        <AppContainer />
      </Provider>
    )
  }
}

class App extends Component{
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
store.dispatch(fetchPhotos())