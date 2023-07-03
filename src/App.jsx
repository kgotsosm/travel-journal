
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
    </>
  )
}

