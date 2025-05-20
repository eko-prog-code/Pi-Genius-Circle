import React, { useState } from 'react';
import './PiGeniusCircle.css';

const PiGeniusCircle = () => {
  const address = 'GB5SVZCTCCLAHWICTXM7XL74X3FXWNC6VDDJ3QQX53P4BLTNXATZDYNO';
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="pi-container">
      <h1 className="pi-title">Apa Itu Pi Genius Circle?</h1>
      <p className="pi-subtitle">Komunitas privat bagi pemikir, kreator, dan visioner.</p>

      <div className="pi-section">
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
          <span className="pi-address">{address}</span>
          <button className="pi-copy-btn" onClick={handleCopy}>
            {copied ? '✔️ Disalin!' : '📋 Salin'}
          </button>
        </div>

        {/* QR Code from public/PiQR.png */}
        <img src="/PiQR.png" alt="QR Code" className="pi-qr" />

        {/* Balance button */}
        <div className="pi-balance-container">
          <a
            href="https://blockexplorer.minepi.com/mainnet/accounts/GB5SVZCTCCLAHWICTXM7XL74X3FXWNC6VDDJ3QQX53P4BLTNXATZDYNO"
            target="_blank"
            rel="noopener noreferrer"
            className="pi-balance-btn"
          >
            Balance Pi Public
          </a>
        </div>
      </div>
    </div>
  );
};

export default PiGeniusCircle;
