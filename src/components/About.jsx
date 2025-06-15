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
       I'm currently studying Computer Science with a minor in Finance at TCNJ, and I'm on track to graduate in Spring 2026. Over time, I've developed a strong interest in cloud technologies and DevOps.
       <br /><br />
       I'm especially drawn to cloud focused roles where I can work with tools. I actually built this personal website to both showcase my work and sharpen my DevOps skills—using Amazon EKS, Terraform, and Kubernetes to deploy and manage it. That hands-on experience gave me a deeper appreciation for scalable, cloud-native solutions.
       <br /><br />
       As President of HackTCNJ, I help lead the planning and execution of our annual hackathon, which brings together students passionate about building and learning. I'm also involved with DIGIT.ALL, a diversity and inclusion group on campus that creates spaces for tech-minded students from all backgrounds to connect and grow.
       <br /><br />
       Outside of tech, I like to unplug with hiking, fishing, and trying out new recipes in the kitchen.
       <br /><br />
       I'm excited about the chance to apply my cloud skills and wide range of interests to projects that make a real impact, and to collaborate with others who are just as passionate about tech as I am.
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