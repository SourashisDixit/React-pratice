import React from "react";
import "remixicon/fonts/remixicon.css";
import RightCardContent from "./RightCardContent";

const RightCard = (props) => {
   
    
  return (
    <div className="relative shrink-0 overflow-hidden h-full w-80  rounded-[35px]">
      <img
        className="h-full w-full object-cover"
        src={props.img}
      />

     <RightCardContent id={props.id} props={props}/>
    </div>  
  );
};

export default RightCard;