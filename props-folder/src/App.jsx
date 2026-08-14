import React from 'react'
import Card from './componet/Card'

const App = () => {
  return (
    <div className='parent'>
     
      <Card user='Alex Dixit' age={24} img='https://images.unsplash.com/photo-1778452419724-1f605dc17c46?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
       <Card user='Sourashis Dixit' age={28} img='https://images.unsplash.com/photo-1779419171796-1aff900f9f60?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
    

       
    </div>
  )
}

export default App
