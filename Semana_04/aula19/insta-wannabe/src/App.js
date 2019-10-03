import React from 'react';
import './App.css';
import Post from './Components/Post/Post';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Post />
      </div>
    );
  }
}
export default App;