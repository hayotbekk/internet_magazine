import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({ length }) => {
    return (
        <div>
            <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link to={"/"}>
                        <div className="flex items-center space-x-3 rtl:space-x-reverse">
                            <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
                            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">shop</span>
                        </div>
                    </Link>
                    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        <Link to="/cart">
                            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                <h2 className='flex'>
                                    <svg width="20 " height="25" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M.75-.02a.75.75 0 100 1.5l.408-.006 1.606 1.281 1.839 6.881L4.237 12a2 2 0 102.188 2.722l5.705.028a2 2 0 100-1.5l-5.705-.028a2.007 2.007 0 00-.722-.898l.438-2.632 7.933.027 1.91-7.715H4.227L1.683-.026 1.68-.02v-.005L.75-.02z" fill="#000"></path>
                                    </svg> <sup className='text-sm'>{length}</sup>
                                </h2>
                            </button>
                        </Link>
                        <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>
                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <Link to="/products" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">
                                    <a href="#" class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-white-700 md:p-0 md:dark:text-white-500" aria-current="page">Product</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header
