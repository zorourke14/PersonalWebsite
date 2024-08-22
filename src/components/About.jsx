import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services, headshot } from '../constants';
import { fadeIn, textVariant } from '../utils/motion'
import SectionWrapper from "../hoc/SectionWrapper";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full max-w-[350px]'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants = {textVariant()}>
        <p className = {styles.sectionSubText}>
          Introduction</p>
        <h2 className = {styles.sectionHeadText}>
          Overview</h2>
      </motion.div>
      <motion.p
        variants = {fadeIn("", "", .1, 1)}
        className = "mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          I am currently pursuing a major in Computer Science with a minor in Finance at TCNJ. My academic journey has equipped me with a strong foundation in both technical and financial principles. I am passionate about leveraging my skills in AWS, Blockchain, and Cryptocurrency to build innovative solutions and drive technological advancements.
I am actively involved in the HackTCNJ eboard as Vice President, where I contribute to organizing our annual Hackathon event. I am also apart of DIGIT.ALL, a diversity and inclusive group that organizes events to bring together a community with a passion for tech.

In addition to my technical pursuits, I enjoy hiking, fishing, and experimenting with cooking.

I am excited about the opportunity to apply my diverse interests and skills to contribute to meaningful projects and collaborate with like-minded professionals in the tech industry.
      </motion.p>

      <motion.div variants={fadeIn("left", "spring", headshot * 0.5, 0.75)} className="mt-20 flex justify-center">
        <div className="w-80 h-80 rounded-full overflow-hidden">
          <img src= {headshot} alt="Profile" className="w-full h-full object-cover" />
        </div>
      </motion.div>

      <div className = "mt-20 flex justify-center gap-10 sm:flex-row flex-wrap justify-center gap-10">
        {services.map((service,index) => (
          <ServiceCard key = {service.title} index = 
          {index} { ...service } />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")