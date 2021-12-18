import React, {useState} from "react";
import commonStyles from "../../../common/styles/commonStyles.module.css";
import styles from "./Pack.module.css"

export const Pack = () => {

  const initState = [
    {_id: "1", productName: "car", price: 2000000, productType: 'cars'},
    {_id: "2", productName: "book", price: 570, productType: 'books'},
    {_id: "3", productName: "phone", price: 20000, productType: 'phones'},
    {_id: "4", productName: "pen", price: 10, productType: 'pens'},
    {_id: "5", productName: "notebook", price: 40000, productType: 'notebooks'}
  ]

  const [products, setProducts] = useState(initState);

  console.log('before', products)
  const sortPriceUp = () => {
    const sortedProducts = products.sort((a, b) => a.price - b.price)
    setProducts([...sortedProducts])
    console.log('inner up', products)
  }

  const sortPriceDown = () => {
    const sortedProducts = products.sort((a, b) => b.price - a.price)
    setProducts([...sortedProducts])
    console.log('inner down', products)
  }
  console.log('after', products)

  // const sortedByName = products.sort((a, b) => a.productName > b.productName ? 1 : -1)
  // const sortedByPrice = products.sort((a, b) => a.price - b.price)

  return (
    <div className={commonStyles.wrapper}>
      <section className={commonStyles.section}>
        <table width="100%" cellPadding="5">
          <caption>Table</caption>
          <thead>
          <tr>
            <th>Name</th>
            <th>Price
              <span>
                <button onClick={sortPriceUp}>up</button>
                <button onClick={sortPriceDown}>down</button>
              </span>
            </th>
            <th>Type</th>
          </tr>
          </thead>
          <tbody>
          {products.map(pr => (
            <tr key={pr._id}>
              <td>{pr.productName}</td>
              <td>{pr.price}</td>
              <td>{pr.productType}</td>
            </tr>
          ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}


