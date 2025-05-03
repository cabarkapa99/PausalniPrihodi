import React from "react";

const Footer = () => {
  return (
    <footer className="text-center text-slate-600 text-sm py-4">
      Made with <span className="text-red-500">♥</span> by{" "}
      <a
        href="https://uwit.rs"
        target="_blank"
        rel="noopener noreferrer"
        className="text-purple-600 hover:underline"
      >
        UWIT
      </a>
    </footer>
  );
};

export default Footer;
