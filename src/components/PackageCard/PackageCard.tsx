import React from 'react';
import './PackageCard.scss';

export interface PackageCardProps {
  title?: string;
  description?: string;
  img?: string;
}

export const PackageCard = (props: PackageCardProps) => {
  const {title, description, img} = props;
  return (
    <> 
    <div className="card"><div className="card-image">
        <figure className="image">
          <img
            src={img}
            alt="Placeholder image"
          />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <h2 className="title is-6 has-text-centered">{props.title || 'Sample title'}</h2>
          </div>
        </div>

        <div className="content has-text-white">
          {props.description || 'Sample description'}
        </div>
      </div>
      </div>
      </>

  );
}