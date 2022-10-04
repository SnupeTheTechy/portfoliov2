import React from "react";
import "./about.css";

function About() {
  const videoImg =
    "https://images.pexels.com/photos/13449001/pexels-photo-13449001.jpeg";
  const awardImg =
    "https://i.pinimg.com/originals/7a/b4/55/7ab45597a5c3068eb6fea6025ef52ed8.jpg";
  return (
    <div className="about">
      <div className="aboutLeft">
        <div className="aboutCard background"></div>
        <div className="aboutCard">
          <img src={videoImg} alt="" className="aboutImage" />
        </div>
      </div>
      <div className="aboutRight">
        <h1 className="aboutTitle">About Me</h1>
        <p className="aboutSubTitle">
          I am a full stack web developer with a passion for creating
        </p>
        <p className="aboutDescription">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur
          cum non officia voluptatibus eveniet dicta sapiente, corporis, dolore
          placeat, odit itaque ex ullam. Repudiandae neque similique inventore
          vero obcaecati quo!Lorem ipsum dolor sit amet consectetur,
          adipisicing. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Beatae tenetur ipsa voluptatem sed ab error dolore sint vitae
          doloribus quis. Laudantium et reprehenderit laborum beatae dolorum
          quibusdam dolore eligendi exercitationem.
        </p>
        <div className="aboutAwards">
          <img src={awardImg} alt="Image of award" className="awardImage" />
          <div className="awardTexts">
            <h4 className="awardTitle">International Design Award</h4>
            <p className="awardDesscription">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
              ipsum, dolor sit amet consectetur adipisicing elit. Aut sit
              voluptatum doloribus asperiores sapiente provident dolor
              voluptatem eos libero repudiandae.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
