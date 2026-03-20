// src/App.jsx
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import { teamData, defaultServices } from "./data";
import "./styles.css";

// --- COMPONENTES DE INTERFAZ ---

function Header() {
  return (
    <header className="site-header">
      <nav className="nav-container">
        <Link to="/" className="logo" onClick={() => window.scrollTo(0,0)}>
          <span className="logo-icon">{`{ }`}</span>
          <span className="logo-text">Dev Web</span>
        </Link>
        <ul className="nav-links">
          <li><a href="/#inicio" className="nav-link">Inicio</a></li>
          <li><a href="/#equipo" className="nav-link">Equipo</a></li>
          <li><a href="/#servicios" className="nav-link">Servicios</a></li>
          <li><Link to="/alta" className="nav-link">Alta de Servicios</Link></li>
        </ul>
      </nav>
    </header>
  );
}

function Hero() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="hero" id="inicio">
      <div>
        <h1 className="hero-title">Servicios<br /><em>Tecnológicos</em><br />de Alto Nivel</h1>
        <div className="cta-group">
          <button className="btn btn-primary" onClick={() => scrollTo("servicios")}>Ver Servicios</button>
          <button className="btn btn-secondary" onClick={() => scrollTo("equipo")}>Conocer los integrantes</button>
        </div>
      </div>
    </section>
  );
}

function Team() {
  return (
    <section className="section" id="equipo">
      <div className="section-header">
        <h2 className="section-title">Equipo</h2>
      </div>
      <div className="team-grid">
        {teamData.map((member, idx) => (
          <div className="team-card" key={idx}>
            <div className="avatar-wrap">
              <div className="avatar">{member.avatar}</div>
            </div>
            <div className="team-info">
              <h3 className="team-name">{member.name}</h3>
              <p className="team-role">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ServiceCard({ service }) {
  const isPremium = service.price > 1000;
  const formattedPrice = "$" + service.price.toLocaleString("es-MX");

  return (
    <div className={`service-card ${isPremium ? "premium" : ""}`}>
      <div className="card-top">
        {isPremium && <span className="premium-badge">Premium</span>}
        <span className="card-emoji">{service.emoji}</span>
        <span className="card-tag">{service.tag}</span>
      </div>
      <div className="card-body">
        <h3 className="card-name">{service.name}</h3>
        <p className="card-desc">{service.description}</p>
        <div className="card-footer">
          <span className="card-price">{formattedPrice}</span>
          <span className="price-label">MXN</span>
          <button className="card-cta">Contratar &rarr;</button>
        </div>
      </div>
    </div>
  );
}

function Services({ services }) {
  return (
    <section className="section section-dark" id="servicios">
      <div className="section-header">
        <span className="section-label">Catálogo</span>
        <h2 className="section-title">Nuestros Servicios</h2>
      </div>
      <div className="services-grid">
        {services.map(service => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
}

function AltaForm({ onAddService }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "", description: "", price: "", emoji: "", tag: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddService({
      id: Date.now(),
      ...formData,
      price: parseFloat(formData.price)
    });
    alert("¡Servicio agregado con éxito!");
    navigate("/#servicios");
  };

  return (
    <section className="section" style={{ paddingTop: '120px' }}>
      <div className="section-header">
        <h2 className="section-title">Alta de Servicios</h2>
        <p className="section-desc">Agrega un nuevo servicio al catálogo llenando este formulario.</p>
      </div>
      <form className="alta-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label" htmlFor="name">Nombre del Servicio:</label>
          <input className="form-control" type="text" id="name" name="name" required onChange={handleChange} />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="description">Descripción:</label>
          <textarea className="form-control" id="description" name="description" required onChange={handleChange} />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="price">Precio (MXN):</label>
          <input className="form-control" type="number" id="price" name="price" required onChange={handleChange} />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="emoji">Emoji representativo (ej. 💻):</label>
          <input className="form-control" type="text" id="emoji" name="emoji" required onChange={handleChange} />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="tag">Categoría (Tag):</label>
          <input className="form-control" type="text" id="tag" name="tag" required onChange={handleChange} />
        </div>
        <button className="btn btn-primary" type="submit">Guardar Servicio</button>
      </form>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <p className="footer-copy">© 2026 ISC Services — Ingeniería en Sistemas Computacionales · Programación Web · ISC</p>
        <div className="footer-links">
          <a href="/#inicio" className="footer-link">Inicio</a>
          <a href="/#equipo" className="footer-link">Equipo</a>
          <a href="/#servicios" className="footer-link">Servicios</a>
        </div>
      </div>
    </footer>
  );
}

// --- APP Y ENRUTAMIENTO ---

export default function App() {
  // Manejo de estado persistente con localStorage
  const [services, setServices] = useState(() => {
    const saved = localStorage.getItem("services");
    return saved ? JSON.parse(saved) : defaultServices;
  });

  // Efecto para guardar en localStorage cada vez que `services` cambie
  useEffect(() => {
    localStorage.setItem("services", JSON.stringify(services));
  }, [services]);

  const handleAddService = (newService) => {
    setServices([...services, newService]);
  };

  return (
    <Router>
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Team />
              <Services services={services} />
            </>
          } />
          <Route path="/alta" element={<AltaForm onAddService={handleAddService} />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}