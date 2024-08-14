import React from 'react'

function SocialIcon({ src, alt, link }) {
  return (
    <a href={link} target='_blank'>

      <img
        src={src}
        alt={alt}
        className="cursor-pointer w-24 hover:opacity-80 transition-opacity duration-300"
      />
    </a>
  );
}

export default SocialIcon