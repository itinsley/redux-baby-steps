import React, {Component} from 'react';
import ReactDOM from 'react-dom';

function photosList(photos){

  return (
    <li>
    {
      photos.map((photo)=>{
        return  <ul><img src={`https://picsum.photos/200/300?image=${photo.id}`} /></ul>
      })
    }
    </li>  
  )

}


class App extends Component{
  constructor(props){
    super(props);
    this.state={
      placeInUniverse: 'World',
      photosFromTheWorld:[
        {
          "format": "jpeg",
          "width": 5616,
          "height": 3744,
          "filename": "0000_yC-Yzbqy7PY.jpeg",
          "id": 0,
          "author": "Alejandro Escamilla",
          "author_url": "https://unsplash.com/@alejandroescamilla",
          "post_url": "https://unsplash.com/photos/yC-Yzbqy7PY"
        },
        {
          "format": "jpeg",
          "width": 5616,
          "height": 3744,
          "filename": "0001_LNRyGwIJr5c.jpeg",
          "id": 1,
          "author": "Alejandro Escamilla",
          "author_url": "https://unsplash.com/@alejandroescamilla",
          "post_url": "https://unsplash.com/photos/LNRyGwIJr5c"
        },
      ]
    }
  }

  render(){

    return (
      <div className="App" style={{listStyle: 'none'}}>
          <h1>Hello {this.state.placeInUniverse}</h1>
          <h2>Some photos from around the world</h2>
          <div>State hardcoded from <a href='https://picsum.photos/'>api</a></div>
          {photosList(this.state.photosFromTheWorld)}
      </div>
    );  
  }
}


ReactDOM.render(<App />, document.getElementById('root'));