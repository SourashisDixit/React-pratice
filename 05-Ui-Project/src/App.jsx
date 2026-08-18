import React from 'react'
import Section1 from './Componet/Section1/Section1'
import Section2 from './Componet/Section2/Section2'

const App = () => {

  const users=[
    {img:'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    intro:'',
    tag:'Satisfied'
   },
     {img:'https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    intro:'',
    tag:'UnderServed'
   },
     {img:'https://plus.unsplash.com/premium_photo-1661576445274-3fd93c31512d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjI2fHx3b3JraW5nJTIwcHJvZmVzc2lvbmFsc3xlbnwwfHwwfHx8MA%3D%3D',
    intro:'',
    tag:'UnderBankend'
   },

   {img:'https://images.unsplash.com/photo-1600275669439-14e40452d20b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    intro:'',
    tag:'UnderServed'
   },
  ]
  return (
    <div>
      <Section1 users={users} />
      <Section2/>
      <Section2/>
      
    </div>
  )
}

export default App
