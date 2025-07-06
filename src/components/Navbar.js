import { motion } from 'framer-motion';
import MobileMenu from './MobileMenu';
import './Navbar.css';
import './ResponsiveNavbar.css';

const NAV_ITEMS = ['About', 'Skills', 'Projects', 'Contact'];

const Navbar = () => {
  const scrollToSection = (section) => {
    document.getElementById(section.toLowerCase()).scrollIntoView();
  };

  return (
    <motion.nav 
      className="navbar glass"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="nav-container">
        <motion.div 
          className="logo"
          whileHover={{ scale: 1.05 }}
        >
          Shankar Soni
        </motion.div>
        
        <div className="nav-links">
          {NAV_ITEMS.map((item) => (
            <motion.button
              key={item}
              className="nav-link"
              onClick={() => scrollToSection(item)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {item}
            </motion.button>
          ))}
        </div>
        
        <MobileMenu />
      </div>
    </motion.nav>
  );
};

export default Navbar;