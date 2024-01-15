import React from 'react';
import PropTypes from 'prop-types';
import "./Ratio.scss";

const Ratio = ({score}) => {
  const halfStar = (key) =>   <svg width="20" height="20" key={key}>
  <mask id="halfMask" x="0" y="0" width="50%" height="100%">
    <rect x="0" y="0" width="100%" height="100%" fill="white" />
    <rect x="100%" y="0" width="50%" height="100%" fill="black" />
  </mask>
<path
    fill="black"
    stroke="black"
    data-tag="halfstar"
    d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
    mask="url(#halfMask)"
  />
</svg>

  const star = (key) => <svg width="20" height="20" key={key}>
    <path
     data-tag="star"
    fill="black"
    stroke="black"
    d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
    />
      </svg>

  const emptyStar = (key) => <svg width="20" height="20" key={key}>
  <path
    data-tag="empty"
    fill="white"
    stroke="black"
    d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
  />
    </svg>
  
   const generateStars = () => {
    const stars = [];
    const totalStars = 5; // Assuming a maximum of 5 stars

    for (let i = 1; i <= totalStars; i++) {
      if (i * 2 < score) {
        stars.push(star(i));
      } else {
        if (((i - 1) * 2) - 0.5 <= score) {
          stars.push(halfStar(i));
        } else {
          stars.push(emptyStar(i));
        }
      } 
    }

    return stars;
  };
  return <div className="stars-position">
  {generateStars()}
  </div>

}

Ratio.propTypes = {
  score :PropTypes.string,
 
};

export default Ratio;