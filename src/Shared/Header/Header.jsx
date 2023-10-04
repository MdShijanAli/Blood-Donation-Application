import { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import { UserCircleIcon } from '@heroicons/react/24/solid'

import toast from 'react-hot-toast';
import HeaderTop from './HeaderTop/HeaderTop';

import { AuthContext } from '../../utilities/AuthProvider/AuthProvider';



const Header = () => {
    const [navbar, setNavbar] = useState(false);
    const { user, logOut } = useContext(AuthContext);
    console.log('header user', user)
    const handleLogout = () => {
        logOut()
            .then(() => {
                console.log('successfuly logout');
                toast.success('You have logged Out Successfully!!')
            })
            .catch(error => {
                console.error('error', error.message)
            })
    }
    return (

        <div>
            <HeaderTop></HeaderTop>

            <nav className=" bg-white shadow py-4 sticky top-0 z-50">
                <div className="xl:container lg:px-20 px-5  md:mx-auto justify-between  md:items-center md:flex ">
                    <div>
                        <div className="flex items-center justify-between py-3 md:py-2 md:block">
                            <NavLink to='/'>
                                <img className='h-14' src={logo} alt="" />
                            </NavLink>
                            <div className="md:hidden">
                                <button
                                    className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                    onClick={() => setNavbar(!navbar)}
                                >
                                    {navbar ? (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6 text-black"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    ) : (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6 text-black"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M4 6h16M4 12h16M4 18h16"
                                            />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>



                    <div className='md:flex gap-10 items-center'>
                        <div
                            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
                                }`}
                        >
                            <ul className="items-center xl:text-lg font-semibold uppercase justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                                <li className="text-black hover:text-[#0EA5E9]">
                                    <NavLink to='/'>Home</NavLink>
                                </li>
                                <li className="text-black hover:text-[#0EA5E9]">
                                    <NavLink to='/about-us'>About Us</NavLink>
                                </li>
                                <li className="text-black hover:text-[#0EA5E9]">
                                    <NavLink to='/campaign'>Compaign</NavLink>
                                </li>
                                <li className="text-black hover:text-[#0EA5E9]">
                                    <NavLink to='/blogs'>Blog</NavLink>
                                </li>

                                <li className="text-black hover:text-[#0EA5E9]">
                                    <NavLink to='/contact'>Contact</NavLink>
                                </li>

                            </ul>

                            <div className="mt-10 text-center md:hidden ">
                                
                            {
                            user?.uid ? <Link to='/profile' onClick={handleLogout}>
                            <div className="avatar">
                            <div className="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                          
                                        <img className='' alt='profilePhoto' src={user?.photoURL} title={user?.displayName}></img> 
                                
                                </div>
                                </div>
                            </Link> : 
                                
                                <Link to='/login'>
                            
                                          <div className="avatar">
                                                   <div className=" rounded-full ring ring-primary ring-offset-base-100 ">
                                                        <UserCircleIcon  className='w-14 h-14 '></UserCircleIcon>
                                                  </div>
                                          </div>
                                 </Link>
                        }
                                
                                
                            </div>
                        </div>



                        <div className="hidden md:flex ">
                        {
                            user?.uid ? <Link to='/profile' onClick={handleLogout}>
                            <div className="avatar">
                            <div className="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                          
                                      <img className='w-full' alt='profilePhoto' src={user?.photoURL} title={user?.displayName}></img>
                                
                                </div>
                                </div>
                            </Link> : 
                                
                                <Link to='/login'>
                            
                                          <div className="avatar">
                                                   <div className=" rounded-full ring ring-primary ring-offset-base-100 ">
                                                        <UserCircleIcon  className='w-14 h-14 '></UserCircleIcon>
                                                  </div>
                                          </div>
                                 </Link>
                        }
     
            
                    </div>


                    </div>



                </div>
            </nav>
        </div>
    );
};

export default Header;