import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import './Projects.css';

const PROJECTS = [
  {
    title: 'E-Commerce Platform',
    description: 'Modern e-commerce solution built with React and Node.js featuring user authentication, payment integration, and admin dashboard.',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    github: '#',
    live: '#'
  },
  {
    title: 'AI Chat Application',
    description: 'Real-time chat application with AI integration for smart responses and conversation analysis.',
    tech: ['React', 'Socket.io', 'OpenAI API', 'Express'],
    github: '#',
    live: '#'
  },
  {
    title: 'Portfolio Dashboard',
    description: 'Interactive dashboard for tracking portfolio performance with real-time data visualization.',
    tech: ['React', 'D3.js', 'Firebase', 'Chart.js'],
    github: '#',
    live: '#'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Featured Projects
        </motion.h2>
        
        <div className="projects-grid">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.title}
              className="project-card glass"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.02, y: -10 }}
              viewport={{ once: true }}
            >
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-tech">
                  {project.tech.map((tech) => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
                
                <div className="project-links">
                  <motion.a
                    href={project.github}
                    className="project-link"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FiGithub size={20} />
                    Code
                  </motion.a>
                  <motion.a
                    href={project.live}
                    className="project-link"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FiExternalLink size={20} />
                    Live Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;