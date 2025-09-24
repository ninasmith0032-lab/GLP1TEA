import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import products from "./products";
import Success from "./pages/Success";
import Cancel from "./pages/Cancel";

function Store() {
  const [loading, setLoading] = useState(false);

  const handleCheckout = async (product) => {
    setLoading(true);
    try {
      const res = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ product }),
      });
      const data = await res.json();
      if (data.url) window.location.href = data.url;
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ fontFamily: "sans-serif", padding: "20px" }}>
      <h1>🌱 GLP-1 Tea Store</h1>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
        {products.map((p, i) => (
          <div
            key={i}
            style={{ border: "1px solid #ccc", padding: "10px", borderRadius: "8px" }}
          >
            <img src={p.image} alt={p.name} style={{ width: "100%", borderRadius: "8px" }} />
            <h2>{p.name}</h2>
            <p>${(p.price / 100).toFixed(2)}</p>
            <button onClick={() => handleCheckout(p)} disabled={loading}>
              {loading ? "Processing..." : "Buy Now"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <nav style={{ padding: "10px", background: "#eee" }}>
        <Link to="/" style={{ marginRight: "10px" }}>Store</Link>
        <Link to="/success" style={{ marginRight: "10px" }}>Success</Link>
        <Link to="/cancel">Cancel</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Store />} />
        <Route path="/success" element={<Success />} />
        <Route path="/cancel" element={<Cancel />} />
      </Routes>
    </Router>
  );
}

export default App;
