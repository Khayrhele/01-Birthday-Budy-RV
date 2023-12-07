import { useState } from 'react';

const Person = ({ image, name, age, dobInfo }) => {
  const [isMore, setIsMore] = useState(false);
  return (
    <div className="person">
      <img src={image} alt={name} className="img" />
      <div className="info">
        <h4>{name}</h4>
        <button
          type="button"
          className="btn"
          onClick={() => setIsMore(!isMore)}
        >
          {isMore ? 'Hide' : 'show'} detail
        </button>
        <p>{isMore && dobInfo}</p>
      </div>
    </div>
  );
};
export default Person;
