// ============================================================
//  Team
// ============================================================
const team = [
  {
    name: "Hiram Montaño",
    role: "Estudiante de Ingeniería en Sistemas Computacionales",
  },
  {
    name: "Jacinto Crisostomo",
    role: "Estudiante de Ingeniería en Sistemas Computacionales",
  }
];

const services = [
  {
    id: 1,
    name: "Desarrollo Web Full-Stack",
    description: "Creación de aplicaciones web completas, desde el diseño de interfaz hasta la lógica del servidor y base de datos.",
    price: 1500,
    emoji: "🌐",
    tag: "Desarrollo"
  },
  {
    id: 2,
    name: "Administración de Bases de Datos",
    description: "Diseño, optimización y mantenimiento de bases de datos relacionales como MySQL, PostgreSQL e IBM DB2.",
    price: 1200,
    emoji: "🗄️",
    tag: "Bases de Datos"
  },
  {
    id: 3,
    name: "Configuración de Redes",
    description: "Diseño e implementación de redes LAN/WAN, subnetting VLSM, configuración de routers y switches Cisco.",
    price: 900,
    emoji: "🔌",
    tag: "Redes"
  },
  {
    id: 4,
    name: "Auditoría de Seguridad",
    description: "Análisis de vulnerabilidades, pruebas de penetración y recomendaciones para fortalecer la seguridad de sistemas.",
    price: 2000,
    emoji: "🔒",
    tag: "Seguridad"
  },
  {
    id: 5,
    name: "Soporte Técnico Empresarial",
    description: "Mantenimiento preventivo y correctivo de equipos, instalación de software y resolución de incidencias técnicas.",
    price: 600,
    emoji: "🛠️",
    tag: "Soporte"
  },
  {
    id: 6,
    name: "Diseño UI/UX",
    description: "Diseño de interfaces atractivas y experiencias de usuario intuitivas para plataformas web y móviles.",
    price: 1300,
    emoji: "🎨",
    tag: "Diseño"
  },
  {
    id: 7,
    name: "Migración a la Nube",
    description: "Planificación y ejecución de migraciones de infraestructura on-premise hacia AWS, Azure o Google Cloud.",
    price: 2500,
    emoji: "☁️",
    tag: "Cloud"
  },
  {
    id: 8,
    name: "Consultoría de Software",
    description: "Asesoría en arquitectura de software, selección de tecnologías y mejores prácticas para proyectos tecnológicos.",
    price: 750,
    emoji: "📋",
    tag: "Consultoría"
  },
  {
    id: 9,
    name: "Diseño de Aplicaciones Móviles",
    description: "Desarrollo de apps móviles nativas e híbridas para Android e iOS con UI/UX centrado en el usuario.",
    price: 1800,
    emoji: "📱",
    tag: "Móvil"
  },
  {
    id: 10,
    name: "Capacitación Tecnológica",
    description: "Cursos y talleres personalizados en programación, administración de sistemas y herramientas de productividad.",
    price: 500,
    emoji: "🎓",
    tag: "Capacitación"
  },
];

// ============================================================
//  Functions
// ============================================================
function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

function formatPrice(price) {
  return "$" + price.toLocaleString("es-MX");
}

// ============================================================
//  HEADER / NAV
// ============================================================
function buildHeader() {
  const header = el("header", "site-header");

  const nav = el("nav", "nav-container");

  const logo = el("div", "logo");
  const logoIcon = el("span", "logo-icon", "{ }");
  const logoText = el("span", "logo-text", "Dev Web");
  logo.appendChild(logoIcon);
  logo.appendChild(logoText);

  const navLinks = el("ul", "nav-links");
  ["Inicio","Equipo","Servicios"].forEach(function(label) {
    const li = el("li");
    const a = el("a", "nav-link", label);
    a.href = "#" + label.toLowerCase();
    li.appendChild(a);
    navLinks.appendChild(li);
  });

  nav.appendChild(logo);
  nav.appendChild(navLinks);
  header.appendChild(nav);
  return header;
}

// ============================================================
//  Hero section
// ============================================================
function buildHero() {
  const hero = el("section", "hero");
  hero.id = "inicio";

  const title = el("h1", "hero-title");
  title.innerHTML = "Servicios<br><em>Tecnológicos</em><br>de Alto Nivel";

  const ctaGroup = el("div", "cta-group");
  const btnPrimary = el("button", "btn btn-primary", "Ver Servicios");
  btnPrimary.onclick = function() {
    document.getElementById("servicios").scrollIntoView({ behavior: "smooth"});
  };
  const btnSecondary = el("button", "btn btn-secondary", "Conocer los integrantes");
  btnSecondary.onclick = function() {
    document.getElementById("equipo").scrollIntoView({ behavior: "smooth" });
  };
  ctaGroup.appendChild(btnPrimary);
  ctaGroup.appendChild(btnSecondary);

  hero.appendChild(title);
  hero.appendChild(ctaGroup);

  return hero;
}

// ============================================================
//  Team section
// ============================================================
function buildTeam() {
  const section = el("section", "section");
  section.id = "equipo";

  const sectionHeader = el("div", "section-header");
  const title = el("h2", "section-title", "Equipo");
  sectionHeader.appendChild(title);

  const grid = el("div", "team-grid");

  team.forEach(function(member) {
    const card = el("div", "team-card");
    const avatarWrap = el("div", "avatar-wrap");
    const avatar = el("div", "avatar", member.avatar);
    avatarWrap.appendChild(avatar);

    const info = el("div", "team-info");
    const name = el("h3", "team-name", member.name);
    const role = el("p", "team-role", member.role);
    const exp = el("p", "team-exp", member.experience);

    info.appendChild(name);
    info.appendChild(role);
    info.appendChild(exp);

    card.appendChild(avatarWrap);
    card.appendChild(info);
    grid.appendChild(card);
  });

  section.appendChild(sectionHeader);
  section.appendChild(grid);
  return section;
}

// ============================================================
//  CONSTRUIR SECCIÓN SERVICIOS
// ============================================================
function buildServices() {
  const section = el("section", "section section-dark");
  section.id = "servicios";

  const sectionHeader = el("div", "section-header");
  const label = el("span", "section-label", "Catálogo");
  const title = el("h2", "section-title", "Nuestros Servicios");
  sectionHeader.appendChild(label);
  sectionHeader.appendChild(title);

  const grid = el("div", "services-grid");
  grid.id = "services-grid";

  services.forEach(function(service) {
    const card = buildServiceCard(service);
    grid.appendChild(card);
  });

  section.appendChild(sectionHeader);

  section.appendChild(grid);
  return section;
}

function buildServiceCard(service) {
  const isPremium = service.price > 1000;
  const card = el("div", "service-card" + (isPremium ? " premium" : ""));
  card.dataset.tag = service.tag;

  const top = el("div", "card-top");
  const emojiEl = el("span", "card-emoji", service.emoji);
  const tagEl = el("span", "card-tag", service.tag);

  if (isPremium) {
    const badge = el("span", "premium-badge", "Premium");
    top.appendChild(badge);
  }

  top.appendChild(emojiEl);
  top.appendChild(tagEl);

  const body = el("div", "card-body");
  const name = el("h3", "card-name", service.name);
  const desc = el("p", "card-desc", service.description);

  const footer = el("div", "card-footer");
  const price = el("span", "card-price", formatPrice(service.price));
  const priceLabel = el("span", "price-label", "MXN");
  const cta = el("button", "card-cta", "Contratar →");

  footer.appendChild(price);
  footer.appendChild(priceLabel);
  footer.appendChild(cta);

  body.appendChild(name);
  body.appendChild(desc);
  body.appendChild(footer);

  card.appendChild(top);
  card.appendChild(body);
  return card;
}

function filterCards(tag) {
  const cards = document.querySelectorAll(".service-card");
  cards.forEach(function(card) {
    if (tag === "Todos" || card.dataset.tag === tag) {
      card.style.display = "";
    } else {
      card.style.display = "none";
    }
  });
}

// ============================================================
//  CONSTRUIR FOOTER
// ============================================================
function buildFooter() {
  const footer = el("footer", "site-footer");

  const inner = el("div", "footer-inner");
  const copy = el("p", "footer-copy",
    "© 2025 ISC Services — Ingeniería en Sistemas Computacionales · Programación Web · ISC Rubén Lara");

  const links = el("div", "footer-links");
  ["Inicio", "Equipo", "Servicios"].forEach(function(label) {
    const a = el("a", "footer-link", label);
    a.href = "#" + label.toLowerCase();
    links.appendChild(a);
  });

  const validators = el("div", "footer-validators");
  validators.innerHTML = `
      <p>
          <a href="https://jigsaw.w3.org/css-validator/check/referer">
              <img style="border:0;width:88px;height:31px"
                  src="https://jigsaw.w3.org/css-validator/images/vcss"
                  alt="¡CSS Válido!" />
          </a>
      </p>
      <p>
          <a href="https://validator.w3.org/#uri=referer">
              <img style="border:0;width:88px;height:31px"
                  src="https://www.w3.org/Icons/valid-html401"
                  alt="¡HTML Válido!" />
          </a>
      </p>
  `;

  inner.appendChild(copy);
  inner.appendChild(links);
  inner.appendChild(validators);
  footer.appendChild(inner);
  return footer;
}

// ============================================================
//  MONTAR TODO EN #app
// ============================================================
(function init() {
  const app = document.getElementById("app");

  app.appendChild(buildHeader());

  const main = el("main", "main-content");
  main.appendChild(buildHero());
  main.appendChild(buildTeam());
  main.appendChild(buildServices());
  app.appendChild(main);

  app.appendChild(buildFooter());
})();