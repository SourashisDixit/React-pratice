import React from 'react'

const card = (props) => {
  return (
    <div>
       <div className='card'>
              <img src={props.img} alt="" />
              <h1>{props.user},{props.age},</h1>
              <p>My name is Sourashis,I am from Odisha,the state which 
                is known for its rich culture and strong educational value,</p>
                <button>View profile</button>
            </div>
    </div>
  )
}

export default card
