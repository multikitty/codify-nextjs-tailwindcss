// import Link from 'next/link'
import React, { useState } from 'react'
import { Link } from 'react-scroll'

const Navbar = () => {
  const [sideNav, setSideNav] = useState(false)

  const handleNav = () => {
    setSideNav(!sideNav)
  }

  return (
    <div className='max-w-screen-xl mx-auto p-4 '>
      <nav className="flex h-9 items-center justify-between" aria-label="Global">
        <div className="flex lg:min-w-0 lg:flex-1" aria-label="Global">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            {/* <img className="h-8" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" /> */}
            <h2 className='inline-block rounded-lg  py-2 text-2xl leading-6 text-black font-bold '>CoDify</h2>
          </a>
        </div>
        <div className='flex'>
          <div className="flex lg:hidden ">
            <button type="button" onClick={handleNav} className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
              <span className="sr-only">Open main menu</span>

              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
          <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:gap-x-1">
            <Link to="home" spy={true} smooth={true} offset={-80} duration={500} className="font-semibold text-gray-900 hover:text-gray-900 hover:bg-zinc-200 py-2 px-4 rounded-md cursor-pointer">Home</Link>

            <Link to="blogs" spy={true} smooth={true} offset={-30} duration={500} className="font-semibold text-gray-900 hover:text-gray-900 hover:bg-zinc-200 py-2 px-4 rounded-md cursor-pointer">Blogs</Link>

            <Link to="price" spy={true} smooth={true} offset={10} duration={500} className="font-semibold text-gray-900 hover:text-gray-900 hover:bg-zinc-200 py-2 px-4 rounded-md cursor-pointer">Pricing</Link>

            <Link to="home" spy={true} smooth={true} offset={50} duration={500} className="font-semibold text-gray-900 hover:text-gray-900 hover:bg-zinc-200 py-2 px-4 rounded-md cursor-pointer">Company</Link>
          </div>
          <div className="hidden lg:flex  ml-3" >
            <Link to="demo" spy={true} smooth={true} offset={-80} duration={500} className="inline-block rounded-lg px-5 py-2 text-sm font-semibold leading-6 text-gray-900 shadow-sm ring-1 ring-gray-900/10 hover:ring-gray-900/20 cursor-pointer">Log in</Link>
          </div>
        </div>
      </nav>

      {/* {sideNav && */}
      <div className={sideNav ? ' ease-in-out duration-100' : 'hidden'}>
        <div focus="true" className="fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 ">
          <div className="flex h-9 items-center justify-between">
            <div className="flex">
              <h2 className='inline-block rounded-lg  py-2 text-2xl leading-6 text-black font-bold '>CoDify</h2>
            </div>
            <div className="flex">
              <button type="button" onClick={handleNav} className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
                <span className="sr-only">Close menu</span>
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link to="home" spy={true} smooth={true} offset={-80} duration={500} className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-300" onClick={handleNav}>Home</Link>

                <Link to="blogs" spy={true} smooth={true} offset={-80} duration={500} className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-300" onClick={handleNav}>Blogs</Link>

                <Link to="price" spy={true} smooth={true} offset={-80} duration={500} className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-300" onClick={handleNav}>Pricing</Link>

                <Link to="home" spy={true} smooth={true} offset={-80} duration={500} className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-300" onClick={handleNav}>Company</Link>
              </div>
              <div className="py-6">
                <Link to="demo" spy={true} smooth={true} offset={-80} duration={500} className="inline-block rounded-lg px-5 py-2 text-sm font-semibold leading-6 text-gray-900 shadow-sm ring-1 ring-gray-900/10 hover:ring-gray-900/20 cursor-pointer">Log in</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* } */}

    </div>
  )
}

export default Navbar