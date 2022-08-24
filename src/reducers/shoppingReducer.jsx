import { TYPES } from "../actions/shoppingAction";

export const shoppingInitialState = {
    products:[
    {id:1,name:"Playstation 1",price:100,imgURL:'https://m.media-amazon.com/images/I/51T9BoKPnyL._SL1500_.jpg'},
    {id:2,name:"Playstation 2",price:200,imgURL:'https://arc-anglerfish-arc2-prod-infobae.s3.amazonaws.com/public/4JPYIVHTIRAJDEKOP5BNYUSQGM'},
    {id:3,name:"Playstation 3",price:300,imgURL:'https://www.manual.ar/thumbs/products/l/6924-sony-playstation-3.jpg'},
    {id:4,name:"Playstation 4",price:400,imgURL:'https://mauricomputacion.com.ar/images/productos/17374.webp'},
    {id:5,name:"Playstation 5",price:500,imgURL:'https://www.necxus.com.ar/products_image/21441/1000x1000_2.jpg'},
    {id:6,name:"Pc Gamer",price:600,imgURL:'https://http2.mlstatic.com/D_NQ_NP_906860-MLA31007942269_062019-W.jpg'},
    ],
    cart:[],
}

export function shoppingReducer(state,action){
    switch (action.type) {
        case TYPES.ADD_TO_CART:{
            let newItem = state.products.find(product => product.id === action.payload);

            let itemInCart = state.cart.find(item => item.id === newItem.id);

            return itemInCart ? {
              ...state,
              cart:state.cart.map(item => item.id === newItem.id ? {...item,quantity:item.quantity + 1 } : item )
            } : {
              ...state,
              cart:[...state.cart,{...newItem,quantity:1}],
            } 
            
        }
        
      
        case TYPES.REMOVE_ONE_FROM_CART:{
          let itemToDelete = state.cart.find((item)=> item.id === action.payload);
          
          return itemToDelete.quantity > 1 ? {
            ...state,
            cart: state.cart.map((item) => item.id === action.payload ? {...item, quantity:item.quantity -1} : item )
          }:
          {
            ...state,
            cart: state.cart.filter((item) => item.id !== action.payload)
          }
        }
        case TYPES.REMOVE_ALL_FROM_CART:{
          return {
            ...state,
            cart: state.cart.filter((item) => item.id !== action.payload)
          }

        }
        
        case TYPES.CLEAR_CART:{
            alert('Esta seguro de borrar el carrito?')
            return shoppingInitialState;
        }
        case TYPES.TOTAL_AMOUNT:{
          

          return{
            
          }
        }
        
        default:
            return state;

    }
}