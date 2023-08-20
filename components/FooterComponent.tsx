import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white text-dark p-4 mt-8 text-center">
      © {new Date().getFullYear()} John Michael Reyes/JustJohn | Content stole from <a href='https://www.textnot.pictures/' target='_blank'>textnot.pictures</a> | Idea stole from <a href='https://nohello.net/' target='_blank'>nohello.net</a>.
    </footer>
  );
};

export default Footer;
