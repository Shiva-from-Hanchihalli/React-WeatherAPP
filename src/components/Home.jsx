import React from 'react';

const Home = () => {
  return (
    <div className="home-container" style={{ display: 'flex', alignItems: 'center' }}>
      <h1 style={{ color: 'rgb(209, 209, 231)', marginRight: '10px' }}>Weather Forecast</h1>
      <img 
        // src="https://pragativadi.com/core/uploads/2022/07/SAVE_20220703_084840.jpg" 
        src="https://lh3.googleusercontent.com/TwRTQDNcayd8lZSl1ASGIWlrmi28DhZkTjqitwKUPSZoy0TGq6jSs7hyhLoJUVN6iDvFTw899xKcf3nzyDkhdW-9RPkBcaWScMw=rw"
        alt="Weather Icon" 
        style={{ width: '50px', height: '50px' }}
      />
    </div>
  );
};

export default Home;


