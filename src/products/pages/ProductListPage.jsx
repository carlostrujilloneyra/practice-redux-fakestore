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
  
  const products = useSelector(state => state?.products?.products) || [];

  console.log(products)

	return (
    <>
      <div className="container-product-list container">
        <h2>Algunos de nuestros productos</h2>

        {/* Aquí irán los productos */}
        <div className="main-container__product-list">
          {products.length === 0 ? (
            <h2>Cargando...</h2>
          ) : (
            products.map((product) => {
              return <ProductCard key={product.id} {...product} />;
            })
          )}
        </div>
      </div>
    </>
  );
}