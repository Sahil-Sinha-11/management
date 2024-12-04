import { useState } from 'react'
import './App.css'

import AddTodo from './components/addtodo'
import Todo from './components/todo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div >
        
       <div 
       className='flex min-h-[100px] font-extrabold justify-center text-3xl items-center '>
         <p>Dashboard</p>
          </div>
       <AddTodo/>
       <Todo/>
      </div>
     
    </>
  )
}

export default App
