import React, { useState } from "react";
import { ArrowLeft, Car, Clock } from "lucide-react";

export default function Checkout({ cart, subtotal, tax, total, onBack, onPlaceOrder }) {
  const [form, setForm] = useState({ name: "", phone: "", car: "", slot: "12:00 PM - 12:30 PM", notes: "" });

  function update(key, value) {
    setForm(current => ({ ...current, [key]: value }));
  }

  function submit(e) {
    e.preventDefault();
    if (!form.name || !form.phone || !form.car) return;
    onPlaceOrder(form);
  }

  return (
    <main className="page-container">
      <button className="back-button" onClick={onBack}><ArrowLeft size={18} /> Back to cart</button>

      <div className="page-title">
        <p className="eyebrow">CHECKOUT</p>
        <h1>Pickup Details</h1>
      </div>

      <div className="checkout-layout">
        <form className="checkout-form" onSubmit={submit}>
          <h2>Customer Details</h2>

          <label>Full Name<input required value={form.name} onChange={e => update("name", e.target.value)} placeholder="Enter your name" /></label>
          <label>Phone Number<input required type="tel" value={form.phone} onChange={e => update("phone", e.target.value)} placeholder="98765 43210" /></label>
          <label>Car / Vehicle Details<input required value={form.car} onChange={e => update("car", e.target.value)} placeholder="e.g. White Honda City - KA 01 AB 1234" /></label>

          <h2>Pickup Slot</h2>
          <div className="slot-grid">
            {["12:00 PM - 12:30 PM", "1:00 PM - 1:30 PM", "5:00 PM - 5:30 PM", "7:00 PM - 7:30 PM"].map(slot => (
              <button type="button" key={slot} className={form.slot === slot ? "slot selected-slot" : "slot"} onClick={() => update("slot", slot)}>
                <Clock size={17} /> {slot}
              </button>
            ))}
          </div>

          <label>Special Instructions<textarea value={form.notes} onChange={e => update("notes", e.target.value)} placeholder="Any special request?" /></label>

          <button className="primary-button full" type="submit">Place Order · ₹{total}</button>
        </form>

        <aside className="summary-card checkout-summary">
          <div className="pickup-icon"><Car /></div>
          <h2>Drive-Through Pickup</h2>
          <p>Your order will be prepared for the selected pickup slot.</p>

          {cart.map(item => (
            <div className="mini-order" key={`${item.id}-${item.customization}`}>
              <span>{item.quantity} × {item.name}</span>
              <strong>₹{item.price * item.quantity}</strong>
            </div>
          ))}

          <hr />
          <div className="summary-line"><span>Subtotal</span><span>₹{subtotal}</span></div>
          <div className="summary-line"><span>Tax</span><span>₹{tax}</span></div>
          <div className="summary-total"><span>Total</span><strong>₹{total}</strong></div>
        </aside>
      </div>
    </main>
  );
}