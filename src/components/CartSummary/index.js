// Write your code here
import CartContext from '../../context/CartContext'
import './index.css'
const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let total = 0
      cartList.forEach(each => {
        total += each.price * each.quantity
      })
        return (
          <>
            <div className="CartSummary-container">
              <h1 className="order-total-value">
                <span className="order-total-label">Order Total:</span> Rs{' '}
                {total} /-
              </h1>
              <p className="CartSummary-items">
                {cartList.length} Items in cart
              </p>
              <button className="className-btn">Checkout</button>
            </div>
          </>
        )
      }}
    
  </CartContext.Consumer>
)
export default CartSummary
