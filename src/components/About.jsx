import {useRef, useEffect} from 'react'
import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
const About = () => {

    const sectionRef = useRef(null)
    const titleRef = useRef(null)
    const introRef = useRef(null)
    useEffect (() => {
        gsap.registerPlugin(ScrollTrigger)
        //   Title animation
         gsap.fromTo(
            titleRef.current,
            {y:100, opacity:0},
            {
                y:0,
                opacity:1,
                duration: 0.8,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 40%",
                    toggleActions: "play none none reverse"
                }
            } 
        )
        
        // Intro animation
        gsap.fromTo(
            introRef.current,
            {y:100, opacity:0, filter: "blur(10px)"},
            {
                y:0,
                opacity:1,
                filter: "blur(0px)",
                duration: 1.5,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 30%",                    toggleActions: "play none none reverse"
                }
            }
        )

    }, [])
  return (
    <section id="about" ref={sectionRef} className='min-h-screen relative 
                        bg-[#544608] overflow-hidden'>

<div className='container pt-24 mx-auto px-4 h-full flex flex-col items-center justify-center'>
            <h1 ref={titleRef} className='text-4xl md:text-6xl lg:text-7xl xl:text-7xl font-bold sm:mb-8 text-white opacity-0'>
                About Me
            </h1>
</div>

<div ref={introRef} className='container mx-auto px-4 flex md:flex-row flex-col justify-around items-center opacity-0'>
    
    
    <h3 className='text-sm md:text-2xl font-medium text-white z-50 lg:max-w-[45rem] max-w-[27rem] tracking-wide md:mt-0 sm:mt-8 mt-8'>
       Hi I'm Biniyam, a web developer with a passion for creating exceptional digital experiences.
         With a strong foundation in HTML, CSS, and JavaScript, I specialize in building responsive and user-friendly websites. 
         I am dedicated to continuous learning and staying up-to-date with the latest industry trends to deliver innovative solutions that exceed client expectations.
    </h3>

    <img className='lg:h-[25rem] md:h-[25rem] h-[20rem] mb-16 mix-blend-lighten' src="/Images/image.png" 
    alt="profile-image" />
</div>
        
    </section>
  )
}

export default About