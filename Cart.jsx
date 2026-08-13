import React from "react";
import {
  ArrowLeft,
  Minus,
  Plus,
  Trash2,
  ShoppingBag
} from "lucide-react";

export default function Cart({ cart, subtotal, tax, total, onIncrease, onDecrease, onRemove, onBack, onCheckout }) {
  return (
    <main className="page-container">
      <button className="back-button" onClick={onBack}><ArrowLeft size={18} /> Back to menu</button>

      <div className="page-title">
        <p className="eyebrow">YOUR ORDER</p>
        <h1>Shopping Cart</h1>
      </div>

      {!cart.length ? (
        <div className="empty-cart">
          <ShoppingBag size={52} />
          <h2>Your cart is empty</h2>
          <p>Add something delicious from our menu.</p>
          <button className="primary-button" onClick={onBack}>Browse Menu</button>
        </div>
      ) : (
        <div className="cart-layout">
          <div className="cart-items">
            {cart.map(item => (
              <div className="cart-item" key={`${item.id}-${item.customization}`}>
                <img src={item.image} alt={item.name} />
                <div className="cart-item-info">
                  <h3>{item.name}</h3>
                  <p>{item.customization}</p>
                  <strong>₹{item.price}</strong>
                  <div className="quantity">
                    <button onClick={() => onDecrease(item.id, item.customization)}><Minus size={15} /></button>
                    <span>{item.quantity}</span>
                    <button onClick={() => onIncrease(item.id, item.customization)}><Plus size={15} /></button>
                  </div>
                </div>
                <div className="cart-item-right">
                  <strong>₹{item.price * item.quantity}</strong>
                  <button className="delete-button" onClick={() => onRemove(item.id, item.customization)}><Trash2 size={17} /></button>
                </div>
              </div>
            ))}
          </div>

          <aside className="summary-card">
            <h2>Order Summary</h2>
            <div className="summary-line"><span>Subtotal</span><span>₹{subtotal}</span></div>
            <div className="summary-line"><span>Tax (5%)</span><span>₹{tax}</span></div>
            <div className="summary-line"><span>Pickup</span><span>FREE</span></div>
            <hr />
            <div className="summary-total"><span>Total</span><strong>₹{total}</strong></div>
            <button className="primary-button full" onClick={onCheckout}>Continue to Checkout →</button>
          </aside>
        </div>
      )}
    </main>
  );
}