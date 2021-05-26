import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__copy">
        Sequelize #02 - Models & Queries &copy; | {new Date().getFullYear()}
      </p>
    </footer>
  );
};
export default Footer;
