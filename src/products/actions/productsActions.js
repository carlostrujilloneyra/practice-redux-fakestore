
import { types } from "../../types/types";
import axios from "axios";

// Acción de mostrar los productos
export const showListProducts = () => {

	return async (dispatch) => {

		const url = 'https://fakestoreapi.com/products?limit=12';

		try {
			const rpta = await axios.get(url);
			const { data } = rpta;

			dispatch({
				type: types.show_products_exito,
				payload: data,
			});

		} catch (error) {
			dispatch({
				type: types.show_products_error
			})
		}

	}
}

// ObtenerProductoIndividual
export const getProductById = (product) => {
	return {
		type: types.show_one_product,
		payload: product
	}
}