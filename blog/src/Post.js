import React from 'react';


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
