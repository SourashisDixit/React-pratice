import React from 'react'

const App = () => {
  const [num, setnum] = React.useState(0)

  function increase() {
    setnum(num + 1)
  }

  function decrease() {
    setnum(num - 1)
  } 

  return (
    
    <div className='flex flex-col items-center justify-center h-screen gap-4'>
    <button className='bg-blue-500 text-white p-2 rounded'>{num}</button>
    <button onClick={increase} className='bg-green-500 text-white p-2 rounded'>Increase</button> 
    <button onClick={decrease} className='bg-red-500 text-white p-2 rounded'>Decrease</button> 
  

      
    </div>
  )
}

export default App
