<<<<<<< HEAD

import React from "react"
import Destination from "../components/Destination"
import data from "./data.js"
import Navbar from "../components/Navbar"

console.log(data)
export default function App() {

  const destination = data.map(x => {
    return (
        <Destination
          key={x.id}
          {...x}
          />
    )
})

  return (
    <>
      <Navbar />
      <section className='destinations'>
        {destination}
      </section>
=======
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
>>>>>>> 4dcd0433304726170851d1049e04c83e6c874988
    </>
  )
}

<<<<<<< HEAD

=======
export default App
>>>>>>> 4dcd0433304726170851d1049e04c83e6c874988
