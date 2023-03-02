import { Link } from 'react-router-dom';
import { FaStarHalfAlt } from 'react-icons/fa';
import './product-card.css';

export const ProductCard = ({ id, title, price, description, category, image, rating: { rate } }) => {
	
	const arrayIcons = [
		{ id: 1, value: 1 },
		{ id: 2, value: 2 },
		{ id: 3, value: 3 },
		{ id: 4, value: 4 },
		{ id: 5, value: 5 },	
	];

	return (
    <>
      <div className="container-card">
        <img src={image} alt={title} />
        <div className="container-card__info">
          <h2>{title}</h2>
          <p>{description}</p>
          <h4 style={{display: 'flex'}}>
            Rating: {rate}
						<div style={{marginLeft: 12}}>
						{arrayIcons.map((icon) => {
              return <FaStarHalfAlt style={{ marginRight: 4 }} key={icon.id} />;
            })}
						</div>
          </h4>
          <h3>US$ {price}</h3>
          <p style={{ fontWeight: "bolder" }}>Category: {category}</p>
          <div className="container-card__button">
            <Link to={`/products/${id}`}>Ver más...</Link>
          </div>
        </div>
      </div>
    </>
  );
}