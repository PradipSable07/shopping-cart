import React, { useState } from "react";

const products = [
	{ id: 1, name: "Product 1", price: 100 },
	{ id: 2, name: "Product 2", price: 200 },
	{ id: 3, name: "Product 3", price: 300 },
];

function App(props) {
	const [cart, setCart] = useState([]);

	const addToCart = (product) => {
		setCart((currentCart) => [...currentCart, product]);
	};

	const removeFromCart = (productToRemove) => {
		setCart((currentCart) =>
			currentCart.filter((product) => product !== productToRemove)
		);
	};

	return (
		<div>
			<h1>Products</h1>
			{products.map((product, index) => (
				<div key={index}>
					<h2>{product.name}</h2>
					<h3>{product.price}</h3>
					<button onClick={() => addToCart(product)}>Add to cart</button>
				</div>
			))}
			<h1>Cart</h1>
			{cart.map((product, index) => (
				<div key={index}>
					<h2>{product.name}</h2>
					<h3>{product.price}</h3>
					<button onClick={() => removeFromCart(product)}>Remove</button>
				</div>
			))}
		</div>
	);
}

export default App;
