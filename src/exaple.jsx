import React from 'react';
import './Example.css';
import image1 from './assets/image1.jpg';


function Example() {
  return (
    <div className="App"><div
        className="background-image"
        style={{ backgroundImage: `url(${image1})` }}
      />
      <div className="foreground-content">
        
      </div>
    </div>
  );
}

export default Example
