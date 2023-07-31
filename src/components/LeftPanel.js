import "./LeftPanel.css"
import React, { useState } from 'react';

import avatarImage2 from '../images/avatar2.jpg';
import picImage1 from "../images/picture1.JPG";
import picImage2 from "../images/picture2.jpg";
import picImage3 from "../images/picture3.jpg";

import ProfileLinks from './ProfileLinks';
import LILogo from "../images/LI.png";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faAngleLeft, faAngleRight);

function LeftPanel() {
  const images = [avatarImage2, picImage3, picImage1, picImage2]
  const [imgCounter, setImgCounter] = useState(0);


  // side = 0 for left, 1 for right
  const switchImg = (side) => {
    setImgCounter(prevCounter => {
      if (side === 0) {
        if (prevCounter === 0) {
          return images.length - 1;
        } else {
          return prevCounter - 1;
        }
      } else {
        if (prevCounter === images.length - 1) {
          return 0;
        } else {
          return prevCounter + 1;
        }
      }
    });
  };

  const animateImg = (shouldAnimate, side) => {
    const imgElement = document.getElementById('profilePic');
    if (shouldAnimate) {
      if (side === 0) {
        imgElement.classList.add('animateLeft');
      } else {
        imgElement.classList.add('animateRight');
      }
    } else {
      if (side === 0) {
        imgElement.classList.remove('animateLeft');
      } else {
        imgElement.classList.remove('animateRight');
      }
    }
  };


  return (
    <div id="LeftPanel">
      <div id="pics">
        <FontAwesomeIcon class="shiftPicLeft"
                         icon="angle-left" 
                         onClick={() => switchImg(0)}
                         onMouseEnter={() => animateImg(true, 0)}
                         onMouseLeave={() => animateImg(false, 0)}/>
        <img id ="profilePic" className="animateImg" src={images[imgCounter]} alt="avatar"/>
        <FontAwesomeIcon class="shiftPicRight" 
                         icon="angle-right" 
                         onClick={() => switchImg(1)}
                         onMouseEnter={() => animateImg(true, 1)}
                         onMouseLeave={() => animateImg(false, 1)}/>
      </div>
      
      <h1 id="name">Evan Addeo</h1>
      <h3 id="occupation">Software Engineer</h3>

      <p id="traits">Problem Solver <span className="del">|</span> Active Learner &nbsp;&nbsp;<br></br> Natural Leader <span className="del">|</span> Tech Enthusiast <br></br> &nbsp;&nbsp;&nbsp;&nbsp;Self Starter <span className="del">|</span> Team Oriented</p>

      <ProfileLinks url='https://www.linkedin.com/in/evanaddeo/' img={LILogo}/>
      
    </div>
  );
}

export default LeftPanel;
