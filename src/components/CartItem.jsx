import React from 'react'

const CartItem = ( {data,delFromCart} ) => {

  const {id,name,price,quantity,imgURL} = data;
  let totalPrice = price * quantity;

  return (
    <div style={{borderBottom:'thin solid gray'}}>
      <img src={imgURL} alt={name} style={{height:'250px',width:'250px'}} />
      <h4> {name} </h4>
      <h2> cantidad: {quantity} <br/>  Total: ${totalPrice}.00 USD </h2>
      <button onClick={()=>delFromCart(id)}>Eliminar uno</button>
      <br />
      <button onClick={()=>delFromCart(id,true)}>Eliminar todos</button>
      <br/>
      <br />

    </div>
  )
}

export default CartItem