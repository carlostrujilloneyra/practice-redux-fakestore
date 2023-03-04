import './product-card.css';
import { FaCartPlus, FaArrowLeft, FaStarHalfAlt } from 'react-icons/fa';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getProductById } from '../actions/productsActions';
import { useFetchProduct } from '../hooks/useFetchProduct';

export const ProductDetail = () => {

  const navigate = useNavigate();

	const handleReturnHomePage = () => {
		navigate(-1)
	}
  
  const { productId } = useParams();

  const { product } = useFetchProduct(productId);
  
  const {title, price, description, category, image, rating} = product;
  
	const arrayIcons = [
		{ id: 1, value: 1 },
		{ id: 2, value: 2 },
		{ id: 3, value: 3 },
		{ id: 4, value: 4 },
		{ id: 5, value: 5 },	
	];
  
  const handleShowProductAdd = () => {
    Swal.fire(
      {
        customClass:'alert-class',
        icon: 'success',
        title: '<h2>Producto agregado</h2>',
        html: '<p>El producto fue añadido al carrito de compras.</p>',
        timer: 1500
      }
    )
  }

	return (
    <>
      <div className="container-back-button container">
        <button onClick={handleReturnHomePage}>
          <FaArrowLeft />
          Regresar
        </button>
      </div>

      {Object.keys(product) == 0 ? (
        <h2
          style={{
            margin: 24,
            textAlign: "center",
          }}
        >
          Cargando Producto...
        </h2>
      ) : (
        <div className="container-product-detail container">
          <div className="container-product-detail__image">
            <img src={image} alt={title} />
          </div>

          <div className="container-product-detail__info">
            <h1>{title}</h1>
            <p className="category">Category: {category}</p>
            <h4>
              Rating: {rating?.rate}
              <div style={{ marginLeft: 8 }}>
                {arrayIcons.map((icon) => {
                  return (
                    <FaStarHalfAlt style={{ marginRight: 4 }} key={icon.id} />
                  );
                })}
              </div>
            </h4>
            <h3>US$ {price}</h3>
            <p>{description}</p>
            <button
              className="add-shopping-cart"
              onClick={handleShowProductAdd}
            >
              <FaCartPlus size="1.7rem" />
              Agregar al carrito
            </button>
          </div>
        </div>
      )}
    </>
  );
}