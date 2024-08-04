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
    <div className="mt-[10%]">
      <Accordion open={open === 1} className="ml-12 mr-12 w-[90%]">
        <AccordionHeader onClick={() => handleOpen(1)}>
          Programming Languages
        </AccordionHeader>
        <AccordionBody>
          <ul>
            <li>Python</li>
            <li>JavaScript</li>
          </ul>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2} className="ml-12 mr-12 w-[90%]">
        <AccordionHeader onClick={() => handleOpen(2)}>
          Frontend Development
        </AccordionHeader>
        <AccordionBody>
          <ul>
            <li>React.js</li>
            <li>Bootstrap</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Tailwind</li>
          </ul>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3} className="ml-12 mr-12 w-[90%]">
        <AccordionHeader onClick={() => handleOpen(3)}>AI/ML</AccordionHeader>
        <AccordionBody>
          <ul>
            <li>Seaborn</li>
            <li>Scikit-learn</li>
          </ul>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 4} className="ml-12 mr-12 w-[90%]">
        <AccordionHeader onClick={() => handleOpen(4)}>
          Database
        </AccordionHeader>
        <AccordionBody>
          <ul>
            <li>MySQL</li>
            <li>SQLite</li>
          </ul>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 5} className="ml-12 mr-12 w-[90%]">
        <AccordionHeader onClick={() => handleOpen(5)}>
          Framework
        </AccordionHeader>
        <AccordionBody>
          <ul>
            <li>Flask</li>
          </ul>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 6} className="ml-12 mr-12 w-[90%]">
        <AccordionHeader onClick={() => handleOpen(6)}>
          Software
        </AccordionHeader>
        <AccordionBody>
          <ul>
            <li>Illustrator</li>
            <li>Figma</li>
          </ul>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 7} className="ml-12 mr-12 w-[90%]">
        <AccordionHeader onClick={() => handleOpen(7)}>Other</AccordionHeader>
        <AccordionBody>
          <ul>
            <li>Git</li>
            <li>GitHub</li>
          </ul>
        </AccordionBody>
      </Accordion>
    </div>
  );
}
