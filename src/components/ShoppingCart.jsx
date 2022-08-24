import React, { useReducer } from 'react'
import { TYPES } from '../actions/shoppingAction';
import { shoppingInitialState, shoppingReducer } from '../reducers/shoppingReducer'
import CartItem from './CartItem';
import ProductItem from './ProductItem';

const ShoppingCart = () => {
    const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);
    const {products,cart} = state;

    const addToCart = (id) => {
      dispatch({type:TYPES.ADD_TO_CART,payload:id});
    };
    
    const delFromCart = (id,all=false) =>{
      if(all){
        dispatch({type:TYPES.REMOVE_ALL_FROM_CART,payload:id})
      }
      else{
        dispatch({type:TYPES.REMOVE_ONE_FROM_CART,payload:id})
      }
    };

    const clearCart = () => {
      dispatch({type:TYPES.CLEAR_CART})
    };

    const sumTotal = () => {
      const reducer = (accumalator, currentValue) => {
        const { quantity, price } = currentValue;
        return accumalator + quantity * price;
      };
      const sum = state.cart.reduce(reducer, 0);
      return sum;
    };
  return (
    <div>
      <h2>Carrito de compras</h2>
      <h3>Productos</h3>
      <article className='box grid-responsive'>
        {products.map((product)=>(<ProductItem key={product.id} data={product} addToCart={addToCart} />))}
      </article>
      <h3>Carrito</h3>
      <article className='box grid-responsive'>
        <button onClick={clearCart} style={{width:'100px',height:'50px',display:'flex',alignSelf:'center',justifySelf:'center',alignItems:'center',borderRadius:'10px'}}>Borrar Carrito</button>
        {
          cart.map((item,index)=>(<CartItem key={index} data={item} delFromCart={delFromCart} />))
        }
      </article>
      <h2 style={{textAlign:'center',paddingTop:'100px'}}>Total carrito =  ${sumTotal()}.00 USD </h2>
    </div>
  )
}

export default ShoppingCart