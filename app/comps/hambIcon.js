const HamburgerIcon = ({ toggle }) => {
  return (
    <div 
      onClick={toggle}
      className="group flex flex-col items-center justify-center w-10 h-10 rounded bg-black transition duration-500 hover:-translate-y-0.5 shadow-lg shadow-[#7699D4] hover:shadow-[#EDF0DA]"
    >
      <span 
        className="block w-6 h-0.5 mb-1 bg-white transition duration-500 transform "
      ></span>
      <span 
        className="block w-6 h-0.5 mb-1 bg-white transition duration-500 transform "
      ></span>
      <span 
        className="block w-6 h-0.5 bg-white transition duration-500 transform "
      ></span>
    </div>
  );
};

export default HamburgerIcon;
