import React from 'react'
import { userContext } from '../context/userContext';
import { LIMIT } from '../constants/constants'
import useCustomPagination from '../customHooks/useCustomPagination'

const ProductsHistory = () => {
    const { history, record } = React.useContext(userContext)
    const { currentArray, next, prev, maxPage, currentPage } = useCustomPagination(record, LIMIT);

    return (
        <div style={{display: history ? "block" : "none"}}>
            <table style={{ 'height': '40%', 'width': '600px', 'display': 'block' }}>
                <tbody>
                    <tr>
                        <th> Product Id </th>
                        <th> Product Name </th>
                        <th> Product Cost</th>
                    </tr>
                    <tbody>
                        {
                            currentArray.map((item, i) => 
                                <tr key={item.productId + i}>
                                    <td>{item.productId}</td>
                                    <td>{item.name}</td>
                                    <td>{item.cost}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </tbody>
            </table>
            <section>
                <button onClick={() => prev()} disabled={ currentPage <= 1 }>Prev</button>
                <button onClick={() => next()} disabled={ currentPage >= maxPage }>Next</button>
            </section>
        </div>
    );
}

export default ProductsHistory;