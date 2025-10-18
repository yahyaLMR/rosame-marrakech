import "./About.css";
import background1 from "../assets/background 1.webp";
import background2 from "../assets/background 2.webp";
import background3 from "../assets/background 3.webp";

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-content">
          <h2 className="about-title">À Propos de Rosâme Marrakech</h2>
          <div className="about-text">
            <p>
              Rosâme Marrakech incarne l'essence même de la beauté marocaine, fusionnant traditions ancestrales et innovation moderne. Depuis notre création, nous nous consacrons à capturer la pureté de la rose de Marrakech dans chacun de nos produits.
            </p>
            <p>
              Notre philosophie repose sur l'authenticité et la qualité. Nous sélectionnons méticuleusement les meilleures roses cultivées dans les vallées fertiles du Maroc, où les méthodes traditionnelles de récolte se transmettent de génération en génération.
            </p>
            <p>
              Chaque produit Rosâme est le fruit d'un savoir-faire artisanal unique, alliant les secrets de beauté marocains millénaires aux techniques de formulation les plus avancées. Notre engagement : vous offrir des soins d'exception qui révèlent la beauté naturelle de votre peau.
            </p>
          </div>
          <div className="about-values">
            <div className="value-item">
              <h3>🌹 Authenticité</h3>
              <p>Des ingrédients naturels et purs</p>
            </div>
            <div className="value-item">
              <h3>✨ Excellence</h3>
              <p>Un savoir-faire ancestral préservé</p>
            </div>
            <div className="value-item">
              <h3>💚 Durabilité</h3>
              <p>Respect de l'environnement</p>
            </div>
          </div>
        </div>
        <div className="about-images">
          <img src={background1} alt="Roses de Marrakech" className="about-img-1" />
          <img src={background2} alt="Production artisanale" className="about-img-2" />
          <img src={background3} alt="Tradition marocaine" className="about-img-3" />
        </div>
      </div>
    </section>
  );
}

export default About;
