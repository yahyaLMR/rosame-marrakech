import "./Products.css";
import cheveux1 from "../assets/cheveux 1.webp";
import cheveux2 from "../assets/cheveux 2.webp";
import eauRoses1 from "../assets/eau des roses 1.webp";
import eauRoses2 from "../assets/eau des roses 2.webp";
import parfum1 from "../assets/parfum 1.webp";
import parfum2 from "../assets/parfum 2.webp";
import parfum3 from "../assets/parfum 3.webp";
import soinsCorps1 from "../assets/soins corps et bain 1.webp";
import soinsCorps2 from "../assets/soins corps et bain 2.webp";
import soinsCorps3 from "../assets/soins corps et bain 3.webp";
import soinsCorps4 from "../assets/soins corps et bain 4.webp";
import soinsCorps5 from "../assets/soins corps et bain 5.webp";
import soinsVisage1 from "../assets/soins de visage 1.webp";
import soinsVisage2 from "../assets/soins de visage 2.webp";
import soinsVisage3 from "../assets/soins de visage 3.webp";
import soinsVisage4 from "../assets/soins de visage 4.webp";

function Products() {
  const productCategories = [
    {
      id: 1,
      name: "Soins de Visage",
      description: "Révélez l'éclat naturel de votre peau avec nos soins du visage à la rose",
      images: [soinsVisage1, soinsVisage2, soinsVisage3, soinsVisage4],
    },
    {
      id: 2,
      name: "Soins Corps et Bain",
      description: "Sublimez votre corps avec nos produits de bain luxueux",
      images: [soinsCorps1, soinsCorps2, soinsCorps3, soinsCorps4, soinsCorps5],
    },
    {
      id: 3,
      name: "Parfums",
      description: "Des fragrances envoûtantes inspirées des roses de Marrakech",
      images: [parfum1, parfum2, parfum3],
    },
    {
      id: 4,
      name: "Eau des Roses",
      description: "L'essence pure de la rose marocaine pour une peau éclatante",
      images: [eauRoses1, eauRoses2],
    },
    {
      id: 5,
      name: "Soins Cheveux",
      description: "Nourrissez et fortifiez vos cheveux avec nos soins capillaires",
      images: [cheveux1, cheveux2],
    },
  ];

  return (
    <section className="products-section" id="products">
      <div className="products-container">
        <h2 className="products-title">Nos Collections</h2>
        <p className="products-subtitle">
          Découvrez nos gammes de produits de beauté inspirés de la tradition marocaine
        </p>

        <div className="products-grid">
          {productCategories.map((category) => (
            <div key={category.id} className="product-card">
              <div className="product-images">
                {category.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${category.name} ${index + 1}`}
                    className={`product-img product-img-${index}`}
                  />
                ))}
              </div>
              <div className="product-info">
                <h3 className="product-name">{category.name}</h3>
                <p className="product-description">{category.description}</p>
                <button className="product-button">Découvrir</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Products;
