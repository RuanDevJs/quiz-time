import { Check, ChevronRight, X } from "lucide-react";
import Success from "../src/assets/Success.png";
import Imagination from "../src/assets/Imagination.png";
import Adventure from "../src/assets/Adventure.png";

export default function App() {
  return (
    <main className="background">
      <div className="modal">
        <header className="header">
          <h1>
            👋 Quiz<span>Time</span>
          </h1>
          <button className="check-button">
            <Check size={25} /> 3
          </button>
        </header>
        <div className="content">
          <h2>
            Qual era o objetivo da <br /> personagem ?
          </h2>
          <div className="content-container">
            <div className="option-1">
              <div>
                <img src={Success} alt="" />
              </div>
              <span>Caçar tesouros</span>
              <div className="checklist" />
            </div>
            <div className="option-2">
              <div>
                <img src={Imagination} alt="" />
              </div>
              <span>
                Ter mais tempo para <br /> ler livros
              </span>
              <div className="checklist">
                <Check size={20} color="#5CAD1D" />
              </div>
            </div>
            <div className="option-3">
              <div>
                <img src={Adventure} alt="" />
              </div>
              <span>Navegar pelos 7 mares</span>
              <div className="checklist">
                <X size={20} color="#AB3030" />
              </div>
            </div>
          </div>
        </div>
        <footer className="footer">
          <p>
            4<span>/5</span>
          </p>
          <button className="button">
            <ChevronRight size={20} color="#d9d9d9" />
          </button>
        </footer>
      </div>
    </main>
  );
}
