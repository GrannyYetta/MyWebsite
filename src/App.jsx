import React from "react"
import About from "./Components/About"
import Contact from "./Components/Contact"
import Skills from "./Components/Skills"
import Projects from "./Components/Projects"
import Navbar from "./Components/Navbar"

function App() {


  return (
    <>
      <Navbar/>
      <About />
      <Projects/>
      <Skills/>
      <Contact/>
    </>
  )
}

export default App
