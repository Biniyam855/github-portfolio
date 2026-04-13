import { useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger" 

import Header from "./components/Header"
import HeroSection from "./components/HeroSection"
import About from "./components/About"
import Cursor from "./components/Cursor"
import Project from "./components/Project"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import ProgressBar from "./components/ProgressBar"

export default function App() {

  useEffect(() => {
    // register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger)

    // refresh ScrollTrigger when the page is fully reloaded
    ScrollTrigger.refresh()

    // clean up ScrollTrigger when the component is unmounted
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }

  }, [])

  return (
    <>
     <Header />
     <HeroSection />
     <About />
     <Cursor />
     <Project />
     <Contact />
     <Footer />
     <ProgressBar />
    </>
  )
}