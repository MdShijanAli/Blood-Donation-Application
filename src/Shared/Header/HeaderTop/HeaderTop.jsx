import { ClockIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/solid';
import {FaFacebookF,FaInstagram,FaTwitter,FaLinkedinIn } from 'react-icons/fa';


import { Link } from 'react-router-dom';


const HeaderTop = () => {
    return (
        <div className='hidden xl:block py-4 bg-[#EF3D32] '>
           
            <div className='md:container md:px-20 px-0 md:mx-auto md:flex  justify-between'>
            
                <div className='md:flex gap-5 text-white text-sm lg:text-md font-medium tracking-wide'>
                        <div className='flex items-center gap-2'>
                                <ClockIcon className='lg:h-5 lg:w-5 h-4 w-4 text-black-500'></ClockIcon>
                                <h3 className=''>24 HOUR SERVICES - 7 DAYS A WEEK</h3>
                        </div>
                            <div className='flex items-center gap-2'>
                                        <MapPinIcon className='lg:h-5 lg:w-5 h-4 w-4 text-black-500'></MapPinIcon>
                                        <Link to="https://maps.app.goo.gl/eDPzeVWPQj8UjMu19" target="_blank">
                                        <h3>NEWTOWN 7 NO. DINAJPUR SADAR, DINAJPUR</h3>
                                        </Link>
                            </div>
                            <div className='flex items-center gap-2'>
                                <EnvelopeIcon className='lg:h-5 lg:w-5 h-4 w-4 text-black-500'></EnvelopeIcon>
                                <h3><a href="mailto:shijan135@gmail.com"> FREELANCERSHIJAN@GMAIL.COM</a> </h3>
                            </div>
                </div>

            <div className='flex justify-center gap-2'>
                <Link to='https://www.facebook.com/mdshijanali135' target='_blank'><FaFacebookF className='w-6 h-6 p-1 hover:bg-white hover:text-[#EF3D32] bg-slate-100 rounded-full' /></Link>
                <Link to='https://twitter.com/shijan135' target='_blank'><FaTwitter className='w-6 h-6 p-1 hover:bg-white hover:text-[#EF3D32] bg-slate-100 rounded-full' /></Link>
                <Link to='https://www.instagram.com/OmikeShop/' target='_blank'><FaInstagram className='w-6 h-6 p-1 hover:bg-white hover:text-[#EF3D32] bg-slate-100 rounded-full' /></Link>
                <Link to='https://www.linkedin.com/in/freelancershijan/' target='_blank'><FaLinkedinIn className='w-6 h-6 p-1 hover:bg-white hover:text-[#EF3D32] bg-slate-100 rounded-full' /></Link>
            </div>
            </div>


        </div>
    );
};

export default HeaderTop;