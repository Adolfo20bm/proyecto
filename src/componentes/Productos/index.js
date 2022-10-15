import React, {useContext} from 'react'

import { DataContext} from "../../context/DataProvider";
import { ProductoItem } from "./ProductoItem";

export const ProductosLista = () => {

  const value = useContext(DataContext)
  const [productos] = value.productos

  console.log(productos)

  return (
    <>
    <div className="productos">
    {
      productos.map(producto => (
        <ProductoItem 
        key={producto.id}
        id={producto.id}
        title={producto.title}
        price={producto.price}
        image={producto.image}
        img1={producto.img1}
        category={producto.category}
        cantidad={producto.cantidad}
        />
      ))
    }
    </div>
    </>
  )
}
