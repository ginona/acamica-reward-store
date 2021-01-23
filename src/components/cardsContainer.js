import React from 'react'
import Cards from './cards'
import getProducts from '../actions/getProducts'
import useCustomPagination from '../customHooks/useCustomPagination'

const CardsContainer = () => {
    const [products, setProducts] = React.useState([]);
    const [sortData, setSortData] = React.useState("recent");

    React.useEffect(() => {
      getProducts().then(e => setProducts(e));
    },[]);

    const renderSwitch = () =>{
        switch(sortData){
            case "lowPrice":
                return products.sort((a,b) => parseFloat(a.cost) - parseFloat(b.cost)).map((data, id) => <Cards key={id} {...data} />);
            case "highPrice":
                return products.sort((a,b) => parseFloat(b.cost) - parseFloat(a.cost)).map((data, id) => <Cards key={id} {...data} />);
            default:
                return products.sort((a,b) => (a._id < b._id ? -1 : 1)).map((data, id) => <Cards key={id} {...data} />)
        }
    }

    const { currentArray, next, prev, maxPage, currentPage } = useCustomPagination(renderSwitch(), 16);

    return (
        <div>
            <div>
                <button onClick={() => setSortData("recent")}>Most Recent</button>
                <button onClick={() => setSortData("lowPrice")}>Precio Bajo</button>
                <button onClick={() => setSortData("highPrice")}>Precio Alto</button>
            </div>
            <div className="container-cards">
            { currentArray }
            </div>
            <div>
                <button onClick={() => prev()} disabled={ currentPage <= 1 }>Prev</button>
                <button onClick={() => next()} disabled={ currentPage >= maxPage }>Next</button>
            </div>
        </div>
    );
}

export default CardsContainer;