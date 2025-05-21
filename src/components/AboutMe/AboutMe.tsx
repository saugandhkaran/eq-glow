
import React from 'react';
import './AboutMe.scss';
import quoteImage from '../../assets/images/quote.svg';

export interface AboutMeProps {
  description: string;
  name: string;
  additional_info?: string;
  testimonial_image?: string;
}


export const AboutMe = (props: AboutMeProps) => {
  const { description, name, additional_info, testimonial_image } = props;
  return (
    <>
      <div className="card testimonial-card">
        <div className="is-flex is-justify-content-center is-align-items-center pt-4">
          <img src={testimonial_image} />
        </div>
        <div className='columns is-vertical is-flex is-justify-content-center is-align-items-center'>
          <div className='column is-12 has-text-centered mt-3'>
            <h3 className="title is-3 has-text-white">{name}</h3>
          </div>
        </div>
        <div className="card-content">
          <p className='has-text-centered'>Educational Scientist (B.A.)</p>
          <p className='has-text-centered'>Emotional Intelligence Coach</p>
          <p className='has-text-centered'>Emotionalbody - Therapist & Trainer</p>
          <p className='has-text-centered'>Mental Health First Aid Assistant</p>
        </div>
        <div className='columns is-vertical is-flex is-justify-content-center is-align-items-center'>
          <div className='column is-12 has-text-centered mt-3'>
            <button className="button is-primary is-outlined is-rounded">Newsletter</button>
          </div>
        </div>
        <div className='columns is-vertical is-flex is-justify-content-center is-align-items-center'>
          <div className='column is-12 has-text-centered'>
            <img src={quoteImage} className="quote-image" />
          </div>
        </div>
      </div>
    </>

  );
}