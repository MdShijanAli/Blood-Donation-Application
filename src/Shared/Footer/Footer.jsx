
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/images/logoo.png';


const Footer = () => {
    return (
        <div>
            <section className="py-2 bg-gray-800">
                <div className="md:mx-auto md:container">
                    <div className="text-center xl:flex xl:items-center xl:justify-between xl:text-left">
                        <div className="xl:flex xl:items-center xl:justify-start">
                            <img className="w-auto mx-auto h-20" src={logo} alt="" />

                            <p className="mt-5 text-sm text-white xl:ml-20 xl:mt-0">© Copyright 2022 Md Shijan Ali</p>
                        </div>

                        <div className="items-center mt-8 xl:mt-0 xl:flex xl:justify-end xl:space-x-8">
                            <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 xl:justify-end">
                                <li>
                                    <NavLink to='/' className="text-sm text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"> Home </NavLink>
                                </li>

                                <li>
                                    <NavLink to='/services' className="text-sm text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"> Services </NavLink>
                                </li>

                                <li>
                                    <NavLink to='/blog' className="text-sm text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"> Blog </NavLink>
                                </li>



                                <li>
                                    <NavLink to='/contact' className="text-sm text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"> Contact </NavLink>
                                </li>


                            </ul>

                            <div className="w-full h-px mt-8 mb-5 xl:w-px xl:m-0 xl:h-6 bg-gray-50/20"></div>


                            <div className='flex gap-2 items-center justify-center'>
                                <Link to='https://www.facebook.com/mdshijanali135' target='_blank'><img className='w-10 h-10' src="" alt="" /></Link>
                                <Link to='https://twitter.com/shijan135' target='_blank'><img className='w-10 h-10' src="" alt="" /></Link>
                                <Link to='https://www.instagram.com/OmikeShop/' target='_blank'><img className='w-10 h-10' src="" alt="" /></Link>
                                <Link to='https://www.linkedin.com/in/freelancershijan/' target='_blank'><img className='w-10 h-10' src="" alt="" /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Footer;