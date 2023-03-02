import './hero.css';

export const Hero = () => {
	return (
		<>
			<div className="main-hero container">

				<div>
					<h1>Encuentra los mejores productos</h1>
					<p>Disfruta de los mejores productos del mercado al menor precio posible. Contarás
						con una gran variedad de productos a la hora de querer realizar tu compra. No esperes más y compra en FakeStore!
					</p>
				</div>

				<div className="main-hero__container-image">
					<img src="https://images.unsplash.com/photo-1516762689617-e1cffcef479d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=411&q=80" alt="image-photo" />
				</div>

			</div>
		</>
	)
}