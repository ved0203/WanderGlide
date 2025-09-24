"use client";
import React, { useState } from "react";

import FrontImg from "../../public/Wanderglide/front.png";
import BackImg from "../../public/Wanderglide/back.png";
import SleeveImg from "../../public/Wanderglide/sleeve.png";
import CollageImg from "../../public/Wanderglide/collage.png";
import ProductYellowImg from "../../public/Wanderglide/product-yellow.png";
import CoupleImg from "../../public/Wanderglide/couple.png";
import InstagramIcon from "../../public/Wanderglide/instagram.png";
import PinterestIcon from "../../public/Wanderglide/pinterest.png";

export default function Wanderglide() {
  const rotateImages = [FrontImg, BackImg, SleeveImg];
  const [rotateIndex, setRotateIndex] = useState(0);

  const nextAngle = () => {
    setRotateIndex((i) => (i + 1) % rotateImages.length);
  };

  return (
    <div className="wrapper">
      {/* Inline Styles */}
      <style>{`
        :root {
          --colour-bg: #f5efe9;
          --colour-primary: #d6c7b0;
          --colour-accent: #c9a16b;
          --colour-dark: #3c3a36;
          --colour-heading: #2e2b25;
          --font-serif: 'Playfair Display', serif;
          --font-sans: 'Montserrat', sans-serif;
        }
        body, html, .wrapper { margin:0; padding:0; font-family: var(--font-sans); background: var(--colour-bg); color: var(--colour-dark); }
        a { text-decoration:none; color:inherit; }
        .container { width:90%; max-width:1200px; margin:0 auto; }
        .site-header { background: var(--colour-bg); padding:1rem 0; position: sticky; top:0; z-index:1000; }
        .nav-container { display:flex; justify-content:space-between; align-items:center; }
        .brand { font-family: var(--font-serif); font-size:1.8rem; font-weight:700; }
        .nav-links { list-style:none; display:flex; gap:2rem; }
        .nav-links a { font-family: var(--font-sans); font-weight:400; transition: color 0.3s; }
        .nav-links a:hover, .nav-links a.active { color: var(--colour-accent); }
        .hero { position:relative; height:100vh; min-height:600px; background-image:url(${CoupleImg}); background-size:cover; background-position:center; display:flex; align-items:center; justify-content:center; color: var(--colour-heading); }
        .hero-overlay { position:absolute; inset:0; background: rgba(245,239,233,0.7); z-index:1; }
        .hero-content { position:relative; z-index:2; max-width:800px; padding:0 1.5rem; text-align:left; }
        .hero h1 { font-family: var(--font-serif); font-size:3rem; margin-bottom:1rem; }
        .hero .tagline { font-family: var(--font-serif); font-size:2rem; color: var(--colour-accent); margin-bottom:0.5rem; }
        .hero .subtext { font-family: var(--font-sans); font-size:1.1rem; margin-bottom:2rem; color: var(--colour-dark); }
        .cta { display:inline-block; background-color: var(--colour-accent); color:#fff; padding:0.75rem 2rem; border-radius:30px; font-weight:500; transition: background 0.3s; }
        .cta:hover { background-color:#b4895e; }
        .interactive { padding:6rem 0; background:#fbf8f4; }
        .interactive h2 { font-size:2rem; margin-bottom:2rem; }
        .rotate-container { display:flex; flex-direction:column; align-items:flex-start; gap:1rem; }
        .rotate-container img { width:320px; border-radius:1rem; box-shadow:0 10px 20px rgba(0,0,0,0.05); }
        .rotate-container button { background-color: var(--colour-accent); color:#fff; border:none; padding:0.7rem 1.6rem; border-radius:25px; font-weight:500; cursor:pointer; transition:0.3s; }
        .rotate-container button:hover { background-color:#b4895e; }
        .story { padding:6rem 0; }
        .story-container { display:flex; flex-wrap:wrap; gap:2rem; align-items:center; }
        .story-text { flex:1 1 50%; }
        .story-image { flex:1 1 40%; }
        .story-image img { width:100%; border-radius:1rem; box-shadow:0 10px 30px rgba(0,0,0,0.1); }
        .collection { padding:6rem 0; background:#fbf8f4; }
        .section-title { font-size:2.2rem; margin-bottom:3rem; text-align:left; }
        .product-grid { display:grid; grid-template-columns:repeat(auto-fit, minmax(250px, 1fr)); gap:2rem; }
        .product-card { background:#fff; border-radius:1rem; overflow:hidden; box-shadow:0 10px 20px rgba(0,0,0,0.05); display:flex; flex-direction:column; text-align:left; }
        .product-card img { width:100%; height:200px; object-fit:cover; }
        .product-card h3 { margin:1rem 0 0.5rem; font-size:1.2rem; font-weight:600; }
        .product-card .price { font-family: var(--font-serif); color: var(--colour-accent); font-size:1.1rem; margin-bottom:1rem; }
        .product-card .card-btn { margin: auto 0 1.5rem; padding:0.6rem 1.5rem; background-color: var(--colour-dark); color:#fff; border-radius:25px; font-size:0.9rem; font-weight:500; transition:0.3s; text-align:center; }
        .product-card .card-btn:hover { background-color: var(--colour-accent); }
        .details { padding:6rem 0; }
        .details-grid { display:grid; grid-template-columns:repeat(auto-fit, minmax(250px, 1fr)); gap:2rem; }
        .detail-item { background:#fff; padding:2rem; border-radius:1rem; box-shadow:0 10px 20px rgba(0,0,0,0.05); }
        .detail-item h4 { margin-bottom:0.7rem; color: var(--colour-accent); }
        .detail-item p { font-size:0.95rem; line-height:1.7; color: var(--colour-dark); }
        .site-footer { background:#eee4d5; padding:3rem 0; margin-top:4rem; font-size:0.9rem; color: var(--colour-heading); }
        .footer-container { display:flex; flex-wrap:wrap; gap:2rem; justify-content:space-between; align-items:flex-start; }
        .footer-brand { flex:1 1 30%; }
        .footer-brand .brand { font-family: var(--font-serif); font-size:1.6rem; font-weight:700; margin-bottom:0.5rem; }
        .footer-links { list-style:none; flex:1 1 30%; display:flex; flex-direction:column; gap:0.5rem; }
        .footer-note { flex:1 1 30%; text-align:right; }
        @media(max-width:900px){ .story-container { flex-direction:column; } .story-image{order:-1;} }
        @media(max-width:600px){ .footer-container{flex-direction:column; text-align:center;} .footer-note{text-align:center;} }
      `}</style>

      {/* Header */}
      <header className="site-header">
        <div className="container nav-container">
          <div className="brand">Aerigo</div>
          <nav>
            <ul className="nav-links">
              <li><a href="#" className="active">WanderGlide</a></li>
              <li><a href="#story">Our Story</a></li>
              <li><a href="#collection">Collection</a></li>
              <li><a href="#details">Details</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Aerigo WanderGlide</h1>
          <p className="tagline">Wing Collection</p>
          <p className="subtext">
            Luxury reimagined for the modern nomad. Inspired by movement and crafted
            for journeys.
          </p>
          <a href="#collection" className="cta">Explore Collection</a>
        </div>
      </section>

      {/* Interactive */}
      <section id="interactive" className="interactive">
        <div className="container">
          <h2>Interactive View</h2>
          <div className="rotate-container">
            <img
              src={rotateImages[rotateIndex]}
              alt="Interactive hoodie view"
            />
            <button onClick={nextAngle}>Next Angle</button>
          </div>
        </div>
      </section>

      {/* Story */}
      <section id="story" className="story">
        <div className="container story-container">
          <div className="story-text">
            <h2>Craftsmanship & Elegance</h2>
            <p>
              Each WanderGlide garment is designed for those who seek freedom in
              travel and sophistication in style. Drawing upon artisanal
              techniques and premium materials, we craft garments that move with
              you — from airport lounges to city streets. Our Wing Collection
              celebrates the journey as much as the destination.
            </p>
            <p>
              Inspired by the fluid lines of flight, our pieces blend minimalism
              and nuance. The result is a wardrobe of elevated essentials that
              accompany every adventure.
            </p>
          </div>
          <div className="story-image">
            <img src={CollageImg} alt="Hoodie collage" />
          </div>
        </div>
      </section>

      {/* Collection */}
      <section id="collection" className="collection">
        <div className="container">
          <h2 className="section-title">Wing Collection</h2>
          <div className="product-grid">
            <div className="product-card">
              <img src={FrontImg} alt="Front View" />
              <h3>WanderGlide &mdash; Front View</h3>
              <p className="price">$249</p>
              <a href="#interactive" className="card-btn">View Details</a>
            </div>
            <div className="product-card">
              <img src={BackImg} alt="Back View" />
              <h3>WanderGlide &mdash; Back View</h3>
              <p className="price">$249</p>
              <a href="#interactive" className="card-btn">View Details</a>
            </div>
            <div className="product-card">
              <img src={ProductYellowImg} alt="Limited Edition" />
              <h3>WanderGlide &mdash; Limited Edition</h3>
              <p className="price">$299</p>
              <a href="#interactive" className="card-btn">View Details</a>
            </div>
          </div>
        </div>
      </section>

      {/* Details */}
      <section id="details" className="details">
        <div className="container details-grid">
          <div className="detail-item">
            <h4>Ultra‑Rich Fabric</h4>
            <p>Hand‑selected textiles provide unmatched softness and durability. Our fabrics breathe, drape and endure — perfect for life on the go.</p>
          </div>
          <div className="detail-item">
            <h4>Minimalist Luxury</h4>
            <p>Thoughtful silhouettes and refined palettes evoke quiet sophistication. Subtle logos and tone‑on‑tone accents keep the focus on quality.</p>
          </div>
          <div className="detail-item">
            <h4>Travel Ready</h4>
            <p>Designed to move. From adjustable cuffs to hidden pockets, each piece is tailored for comfort and practicality on your journeys.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="site-footer">
        <div className="container footer-container">
          <div className="footer-brand">
            <span className="brand">Aerigo</span>
            <p>WanderGlide &middot; WanderLock &middot; eSIM</p>
          </div>
          <ul className="footer-links">
            <li><a href="#">About</a></li>
            <li><a href="#story">Story</a></li>
            <li><a href="#collection">Collection</a></li>
            <li><a href="#details">Details</a></li>
            <li><a href="#">Care</a></li>
          </ul>
          <div className="footer-note">
            <p>&copy; 2025 Aerigo Apparel. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
