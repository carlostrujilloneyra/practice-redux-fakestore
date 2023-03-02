import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { getProductById, showListProducts } from "../actions/productsActions";
import { ProductDetail } from "../components/ProducDetail";

export const ProductPage = () => {

	const dispatch = useDispatch();
	const { productId } = useParams();

	useEffect(() => {
		return () => {
			dispatch(showListProducts());
		}
	}, [])

	const state = useSelector(state => state.products);
	const products = state?.products || [];

	const productSelected = products?.find(product => product.id == productId) || {};

	useEffect(() => {
		if (Object.keys(productSelected).length >= 1) {
			dispatch(getProductById(productSelected));
		}
	}, [productId])

	return (
		<>
			<ProductDetail {...productSelected} />
		</>
	)
}