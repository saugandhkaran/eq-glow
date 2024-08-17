
import React from 'react';
import './TestimonialCard.scss';

export interface TestimonialCardProps {
  description: string;
  author: string;
  additional_info?: string;
  testimonial_image?: string;
}


export const TestimonialCard = (props: TestimonialCardProps) => {
  const { description, author, additional_info, testimonial_image } = props;
  return (
    <> 
    <div className="card testimonial-card" >
      <img src={testimonial_image} />
      <div className="card-content">
        <div className="content">
          <p>{ description }</p>
          <p className="subtitle">{author}<br/>{additional_info}</p>
        </div>
      </div>
    </div>
      </>

  );
}