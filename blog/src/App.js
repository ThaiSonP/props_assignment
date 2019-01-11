import React, { Component } from 'react';
import Feed from './Feed.js'
import './App.css';


class App extends Component {
  constructor (){
    super();
    this.state={
      allPosts: require('./blog_posts.json')
    }
  }

  render() {
    return (
      <>
        <div className="App">
          App is going to hold the state

        </div>
      <Feed allPosts={this.state.allPosts}/>
      //we are calling on the component allPosts and passing this.state AS props.

      </>
      );
    }
}
export default App;
