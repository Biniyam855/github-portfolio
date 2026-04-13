import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const Contact = () => {
    const circleRef = useRef(null)
    const sectionRef = useRef(null)
    const initialTextRef = useRef(null)
    const finalTextRef = useRef(null)

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
       
        // <ake sure all scrollTriger instances are properly killed
        const cleanUp = () => {
            ScrollTrigger.getAll().forEach((st) => {
                if (st.vars.trigger === sectionRef.current)
                    st.kill(true)
            })
        }
    //    clean up any existing scrollTrigger
    cleanUp()

    // set initial states
    gsap.set(circleRef.current, { scale: 1, backgroundColor: "white" })
    gsap.set(initialTextRef.current, { opacity: 1 })
    gsap.set(finalTextRef.current, { opacity: 0 })


    // creat the main timeline
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=200%",
            pin: true,
            scrub: 0.5,
            anticipatePin: 1,
            fastScrollEnd: true,
            preventOverlaps: true,
            invalidationOnRefresh: true,
            //   make the scroll good for all screen size.
        }

    })

    //  initial state to mid-zoom (0-50%

    tl.to(
        circleRef.current,

        {
            scale: 5,
            backgroundColor: "yellow",
            ease: "power1.inOut",
           duration: 0.5, 
        },
        0,
    )
    //  fade out initial text during first half 
    tl.to(
        initialTextRef.current,
        {
        opacity: 0,
        ease: "power1.out",
        duration: 0.2,
        },
        0.1,
    )

    // mid-zoom to final state (50%-100%)
    tl.to(
        circleRef.current,
        {
            scale: 17,
            boxShadow: "0 0 50px 20px rgba(233, 213, 255, 0.3)",
            ease: "power2.inOut", 
            duration: 0.5,
        },
        0.5,
    )
    //    fade in final text duration second duration
    tl.to(
       finalTextRef.current,
       {
            opacity: 1,
            ease: "power2.in",
            duration: 0.2,
       },
       0.7,
    )

    // return cleanUp function
    return cleanUp
    }, [])

    
    
  return (
    <section id="contact"
    ref={sectionRef}
    className="flex items-center justify-center bg-black relative"
    >
        {/* simple circle with minimal nesting */}
        <div
           ref={circleRef}
           className="w-24 sm:w-28 md:w-32 h-24 sm:h-28 md:h-32
                     rounded-full flex items-center justify-center
                     relative transition-shadow duration-1000 
                     shadow-yellow-300/50 shadow-lg bg-gradient-to-r
                     from-yellow-300 to-black-100"
        >
            {/* initial text */}
            <p
            className="text-black font-bold text-base sm:text-lg md:text-xl
                        absolute inset-0 flex items-center text-center"
            ref={initialTextRef}
            >
                SCROLL DOWN
            </p>

            {/* final text */}
            <div
            ref={finalTextRef}
            className="text-center relative flex flex-col items-center justify-center opacity-0"
            
            >
                <h1
                  className="text-black md:w-[10rem] w-[20rem] lg:scale-[0.28] 
                             sm:scale-[0.25] scale-[0.07] md:font-bold text-sm 
                             sm:text-base leading-none mb-3"
                >
                    Step In To The Future With Ben-tech
                </h1>

                <p className="text-black lg:w-[40rem] w-[20rem] absolute 
                             sm:mt-3 mt-2 md:scale-[0.1] scale-[0.068]">
                    Front-End developer specializing in crafting modern, responsive web interfaces 
                    using React.js and Tailwind CSS and advanced UI animation techniques. 
                </p>
                <button
                className="px-5 py-2 rounded-xl bg-black hover:bg-white hover:text-black
                                   transition-all duration-500 scale-[0.1] absolute sm:mt-15 mt-7 text-nowrap">
                              Hire Me
                      
                </button>
            </div>
        </div>
    </section>
  )
}

export default Contact