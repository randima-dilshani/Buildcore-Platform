
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-cta">
            <div className="cta-item">
              <span className="cta-icon">📞</span>
              <div className="cta-content">
                <span className="cta-label">Give Us A Call</span>
                <span className="cta-value">+94 77 741 2810</span>
              </div>
            </div>
            <div className="cta-item">
              <span className="cta-icon">📧</span>
              <div className="cta-content">
                <span className="cta-label">Send Us Email</span>
                <span className="cta-value">slmaterialhub@gmail.com</span>
              </div>
            </div>
            <div className="cta-item">
              <span className="cta-icon">📍</span>
              <div className="cta-content">
                <span className="cta-label">Our Location</span>
                <span className="cta-value">No 490/4, Eksath Mawatha, Dalugama,Sri Lanka</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-about">
              <div className="footer-logo">
  <div className="logo footer-logo-highlight">
  <div className="logo-image-container">
    <img
      src="/image42.png"
      alt="North Central Engineering Logo"
      className="logo-image"
    />
  </div>

  <div className="logo-text">
    <span className="logo-name">Material Hub</span>
    <span className="logo-tagline">Pvt Ltd</span>
  </div>
</div>    
              </div>
              <p className="footer-description">
                A leading provider of high-quality materials, delivering reliable solutions with expertise, innovation, and unmatched service.
              </p>
            <div className="footer-social">
  <a href="https://www.facebook.com/share/1BpG2xgh2k/" className="social-link" aria-label="Facebook">
    <Facebook size={18} />
  </a>

  <a href="#" className="social-link" aria-label="Twitter">
    <Twitter size={18} />
  </a>

  <a href="#" className="social-link" aria-label="LinkedIn">
    <Linkedin size={18} />
  </a>

  <a href="#" className="social-link" aria-label="Instagram">
    <Instagram size={18} />
  </a>
</div>

            </div>

            <div className="footer-links">
              <h4>Quick Links</h4>
              <ul>
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#about">About Us</a>
                </li>
                <li>
                  <a href="#services">Services</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>

            <div className="footer-links">
              <h4>Our Services</h4>
              <ul>
                <li>
                  <a href="#">Fire Extinguishers</a>
                </li>
                <li>
                  <a href="#">Fire Detection & Alarm</a>
                </li>
                <li>
                  <a href="#">Fire Pump Rooms & Electrical</a>
                </li>
                <li>
                  <a href="#">Spares & Rapid Replacement</a>
                </li>
              </ul>
            </div>

            <div className="footer-newsletter">
              <h4>Subscribe Newsletter</h4>
              <p>Get the latest updates and news about fire safety.</p>
              <form className="newsletter-form">
                <input type="email" placeholder="Enter your email" />
                <button type="submit" className="btn-primary">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>© 2026 Material Hub Pvt Ltd. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}
