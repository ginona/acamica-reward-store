import React, { useEffect, useState } from "react";
import getProducts from "./actions/getProducts";
import Cards from "./components/cards"
import Header from './components/header'
import "./styles.css"

function App() {

  const [products, setProducts] = useState([])

  useEffect(() => {
    getProducts().then(e => setProducts(e));
  },[]);

  return (
    <div className="App">
        <Header />
      {<div className="container">
        {products.map((data, id) => {
          return <Cards key={id} {...data} />
        })}
        </div>}
    </div>
  );
}

export default App;
