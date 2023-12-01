"use client";
import React, { useState,  } from 'react';
import HamburgerIcon from './hambIcon';
import { Icon } from '@iconify/react';
import Link from 'next/link';

const NavBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);


  return (
    <div >
      <div id="Above Div" style={{ height: '5vh' }} className="w-full relative flex items-center justify-center">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="absolute top-5 right-5 p-2 py-1 rounded-md "
          >
            <HamburgerIcon isOpen={isSidebarOpen} toggle={() => setIsSidebarOpen(!isSidebarOpen)}/>
          </button>
          {/* Horizontal Dropdown Sidbar */}
          {isSidebarOpen&& (
              <div className={`w-10/12 bg-[#EDF0DA] mt-16 rounded-lg transform transition-all duration-75 ease-in-out ${isSidebarOpen ? 'translate-y-0' : '-translate-y-full'}`} >
              <div className='border-black'>
                {/*  Dropdown Sidbar content */}
                <ul className="flex flex-row justify-between">
                  <li className="flex-1 text-center">
                    <div className="flex flex-col items-center justify-center">
                      <Link href="/Pages/Intellect" >
                        <div className='flex justify-center'>
                          <Icon icon="ph:brain-thin" color="black" width="40" height="40" />
                        </div>
                      <span className='font-thin italic'>Intellect</span>
                      </Link>
                    </div>
                  </li>
                  <li className="flex-1 text-center">
                    <div className="flex flex-col items-center justify-center">
                      <Link href="/Pages/Physical">
                        <div  className='flex justify-center'>
                          <Icon icon="circum:dumbbell" color="black" width="40" height="40" />
                        </div>
                      <span className='font-thin italic'>Physical</span>
                      </Link>
                    </div>
                  </li>
                  <li className="flex-1 text-center">
                    <div className="flex flex-col items-center justify-center">
                      <Link href="/Pages/Family">
                        <div  className='flex justify-center'>
                      <Icon icon="ph:baby-thin" color="black" width="40" height="40" />
                        </div>
                      <span className='font-thin italic'>Family</span>
                      </Link>
                    </div>
                  </li>
                  <li className="flex-1 text-center">
                    <div className="flex flex-col items-center justify-center">
                      <Link href="/Pages/Love">
                        <div  className='flex justify-center'>
                      <Icon icon="ph:heart-thin" color="black" width="40" height="40" />
                        </div>
                      <span className='font-thin italic'>Love</span>
                      </Link>
                    </div>
                  </li>
                  <li className="flex-1 text-center">
                    <div className="flex flex-col items-center justify-center">
                      <Link href="/Pages/Friendship">
                        <div  className='flex justify-center'>
                      <Icon icon="arcticons:funmax" color="black" width="40" height="40" />
                        </div>
                      <span className='font-thin italic'>Friends</span>
                      </Link>
                    </div>
                  </li>
                  <li className="flex-1 text-center">
                    <div className="flex flex-col items-center justify-center">
                      <Link href="/Pages/Wealth">
                        <div  className='flex justify-center'>
                      <Icon icon="healthicons:money-bag-outline" color="black" width="40" height="40" />
                        </div>
                      <span className='font-thin italic'>Wealth</span>
                      </Link>
                    </div>
                  </li>
                  <li className="flex-1 text-center">
                    <div className="flex flex-col items-center justify-center">
                      <Link href="/Pages/Self">
                        <div  className='flex justify-center'>
                      <Icon icon="arcticons:hwmirror" color="black" width="40" height="40" />
                        </div>
                      <span className='font-thin italic'>Self</span>
                      </Link>
                    </div>
                  </li>
                </ul>

              </div>
            </div>)}
        </div> 
        {/* End of above div */}

        <div id="Border Line" className="border border-[black] w-full mt-16"></div> 
        {/* Border Line seperating top from buttom */}
    </div>
  );
}

export default NavBar;