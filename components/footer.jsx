import { LinkedinIcon } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-gray-800/50 py-8 px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-6 text-sm text-gray-400">
        Made with ❤️ by SxidSvit
      </div>

      <div className="flex gap-4 items-center">
        <a
          href="https://www.linkedin.com/in/sergiy-antonyuk/"
          className="text-gray-400"
        >
          <LinkedinIcon />
        </a>

      </div>
    </footer>
  );
};

export default Footer;
