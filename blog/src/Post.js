import React from 'react';

//we deconstruct props FROM the props of feed.js
const Props = props =>{
const { id, title, body}= props;

  return (
      <>

      {" "}
      <section id= {id}>
      <h1>this is Post</h1>
      <h3>{title}</h3>
      <p>{body}</p>
      </section>

      </>
      );
    }

export default Props
