
import { types } from "../../types/types";

// Acción de mostrar los productos
export const showListProducts = () => {

	return async (dispatch) => {
		const url = 'https://fakestoreapi.com/products?limit=12';

		try {
			const rpta = await fetch(url);
			const data = await rpta.json();

			setTimeout(() => {
				dispatch({
					type: types.show_products,
					payload: data,
				});
			}, 3000);

		} catch (error) {
			dispatch({
				type: types.show_products_error
			})
		}

		dispatch({
			type: types.show_products_exito
		})

	}
}

// ObtenerProductoIndividual
export const getProductById = (product) => {
	return {
		type: types.show_one_product,
		payload: product
	}
}