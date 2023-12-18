import React from 'react';
const Footer: React.FC = () => {
  return (
    <footer className="text-center text-white">
      

      <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © {new Date().getFullYear()} 
        <a className="text-white" href="https://www.linkedin.com/in/jacopo-tei-web/"> Click Here!</a>
      </div>
    </footer>
  );
  
};


export default Footer;

