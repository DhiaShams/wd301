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
        <TaskCard title = "Build the website with static content" dueDate="10th Aug" assigneeName="Dhia" />
        <TaskCard title = "Prepare for inteview" dueDate="11th Aug" assigneeName="Dhia" />
        </div>
      <div className="border rounded p-4 border-lime-700">  
        <h1>Done</h1>
        <TaskCard title = "Submit The project" completedAtDate="7th Aug" assigneeName="Dhia" />
        <TaskCard title = "Driving classes application" completedAtDate="1st Aug" assigneeName="Dhia" />
        </div>
      </div>
    </>
  )
}
export default App