import React from "react";

function Cancel() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>❌ Payment Cancelled</h1>
      <p>Your payment was cancelled. You can try again anytime.</p>
      <a href="/">Back to Store</a>
    </div>
  );
}

export default Cancel;
