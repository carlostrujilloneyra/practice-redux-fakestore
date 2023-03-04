import { Provider } from "react-redux"
import { Footer, Header } from "./components"
import { AppRouter } from "./router/AppRouter"
import store from "./store"

export const App = () => {

	return (
		<Provider store={store}>
			<Header />
			{/* Aquí irán las rutas */}
			<AppRouter />
			<Footer />
		</Provider>
	)
}