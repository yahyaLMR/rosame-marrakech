import "./Contact.css";
import background4 from "../assets/background 4.webp";
import background5 from "../assets/background 5.webp";

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-info">
          <h2 className="contact-title">Contactez-Nous</h2>
          <p className="contact-subtitle">
            Nous sommes à votre écoute pour toute question ou demande d'information
          </p>

          <div className="contact-details">
            <div className="contact-item">
              <div className="contact-icon">📍</div>
              <div>
                <h3>Adresse</h3>
                <p>Avenue Mohammed VI, Marrakech<br />Maroc</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">📞</div>
              <div>
                <h3>Téléphone</h3>
                <p>+212 5XX-XXXXXX<br />+212 6XX-XXXXXX</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">✉️</div>
              <div>
                <h3>Email</h3>
                <p>rosamemarrakech@gmail.com</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">🕒</div>
              <div>
                <h3>Horaires</h3>
                <p>Lundi - Samedi: 9h00 - 19h00<br />Dimanche: 10h00 - 18h00</p>
              </div>
            </div>
          </div>

          <div className="contact-images">
            <img src={background4} alt="Boutique Rosâme" className="contact-img-1" />
            <img src={background5} alt="Roses Marrakech" className="contact-img-2" />
          </div>
        </div>

        <div className="contact-form-container">
          <form className="contact-form">
            <h3>Envoyez-nous un message</h3>
            
            <div className="form-group">
              <label htmlFor="name">Nom complet</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Votre nom"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="rosamemarrakech@gmail.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Téléphone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="+212 XXX-XXXXXX"
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Sujet</label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Objet de votre message"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Votre message..."
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-button">
              Envoyer le message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
