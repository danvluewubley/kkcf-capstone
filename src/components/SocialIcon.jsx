import React from 'react'

function SocialIcon({ src, alt, link }) {
  return (
    <img
      src={src}
      alt={alt}
      className="cursor-pointer w-24 hover:opacity-80 transition-opacity duration-300"
      onClick={() => window.open(link, "_blank")}
    />
  );
}

export default SocialIcon