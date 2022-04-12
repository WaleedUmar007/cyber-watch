   import React, {useState} from "react";
   import {Transition} from "@headlessui/react";
   import {Link} from "react-scroll";
   import Image from "next/image";
   import image from "../public/logo.png"

   function NavBar(){
      const [isOpen,setIsOpen] = useState(false);
      return(
         <div>

         <nav className="shadow-md fixed w-full z-10 bg-[#250F55]">
         <div className="w-full">
            <div className="flex items-center h-20 w-full">
            
            {/* first block having image */}

            <div className="flex items items-center mx-20 justify-between w-full">
               <div className="flex justify-center items-center flex-shrink-0">

               {/* div for adding image  */}
                  <div className="rounded-full bg-[#B9A1D6] mix-blend-lighten w-[300px] h-[60px] ml-0 m-0">
                        <Image src={image} alt="Cyberwatch logo" width={200} height={70} /> </div>
                  

                     <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                           <Link 
                              activeClass="Home"
                              to="hero"
                              smooth={true}
                              offset={50}
                              duration={500}
                              className="cursor-pointer text-[20px] m-3 text-white font-bold text-lg hover:font-white px-3 py-2 font-Montserrat"> Home
                           
                           </Link>

                           <Link 
                              activeClass="Features"
                              to="features"
                              smooth={true}
                              offset={50}
                              duration={500}
                              className="cursor-pointer text-[20px] m-3 text-white font-bold text-lg hover:font-white px-3 py-2 font-Montserrat"> Features
                           
                           </Link>

                           <Link 
                              activeClass="Download"
                              to="download"
                              smooth={true}
                              offset={50}
                              duration={500}
                              className="cursor-pointer text-[20px] m-3 text-white font-bold text-lg hover:font-white px-3 py-2  font-Montserrat"> Download   
                           
                           </Link>

                           <Link 
                              activeClass="Aboutus"
                              to="about"
                              smooth={true}
                              offset={50}
                              duration={500}
                              className="cursor-pointer text-[20px] m-3  text-white font-bold text-lg hover:font-white px-3 py-2 font-Montserrat"> About Us
                           
                           </Link>

                           <Link 
                              activeClass="Login"
                              to="login"
                              smooth={true}
                              offset={50}
                              duration={500}
                              className="cursor-pointer text-[20px] bg-white rounded-3xl h-[40px] w-[90px] text-[#372B47] font-semibold text-lg hover:font-white px-3 py-2 font-Montserrat"> Login
                           
                           </Link>
                        </div>

                     </div>

               </div>

               {/* Design for mobile view */}

               <div className="mr-10 flex md:hidden">
                  <button onClick={()=> setIsOpen(!isOpen)} type="button" className="bg-[#BDB7CC] inline-flex items-center justify-center p-2 rounded-md "
                  aria-controls="mobile-menu"
                  aria-expanded="false">

                     <span className="sr-only">Open Main Menu </span>
                     {!isOpen ?(
                           <svg className="block h-6 w-6 " xmlns="http:www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                           <path 
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M4 6h16M4 12h16M4 18h16"
                           />
                           </svg>

                           
                     ):(
                        <svg className="block h-6 w-6 " xmlns="http:www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                           <path 
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M6 18L18 6M6 6l12 12"
                           />
                           </svg>
                        )}

                  </button>
               </div>

            </div>

            </div>

         </div>

         <Transition
            show={isOpen}
            enter="transition ease-out duration-100 transform"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-75 transform"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95" 
         >

            {(ref)=>(
               <div className="md:hidden id=mobile-menu">
                  <div ref = {ref} className="bg-[#503F77] px-2 pt-2 pb-3 space-y-1 sm:px-3">
                  <Link
                        href="/home"
                        activeClass="Home"
                        to="hero"
                        smooth={true}
                        offset={50}
                        duration={500}
                        className="cursor-pointer hover:bg-[#B9A1D6] text-[20px] m-3 text-white hover:text-white block px-3  rounded-md text-base font-medium">Home</Link>

                  <Link
                        href="/features"
                        activeClass="Features"
                        to="features"
                        smooth={true}
                        offset={50}
                        duration={500}
                        className="cursor-pointer hover:bg-[#B9A1D6] text-[20px] m-3 text-white hover:text-white block px-3 py-2 rounded-md text-base font-medium">Features</Link>

                  <Link
                        href="/download"
                        activeClass="Download"
                        to="download"
                        smooth={true}
                        offset={50}
                        duration={500}
                        className="cursor-pointer hover:bg-[#B9A1D6] text-[20px] m-3 text-white hover:text-white block px-3 py-2 rounded-md text-base font-medium">Download</Link> 


                  <Link
                        href="/aboutus"
                        activeClass="Aboutus"
                        to="about"
                        smooth={true}
                        offset={50}
                        duration={500}
                        className="cursor-pointer hover:bg-[#B9A1D6] text-[20px] m-3 text-white hover:text-white block px-3 py-2 rounded-md text-base font-medium">About Us</Link> 

                  <Link 
                        href="/login"
                        activeClass="Login"
                        to="login"
                        smooth={true}
                        offset={50}
                        duration={500}
                        className="cursor-pointer hover:bg-[#B9A1D6] text-[20px] m-3 text-white hover:text-white block px-3 py-2 rounded-md text-base font-medium"> Login
                           
                  </Link>          
                  </div>
               </div>
            )}

         </Transition>

         </nav>

      </div>
   )
   }

   export default NavBar;