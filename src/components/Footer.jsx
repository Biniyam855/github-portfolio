import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='bg-black text-white py-16 px-6 mt-40'>
      <div className='max-w-6xl mx-auto'>
          <div className='flex justify-between items-center'>
              {/* logo and discription */}
              <h2 className='text-3xl font-bold bg-gradient-to-r from-yellow-400
                             to-yellow-200 bg-clip-text text-transparent'>
                Ben-tech
              </h2>

              {/* social links */}
              <div>
                <h3 className='text-xl font-semibold mb-4 text-yellow-200'>
                    Connect
                </h3>
                <div className='flex space-x-4'>                
                  <a className='text-gray-700 hover:text-yellow-400 transition-colors' href="#">
                  <FaGithub className="w-5 h-5"/>
                  </a>
                  <a className='text-gray-700 hover:text-yellow-400 transition-colors' href="#">
                  <FaLinkedin className="w-5 h-5"/>
                  </a>
                  <a className='text-gray-700 hover:text-yellow-400 transition-colors' href="#">
                  <FaTwitter className="w-5 h-5"/>
                  </a>
                  </div>
              </div>
          </div>
          <div className='border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row 
                          justify-between items-center'>
             <p className='text-gray-500 text-sm'>
                © 2026 Ben-tech. All rights reserved.            
             </p>
             <div className='flex space-x-6 mt-4 md:mt-0'>
                  <a className='text-gray-500 text-sm hover:text-yellow-400 transition-colors' href="#">
                    Privacy Policy
                  </a>
                  <a className='text-gray-500 text-sm hover:text-yellow-400 transition-colors' href="#">
                    Terms of Service
                  </a>
                  <a className='text-gray-500 text-sm hover:text-yellow-400 transition-colors' href="#">
                    Cookie Policy
                  </a>
             </div>
          </div>
      </div>
    </footer>
  )
}

export default Footer