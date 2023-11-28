const LineArt3 = () => {
  return (
<svg width="150" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">

  <line x1="10" y1="100" x2="200" y2="20" stroke="#EDF0DA" strokeWidth=".5"  />
  <line x1="190" y1="75" x2="170" y2="140" stroke="#EDF0DA" strokeWidth=".5"  />
  <line x1="75" y1="150" x2="100" y2="20" stroke="#EDF0DA" strokeWidth=".5"  />
  <line x1="120" y1="90" x2="100" y2="35" stroke="#EDF0DA" strokeWidth=".5"  />
  <line x1="200" y1="120" x2="100" y2="120" stroke="#EDF0DA" strokeWidth=".5"  />
  <line x1="0" y1="120" x2="200" y2="100" stroke="#EDF0DA" strokeWidth=".5"  />
  
  {/* Define the circle with a shadow for depth */}
  <circle cx="150" cy="90" r="8" fill="#7699D4"/>
</svg>

  );
};

export default LineArt3;