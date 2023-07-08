import "./About.css";

// function that displays a paragraph about myself on the left and then a 4x4 grid of photos on the right
function About() {
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
                <p>
                    About about me me me me about about me about me.
                </p>
            </div>
            <div>
                <img src="https://i.imgur.com/6XOc1ZJ.png" alt="Jorge" />
            </div>
        </div>
    );
}

export default About;