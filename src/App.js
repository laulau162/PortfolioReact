import "./App.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faCamera,
  faCar,
  faClock,
  faGraduationCap,
  faShieldAlt,
  faLanguage,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

function App() {
  const [menuOpen, setMenuOpen] = useState(false); // estado para hamburguesa

  return (
    <div className="App">
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">
          <span className="logo-icon">LZ</span>
          <span>Laura Zaballa - Front-End Developer</span>
        </div>

        {/* Links */}
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li>
            <a href="#skills" onClick={() => setMenuOpen(false)}>
              Skills
            </a>
          </li>
          <li>
            <a href="#experiencia" onClick={() => setMenuOpen(false)}>
              Experiencia
            </a>
          </li>
          <li>
            <a href="#formacion" onClick={() => setMenuOpen(false)}>
              Formación
            </a>
          </li>
          <li>
            <a href="#sobre-mi" onClick={() => setMenuOpen(false)}>
              Sobre Mí
            </a>
          </li>
          <li>
            <a href="#contacto" onClick={() => setMenuOpen(false)}>
              Contacto
            </a>
          </li>
        </ul>

        {/* Icono hamburguesa */}
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? "✕" : "☰"}
        </div>
      </nav>

      {/* HEADER */}
      <header className="header">
        <div className="header-content">
          <span className="available-badge">Disponible para nuevos retos</span>
          <h1>Desarrolladora Front-End</h1>
          <p>React · Angular · Web Components · JavaScript</p>
          <div className="stats">
            <div className="stat">
              <span className="stat-number">1</span>
              <p>Especialista en desarrollo web con +3 años de experiencia.</p>
            </div>
            <div className="stat">
              <span className="stat-number">2</span>
              <p>Desarrollo de interfaces modernas de alto rendimiento.</p>
            </div>
            <div className="stat">
              <span className="stat-number">3</span>
              <p>He formado parte del equipo técnico de BBVA Technology.</p>
            </div>
          </div>
          <p>
            Especialista en desarrollo web con +3 años de experiencia
            construyendo interfaces modernas de alto rendimiento.
          </p>
          <p>He formado parte del equipo técnico de BBVA Technology.</p>
          <a href="#contacto">
            <button className="contact-btn">Contactar</button>
          </a>
          <a href="#experiencia" className="see-experience">
            <button className="contact-btn">Ver experiencia →</button>
          </a>
        </div>
        <div className="profile-container">
          <img
            src={process.env.PUBLIC_URL + "/profile.jpg"}
            className="profile-img"
            alt="Perfil"
          />
          <span className="experience-badge">3 años de experiencia</span>
        </div>

      </header>

      <section id="skills" className="section">
        <h2>SKILLS</h2>
        <div className="skills-grid">
          <div className="skill-card">
            <h3>FRONT-END</h3>
            <ul>
              <li>React / Ember.js</li>
              <li>Angular</li>
              <li>JavaScript ES6+</li>
              <li>LitElement & Cells</li>
              <li>Web Components</li>
              <li>HTML5 / CSS3</li>
              <li>AJAX / jQuery</li>
            </ul>
          </div>
          <div className="skill-card">
            <h3>BACK-END & BD</h3>
            <ul>
              <li>Java (Swing, Hilos)</li>
              <li>PHP</li>
              <li>Oracle PL/SQL</li>
              <li>MySQL / SQLite</li>
              <li>Hibernate</li>
              <li>ODOO / Python</li>
            </ul>
          </div>
          <div className="skill-card">
            <h3>HERRAMIENTAS</h3>
            <ul>
              <li>Git / GitHub</li>
              <li>Jira / Agile</li>
              <li>VS Code</li>
              <li>Android Studio</li>
              <li>Prestashop</li>
            </ul>
          </div>
          <div className="skill-card">
            <h3>ARQUITECTURA</h3>
            <ul>
              <li>UML / E-R</li>
              <li>APIs REST</li>
              <li>XML / XPath</li>
              <li>XSD / DTD</li>
              <li>JSON</li>
              <li>DNS / HTTP</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="experiencia" className="section">
        <h2>EXPERIENCIA LABORAL</h2>
        <div className="experience-card">
          <span className="date">Oct 2023 — Sep 2025</span>
          <span className="company">BBVA Technology</span>
          <h3>Desarrolladora Web Front-End</h3>
          <p>
            Desarrollo de aplicaciones web SPA de alto rendimiento para uno de
            los principales bancos de Europa. Construcción de interfaces
            complejas con arquitectura de Web Components y frameworks modernos.
            Trabajo en entorno de gran escala con metodología ágil, code reviews
            y entrega continua.
          </p>
          <ul className="tags">
            <li>React</li>
            <li>Ember.js</li>
            <li>JavaScript</li>
            <li>Cells</li>
            <li>LitElement</li>
            <li>Web Components</li>
            <li>Agile</li>
          </ul>
        </div>
        <div className="experience-card">
          <span className="date">Mar 2023 — Oct 2023</span>
          <span className="company">Sopra Steria</span>
          <h3>Desarrolladora Web Front-End</h3>
          <p>
            Desarrollo front-end en proyectos de cliente dentro de consultora
            tecnológica internacional. Metodología ágil con sprints y trabajo en
            equipo multidisciplinar.
          </p>
          <ul className="tags">
            <li>Front-End</li>
            <li>JavaScript</li>
            <li>Agile</li>
            <li>Jira</li>
          </ul>
        </div>
        <div className="experience-card">
          <span className="date">Jun 2022 — Mar 2023</span>
          <span className="company">Carrefour Express</span>
          <h3>Cajera / Reponedora</h3>
          <p>
            Atención al cliente, gestión de caja y reposición de productos.
            Habilidades de comunicación y orientación al cliente.
          </p>
        </div>
      </section>

      <section id="formacion" className="section">
        <h2>FORMACIÓN ACADÉMICA</h2>
        <div className="education-grid">
          <div className="education-card">
            <span className="year">2022</span>
            <h3>T.S. Desarrollo de Aplicaciones Web</h3>
            <p>IES Ataulfo Argenta</p>
          </div>
          <div className="education-card">
            <span className="year">2020</span>
            <h3>T.S. Desarrollo de Aplic. Multiplataforma</h3>
            <p>IES Ataulfo Argenta</p>
          </div>
          <div className="education-card">
            <span className="year">+7</span>
            <h3>Formación Complementaria</h3>
            <ul>
              <li>React Avanzado - Udemy</li>
              <li>Angular - Udemy</li>
              <li>Curso .NET (210h)</li>
              <li>Cells & LitElement</li>
              <li>Habilitación docencia FP (380h)</li>
              <li>Competencias digitales (250h)</li>
            </ul>
          </div>
        </div>

        <h2 className="subheader">COMUNICACIÓN</h2>
        <h3>Idiomas</h3>
        <div className="languages-grid">
          <div className="language-card">
            <FontAwesomeIcon icon={faLanguage} className="icon" />
            <h4>Español</h4>
            <p>Lengua materna</p>
          </div>
          <div className="language-card">
            <FontAwesomeIcon icon={faLanguage} className="icon" />
            <h4>Inglés</h4>
            <p>B2 — Aptis & Cambridge</p>
          </div>
          <div className="language-card">
            <FontAwesomeIcon icon={faLanguage} className="icon" />
            <h4>Francés</h4>
            <p>A2 — EOI</p>
          </div>
        </div>

        <h3>Certificaciones & Extras</h3>
        <div className="cert-grid">
          <div className="cert-card">
            <span className="dot green"></span>
            <p>
              React Avanzado <br /> Udemy
            </p>
          </div>
          <div className="cert-card">
            <span className="dot green"></span>
            <p>
              Angular <br /> Udemy
            </p>
          </div>
          <div className="cert-card">
            <span className="dot green"></span>
            <p>
              Curso .NET <br /> 210h
            </p>
          </div>
          <div className="cert-card">
            <span className="dot green"></span>
            <p>
              Cells & LitElement <br /> Certificado
            </p>
          </div>
          <div className="cert-card">
            <span className="dot green"></span>
            <p>
              Docencia FP <br /> Hab. 380h
            </p>
          </div>
          <div className="cert-card">
            <span className="dot green"></span>
            <p>
              Compet. digitales <br /> 250h
            </p>
          </div>
          <div className="cert-card">
            <span className="dot green"></span>
            <p>
              Monitor T. Libre <br /> 300h
            </p>
          </div>
          <div className="cert-card">
            <span className="dot green"></span>
            <p>
              Riesgos Laborales <br /> 30h
            </p>
          </div>
        </div>
      </section>

      <section id="sobre-mi" className="section">
        <h2>SOBRE MÍ</h2>
        <p>
          Soy desarrolladora front-end con pasión por crear interfaces
          funcionales y atractivas, no solo funcionales sino que se sientan bien
          para el usuario.
        </p>
        <p>
          Me gusta el código limpio, los retos técnicos y emprender de forma
          continua. Tengo experiencia en entornos de gran escala como BBVA
          Technology, donde la calidad y la metodología ágil son parte del día a
          día.
        </p>
        <p>
          Cuento con habilitación para la docencia en FP y titulación como
          monitor de tiempo libre, lo que refina mi interés por transmitir
          conocimiento.
        </p>
        <h3>Aptitudes</h3>
        <ul className="aptitudes-tags">
          <li>Trabajo en equipo</li>
          <li>Adaptabilidad</li>
          <li>Creatividad</li>
          <li>Perseverancia</li>
          <li>Comunicación</li>
          <li>Orientación a resultados</li>
        </ul>
        <div className="extras-grid">
          <div className="extra-card">
            <FontAwesomeIcon icon={faCamera} className="extra-icon" />
            <h4>Fotografía</h4>
            <p>Afición personal</p>
          </div>
          <div className="extra-card">
            <FontAwesomeIcon icon={faCar} className="extra-icon" />
            <h4>Carnet conductor B</h4>
            <p>Permiso clase B</p>
          </div>
          <div className="extra-card">
            <FontAwesomeIcon icon={faClock} className="extra-icon" />
            <h4>Monitor Tiempo Libre</h4>
            <p>Titulación 300h</p>
          </div>
          <div className="extra-card">
            <FontAwesomeIcon icon={faGraduationCap} className="extra-icon" />
            <h4>Docencia FP</h4>
            <p>Grados A, B y C — 380h</p>
          </div>
          <div className="extra-card">
            <FontAwesomeIcon icon={faShieldAlt} className="extra-icon" />
            <h4>Riesgos Laborales</h4>
            <p>Certificado 30h</p>
          </div>
        </div>
      </section>

      <section id="contacto" className="contact-section">
        <h2>¿Trabajamos juntos?</h2>
        <h3>¡Hablemos!</h3>
        <p>Disponible para proyectos freelance y posiciones full-time.</p>
        <div className="contact-buttons">
          <button className="contact-btn">
            <FontAwesomeIcon icon={faEnvelope} />
            lau162.z@gmail.com
          </button>
          <button className="contact-btn">
            <FontAwesomeIcon icon={faPhone} />
            635 845 830
          </button>
          <button className="contact-btn">
            <FontAwesomeIcon icon={faLinkedin} />
            linkedin.com/in/laura-zaballa
          </button>
        </div>
      </section>

      <footer>
        <p>
          Laura Zaballa - Front-End Developer © {new Date().getFullYear()} <br /> lau162.z@gmail.com
        </p>
      </footer>
    </div>
  );
}

export default App;
