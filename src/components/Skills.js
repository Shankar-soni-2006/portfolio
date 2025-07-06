import { motion } from 'framer-motion';
import './Skills.css';

const SKILLS = [
  'JavaScript', 'React', 'HTML5', 'CSS3', 'Node.js', 'Python',
  'C', 'Git', 'Responsive Design', 'API Integration', 'Prompt Engineering', 'UI/UX'
];

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Skills & Technologies
        </motion.h2>
        
        <div className="skills-grid">
          {SKILLS.map((skill, index) => (
            <motion.div
              key={skill}
              className="skill-card glass"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              viewport={{ once: true }}
            >
              <span className="skill-name">{skill}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;