import img1 from "../assets/Images/img1.png"
import img2 from "../assets/Images/img2.png"
import img3 from "../assets/Images/img3.png"
import img4 from "../assets/Images/img4.png"
import img5 from "../assets/Images/img5.png"

import { useRef, useEffect } from "react" 
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SlShareAlt } from "react-icons/sl"
const Project = () => {
  const sectionRef = useRef(null)
  const titleLineRef = useRef(null)
  const titleRef = useRef(null)
  const horizontalRef = useRef(null)
  const triggerRef = useRef(null)
//   project images data

 const projectImages = [
  {
    id: 1,
    image: img1,
    title: "Project 1",
    description: "A brief description of Project 1.",
  },
  {
    id: 2,
    image: img2,
    title: "Project 2",
    description: "A brief description of Project 2.",
  },
  {
    id: 3,
    image: img3,
    title: "Project 3",
    description: "A brief description of Project 3.",
  },
  {
    id: 4,
    image: img4,
    title: "Project 4",
    description: "A brief description of Project 4.",
  },

  {
    id: 5,
    image: img5,
    title: "Project 5",
    description: "A brief description of Project 5.",
  }];


      
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        // title reveal
             gsap.fromTo(
                titleRef.current,
                { y: 50,
                  opacity: 0 },
                { y: 0, 
                  opacity: 1, 
                  duration: 1.2,
                  delay: 0.2,
                  ease: "power3.out",
                  scrollTrigger: {
                    trigger: triggerRef.current,
                    start: "top 85%",
                    toggleActions: "play none none reverse",
                  }
                }
             )
             // title line reveal
              gsap.fromTo(
                titleLineRef.current,
                { width: "0%", 
                  opacity: 0,
                },
                { width: "100%",
                  opacity: 1,
                  duration: 1.5,
                  ease: "power3.inout",
                  delay: 0.3,
                  scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                  }
                }
        )   
          // MAIN HORIZONTAL SCROLL
  // We calculate exactly how far to move: (Total Width - One Screen Width)
  const calculateWidth = () => horizontalRef.current.scrollWidth - window.innerWidth;

  const horizontalScroll = gsap.to(horizontalRef.current, {
    x: () => -calculateWidth(),
    ease: "none",
    scrollTrigger: {
      trigger: sectionRef.current,
      start: "top+=200 top",
      // This 'end' makes the scroll last exactly as long as the content width
      end: () => `+=${horizontalRef.current.scrollWidth}`,
      pin: true,
      scrub: 1,
      invalidateOnRefresh: true,
    }
  });

  // Image animations within the horizontal scroll
  const panels = gsap.utils.toArray(".panel");
  panels.forEach((panel) => {
    const image = panel.querySelector(".project-image");
    const imagetitle = panel.querySelector(".project-title");

    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: panel,
        containerAnimation: horizontalScroll,
        start: "left center",
        end: "right center",
        scrub: true,
      }
    });

    t1.fromTo(image, { scale: 0.6, rotate: -10 }, { scale: 1, rotate: 0 });
    if (imagetitle) {
      t1.fromTo(imagetitle, { y: 50, opacity: 0 }, { y: 0, opacity: 1 }, 0.1);
    }
  });              
            }, [projectImages.length])
            
   
  return (
    <section id="projects"
     ref={sectionRef}
       data-name="horizontal-section"
       className="relative py-20 bg-white overflow-hidden">

        {/* Section title */}
        <div 
        ref={triggerRef}
        className="container mx-auto px-4 mb-16 relative z-10">
           <h2 
           ref={titleRef}
           className="text-4xl md:text-5xl lg:text-6xl  font-bold text-black text-center mb-4 opacity-0">
             Featured Projects
           </h2>
           <div 
           ref={titleLineRef}
           className="w-0 h-1 bg-gradient-to-r from-yellow-500 to-black mx-auto opacity-0">
           
            
           </div>
        </div>
        {/* Horizontal Scroll Section */}
    <div className="overflow-hidden">
  {/* REMOVE md:w-[400%] - let the content define the width */}
  <div ref={horizontalRef} className="horizontal-section flex flex-nowrap w-max items-center">
    {projectImages.map((project) => (
      <div key={project.id} className="panel flex-shrink-0 w-screen h-[80vh] flex items-center justify-center">
        <div className="relative flex flex-col items-center justify-center p-4">
          <img 
            className="project-image max-w-[80vw] max-h-[60vh] rounded-2xl shadow-2xl object-cover"
            src={project.image}
            alt={project.title} 
          />
          <h2 className="project-title flex items-center gap-3 text-3xl font-bold text-black mt-6">
            {project.title} <SlShareAlt />
          </h2>
        </div>
      </div>
    ))}
  </div>
</div>
    </section>
  );
  };

export default Project