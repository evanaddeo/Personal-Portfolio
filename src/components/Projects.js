import "./Projects.css";

// function that displays 3 horizontally listed blocks
// each block contains a title, a short description, and a link to the project
// the blocks also have an image of the project at the top
// the blocks are responsive and will stack on top of each other when the screen is too small
function Projects() {
    return (
        <div id="Projects">
            <div className="sectionHeaderProj">
                <span>
                    <hr className="leftLineProj"></hr>
                </span>
                <h1 id="topTitleProj">Projects</h1>
                <span>
                    <hr className="rightLineProj"></hr>
                </span>
            </div>
            <div className="container">
                <div className="projContainer">
                    <img id="dbfit" 
                        src="./images/dbfit.PNG" 
                        alt="project screenshot" 
                        style={{margin: "1% 0% 2% 4%"}}/>
                    <div className="projContent">
                    <h2 className="projTitle">DawgByte Fitness</h2>
                    <h3 className="stuffused">JavaScript - React Native - Firebase</h3>
                    <p className="myP"> - Fitness app designed to combine the motivation, achievement, and social aspects of fitness that I couldn't find in pre-existing mobile apps.</p>
                    <p className="myP"> - Aiming to release on the iTunes & Google Play store in early 2024.</p>
                    </div>
                    
                </div>
                <div className="projContainer">
                    <div className="projContent">
                    <h2 className="projTitle">iTunes Clone</h2>
                    <h3 className="stuffused">Java - JavaFX - Maven</h3>
                    <p className="myP"> - Created a JavaFX GUI using threads and JSON parsing to request the API, parse the HTTP response, and display shifting tiles that iterate through the top 100 results.</p>
                    <p className="myP"> - Utilized a search query to the iTunes Search API to replicate a simplified version of the iTunes app.</p>
                    </div>
                    <img className="projPics" 
                        src="./images/itunesClone.png" 
                        alt="project screenshot" 
                        style={{margin: "2% 2.5% 2% 0%"}}/>
                </div>
                <div className="projContainer">
                    <img id="portfolio"
                        src="./images/portfolioPic.png" 
                        alt="project screenshot" 
                        style={{margin: "2% 0% 3% 2%"}}/>
                    <div className="projContent">
                    <h2 className="projTitle">All About Evan</h2>
                    <h3 className="stuffused">React - JavaScript</h3>
                    <p className="myP"> - A personal portfolio website aimed to highlight my experience, skill-set, and accomplishments. Admittedly, my eye for UI design is still a work in progress...</p>
                    <p className="myP">- Built to not only display my professional capabilities but also dive into who I am as a person as well!</p>
                    </div>
                    
                </div>
            </div>
            
        </div>
    );
}

export default Projects;