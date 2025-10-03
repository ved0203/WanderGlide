import React, { useState } from "react";
import "../App.css";

/* ---- Image imports (as provided) ---- */
const FrontImg = "/Wanderglide/front.png";
const BackImg = "/Wanderglide/back.png";
const CollageImg = "/Wanderglide/collage.png";
const ProductYellowImg = "/Wanderglide/travel_set.png";
const CoupleImg = "/Wanderglide/couple.png";
const InstagramIcon = "/Wanderglide/instagram.png";
const PinterestIcon = "/Wanderglide/pinterest.png";
const DetailImg = "/Wanderglide/detail.png";


/* Viewer images: front → back → sleeve */
const viewerImages = [FrontImg, DetailImg, BackImg];

export default function Wanderglide() {
  const [idx, setIdx] = useState(0);
  const next = () => setIdx((i) => (i + 1) % viewerImages.length);
  const prev = () => setIdx((i) => (i - 1 + viewerImages.length) % viewerImages.length);

  return (
    <>
      {/* Header */}
      <header>
        <div className="container nav-container">
          <div className="logo">AERIGO</div>
          <nav className="nav-links">
            <a href="#collection">Collection</a>
            <a href="#story">Story</a>
            <a href="#details">Details</a>
            <a href="#travel">Travel Set</a>
          </nav>
        </div>
      </header>

      {/* Hero (uses CoupleImg) */}
      <section className="hero">
        <img src={CoupleImg} alt="Aerigo Wing Collection hero" className="hero-image" />
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1 className="hero-title">Wing&nbsp;Collection</h1>
          <p className="hero-subtitle">Luxury reimagined for the modern nomad</p>
          <a href="#collection" className="cta-button">Shop now</a>
        </div>
      </section>

      {/* Story (uses CollageImg & BackImg) */}
      <section id="story" className="story-section">
        <div className="container story-container">
          <div className="story-text">
            <h2>Craftsmanship &amp; Elegance</h2>
            <p>
              Each Aerigo hoodie is born from a commitment to luxurious comfort and
              timeless design. Our artisans meticulously select premium fabrics and
              embellish them with bespoke wing motifs, creating a garment that
              elevates everyday wear into an art form. Inspired by the freedom of
              travel and the romance of flight, the Wing Collection invites you to
              embrace your journeys with style and ease.
            </p>
          </div>
          <div className="story-images">
            <img src={CollageImg} alt="Wing detail collage" className="story-img" />
            <img src={BackImg} alt="Back view" className="story-img" />
          </div>
        </div>
      </section>

      {/* Viewer (uses Front, Back, Sleeve) */}
      <section className="viewer-section">
        <div className="container viewer-container">
          <div className="viewer-preview">
            <img
              src={viewerImages[idx]}
              alt="Aerigo hoodie view"
              className="viewer-img"
              onClick={next}
            />
            <div className="viewer-controls">
              <button className="viewer-btn" onClick={prev} aria-label="Previous view">←</button>
              <button className="viewer-btn" onClick={next} aria-label="Next view">→</button>
            </div>
          </div>

          <div className="viewer-info">
            <h3>Aerigo Wing Hoodie</h3>
            <p>Rotate to appreciate every seam and contour of our signature Wing&nbsp;Hoodie.</p>

            <table className="size-chart">
              <caption>Size Chart (in&nbsp;cm)</caption>
              <thead>
                <tr>
                  <th>Size</th>
                  <th>Chest</th>
                  <th>Length</th>
                  <th>Sleeve</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>S</td><td>90</td><td>65</td><td>61</td></tr>
                <tr><td>M</td><td>96</td><td>67</td><td>62</td></tr>
                <tr><td>L</td><td>102</td><td>69</td><td>64</td></tr>
                <tr><td>XL</td><td>108</td><td>71</td><td>65</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Collection (uses ProductYellow & Front) */}
      <section id="collection" className="collection-section">
        <div className="container collection-container">
          <h2>Our Collection</h2>

          <div className="collection-grid">
            <div className="product-card">
              <img src={FrontImg} alt="Wing Hoodie" className="product-img" />
              <h3>Wing Hoodie</h3>
              <p className="product-price">$249</p>
              <p className="product-desc">
                Minimalist design crafted from a luxurious cotton blend and
                finished with our signature wing emblem.
              </p>
            </div>

            <div className="product-card" id="travel">
              <img src={ProductYellowImg} alt="Travel Set" className="product-img" />
              <h3>Travel Set</h3>
              <p className="product-price">$349</p>
              <p className="product-desc">
                The ultimate adventure kit: a Wing Hoodie paired with a matching
                luggage and the WanderLock. Perfect harmony for your next voyage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Details */}
      <section id="details" className="details-section">
        <div className="container details-container">
          <div className="detail-item">
            <div className="detail-icon">👕</div>
            <h4>Premium Fabric</h4>
            <p>Soft yet durable blend that keeps its shape and comfort season after season.</p>
          </div>

          <div className="detail-item">
            <div className="detail-icon">✈️</div>
            <h4>Travel Ready</h4>
            <p>Lightweight, wrinkle resistant and easy to pack for every journey.</p>
          </div>

          <div className="detail-item">
            <div className="detail-icon">🧵</div>
            <h4>Stitched Emblems</h4>
            <p>Embroidered wing details deliver a bespoke luxury you can see and feel.</p>
          </div>

          <div className="detail-item">
            <div className="detail-icon">🔒</div>
            <h4>WanderLock</h4>
            <p>Elegant security for your belongings wherever you roam.</p>
          </div>
        </div>
      </section>

      {/* Footer with social icons (uses InstagramIcon & PinterestIcon) */}
      <footer>
        <div className="container footer-container">
          <span>© 2025 Aerigo</span>
          <span className="footer-links">
            <a href="https://www.instagram.com/aerigo.co/" target="_blank" rel="noreferrer">
              <img src={InstagramIcon} alt="Instagram" style={{ height: 18, verticalAlign: "middle" }} /> Instagram
            </a>
            <a
              href="https://www.pinterest.com/aerigoco/?invite_code=8496e5049cb44c20bcbc139ae1b67b80&sender=1036461439151278706"
              target="_blank"
              rel="noreferrer"
              style={{ marginLeft: "1rem" }}
            >
              <img src={PinterestIcon} alt="Pinterest" style={{ height: 18, verticalAlign: "middle" }} /> Pinterest
            </a>
          </span>
        </div>
      </footer>
    </>
  );
}
