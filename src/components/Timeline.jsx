import timelineElements from "../assets/timelineElements";
import schoolIcon from "../assets/school.svg";
import workIcon from "../assets/work.svg";

export default function Timeline({ defaultColor }) {
  return (
    <div>
      {timelineElements.map((element) => {
        const colors = [
          "bg-red-500",
          "bg-blue-500",
          "bg-yellow-500",
          "bg-purple-500",
          "bg-orange-500",
        ];

        const color = defaultColor || `bg-${element.color}-500`;

        return (
          <div key={element.id} className="flex m-4 relative">
            <div className="hidden items-start w-64 pt-0.5justify-end sm:flex">
              <div className="w-4/5 text-gray-500 text-right pr-4 pt-2">{element.date}</div>
              <div
                className={`${color} w-px h-full translate-x-5 opacity-30`}
              ></div>
              <img
                src={element.icon === "school" ? schoolIcon : workIcon}
                alt="icon"
                className={`${color} w-10 p-1 rounded-lg `}
              />
              <div
                className={`${color} h-px w-8 translate-y-5 opacity-30`}
              ></div>
            </div>
            <div className="border border-gray-600 rounded-lg px-8 py-4 bg-gray-800 w-full text-center sm:w-96">
              <div className="text-xl font-medium text-gray-200 mb-4">
                {element.title}
              </div>
              <div className="text-gray-300 mb-6 sm:mb-8 sm:text-xs">
                {element.location}
                <span className="sm:hidden"> | {element.date}</span>
              </div>
              <div className="mb-4 text-left text-white">
                {element.description}
              </div>
              <div className="flex flex-wrap mb-6 justify-center">
                {element.tech?.map((tech, index) => {
                  return (
                    <span
                      key={index}
                      className="bg-gray-900 rounded-xl px-2 py-1 text-sm m-1 text-white"
                    >
                      {tech}
                    </span>
                  );
                })}
              </div>
              <img
                src={element.icon === "school" ? schoolIcon : workIcon}
                alt="icon"
                className={`${color} w-8 p-1 rounded-lg absolute left-4 top-4 sm:hidden`}
              />
              <a
                className={`${color} text-gray-950 font-medium px-4 py-1 rounded-md mx-auto cursor-pointer hover:text-white`} href={element.link} target="_blank"
              >
                {element.buttonText}
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}
