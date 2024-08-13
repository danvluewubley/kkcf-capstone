import React from "react";
import { Typography, Button } from "@material-tailwind/react"; // Assuming you are using Material Tailwind for Typography and Button components

function ProjectDisplay({
  imageSrc,
  title,
  description,
  languages,
  codeLink,
  demoLink,
}) {
  return (
    <div className="relative h-full w-full">
      <img src={imageSrc} alt={title} className="h-full w-full object-cover" />
      <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
        <div className="w-3/4 text-center md:w-2/4">
          <Typography
            variant="h1"
            color="white"
            className="mb-4 text-xl md:text-4xl lg:text-5xl font-custom"
          >
            {title}
          </Typography>
          <Typography
            variant="lead"
            color="white"
            className="mb-12 opacity-80 font-custom text-sm md:text-3xl"
          >
            {description}
          </Typography>
          <Typography
            variant="lead"
            color="white"
            className="mb-12 opacity-80 font-custom font-bold md:text-3xl text-base"
          >
            <span className="underline">Languages/Frameworks</span>: {languages}
          </Typography>
          <div className="flex justify-center gap-2">
            <a
              href={codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:block"
            >
              <Button size="lg" color="white" className="hover:scale-[1.1]">
                {"</> CODE"}
              </Button>
            </a>
            <a
              href={codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block md:hidden"
            >
              <Button size="sm" color="white" className="hover:scale-[1.1]">
                {"</> CODE"}
              </Button>
            </a>
            {demoLink && (
              <>
                <a
                  href={demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden md:block"
                >
                  <Button size="lg" color="black" className="hover:scale-[1.1]">
                    DEMO
                  </Button>
                </a>
                <a
                  href={demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block md:hidden"
                >
                  <Button size="sm" color="black" className="hover:scale-[1.1]">
                    DEMO
                  </Button>
                </a>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDisplay;
