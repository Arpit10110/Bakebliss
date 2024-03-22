import React from 'react';
import StarIcon from '@mui/icons-material/Star';
import "../Style/Pcard.css";
import { Link } from 'react-router-dom';

const Pcard = ({id, img, name, price, rating }) => {
  const stars = [];
  for (let i = 1; i <= rating; i++) {
    stars.push(<StarIcon key={i} />);
  }
  const detailPath = `/fooddetail/${id}`;
  return (
    <>
    <Link className="cardCont" to={detailPath}>
      <div >
        <img src={img} alt={name} /> 
        <div className="content">
          <h5>{name}</h5>
          <div className="price-rating">
            <h6>₹{price}</h6>
            <h6 className='star'>{stars}</h6>
          </div>
          <button>ADD to Cart</button>
        </div>
      </div>
    </Link>
    </>
  );
};

export default Pcard;
