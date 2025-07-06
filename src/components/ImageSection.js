import { motion } from 'framer-motion';
import './ImageSection.css';

const ImageSection = () => {
  return (
    <section className="image-section">
      <div className="container">
        <motion.div
          className="image-content"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="profile-image-container glass"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="profile-image">
              <div className="image-placeholder">
                <span>Your Photo</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            className="image-text"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3>Frontend Developer & Prompt Engineer</h3>
            <p>Passionate about creating beautiful, functional web experiences</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ImageSection;