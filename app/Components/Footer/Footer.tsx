import React from "react";

function Footer() {
  return (
    <div className="flex flex-col items-center justify-center gap-3 py-4">
      <div className="flex items-center justify-center">
        <h3 className="text-bold text-xl text-white">-Euphoria-</h3>
      </div>
      <div className="flex flex-row items-center gap-x-4">
        <a href="" target="_blank">
          <img
            src="/icons/face.svg"
            alt="face"
            className="h-6 w-6 object-contain"
          />
        </a>
        <a href="" target="_blank">
          <img
            src="/icons/instagram.svg"
            alt="instagram"
            className="h-6 w-6 object-contain"
          />
        </a>
        <a href="" target="_blank">
          <img
            src="/icons/linkedin.svg"
            alt="linkedin"
            className="h-6 w-6 object-contain"
          />
        </a>
      </div>
      <p className="text-sm font-bold text-white">All Right Reseved.</p>
    </div>
  );
}

export default Footer;
