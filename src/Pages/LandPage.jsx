import React, { useState, useEffect } from "react";
import "../Styling/Header.css";
import "../Styling/LandPage.css";

const LandPage = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="section landpage">
      <div className="land-content">
        <div
          className="land-img"
          style={{
            transform: `translateX(-${scrollY * 0.05}px)`, // Move from the left
          }}
        >
          <img src="Ludz.jpg" alt="hb" />
        </div>
        <div className="animate-left">
          <h1>Hi, I'm Lusapho.</h1>
          <h2>Let's build something awesome together!</h2>
        </div>
      </div>
    </div>
  );
};

export default LandPage;
