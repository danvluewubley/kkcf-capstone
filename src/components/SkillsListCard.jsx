import React from 'react'
import SkillList from './SkillList';

function SkillsListCard({ cardName, skillsList }) {
  return (
    <div className="flex justify-center items-center w-1/3 card">
      <div className="flex flex-col justify-center items-center w-[90%] h-[80%] bg-gray-300 rounded-lg transform hover:-translate-y-[1px] hover:scale-[1.03] transition-transform dark:bg-gray-600">
        <h2 className="text-4xl font-custom text-center pb-5 font-bold dark:text-gray-300">
          {cardName}
        </h2>
        <ul className="text-2xl font-custom text-center">
          {skillsList.map((skill, index) => (
            <SkillList key={index} {...skill} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SkillsListCard
