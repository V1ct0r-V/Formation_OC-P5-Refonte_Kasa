import Header from "../components/Header/Header.jsx";
import Slideshow from "../components/Slideshow/Slideshow.jsx";
import Button from "../components/Button/Button.jsx";
import Notation from "../components/Notation/Notation.jsx";
import Footer from "../components/Footer/Footer.jsx";
import logementData from "../data/logements.json";
import Collapse from "../components/Collapse/Collapse.jsx";

function FicheLogement({ id }) {
  const logement = logementData.find((log) => log.id === id);
  return (
    <>
      <Header />
      {
        <section className="fiche-logement">
          <Slideshow id={logement.id} />
          <div className="rental__and__aside">
            <div className="rental__info">
              <h1 className="rental__title">{logement.title}</h1>
              <p className="rental__location">{logement.location}</p>
              <Button prop={logement.tags} />
            </div>
            <aside className="host__name__and__picture">
              <div className="host__info">
                <p className="owner__name">{logement.host.name}</p>
                <img
                  className="owner__picture"
                  src={logement.host.picture}
                  alt={`Portrait de ${logement.host.name}`}
                />
              </div>
              <Notation note={logement.rating} />
            </aside>
          </div>

          <div className="other__info">
            <Collapse title="Description" content={logement.description} />
            <Collapse title="Équipements" content={logement.equipments} />
          </div>
        </section>
      }
      <Footer />
    </>
  );
}

export default FicheLogement;
