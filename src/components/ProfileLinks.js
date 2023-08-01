import { motion } from 'framer-motion';
import LILogo from "../images/LI.png";
import Github from "../images/github.png";
import "./ProfileLinks.css";
import { useNavigate } from 'react-router-dom';



const ProfileLinks = () => {

    const navigate = useNavigate();
    
    const handleLI = () => {
      window.open('https://www.linkedin.com/in/evanaddeo/', '_blank');
    };

    const handleGH = () => {
        window.open('https://github.com/evanaddeo', '_blank');
    };

    const handleCV = () => {
        navigate('/Resume');
    };

      const handleEmail = () => {
        window.location = 'mailto:evanmaddeo@gmail.com';
    };
  
    const imageVariants = {
        initial: {
          scale: 1,
          opacity: 1,
        },
        hovered: {
          scale: 1.2,
          opacity: 0.8,
        },
      };
    
      return (
        <div id="container">
            <span class="line" style={{marginRight: "2%"}}>
                <hr style={{color: "rgb(69, 135, 242)"}}></hr>
            </span>
            <motion.div
                initial="initial"
                whileHover="hovered"
                variants={imageVariants}
            >
            <img
                onClick={handleLI}
                id = "ProfileLinks"
                src={LILogo}
                alt="LinkedIn"
            />
            </motion.div>
            <motion.div
                initial="initial"
                whileHover="hovered"
                variants={imageVariants}
            >
            <img
                onClick={handleGH}
                id = "GHLink"
                src={Github}
                alt="GitHub"
            />
            </motion.div>
            <motion.div
                initial="initial"
                whileHover="hovered"
                variants={imageVariants}
            >
            <img
                onClick={handleEmail}
                id = "EmailLink"
                src="https://static-00.iconduck.com/assets.00/gmail-icon-256x256-lp4z4kz6.png"
                alt="Email"
            />
            </motion.div>
            <motion.div
                initial="initial"
                whileHover="hovered"
                variants={imageVariants}
            >
            <img
                onClick={handleCV}
                id = "CVLink"
                src="https://www.freeiconspng.com/uploads/resume-icon-png-9.png"
                alt="Resume"
            />
            </motion.div>
            <span class="line" style={{marginLeft: "2%"}}>
                <hr style={{color: "rgb(69, 135, 242)"}}></hr>
            </span>
        </div>
      );
  };

  export default ProfileLinks;

