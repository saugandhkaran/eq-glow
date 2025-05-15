import React, { useState } from "react";
import "./Accordion.scss"; // custom styles for sliding

const accordionData = [
  {
    title: "1. Understand and Name Your Emotions",
    content:
      "Emotional intelligence begins with self-awareness — recognizing what you feel, naming it clearly, and allowing yourself to fully experience those emotions.",
  },
  {
    title: "2. Respond Mindfully, Not Reactively",
    content:
      "By practicing emotional intelligence, you gain the ability to stay grounded and resilient, even in challenging moments. It helps you process intense feelings without losing control.",
  },
  {
    title: "3. Unprocessed Emotions Build Up Over Time",
    content:
      "Many of us carry emotional baggage from childhood or life experiences. Without proper tools, these emotions accumulate and create inner blockages.",
  },
  {
    title: "4. Emotions Influence Thoughts, Feelings, and Behavior",
    content:
      "Unprocessed emotions can show up as destructive habits, harmful self-talk, emotional overwhelm, tension, or a sense of emptiness.",
  },
  {
    title: "5. Emotional Intelligence is Trainable",
    content:
      "This is a skill anyone can develop with structure, consistency, and practice. It empowers better decisions, deeper connections, and a more balanced inner state.",
  },
];

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
        className={`accordion-header is-clickable is-flex is-justify-content-space-between is-align-items-center py-2 px-3`}
        onClick={onClick}
      >
        <p className="has-text-weight-semibold">{title}</p>
        <span>{isActive ? "▲" : "▼"}</span>
      </div>
      <div className={`accordion-content ${isActive ? "open" : ""}`}>
        <p className="mt-2 has-text-white">{content}</p>
      </div>
    </div>
  );
};

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? 0 : index);
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
