// src/components/PiGeniusCircle.jsx
import React, { useState } from 'react';
import './PiGeniusCircle.css';

const PiGeniusCircle = () => {
  const piAddress   = 'GB5SVZCTCCLAHWICTXM7XL74X3FXWNC6VDDJ3QQX53P4BLTNXATZDYNO';
  const usdtAddress = '0x8c88123c89f8c74d009340a9fce69e9db7e60cf1';

  const [copiedPi, setCopiedPi]     = useState(false);
  const [copiedUsdt, setCopiedUsdt] = useState(false);

  // universal copy helper with fallback
  const copyText = async (text) => {
    if (navigator.clipboard?.writeText) {
      try {
        await navigator.clipboard.writeText(text);
        return true;
      } catch {}
    }
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.top = ta.style.left = '0';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    const ok = document.execCommand('copy');
    document.body.removeChild(ta);
    return ok;
  };

  const handlePiCopy = async () => {
    if (await copyText(piAddress)) {
      setCopiedPi(true);
      setTimeout(() => setCopiedPi(false), 2000);
    }
  };

  const handleUsdtCopy = async () => {
    if (await copyText(usdtAddress)) {
      setCopiedUsdt(true);
      setTimeout(() => setCopiedUsdt(false), 2000);
    }
  };

  return (
    <div className="pi-container">
      <h1 className="pi-title">Apa Itu Pi Genius Circle?</h1>
      <p className="pi-subtitle">Komunitas privat bagi pemikir, kreator, dan visioner.</p>

      <div className="pi-section">
        {/* Pi Section */}
        <h2 className="pi-package">Keyholder Package</h2>
        <p className="pi-membership">5,000 Pi Membership</p>
        <p className="pi-description">
          Unlock the door to exclusive privileges, curated experiences, and a network of visionary thinkers.
          This is not just about coffee—it's about being part of an exclusive circle that values intellect and status.
        </p>

        <h3 className="pi-benefits">Membership Benefits Include:</h3>
        <ul className="pi-list">
          <li>Premium Robusta Temanggung Coffee (1kg annually for 5 years)</li>
          <li>Exclusive QR Code eBook Access to Genius Circle</li>
          <li>Private Community Access (online & offline events)</li>
          <li>Business & Project Incubation Opportunities</li>
        </ul>

        <h3 className="pi-join">Join Pi Genius Circle</h3>
        <p className="pi-send">Send 5.000 Pi to Address:</p>
        <div className="pi-copy-container">
          <span className="pi-address">{piAddress}</span>
          <button className="pi-copy-btn" onClick={handlePiCopy}>
            {copiedPi ? '✔️ Disalin!' : '📋 Salin'}
          </button>
        </div>

        <img src="/PiQR.png" alt="Pi QR Code" className="pi-qr" />

        <div className="pi-balance-container">
          <a
            href={`https://blockexplorer.minepi.com/mainnet/accounts/${piAddress}`}
            target="_blank"
            rel="noopener noreferrer"
            className="pi-balance-btn"
          >
            Balance Pi Public
          </a>
        </div>

        {/* Divider */}
        <hr className="pi-divider" />

        {/* USDT-Tether Section */}
        <div className="pi-usdt-section">
          <h3 className="pi-usdt-title">Alamat Tether USDT (BSC)</h3>
          <div className="pi-copy-container">
            <span className="pi-usdt-address">{usdtAddress}</span>
            <button className="pi-usdt-copy-btn" onClick={handleUsdtCopy}>
              {copiedUsdt ? '✔️ Disalin!' : '📋 Salin'}
            </button>
          </div>
          <img
            src="/USDT-TheterQR.jpeg"
            alt="USDT Tether QR Code"
            className="pi-usdt-qr"
          />

          <div className="pi-balance-usdt-container">
            <a
              href={`https://www.oklink.com/usdt/address/${usdtAddress}`}
              target="_blank"
              rel="noopener noreferrer"
              className="pi-balance-usdt-btn"
            >
              Balance USDT Tether Public
            </a>
          </div>
        </div>

        {/* Products Section */}
        <hr className="products-divider" />
        <div className="products-section">
          <h3 className="products-title">Our Products</h3>
          <div className="products-images">
            <img src="/produk1.png" alt="Produk 1" />
            <img src="/produk2.png" alt="Produk 2" />
            <img src="/produk3.png" alt="Produk 3" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PiGeniusCircle;