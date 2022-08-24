import React from 'react'

const ProductItem = ({data,addToCart}) => {
    const {id,name,price,imgURL} = data
  return (
    <div style={{border:'thin solid gray', padding: '10px'}}>
      <img src={imgURL} alt={name} style={{height:'250px',width:'250px'}} />
      <h4> {name} </h4>
      <h5> ${price}.00 USD</h5>
      <button onClick={()=>addToCart(id)}>Agregar al carrito</button>
    </div>
  )
}

export default ProductItem