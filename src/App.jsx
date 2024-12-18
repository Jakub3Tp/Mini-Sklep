import { useState } from "react";
import { products } from "./produkty.jsx";

function Product({ productData }) {
    const [count, setCount] = useState(0);

    return (
        <div className="col">
            <div className="card" style={{ width: "18rem" }}>
                <img
                    src={productData.img}
                    className="card-img-top"
                    alt={productData.name}
                    style={{ height: "150px", objectFit: "cover" }}
                />
                <div className="card-body">
                    <h5 className="card-title">{productData.name}</h5>
                    <p className="card-text">{productData.description}</p>
                    <p className="card-text">
                        Cena: {productData.price.toFixed(2)} zł
                    </p>
                    <button
                        className="btn btn-primary"
                        onClick={() => setCount(count + 1)}
                    >
                        Dodaj do koszyka
                    </button>
                </div>
                <div className="card-footer text-body-secondary">
                    Ten produkt został dodany {count} razy do koszyka
                </div>
            </div>
        </div>
    );
}

function App() {
    return (
        <div className="container">
            <h1>Mini-Sklep</h1>
            <div className="container text-center">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4">
                    {products.map((product) => (
                        <Product key={product.id} productData={product} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default App;
