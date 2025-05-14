import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import TaskCard from './TaskCard'

function App() {
  
  return (
    <>
      <div className="grid grid-cols-2 gap-8 p-8">
      <div className="border rounded p-4 border-lime-700 ">
        <h1>Pending</h1>
        <TaskCard title = "Build the website with static content" duedate="10th Aug" assignee="Sriharsh" flag="pending"/>
        <TaskCard title = "Prepare for inteview" duedate="11th Aug" assignee="Sriharsh" flag="pending"/>
      </div>
      <div className="border rounded p-4 border-lime-700">  
        <h1>Done</h1>
        <TaskCard title = "Submit The project" completedate="7th Aug" assignee="Sriharsh" flag="done"/>
        <TaskCard title = "Driving classes application" completedate="1st Aug" assignee="Sriharsh" flag="done"/>
      </div>
      </div>
    </>
  )
}
export default App