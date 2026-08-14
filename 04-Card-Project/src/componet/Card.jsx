import React from 'react'
import { Bookmark } from 'lucide-react'

const Card = (props) => {
    console.log(props.company);
    
  return (
    <div className="card">

      {/* Top */}
      <div className="top">
        <img
          src={props.brandLogo}
          alt="Amazon"
        />

        <Bookmark size={24} />
      </div>

      {/* Center */}
      <div className="center">
        {/* <h2>{props}</h2> */}

        <h1>{props.company}</h1>

        <p>{props.tag1}</p>

        <p>{props.tag2}</p>

        <p>{props.datePosted}</p>
      </div>

      {/* Bottom */}
      <div className="bottom">

        <div>
          <h3>{props.pay}</h3>
          <p>{props.location}</p>
        </div>

        <button>Apply Now</button>

      </div>

    </div>
  )
}

export default Card