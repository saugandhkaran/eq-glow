import React, { useState } from "react";
import "./Accordion.scss"; // custom styles for sliding

interface AccordionItemProps {
  title: string;
  content: string;
  isActive: boolean;
  onClick: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, content, isActive, onClick }) => {
  return (
    <div className="accordion">
      <div
        className={`accordion-header is-clickable is-flex is-justify-content-space-between is-align-items-center py-4 px-3`}
        onClick={onClick}
      >
        <h3 className="title mb-0 pt-0 is-5 has-text-white">{title}</h3>
        <span className={`title is-4 has-text-white ${isActive ? "rotate-left" : "rotate-top"}`}>➤</span>
      </div>
      <div className={`accordion-content ${isActive ? "open" : ""}`}>
        <p className="mt-2 mb-4 has-text-weight-medium has-text-white">{content}</p>
      </div>
    </div>
  );
};

export interface AccordionDataProps {
  title: string;
  content: string;
}

const Accordion = (accordionInput: AccordionDataProps[]) => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const accordionData = accordionInput;

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <div className="accordion">
      {accordionData.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isActive={activeIndex === index}
          onClick={() => toggleAccordion(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;
