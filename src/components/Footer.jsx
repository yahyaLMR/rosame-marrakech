import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Rosâme Marrakech</h3>
            <p>
              Découvrez l'essence de la beauté marocaine à travers notre 
              collection exclusive de produits naturels à base de rose.
            </p>
            <div className="footer-social">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h3>Liens Rapides</h3>
            <ul>
              <li><a href="#home">Accueil</a></li>
              <li><a href="#products">Produits</a></li>
              <li><a href="#about">À Propos</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Nos Produits</h3>
            <ul>
              <li><a href="#products">Eau de Rose</a></li>
              <li><a href="#products">Parfums</a></li>
              <li><a href="#products">Soins du Visage</a></li>
              <li><a href="#products">Soins du Corps</a></li>
              <li><a href="#products">Soins Capillaires</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Contact</h3>
            <ul className="footer-contact">
              <li>
                <i className="fas fa-map-marker-alt"></i>
                <span>Avenue Mohammed VI, Marrakech</span>
              </li>
              <li>
                <i className="fas fa-phone"></i>
                <span>+212 5XX-XXXXXX</span>
              </li>
              <li>
                <i className="fas fa-envelope"></i>
                <span>rosamemarrakech@gmail.com</span>
              </li>
              <li>
                <i className="fas fa-clock"></i>
                <span>Lun - Sam: 9h00 - 19h00</span>
              </li>
            </ul>
            
            <div className="border-t border-background/20 pt-4">
              <h5 className="font-medium mb-2 text-sm">Contact the Developer</h5>
              <p className="text-background/80 text-sm mb-2">Yahya Lmouri</p>
              <a target="_blank" href="https://github.com/yahyaLMR" rel="noopener noreferrer" className="text-background/80 hover:text-background transition-colors text-sm flex items-center gap-2">
                <i className="fas fa-envelope"></i>
                Get in Touch
              </a>
            </div>
          </div>
          
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Rosâme Marrakech. Tous droits réservés. Développé par <a href="https://github.com/yahyaLMR" target="_blank" rel="noopener noreferrer" className="developer-link">Yahya Lmouri</a></p>
          <div className="footer-bottom-links">
            <a href="#privacy">Politique de Confidentialité</a>
            <span>|</span>
            <a href="#terms">Conditions d'Utilisation</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
