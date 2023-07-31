import "./Experience.css";
import ADPLogo from "../images/ADPLogo.png";
import VILogo from "../images/VILogo.png";
import ACMLogo from "../images/ACMLogo.jpg";
import SkillTag from "./SkillTag";

// function that displays 3 rows, each representing a different job, including the company name, job title, and dates worked
function Experience() {
    return (
        <div id="Experience">
            <div className="sectionHeader">
                <span>
                    <hr className="leftLine"></hr>
                </span>
                <h1 id="topTitle">Work Experience</h1>
                <span>
                    <hr className="rightLine"></hr>
                </span>
            </div>
            <div className="job">
                <img className="companyLogo" src={ ADPLogo } alt="pic" />
                <div className="jobInfo">
                    <div className="jobHeader">
                        <div className="titles">
                            <h2 className="company">ADP</h2>
                            <h3>Application Developer Intern</h3>
                        </div>
                        <div className="dates">
                            <h4>Atlanta, GA</h4>
                            <h4>2023 (Present)</h4>
                        </div>
                    </div>
                    <p className="description"> I architected and built a configuration package to parse, merge, and apply settings for any internal integrating application. I worked alongside the Enterprise Architecture team to implement this package in various Go-lang services, reducing application codebases and providing abstracted functionality for any future projects.</p>
                    <div className="projSkills">
                        <SkillTag skillName="Go-lang" url="/images/Go-langLogo.png" /><SkillTag skillName="MongoDB" url="https://cdn.cdnlogo.com/logos/m/30/mongodb-icon.svg" />
                        <SkillTag skillName="AWS" url="/images/AWSLogo2.png" /><SkillTag skillName="HTTP" url="" />
                        <SkillTag skillName="REST API" url="" />\
                    </div>
                </div>  
            </div>
            <div className="job">
                <img className="companyLogo" src={ VILogo } alt="pic" />
                <div className="jobInfo">
                    <div className="jobHeader">
                        <div className="titles">
                            <h2 className="company">Vanderlande</h2>
                            <h3>Software Development Intern</h3>
                        </div>
                        <div className="dates">
                            <h4>Atlanta, GA</h4>
                            <h4>2022</h4>
                        </div>
                    </div>
                    <p className="description"> I worked alongside a team of 15 engineers to build an automated warehousing system for Wal-mart distribution centers. I worked extensively on the development of the "pick" and "put" robotics features of this system and used my lunch break to establish dominance on the ping-pong table.</p>
                    <div className="projSkills">
                        <SkillTag skillName="Java" url="https://cdn-icons-png.flaticon.com/512/226/226777.png" /><SkillTag skillName="Kubernetes" url="https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Kubernetes_logo_without_workmark.svg/1055px-Kubernetes_logo_without_workmark.svg.png" />
                        <SkillTag skillName="Cucumber" url="https://i.pinimg.com/originals/87/e8/49/87e8491cdd5ee5dacf3059f0c0832ce7.png" /><SkillTag skillName="Docker" url="https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png" />
                        <SkillTag skillName="Agile" url="https://cdn-icons-png.flaticon.com/512/2784/2784065.png" />
                    </div>
                </div>  
            </div>
            <div className="job">
                <img className="companyLogo" src={ ACMLogo } alt="pic" />
                <div className="jobInfo">
                    <div className="jobHeader">
                        <div className="titles">
                            <h2 className="company">ACM (Association for Computing Machinery)</h2>
                            <h3>Secretary</h3>
                        </div>
                        <div className="dates">
                            <h4>Athens, GA</h4>
                            <h4>2023 (Present)</h4>
                        </div>
                    </div>
                    <p className="description"> In my current role on the ACM executive board, I primarily oversee Treasurer and Corporate Outreach responsibilities. I handle over $1000 in organizational budget to maximize our impact on the UGA Computer Science community, using appropriations to host informational and career-enhancing workshops.</p>
                    <div className="projSkills">
                        <SkillTag skillName="Excel" url="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Microsoft_Office_Excel_%282019%E2%80%93present%29.svg/2203px-Microsoft_Office_Excel_%282019%E2%80%93present%29.svg.png" /><SkillTag skillName="Financial Accounting" url="" />
                        <SkillTag skillName="Leadership" url="" />
                    </div>
                </div>  
            </div>
        </div>
    );
}

export default Experience;