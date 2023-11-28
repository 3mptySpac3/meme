

const LineArt1 = () => {
  return (
    <svg width="150" height="150" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      {/* Define the lines */}
      <line x1="60" y1="200" x2="60" y2="0" stroke="#EDF0DA" strokeWidth=".5" />
      <line x1="0" y1="100" x2="200" y2="100" stroke="#EDF0DA" strokeWidth=".5" />
      <line x1="30" y1="200" x2="140" y2="0" stroke="#EDF0DA" strokeWidth=".5" />
      <line x1="0" y1="140" x2="200" y2="200" stroke="#EDF0DA" strokeWidth=".5" />


      {/* Define the circle */}
      <circle cx="100" cy="130" r="8" fill="#7699D4" />
    </svg>
  );

};

export default LineArt1;