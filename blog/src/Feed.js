import React, { Component } from 'react';
import Props from './Post.js'

class Feed extends Component {
  render() {
    let {allPosts} = this.props;


    const makePosts = allPosts.map(post => {

      return (
        <Props
        key={post.id}
        title={post.title}
        body={post.body}
        />
      )
    })

    return (
      <>
      <div className="Feed">
      This is Feed
      {makePosts}
      </div>

      </>
    );
  }
}

export default Feed;
