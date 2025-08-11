import { motion } from 'framer-motion';
import { FiMail, FiGithub, FiLinkedin } from 'react-icons/fi';
import './Contact.css';

const CONTACT_LINKS = [
  { icon: FiMail, label: 'Email', value: 'shankarsoni7172@email.com', href: 'mailto:shankarsoni7172@gmail.com' },
  { icon: FiGithub, label: 'GitHub', value: 'https://github.com/Shankar-soni-2006', href: 'https://github.com/Shankar-soni-2006' },
  { icon: FiLinkedin, label: 'LinkedIn', value: 'https://www.linkedin.com/in/shankar-soni-82b246337l', href: 'https://www.linkedin.com/in/shankar-soni-82b246337' }
  
];

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <motion.div
          className="contact-content"
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
            Let's Connect
          </motion.h2>
          
          <motion.p
            className="contact-description"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
          </motion.p>
          
          <div className="contact-links">
            {CONTACT_LINKS.map(({ icon: Icon, label, value, href }, index) => (
              <motion.a
                key={label}
                href={href}
                className="contact-link glass"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                viewport={{ once: true }}
              >
                <Icon size={24} className="contact-icon" />
                <div className="contact-info">
                  <span className="contact-label">{label}</span>
                  <span className="contact-value">{value}</span>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
