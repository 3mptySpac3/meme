"use client";
import NavBar from "@/app/comps/nav";
import React, {useState, useEffect}  from 'react';
import { Icon } from '@iconify/react';
import Link from 'next/link';

const PositionedElement = ({ x, y, children }) => {
  const style = {
    position: 'absolute',
    top: `${y}px`, 
    left: `${x}px`, 
  };
  return <div style={style}>{children}</div>;
};


const SettingsPage = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  return (
    <div >
      <div className="top">
        <NavBar />
      </div>

      <div className="Buttom">
      <div>
        <PositionedElement x={20} y={137}>
          <div className="bg-[#EDF0DA] w-[60px] h-[350px] rounded-2xl font-thin italic  border border-black hover:shadow-md ">



          <div className=" transition duration-500 hover:-translate-y-0.5">
          <PositionedElement x={9} y={277}>
              <div className="bg-black w-[40px] h-[40px] rounded-full shadow-lg shadow-black">
              </div>
            </PositionedElement>

            <PositionedElement x={12} y={282}>
            <div>
              {/*Settings*/}
              <Link href="./Settings">
              {isMounted && (
              <Icon icon="arcticons:settings" color="white" width="35" height="30" />
              )}
              </Link>
            </div>
            </PositionedElement >
            </div>

            



            <div className=" transition duration-500 hover:-translate-y-0.5">
            <PositionedElement x={10} y={31}>
            <div className="bg-black w-[40px] h-[40px] rounded-full shadow-lg shadow-black">
            </div>
            </PositionedElement>

            <PositionedElement x={15} y={35}>
            <div> 
              <Link href="/">
            {isMounted && (
             <Icon icon="iconamoon:home-thin"  color="white" width="30" height="30" />
            )}
              </Link>
            </div>
            </PositionedElement>
            </div>




            <div className=" transition duration-500 hover:-translate-y-0.5">
            <PositionedElement x={9} y={160}>
              <div className="bg-black w-[40px] h-[40px] rounded-full shadow-lg shadow-black">
              </div>
            </PositionedElement>

            <PositionedElement x={10} y={160}>
            <div>
            {isMounted && (
             <Icon icon="ph:plus-thin" color="white" width="40" height="40" />
            )}
            </div>
            </PositionedElement>
            </div>

          </div>
        </PositionedElement>
      </div>
      <PositionedElement x={1205} y={290}>
      <div className="relative group transition duration-500 hover:translate-x-0.5">
      <Link href="/">
        <div className="bg-black w-[50px] h-[50px] rounded-full shadow-lg shadow-black"></div>
        {isMounted && (
          <div className="absolute inset-0 flex justify-center items-center">
            <Icon icon="arcticons:next-player" color="white" width="35" height="35" />
          </div>
        )}
        </Link>
      </div>
    </PositionedElement>
      </div>

    </div>
  );
}

export default SettingsPage;