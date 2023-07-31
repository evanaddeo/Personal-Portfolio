import "./Skills.css";
import SkillTag from "./SkillTag";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBriefcase, faGraduationCap, faFaceSmile } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faBriefcase, faGraduationCap, faFaceSmile);

// function the displays 3 vertically stacked elements
// each element has a small image and a title
// underneath each title is a list of <Skilltag /> components 
function Skills() {
    return (
        <div id="Skills">
            <div className="sectionHeaderSkills">
                <span>
                    <hr className="leftLineSkills"></hr>
                </span>
                <h1 id="topTitleSkills">My Skills</h1>
                <span>
                    <hr className="rightLineSkills"></hr>
                </span>
            </div>
            <div className="skillType">
            <FontAwesomeIcon className="icons" icon="briefcase" />
                <div className="content">
                    <h2>Use for work</h2>
                    <div className="projSkills">
                        <SkillTag skillName="Java" url="https://cdn-icons-png.flaticon.com/512/226/226777.png" />
                        <SkillTag skillName="Go-lang" url="/images/Go-langLogo.png" />
                        <SkillTag skillName="AWS" url="/images/AWSLogo2.png" />
                        <SkillTag skillName="SQL" url="https://db.cs.uni-tuebingen.de/teaching/ws2223/sql-is-a-programming-language/logo.svg" />
                        <SkillTag skillName="MongoDB" url="https://cdn.cdnlogo.com/logos/m/30/mongodb-icon.svg" />
                        <SkillTag skillName="Postgres" url="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png" />
                        <SkillTag skillName="Unit Testing" url="" />
                    </div>
                </div>
            </div>

            <div className="skillType">
            <FontAwesomeIcon className="icons" icon="graduation-cap" />
                <div className="content">
                    <h2>Use for school</h2>
                    <div className="projSkills">
                        <SkillTag skillName="C & C++" url="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1822px-ISO_C%2B%2B_Logo.svg.png" />
                        <SkillTag skillName="JavaScript" url="/images/JSLogo.png" />
                        <SkillTag skillName="Git" url="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" />
                        <SkillTag skillName="HTML" url="https://cdn-icons-png.flaticon.com/512/732/732212.png" />
                        <SkillTag skillName="NodeJS" url="https://static-00.iconduck.com/assets.00/node-js-icon-227x256-913nazt0.png" />
                        <SkillTag skillName="MySQL" url="https://www.paulligocki.com/wp-content/uploads/2022/03/MySQLLogo.png" />
                    </div>
                </div>
            </div>

            <div className="skillType">
            <FontAwesomeIcon className="icons" icon="face-smile" />
                <div className="content">
                    <h2>Use for fun</h2>
                    <div className="projSkills">
                        <SkillTag skillName="Python" url="https://i.pinimg.com/originals/95/91/ed/9591ed82caa8d20c30db96cb7298d3a9.png" />
                        <SkillTag skillName="React" url="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" />
                        <SkillTag skillName="Machine Learning" url="https://cdn-icons-png.flaticon.com/512/2464/2464176.png" />
                        <SkillTag skillName="Firebase" url="https://cdn.icon-icons.com/icons2/2699/PNG/512/firebase_logo_icon_171157.png" />
                    </div>
                </div>
            </div>

            <div id="CCP">
                <img id="CCPBadge" src="https://d1.awsstatic.com/training-and-certification/certification-badges/AWS-Certified-Cloud-Practitioner_badge.634f8a21af2e0e956ed8905a72366146ba22b74c.png" alt="AWS CCP Badge" />
                <h4 id="CCPText">Certified Cloud Practitioner badge coming soon!</h4>
            </div>
        </div>
    );
}

export default Skills;
