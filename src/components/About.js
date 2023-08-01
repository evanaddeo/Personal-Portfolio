import "./About.css";
import { useNavigate } from "react-router-dom";

// function that displays a paragraph about myself on the left and then a 4x4 grid of photos on the right
function About() {
    const navigate = useNavigate();
    return(
        <div id="About">
            <div>
                <div className="sectionHeaderAb">
                    <span>
                        <hr className="leftLineAb"></hr>
                    </span>
                    <h1 id="topTitleAb">About Me</h1>
                    <span>
                        <hr className="rightLineAb"></hr>
                    </span>
                </div>
            </div>

            <div className="aboutMe">
                <div id="abDescription">
                    <p id="para">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hey! I'm Evan, if I haven't made that clear enough by now. I'm an aspiring NBA player turned Software Engineer, a transition fueled equally by lack of basketball skills and passion for building software.
                        <br></br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I'm currently a senior at The University of Georgia - Morehead Honors College, studying Computer Science and Business. I love programming, following the newest tech trends, and everything finance! 
                        <br></br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Outside of work and school, I thoroughly enjoy watching, talking, and playing sports - really any activity with a competitive nature. Whether I'm hopelessly rooting for a winning season from my Cleveland Browns, 
                        desperately trying to get my golf handicap below 20, or attempting to prove to my friends that I can still dunk, you can always rely on me finding some new way to engage myself.
                    </p>
                </div>
                <div id="photos">
                    <div className="photoRow">
                        <img className="aboutPics" src="./images/brownsPic.png" alt="Jorge" />
                        <img className="aboutPics" src="./images/formalPic.png" alt="Jorge" />
                    </div>
                    <div className="photoRow">
                        <img className="aboutPics" src="./images/viPic.png" alt="Jorge" />
                        <img className="aboutPics" src="./images/sbPic.png" alt="Jorge" />
                    </div>
                </div>
            </div>
            
            <div id="connect">
                <h1 id="connectText">Contact</h1>
                <p id="finish">Shoot me an email if you want to connect! You can also check out my links below to see more :)</p>
                <div id="anchors">
                    <a className="anchor" href="mailto:evanmaddeo@gmail.com">Email</a><span className="spanny">&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</span>
                    <a className="anchor" href="https://www.linkedin.com/in/evanaddeo/">LinkedIn</a><span className="spanny">&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</span>
                    <a className="anchor" href="https://github.com/evanaddeo">Github</a><span className="spanny">&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</span>
                    <button style={{backgroundColor: "transparent", border: "0px"}} className="anchor" onClick={() => {navigate('/Resume');}}>Resume</button>
                </div>
            </div>
        </div>
    );
}

export default About;