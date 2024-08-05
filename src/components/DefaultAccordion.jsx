import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

export function DefaultAccordion() {
  const [open, setOpen] = React.useState();

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div className="mt-4">
      <Accordion open={open === 1} className="mx-auto w-[90%]">
        <AccordionHeader
          onClick={() => handleOpen(1)}
          className="text-4xl font-custom"
        >
          Programming Languages
        </AccordionHeader>
        <AccordionBody>
          <ul className="list-disc ml-10 font-custom">
            <li className="text-2xl">Python</li>
            <li className="text-2xl">JavaScript</li>
          </ul>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2} className="mx-auto w-[90%]">
        <AccordionHeader
          onClick={() => handleOpen(2)}
          className="text-4xl font-custom"
        >
          Frontend Development
        </AccordionHeader>
        <AccordionBody>
          <ul className="list-disc ml-10 font-custom">
            <li className="text-2xl">React.js</li>
            <li className="text-2xl">Bootstrap</li>
            <li className="text-2xl">HTML</li>
            <li className="text-2xl">CSS</li>
            <li className="text-2xl">Tailwind</li>
          </ul>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3} className="mx-auto w-[90%]">
        <AccordionHeader
          onClick={() => handleOpen(3)}
          className="text-4xl font-custom"
        >
          AI/ML
        </AccordionHeader>
        <AccordionBody>
          <ul className="list-disc ml-10 font-custom">
            <li className="text-2xl">Seaborn</li>
            <li className="text-2xl">Scikit-learn</li>
          </ul>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 4} className="mx-auto w-[90%]">
        <AccordionHeader
          onClick={() => handleOpen(4)}
          className="text-4xl font-custom"
        >
          Database
        </AccordionHeader>
        <AccordionBody>
          <ul className="list-disc ml-10 font-custom">
            <li className="text-2xl">MySQL</li>
            <li className="text-2xl">SQLite</li>
          </ul>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 5} className="mx-auto w-[90%]">
        <AccordionHeader
          onClick={() => handleOpen(5)}
          className="text-4xl font-custom"
        >
          Framework
        </AccordionHeader>
        <AccordionBody>
          <ul className="list-disc ml-10 font-custom">
            <li className="text-2xl">Flask</li>
          </ul>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 6} className="mx-auto w-[90%]">
        <AccordionHeader
          onClick={() => handleOpen(6)}
          className="text-4xl font-custom"
        >
          Software
        </AccordionHeader>
        <AccordionBody>
          <ul className="list-disc ml-10 font-custom">
            <li className="text-2xl">Illustrator</li>
            <li className="text-2xl">Figma</li>
          </ul>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 7} className="mx-auto w-[90%]">
        <AccordionHeader
          onClick={() => handleOpen(7)}
          className="text-4xl font-custom"
        >
          Other
        </AccordionHeader>
        <AccordionBody>
          <ul className="list-disc ml-10 font-custom">
            <li className="text-2xl">Git</li>
            <li className="text-2xl">GitHub</li>
          </ul>
        </AccordionBody>
      </Accordion>
    </div>
  );
}
