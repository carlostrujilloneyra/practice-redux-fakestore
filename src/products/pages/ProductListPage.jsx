import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showListProducts } from '../actions/productsActions';
import { ProductCard } from '../components';
import './pages.css';

export const ProductListPage = () => {
	
	const dispatch = useDispatch();

	useEffect(() => {
		return () => {
			dispatch(showListProducts());
		}
	}, [])

	// Obtenemos la data
  const products = useSelector(state => state.products.products) || [];
  
  console.log(products);

	return (
    <>
      <div className="container-product-list container">
        <h2>Algunos de nuestros productos</h2>

        {/* Aquí irán los productos */}
        <div className="main-container__product-list">
          {products.length >= 1 ? (
            products.map((product) => {
              return <ProductCard key={product.id} {...product} />;
            })
          ) : (
            <h2>Cargando...</h2>
          )}
        </div>
      </div>
    </>
  );
}