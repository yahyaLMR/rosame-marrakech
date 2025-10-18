import React from "react";
import "./hero.css";

export default function Hero() {
  return (
    <>
      <header id="home" className="hero-section">
        <svg
          className="hero-flower-decoration"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.15">
            {/* Rose petals */}
            <ellipse
              cx="100"
              cy="100"
              rx="25"
              ry="35"
              fill="#ff69b4"
              transform="rotate(0 100 100)"
            />
            <ellipse
              cx="100"
              cy="100"
              rx="25"
              ry="35"
              fill="#ff85c1"
              transform="rotate(45 100 100)"
            />
            <ellipse
              cx="100"
              cy="100"
              rx="25"
              ry="35"
              fill="#ff69b4"
              transform="rotate(90 100 100)"
            />
            <ellipse
              cx="100"
              cy="100"
              rx="25"
              ry="35"
              fill="#ff85c1"
              transform="rotate(135 100 100)"
            />
            <ellipse
              cx="100"
              cy="100"
              rx="25"
              ry="35"
              fill="#ff69b4"
              transform="rotate(180 100 100)"
            />
            <ellipse
              cx="100"
              cy="100"
              rx="25"
              ry="35"
              fill="#ff85c1"
              transform="rotate(225 100 100)"
            />
            <ellipse
              cx="100"
              cy="100"
              rx="25"
              ry="35"
              fill="#ff69b4"
              transform="rotate(270 100 100)"
            />
            <ellipse
              cx="100"
              cy="100"
              rx="25"
              ry="35"
              fill="#ff85c1"
              transform="rotate(315 100 100)"
            />
            {/* Center of rose */}
            <circle cx="100" cy="100" r="15" fill="#ff1493" />
            {/* Leaves */}
            <ellipse
              cx="70"
              cy="130"
              rx="15"
              ry="25"
              fill="#90ee90"
              transform="rotate(-30 70 130)"
            />
            <ellipse
              cx="130"
              cy="130"
              rx="15"
              ry="25"
              fill="#90ee90"
              transform="rotate(30 130 130)"
            />
          </g>
        </svg>
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="brand-name">Rosâme Marrakech</h1>
            <p className="tagline">“La rose au service de votre éclat”</p>
            <p className="description">
              Découvrez le secret de la beauté Arabe à travers notre collection
              exclusive de soins à la rose. Des produits d'exception pour une
              peau rayonnante.
            </p>
            <a href="#products" className="cta-button">
              Découvrir la collection
            </a>
          </div>
          <div className="hero-images">
            <a href="#products"><img
              src="/src/assets/cheveux 1.webp"
              alt="Produits de beauté à la rose Rosâme Marrakech"
            /></a>
            <a href="#products"><img
              src="/src/assets/eau des roses 1.webp"
              alt="Eau de rose naturelle"
            /></a>
            <a href="#products"><img src="/src/assets/parfum 1.webp" alt="Parfum à la rose" /></a>
          </div>
        </div>
      </header>
    </>
  );
}
