import React from 'react';
import './joinCommunity.css';

export default function joinCommunity() {
  return (
    <section className="joinCommunity">
      <div className="joinCommunity-overlay">
        <button className="badge">✨ Join Our Community</button>

        <h1 className="joinCommunity-title">Ready to Transform Your Learning Journey?</h1>

        <p className="joinCommunity-sub">
          Join hundreds of students who are already excelling with Next Horizon's
          comprehensive resources and support
        </p>

        <div className="cta-row">
          <button className="primary-cta">Start Learning Today <span className="arrow">→</span></button>
          <input className="email-input" placeholder="" aria-label="email" />
        </div>

        <p className="foot">No credit card required • Free tier available • Cancel anytime</p>
      </div>
    </section>
  );
}
