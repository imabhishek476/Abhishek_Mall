import React, { useContext } from 'react'
import myContext from '../../context/data/myContext'
import { Link } from 'react-router-dom';

function Footer() {
  const context = useContext(myContext);
  const { mode } = context;
  return (
    <div>
      <footer className="text-gray-600 body-font bg-gray-300" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '', }}>
        <div className="container px-5 py-24 mx-auto" >
          <div className="flex flex-wrap md:text-left text-center order-first">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3" style={{ color: mode === 'dark' ? 'white' : '' }}>CATEGORIES</h2>
              <nav className="list-none mb-10">
                <li>
                  <Link to={'/'} className="text-gray-600 hover:text-gray-800" style={{ color: mode === 'dark' ? 'white' : '' }}>Home</Link>
                </li>
                <li>
                  <Link to={'/order'} className="text-gray-600 hover:text-gray-800" style={{ color: mode === 'dark' ? 'white' : '' }}>Order</Link>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800" style={{ color: mode === 'dark' ? 'white' : '' }}>Local For Vocal</a>
                </li>
                <li>
                  <Link to={'/cart'} className="text-gray-600 hover:text-gray-800" style={{ color: mode === 'dark' ? 'white' : '' }}>Cart</Link>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3 uppercase" style={{ color: mode === 'dark' ? 'white' : '' }}>Customer Service</h2>
              <nav className="list-none mb-10">
                <li>
                  <Link to={'/returnpolicy'} className="text-gray-600 hover:text-gray-800" style={{ color: mode === 'dark' ? 'white' : '' }}>Return Policy</Link>
                </li>
                <li>
                  <Link to={'/about'} className="text-gray-600 hover:text-gray-800" style={{ color: mode === 'dark' ? 'white' : '' }}>About</Link>
                </li>
                <li>
                  <Link to={'/contact'} className="text-gray-600 hover:text-gray-800" style={{ color: mode === 'dark' ? 'white' : '' }}>Contact Us</Link>
                </li>
              </nav>
            </div>

            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3" style={{ color: mode === 'dark' ? 'white' : '' }}>Services</h2>
              <nav className="list-none mb-10">
                <li>
                  <Link to={'/privacypolicy'} className="text-gray-600 hover:text-gray-800" style={{ color: mode === 'dark' ? 'white' : '' }}>Privacy</Link>
                </li>

              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <img src="https://ecommerce-sk.vercel.app/pay.png" alt="" />
            </div>
          </div>

        </div>

        <div className="bg-gray-200" style={{ backgroundColor: mode === 'dark' ? 'rgb(55 57 61)' : '', color: mode === 'dark' ? 'white' : '', }}>
          <div className="container px-5 py-3 mx-auto flex items-center sm:flex-row flex-col">
            <Link to={'/'} className='flex'>
              <div className="flex ">
                <h1 className=' text-2xl font-bold text-black  px-2 py-1 rounded' style={{ color: mode === 'dark' ? 'white' : '', }}>Abhishek Mall</h1>
              </div>
            </Link>
            <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4" style={{ color: mode === 'dark' ? 'white' : '' }}>© 2023 Abhishek Mall —
              <a href="https://github.com/imabhishek476" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank" style={{ color: mode === 'dark' ? 'white' : '' }}>www.abhishekmall.com</a>
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
              <a href="https://github.com/imabhishek476" className="text-gray-500">
                <svg className='pb-1' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="https://twitter.com/Abhi_Ausstar" className="ml-3 text-gray-500">
                <svg fill="#00ACEE" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </a>
              <a href="https://www.instagram.com/imabhishekausstar/" className="ml-3 text-gray-500">
              <svg className='pb-0.5' xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="24px" height="24px">
                <path d="M 16.5 5 C 10.16639 5 5 10.16639 5 16.5 L 5 31.5 C 5 37.832757 10.166209 43 16.5 43 L 31.5 43 C 37.832938 43 43 37.832938 43 31.5 L 43 16.5 C 43 10.166209 37.832757 5 31.5 5 L 16.5 5 z M 16.5 8 L 31.5 8 C 36.211243 8 40 11.787791 40 16.5 L 40 31.5 C 40 36.211062 36.211062 40 31.5 40 L 16.5 40 C 11.787791 40 8 36.211243 8 31.5 L 8 16.5 C 8 11.78761 11.78761 8 16.5 8 z M 34 12 C 32.895 12 32 12.895 32 14 C 32 15.105 32.895 16 34 16 C 35.105 16 36 15.105 36 14 C 36 12.895 35.105 12 34 12 z M 24 14 C 18.495178 14 14 18.495178 14 24 C 14 29.504822 18.495178 34 24 34 C 29.504822 34 34 29.504822 34 24 C 34 18.495178 29.504822 14 24 14 z M 24 17 C 27.883178 17 31 20.116822 31 24 C 31 27.883178 27.883178 31 24 31 C 20.116822 31 17 27.883178 17 24 C 17 20.116822 20.116822 17 24 17 z"/>
              </svg>
              </a>
              <a href="https://www.linkedin.com/in/abhishekgupta-aus/" className="ml-3 text-gray-500">
                <svg fill="#0a66c2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={0} className="w-5 h-5" viewBox="0 0 24 24">
                  <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                  <circle cx={4} cy={4} r={2} stroke="none" />
                </svg>
              </a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer