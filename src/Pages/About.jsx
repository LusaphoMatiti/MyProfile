import React, { useState, useEffect } from "react";
import "../Styling/Header.css";
import "../Styling/About.css";

const About = () => {
  const [scrollY, setScrollY] = useState(0);
  const [animationIndex, setAnimationIndex] = useState([
    false,
    false,
    false,
    false,
  ]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimationIndex((prevIndex) => {
        const newAnimationIndex = [...prevIndex];
        newAnimationIndex[newAnimationIndex.indexOf(false)] = true;
        return newAnimationIndex;
      });
    }, 500); // Adjust the delay between animations

    return () => clearTimeout(timeout);
  }, [animationIndex]);

  return (
    <div className="section about">
      <div className="blurry-background"></div>

      <div className="about-content">
        <div
          className="about-title"
          style={{
            transitionDelay: `${animationIndex[0] ? "0s" : "1s"}`, // Delay the first paragraph animation
            transform: `translateX(-${Math.max(0, scrollY - 700) * 0.05}px)`, // Animate from left
          }}
        >
          <h3>About Lusapho</h3>
        </div>

        <div className="paragraphs">
          <p
            className={animationIndex[0] ? "animate" : ""}
            style={{
              transitionDelay: `${animationIndex[0] ? "0s" : "1s"}`, // Delay the first paragraph animation
              transform: `translateX(-${Math.max(0, scrollY - 700) * 0.05}px)`, // Animate from left
            }}
          >
            Hey there, I'm Lusapho Matiti, but you can just call me 'Ludz'. As a
            Front-end Developer, I'm passionate about crafting immersive digital
            experiences that captivate and inspire. My specialty? ReactJS –
            where I blend creativity with cutting-edge technology to bring ideas
            to life.
          </p>
          <p
            className={animationIndex[1] ? "animate" : ""}
            style={{
              transitionDelay: `${animationIndex[0] ? "0s" : "1s"}`, // Delay the first paragraph animation
              transform: `translateX(-${Math.max(0, scrollY - 700) * 0.05}px)`, // Animate from left
            }}
          >
            With a knack for pixel-perfect design and a love for elegant code, I
            thrive on pushing the boundaries of what's possible in the digital
            realm. Whether it's building sleek user interfaces or optimizing
            performance for seamless interactions, I'm all about creating
            wow-worthy experiences that leave a lasting impression.
          </p>
          <p
            className={animationIndex[2] ? "animate" : ""}
            style={{
              transitionDelay: `${animationIndex[0] ? "0s" : "1s"}`, // Delay the first paragraph animation
              transform: `translateX(-${Math.max(0, scrollY - 700) * 0.05}px)`, // Animate from left
            }}
          >
            But it's not all about the code – when I'm not immersed in the world
            of web development, you can find me exploring the great outdoors,
            working-out, playing football with friends, or jamming out to my
            favorite songs. Life's too short to stick to just one passion,
            right?
          </p>
          <p
            className={animationIndex[3] ? "animate" : ""}
            style={{
              transitionDelay: `${animationIndex[0] ? "0s" : "1s"}`, // Delay the first paragraph animation
              transform: `translateX(-${Math.max(0, scrollY - 700) * 0.05}px)`, // Animate from left
            }}
          >
            So, welcome to my corner of the web. Whether you're here to
            collaborate on a project or simply connect with a fellow digital
            enthusiast, I'm thrilled to have you along for the ride. Let's
            innovate, create, and make something special together!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
