import video from "../assets/Videos/v.mp4";
import { motion } from "framer-motion";

export default function HeroSection() {
  
  

 return (
    <section id="home" className="relative min-h-screen bg-gradient-to-b from-black to-[#544608] flex flex-col lg:flex-row items-center justify-between px-6 lg:px-16 xl:px-24 pt-20 pb-12 overflow-hidden">

      {/* Left side text */}
      <div>
        <motion.h1
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 40, damping: 25, delay: 0.3, duration: 1.5 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-bold mb-6 lg:mb-8 leading-tight text-white"
        >
          Building Fast <br /> Reliable Result
        </motion.h1>

        <motion.p
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 40, damping: 25, delay: 0.8, duration: 1.5 }}
          className="text-base sm:text-lg md:text-xl lg:text-xl text-gray-200 leading-relaxed max-w-3xl mb-8"
        >
          I deliver high-quality 3D models, animations, and visualizations that meet your specific needs.
          It's not just about creating stunning visuals; it's about crafting immersive experiences that captivate your audience and elevate your projects to new heights.
        </motion.p>
      </div>

      {/* Right side self-rotating 3D-like card */}
       <div className="w-full lg:w-1/2 flex justify-center order-first lg:order-last z-20">

  <motion.div 
  initial={{x: -50, rotateY: 0 ,opacity: 0}}
  animate={{x: 0, rotateY: 360, opacity: 1}}
  transition={{type: "string" , damping: 5,stiffness: 100, delay: 0.2,repeat: Infinity, duration: 20, }}
  className="w-[420px] h-[420px] overflow-hidden shadow-2xl"
       style={{
         clipPath: "polygon(40% 0%, 60% 5%, 75% 20%, 85% 40%, 80% 65%, 65% 85%, 40% 95%, 20% 85%, 10% 60%, 5% 35%, 15% 15%)"
       }}>

    <video
      autoPlay
      loop
      muted
      playsInline
      className="w-full h-full object-cover"
    >
      <source src={video} type="video/mp4" />
    </video>

  </motion.div>

</div>
    </section>
  );
}