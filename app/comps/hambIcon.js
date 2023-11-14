const HamburgerIcon = () => {
  return (
     <div className="group flex flex-col items-center justify-center w-10 h-10 rounded bg-[#EDF0DA] hover:bg-black text-white transition duration-500 ">
      <span className="block w-6 h-0.5 bg-black mb-1 group-hover:bg-white transition duration-500"></span>
      <span className="block w-6 h-0.5 bg-black mb-1 group-hover:bg-white transition duration-500"></span>
      <span className="block w-6 h-0.5 bg-black group-hover:bg-white transition duration-500"></span>
    </div>
  );
};

export default HamburgerIcon;