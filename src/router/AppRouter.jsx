import { Route, Routes } from "react-router-dom"
import { HomePage } from "../HomePage"
import { ProductPage } from "../products/pages/ProductPage"

export const AppRouter = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="products/:productId" element={<ProductPage/>} />
			</Routes>	
		</>
	)
}