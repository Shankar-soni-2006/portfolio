import { motion } from 'framer-motion';
import './Gallery.css';

const GALLERY_IMAGES = [
  { id: 1, title: 'Web Development', description: 'Modern responsive websites' },
  { id: 2, title: 'UI/UX Design', description: 'Beautiful user interfaces' },
  { id: 3, title: 'Mobile Apps', description: 'Cross-platform solutions' },
  { id: 4, title: 'API Integration', description: 'Seamless data flow' }
];

const Gallery = () => {
  return (
    <section className="gallery">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Work Gallery
        </motion.h2>
        
        <div className="gallery-grid">
          {GALLERY_IMAGES.map((item, index) => (
            <motion.div
              key={item.id}
              className="gallery-item glass"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              viewport={{ once: true }}
            >
              <div className="gallery-image">
                <div className="image-placeholder">
                  <span>{item.title}</span>
                </div>
              </div>
              <div className="gallery-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;