import { motion } from 'framer-motion';
import TextReveal from './TextReveal';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <motion.div
          className="about-content glass"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            About Me
          </motion.h2>
          
          <div className="about-text">
            <TextReveal>
              I'm a passionate Frontend Developer and Prompt Engineer with expertise in creating 
              modern, responsive web applications. I love turning complex problems into simple, 
              beautiful designs.
            </TextReveal>
            <br /><br />
            <TextReveal>
              My journey in web development has led me to master various technologies and 
              frameworks, always staying updated with the latest trends and best practices 
              in the industry.
            </TextReveal>
            <br /><br />
            <TextReveal>
              When I'm not coding, I enjoy exploring new technologies, contributing to 
              open-source projects, and sharing knowledge with the developer community.
            </TextReveal>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;