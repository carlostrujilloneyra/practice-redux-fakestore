import axios from "axios";

export const getProductsAsync = async () => {
	const url = 'https://fakestoreapi.com/products?limit=12';
	const rpta = await axios.get(url);
	const { data } = rpta;

	const products2 = data.map((product) => (
		{
			id: product.id,
			title: product.title,
			price: product.price,
			description: product.description,
			category: product.category,
			image: product.image,
			rating: product.rating
		}
	))
	
	return {
		products2
	}
}