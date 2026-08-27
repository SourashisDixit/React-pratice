import React from 'react'

const App = () => {
  function handleSubmit(e) {
    e.preventDefault()
    console.log('Form submitted')
  }
  return (
    <div>
      <form onSubmit={handleSubmit} className='flex flex-col items-center justify-center'>
        <input className='p-2  m-2  font-semibold border border-pink-500 p-2 rounded' type="text" placeholder="Enter your name" />
        <button className='bg-blue-500 text-white p-2 rounded'>Submit</button>
      </form>
        
    </div>
  )
}

export default App
