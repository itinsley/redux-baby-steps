import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

async function getPhotos(){
  const response = await axios.get('https://picsum.photos/list');
  return response.data.slice(0,10);
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


class App extends Component{
  constructor(props){
    super(props);
    this.state={
      placeInUniverse: 'World',
      photosFromTheWorld:[
      ]
    }
  }

  async componentDidMount(){
    const photosFromTheWorld = await getPhotos();
    this.setState({photosFromTheWorld})
  }

  render(){

    return (
      <div className="App" style={{listStyle: 'none'}}>
          <h1>Hello {this.state.placeInUniverse}</h1>
          <h2>Some photos from around the world</h2>
          <div>Retrieved from <a href='https://picsum.photos/'>api</a></div>
          <PhotosList photos={this.state.photosFromTheWorld} />
      </div>
    );  
  }
}


ReactDOM.render(<App />, document.getElementById('root'));