
export const getProduct = async (idProduct) => {
	const url = `https://fakestoreapi.com/products/${idProduct}`;
	const rpt = await fetch(url);
	const data = await rpt.json();

	const dataProduct = data;

	return dataProduct;

}