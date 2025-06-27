import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const Resume = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "https://zack-orourke.com/Zack_ORourke_25-26.pdf";
    link.download = "Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleView = () => {
    window.open("https://zack-orourke.com/Zack_ORourke_25-26.pdf", "_blank");
  };

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          Download my
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Resume.
        </h2>
      </motion.div>

      <motion.div
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-12 flex flex-col items-center"
      >
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="text-secondary text-[17px] max-w-3xl leading-[30px] text-center mb-8"
        >
          Take a look at my complete professional background, skills, and 
          experience. View or download my resume to learn more about my qualifications.
        </motion.p>

        <div className="flex gap-4 flex-wrap justify-center">
          <motion.button
            variants={fadeIn("up", "tween", 0.4, 1)}
            onClick={handleView}
            className="bg-primary hover:bg-secondary transition-colors duration-300 py-4 px-8 rounded-xl outline-none text-white font-bold shadow-md shadow-primary cursor-pointer"
          >
            View Resume
          </motion.button>
          
          <motion.button
            variants={fadeIn("up", "tween", 0.5, 1)}
            onClick={handleDownload}
            className="bg-tertiary hover:bg-secondary transition-colors duration-300 py-4 px-8 rounded-xl outline-none text-white font-bold shadow-md shadow-primary cursor-pointer"
          >
            Download Resume
          </motion.button>
        </div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Resume, "resume");