import { useEffect, useState } from "react";
import { getProduct } from "./getProduct";

export const useFetchProduct =  (idProduct) => {

	const [product, setProduct] = useState({});

	const getIndividualProduct = async () => {

		const newOneProduct = await getProduct(idProduct);

		setTimeout(() => {
			setProduct(newOneProduct);
		}, 1800);

	}

	useEffect(() => {
		getIndividualProduct();
	}, [])

	return {
		product
	}

}
