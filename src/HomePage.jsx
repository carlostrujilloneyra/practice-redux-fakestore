import { Header, Hero } from "./components"
import { ProductListPage } from "./products/pages/ProductListPage"

export const HomePage = () => {
	return (
		<>
			<Hero />

			{/* Aquí irán los productos */}
			<ProductListPage />
		</>
	)
}