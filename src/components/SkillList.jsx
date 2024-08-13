import React from "react";

function SkillList({ src, alt, text }) {
  return (
    <div className="flex items-center pb-2">
      <img src={src} alt={alt} className="w-4 md:w-10" />
      <li className="pl-2 dark:text-gray-300 md:text-2xl text-sm">{text}</li>
    </div>
  );
}

export default SkillList;
