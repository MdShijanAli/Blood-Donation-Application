import { MapPinIcon } from "@heroicons/react/24/solid";
import logo from "../../assets/images/logo-footer.png"
import {HiOutlineMail} from "react-icons/hi"
import {  FaPhoneAlt } from "react-icons/fa";
import {  AiFillCaretRight } from "react-icons/ai";
import { Link } from "react-router-dom";


const Footer = () => {

    const year = new Date().getFullYear();
   

  


    return (
        <div>
            <div className="bg-[#1A1A1A]">
                <div className="container px-5 md:mx-auto  py-28">
                     
                    <div className="md:grid grid-cols-3">
                        <div className=""><img className="w-1/2" src={logo} alt="" /></div>
                        <div className="col-span-2">
                            <p className="text-white text-xl">We are world largest and trustful blood donation center. We have been working since 1973 with a prestigious vision to helping patient to provide blood. We are working all over the world, organizing blood donation campaign to grow awareness among the people to donate blood.</p>
                        </div>
                    </div>

                    <hr  className="my-20"/>

                    <div className="md:grid grid-cols-3 gap-5 text-white">
                        <div className="" >
                            <h1 className="text-3xl font-medium mb-10 tracking-wider">CONTACT US</h1>

                            <div className="flex gap-8 items-center">
                                    <HiOutlineMail className="w-6 h-6 text-[#B83332]" />
                                        <div className="text-xl ">
                                                <p className="hover:text-[#B83332]"><a href="mailto:shijan135@gmail.com">shijan135@gmail.com</a></p>
                                                <p className="hover:text-[#B83332]"><a href="mailto:freelancershijan@gmail.com">freelancershijan@gmail.com</a></p>
                                        </div>
                            </div>

                            <div className="flex gap-8 items-center my-6">
                                       <MapPinIcon className='h-6 w-6 text-[#B83332]' />
                              
                                        <div className="text-xl ">
                                                <p className="hover:text-[#B83332]">Newtown-7 no, Dinajpur Sadar</p>
                                                <p className="hover:text-[#B83332]">Dinajpur-5200, Bangladesh</p>
                                        </div>
                            </div>

                            <div className="flex gap-8 items-center">
                                <FaPhoneAlt className="w-6 h-6 text-[#B83332]"/>
                                   
                                        <div className="text-xl ">
                                                <p className="hover:text-[#B83332]"><a href="tel:+8801571261165">Office: (+880) 1571 261 165</a></p>
                                                <p className="hover:text-[#B83332]"><a href="tel:+8801790221828">Cell: (+880) 1790 221 828</a></p>
                                        </div>
                            </div>
                        </div>



                        <div className="my-16 md:my-0">
                            <h1 className="text-3xl font-medium mb-10 tracking-wider">SUPPORT LINKS</h1>

                            
                            <div className="flex gap-16"> 

                                <div >
                                    <div className="flex items-center gap-2">
                                        <AiFillCaretRight className="w-6 h-6 text-[#B83332]" />
                                        <p className="text-xl">Thalassemia</p>
                                    </div>
                                    <div className="flex items-center gap-2 my-5">
                                        <AiFillCaretRight className="w-6 h-6 text-[#B83332]" />
                                        <p className="text-xl">Myelodysasia</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <AiFillCaretRight className="w-6 h-6 text-[#B83332]" />
                                        <p className="text-xl">Hemolytimia</p>
                                    </div>
                                    <div className="flex items-center gap-2 my-5">
                                        <AiFillCaretRight className="w-6 h-6 text-[#B83332]" />
                                        <p className="text-xl">Hyrcoagulable</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <AiFillCaretRight className="w-6 h-6 text-[#B83332]" />
                                        <p className="text-xl">Sicklenemiaxs</p>
                                    </div>
                                </div>


                                <div >
                                    <div className="flex items-center gap-2">
                                        <AiFillCaretRight className="w-6 h-6 text-[#B83332]" />
                                        <p className="text-xl">Thalassemia</p>
                                    </div>
                                    <div className="flex items-center gap-2 my-5">
                                        <AiFillCaretRight className="w-6 h-6 text-[#B83332]" />
                                        <p className="text-xl">Myelodysasia</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <AiFillCaretRight className="w-6 h-6 text-[#B83332]" />
                                        <p className="text-xl">Hemolytimia</p>
                                    </div>
                                    <div className="flex items-center gap-2 my-5">
                                        <AiFillCaretRight className="w-6 h-6 text-[#B83332]" />
                                        <p className="text-xl">Hyrcoagulable</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <AiFillCaretRight className="w-6 h-6 text-[#B83332]" />
                                        <p className="text-xl">Sicklenemiaxs</p>
                                    </div>
                                </div>
                                
                            </div>
                        </div>



                        <div >
                            <h1 className="text-3xl font-medium mb-10 tracking-wider">SUBSCRIBE US</h1>

                            <p className="text-white text-xl">Signup for regular newsletter and stay up to date with our latest news.</p>
                            
                            <form action="" className="mt-5">
                                <input type="email" placeholder="Enter Your Email" className="input h-14 text-xl input-bordered input-info w-full text-black" />
                                <button className="bg-[#EF3D32] w-60 h-14 mt-5 rounded-md text-xl">Subscribe Now</button>
                            </form>
                        </div>
                       
                       
                       
                        
                        
                     </div>




                </div>
                  
                <hr />
     
                <div className="text-white text-center py-8 text-xl">
                    <p>Copyright {year} - Blood Buddies by <Link to="https://www.fiverr.com/users/wp_dev_boss" target="_blank">Md Shijan Ali</Link>. All Rights Reserved.</p>
                </div>

            </div>
        </div>
    );
};

export default Footer;