import React from 'react'

const App = () => {

  function handleClick() {
    console.log('Button clicked!')
  }

  return (
    <div>
      <button onDoubleClick={handleClick}>Click me</button>
    </div>
  )
}

export default App
