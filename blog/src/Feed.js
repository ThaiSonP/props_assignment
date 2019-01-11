import React, { Component } from 'react';
import Props from './Post.js'

class Feed extends Component {
  render() {
    let {allPosts} = this.props;
    //we declare this.props as a variable so we may work with it easier

    const makePosts = allPosts.map(post => {
      // we map through all the posts // props to create these specific varibales for the post component
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
