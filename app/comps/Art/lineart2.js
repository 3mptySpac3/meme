const LineArt2 = () => {
  return (
    <svg width="400" height="400" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      {/* Define the lines */}
      <line x1="10" y1="100" x2="200" y2="20" stroke="#EDF0DA" strokeWidth=".5" />
      <line x1="190" y1="75" x2="170" y2="140" stroke="#EDF0DA" strokeWidth=".5" />
      <line x1="120" y1="90" x2="100" y2="35" stroke="#EDF0DA" strokeWidth=".5" />
      <line x1="200" y1="120" x2="100" y2="120" stroke="#EDF0DA" strokeWidth=".5" />
      <line x1="100" y1="0" x2="100" y2="200" stroke="#EDF0DA" strokeWidth=".5" />
      <line x1="0" y1="120" x2="200" y2="100" stroke="#EDF0DA" strokeWidth=".5" />
      {/* Define the circle */}
      <circle cx="130" cy="140" r="8" fill="#7699D4"/>
    </svg>
  );
};

export default LineArt2;