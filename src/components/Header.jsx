import { useState } from "react"
import{ motion, AnimatePresence} from "framer-motion"
import { FiGithub, FiTwitter, FiLinkedin } from "react-icons/fi"
import { FiX } from "react-icons/fi"

// toggle menu open/close
const Header = () => {
const [isMenuOpen, setIsMenuOpen] = useState(false)

// state to track if the contact form is open
const [isContactFormOpen, setContactFormOpen] = useState(false)

const openContactForm = () => setContactFormOpen(true)
const closeContactForm = () => setContactFormOpen(false)
  
  
  return (
    <>
    
<header className="absolute w-full z-50 transition-all duration-300">
<div className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-mdcontainer mx-auto px-4 sm:px-6 lg:px-8
        flex items-center justify-between h-16 md:h-20">
          {/* logo/name */}
            <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type : "spring", stiffness: 100, damping: 25, delay: 0.3 }}
            className="flex items-center">
<div className="h-10 w-10 rounded-xl bg-gradient-to-tr 
                from-yellow-500 to-black flex items-center justify-center 
                text-black font-bold text-xl mr-3">
                  B
</div>
               <span className="text-xl font-bold bg-gradient-to-r 
                from-gray-600 to-gray-100 bg-clip-text text-transparent">
                  Ben-tech
                </span>
</motion.div>
            {/* Desktop Navigation */}
<nav className="lg:flex hidden space-x-8">
              {["Home", "About", "Projects","Services", "Contact"].map((item, index) => (
              
              <motion.a
              key={item}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type : "spring", stiffness: 100, damping: 25, delay: 0.7 + index * 0.2 }}
              className="relative text-gray-800
               dark:text-gray-200 hover:text-yellow-600 dark:hover:text-yellow-400 
               font-medium transition-colors duration-300 group"

              href={`#${item.toLowerCase()}`}>
                {item}
                
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-600
                 group-hover:w-full transition-all duration-300">
                 </span>

              </motion.a>

))}
</nav>

                     {/* Social Icons - Desktop */}
<motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.3, duration: 0.8 }}

className="hidden lg:flex gap-4 items-center space-x-4" >
              <motion.a 
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              
              className="text-gray-700 dark:text-gray-300 
              hover:text-yellow-600 dark:hover:text-yellow-400 
              transition-colors duration-300" href="#">
              <FiGithub className="w-5 h-5"/>

              </motion.a>
<motion.a 
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              
              className="text-gray-700 dark:text-gray-300 
              hover:text-yellow-600 dark:hover:text-yellow-400 
              transition-colors duration-300" href="#">
              <FiTwitter className="w-5 h-5"/>

              </motion.a>
<motion.a 
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
             
              className="text-gray-700 dark:text-gray-300 
              hover:text-yellow-600 dark:hover:text-yellow-400 
              transition-colors duration-300" href="#">
              <FiLinkedin className="w-5 h-5"/>

              </motion.a> 

</motion.div>
<motion.div whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}>
  
                  {/* Hire me button */}
                  <motion.button
                  onClick={openContactForm}               
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.5, duration: 0.8 }}
                  
                  className="hidden lg:block bg-gradient-to-r from-yellow-500 to-black text-white font-bold ml-4 py-2 px-6 rounded-full hover:from-yellow-600 hover:to-black hover:text- transition-all duration-500"
                  >
                    Hire Me
                  </motion.button>
</motion.div>

            {/* Mobile Menu Button */}
<div className="lg:hidden">
              <motion.button
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 1 }}

onClick={() => setIsMenuOpen(true)}
               className="text-gray-800 dark:text-gray-200 focus:outline-none">
    <svg
              className="h-7 w-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
    <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"/>
    </svg>
              </motion.button>

</div>        
</div>

{/* contact form */}
<AnimatePresence>
{isContactFormOpen && (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
    className="fixed inset-0 bg-black/50 backdrop-blur-sm flex z-50 items-center justify-center p-4"
  >
  
<motion.div 
initial={{scale : 0.8, opacity: 0, y: 30}} 
animate={{scale : 1, opacity: 1, y: 0}} 
exit={{ scale: 0.8, opacity: 0, y: 30 }}
transition={{type: "spring", stiffness: 200, damping: 30}}
className="bg-white dark:bg-gray-800 rounded-xl 
     shadow-xl p-8 w-full max-w-md p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className=" text-2xl font-bold text-gray-300 ">
          Get In Touch
        </h1>
        <button onClick={closeContactForm}>
          <FiX className ="w-5 h-5 text-gray-300 font-extabold" />      
        </button>
      </div>
                 {/*inputs  */}
<form className="space-y-4">
  <div>
    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1 ">
      Name
    </label>
    <input
    type="text"
    id="name"
    placeholder="Your Name"
    className="text-black w-full p-2 border border-gray-300 
    rounded-md focus:outline-none focus:ring focus:ring-yellow-400"
    />
  </div>
  <div>
    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
      Email
    </label>
    <input
    type="email"
    id="email"
    placeholder="Your Email"
    className="text-black w-full p-2 border border-gray-300 
    rounded-md focus:outline-none focus:ring focus:ring-yellow-400"
    />
  </div>
  <div>
    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
      Message
    </label>
    <textarea
    id="message"
    placeholder="Your Message"
    className="text-black w-full p-2 border border-gray-300 
    rounded-md focus:outline-none focus:ring focus:ring-yellow-400"
    />
  </div>
  <div className="flex justify-end">
    <motion.button
    whileHover={{scale: 1.03}}
    whileTap={{scale: 0.97}}
    type="submit"
    className="bg-yellow-500 text-white py-2 px-4 rounded-xl hover:bg-yellow-600 transition-colors duration-300"
    >
      Send
    </motion.button>
    </div>
</form>
  
</motion.div>
</motion.div>
)}
 </AnimatePresence> 
</header>
                   {/* Overlay */}
                   {isMenuOpen && (
<div
                onClick={() => setIsMenuOpen(false)}
                className="fixed inset-0 bg-black/50 z-40 lg:hidden"/>
)}

                       {/* Sidebar */}
<motion.div
               initial={{ x: "-100%" }}
               animate={{ x: isMenuOpen ? 0 : "-100%" }}
               transition={{ duration: 0.3 }}
className="fixed top-0 left-0 h-full w-72
           bg-black shadow-2xl z-50 p-8 lg:hidden">
<div className="flex justify-end mb-10">
           <button
            onClick={() => setIsMenuOpen(false)}
className="text-yellow-400 text-2xl flex justify-end">
               x
           </button>
</div>

<div className="flex flex-col space-y-8">
    {["Home", "About", "Projects", "Services", "Contact"].map((item) => (
      <motion.a
        key={item}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 25, delay: 0.3 }}
        href={`#${item.toLowerCase()}`}
onClick={() => setIsMenuOpen(false)}
        className="text-lg font-medium tracking-wide relative text-gray-800
               dark:text-gray-200 hover:text-yellow-600 dark:hover:text-yellow-400 
               font-medium transition-colors duration-300 group"
      >
        {item}
      </motion.a>

    ))}
  </div>
{/* Social Icons - Mobile */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.5 }}
  className="border-t border-gray-700 mt-12 pt-8 flex justify-center items-center space-x-6 mt-12"
>
  <motion.a
    whileHover={{ scale: 1.2 }}
    whileTap={{ scale: 0.9 }}
    className="text-gray-400 hover:text-yellow-400 transition duration-300"
    href="#"
  >
    <FiGithub className="w-6 h-6" />
  </motion.a>

  <motion.a
    whileHover={{ scale: 1.2 }}
    whileTap={{ scale: 0.9 }}
    className="text-gray-400 hover:text-yellow-400 transition duration-300"
    href="#"
  >
    <FiTwitter className="w-6 h-6" />
  </motion.a>

  <motion.a
    whileHover={{ scale: 1.2 }}
    whileTap={{ scale: 0.9 }}
    className="text-gray-400 hover:text-yellow-400 transition duration-300"
    href="#"
  >
    <FiLinkedin className="w-6 h-6" />
  </motion.a>
</motion.div>

{/* Hire Me Button - Mobile */}
<motion.div className="flex justify-center mt-10">
  <motion.button
  onClick={() => {
  setIsMenuOpen(false)
  openContactForm()
}}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="bg-gradient-to-r from-yellow-500 to-black 
               text-white font-bold py-3 px-10
               rounded-full 
               hover:from-yellow-600 hover:to-black 
               transition-all duration-500">
    Hire Me
  </motion.button>
</motion.div>

  </motion.div>

  </>
 )
}
export default Header

