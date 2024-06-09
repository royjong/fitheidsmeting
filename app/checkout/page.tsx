// pages/index.js
"use client"; 

import { useState } from 'react';

const HomePage = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handlePayment = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/pay');
      const data = await response.json();
      if (response.ok) {
        window.location.href = data.checkoutUrl;
      } else {
        setError(data.error || 'Internal Server Error');
      }
    } catch (error) {
      console.error('An error occurred:', error);
     
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Welcome to My Next.js App</h1>
      <button onClick={handlePayment} disabled={loading}>
        {loading ? 'Processing...' : 'Pay Now'}
      </button>
      {error && <p>{error}</p>}
    </div>
  );
};

export default HomePage;
