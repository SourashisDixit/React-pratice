import React from 'react'

const RightCardContent = (props) => {
  return (
    <div>
       {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Number badge */}
      <div className="absolute left-6 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-white text-lg font-bold">
        {props.id + 1}
      </div>

      {/* Text content */}
      <div className="absolute bottom-24 left-8 right-8 text-white">
        <p className="text-2xl leading-9">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure
          accusamus cupiditate voluptatibus mollitia alias tempora.
        </p>
      </div>

      {/* Bottom buttons */}
      <div className="absolute bottom-6 left-8 right-8 flex items-center justify-between">
        <button className="rounded-full bg-blue-600 px-8 py-3 text-white">
             {props.props.tag}
        </button>

        <button className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white">
          <i className="ri-arrow-right-line text-xl"></i>
        </button>
      </div>
    </div>
  )
}

export default RightCardContent
