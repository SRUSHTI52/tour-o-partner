
import React from 'react';
import '../Background.css';
import bckgimg from '/image.png';
import marker from '/marker.png';



const Background = () => {
  const destinations = [
    { icon: '/alaska.png', name: "Alaska", top: "23%", left: "8%" },
    { icon: '/sudan.png', name: "Sudan", top: "58%", left: "50%" },
    {icon: '/pinnacles.png',  name: "The Pinnacles", top: "75%", left: "82%" },
    { icon: '/moscow.png', name: "Moscow", top: "27%", left: "70%" },
    {icon: '/rio.png',  name: "Rio de Janeiro", top: "65%", left: "28%" }
  ];

  return (
    <div className="background-container">
      <img src={bckgimg} alt="Background" className="background-image" />
      {destinations.map((destination, index) => (
        <div
          key={index}
          className="destination-marker"
          style={{ top: destination.top, left: destination.left }}
        >
          <img src={marker} alt="marker" height={'50px'} width={'50px'} />
          <div className="tooltip">
            <img src={destination.icon} className='icon'/>{destination.name}</div>
        </div>
      ))}
    </div>
  );
};

export default Background;
