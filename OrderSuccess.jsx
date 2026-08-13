import React from "react";
import { CheckCircle, Car, Clock } from "lucide-react";

export default function OrderSuccess({ order, onNewOrder }) {
  return (
    <main className="success-page">
      <div className="success-card">
        <div className="success-icon"><CheckCircle size={58} /></div>
        <p className="eyebrow">ORDER CONFIRMED</p>
        <h1>You're all set! 🎉</h1>
        <p>Your food is being prepared. Drive to the pickup area during your selected slot.</p>

        <div className="order-number">Order #{order.orderNumber}</div>

        <div className="progress">
          <div className="progress-step active"><span>✓</span><small>Order placed</small></div>
          <div className="progress-line active-line" />
          <div className="progress-step active"><span>🍳</span><small>Preparing</small></div>
          <div className="progress-line" />
          <div className="progress-step"><span>🚗</span><small>Pickup</small></div>
        </div>

        <div className="success-details">
          <div><Clock size={20} /><span>Pickup: <strong>{order.slot}</strong></span></div>
          <div><Car size={20} /><span>Vehicle: <strong>{order.car}</strong></span></div>
          <div><strong>Total: ₹{order.total}</strong></div>
        </div>

        <button className="primary-button full" onClick={onNewOrder}>Start New Order</button>
      </div>
    </main>
  );
}