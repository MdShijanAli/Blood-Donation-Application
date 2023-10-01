import { ClockIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/solid';


import { Link } from 'react-router-dom';


const HeaderTop = () => {
    return (
        <div className='w-full mx-auto md:flex justify-evenly py-2 gap-5 bg-gray-300'>
            <div className='flex gap-2'>
                <ClockIcon className='h-6 w-6 text-black-500'></ClockIcon>
                <h3>24 HOUR SERVICES - 7 DAYS A WEEK</h3>
            </div>
            <div className='flex gap-2'>
                <MapPinIcon className='h-6 w-6 text-black-500'></MapPinIcon>
                <h3>NEWTOWN 7 NO. DINAJPUR SADAR, DINAJPUR</h3>
            </div>
            <div className='flex gap-2'>
                <EnvelopeIcon className='h-6 w-6 text-black-500'></EnvelopeIcon>
                <h3>FREELANCERSHIJAN@GMAIL.COM</h3>
            </div>

            <div className='flex justify-center gap-2'>
                <Link to='https://www.facebook.com/mdshijanali135' target='_blank'><img className='w-6 h-6' src="" alt="" /></Link>
                <Link to='https://twitter.com/shijan135' target='_blank'><img className='w-6 h-6' src="" alt="" /></Link>
                <Link to='https://www.instagram.com/OmikeShop/' target='_blank'><img className='w-6 h-6' src="" alt="" /></Link>
                <Link to='https://www.linkedin.com/in/freelancershijan/' target='_blank'><img className='w-6 h-6' src="" alt="" /></Link>
            </div>


        </div>
    );
};

export default HeaderTop;