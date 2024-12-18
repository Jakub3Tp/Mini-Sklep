import {useState} from "react";
import { products } from "./produkty"

function Product() {
    const [product, setProduct] = useState(null)
    return <div className="col">
        <div className="card" style={{width: "18rem"}}>
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                    {products}
                </p>
                <a className="btn btn-primary" onClick={() => setProduct((product) => product + 1)}>Dodaj do koszyka</a>
            </div>
            <div className="card-footer text-body-secondary">
                Ten produkt został dodany {product} razy do koszyka
            </div>
        </div>
    </div>
}

function App() {
    // const [count, setCount] = useState(0)
    //
    // return (
    //   <>
    //     <div>
    //       <a href="https://vite.dev" target="_blank">
    //         <img src={viteLogo} className="logo" alt="Vite logo" />
    //       </a>
    //       <a href="https://react.dev" target="_blank">
    //         <img src={reactLogo} className="logo react" alt="React logo" />
    //       </a>
    //     </div>
    //     <h1>Vite + React</h1>
    //     <div className="card">
    //       <button onClick={() => setCount((count) => count + 1)}>
    //         count is {count}
    //       </button>
    //       <p>
  //         Edit <code>src/App.jsx</code> and save to test HMR
  //       </p>
  //     </div>
  //     <p className="read-the-docs">
  //       Click on the Vite and React logos to learn more
  //     </p>
  //   </>
  // )

    return <>
        <div className="container">
            <h1>
                Mini-Sklep
            </h1>
            <div className="container text-center">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4">
                    <Product />
                </div>
            </div>
        </div>
    </>
}

export default App
