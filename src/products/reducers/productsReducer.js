import { types } from "../../types/types";

const initialState = {
	products: [],
	error: false,
	individualProduct: {}
}

export const productsReducer = (state = initialState, action) => {

	switch (action.type) {

		case types.show_products:

			return {
				...state,
				products: action.payload
			}
		
		case types.show_products_exito:
			return {
				...state
			}
		
		case types.show_products_error:
			return {
				...state,
				error: action.payload
			}
		
		case types.show_one_product:
			return {
				...state,
				products: state.products,
				individualProduct: state.products.find(product => product.id == action.payload.id)
			}
	
		default:
			return {
				state
			}
	}
}