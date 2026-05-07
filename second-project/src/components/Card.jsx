import React from 'react'

const Card = (props) => {
  console.log(props);
  return (

     <div className='card'>
      <img src="https://images.unsplash.com/photo-1773332585815-f106a5d6ed6c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0Nnx8fGVufDB8fHx8fA%3D%3D" alt="" />
     <h1>{props.user}</h1>
     <p>I am a {props.age} year oldsoftware engineer with a great mind</p>

     <button>View my profile</button>
    </div>
   
  )
}

export default Card

