// ---------------------------------------------------------------------------
// All site content lives here, in English (en) and Spanish (es).
// To update the site (new job, new project, new skill) edit ONLY this file.
// ---------------------------------------------------------------------------

export const profile = {
  name: "Anas Alnagar",
  email: "anasdesigneruiux@gmail.com",
  phone: "+34 666 28 13 90",
  phoneHref: "+34666281390",
  cv: "/AnasCvfrontEndEs.pdf",
  social: {
    linkedin: "https://www.linkedin.com/in/anaseg/",
    github: "https://github.com/onisEg",
    behance: "https://www.behance.net/AnasEg",
    whatsapp: "https://wa.me/34666281390",
  },
};

export const ui = {
  en: {
    nav: { about: "About", experience: "Experience", projects: "Projects", skills: "Skills", contact: "Contact" },
    hero: {
      badge: "Open to frontend roles · Barcelona & remote",
      hello: "Hi, I'm",
      role: "Frontend Developer · React & TypeScript",
      text: "I build responsive web apps with React and TypeScript, from authentication flows and admin dashboards to Stripe checkouts. Based in Barcelona and currently specializing in React & Angular at IT Academy (Barcelona Activa).",
      ctaProjects: "View projects",
      ctaCv: "Download CV",
      ctaContact: "Contact me",
    },
    about: {
      title: "About me",
      paragraphs: [
        "I'm a frontend developer who started in UI/UX design, so I care about how an interface feels, not only whether it works.",
        "I've built complete client-side applications on top of real REST APIs: JWT authentication, role-based dashboards, CRUD screens, charts, drag-and-drop boards and payment flows. Alongside that, I do freelance work on e-commerce stores (Shopify, PrestaShop), which keeps me close to real business needs.",
        "I work comfortably in multicultural teams and speak Arabic, English, Turkish and Spanish.",
      ],
      facts: [
        { label: "Location", value: "Barcelona, Spain" },
        { label: "Focus", value: "React · TypeScript · Angular (learning)" },
        { label: "Languages", value: "Arabic (native) · English · Turkish · Spanish (A2, improving)" },
        { label: "Status", value: "Available for work" },
      ],
    },
    experience: { title: "Experience", education: "Education", certs: "Certifications", present: "Present" },
    projects: {
      title: "Featured projects",
      subtitle: "Real apps built against REST APIs, each with a live demo and source code.",
      demo: "Live demo",
      code: "Code",
      team: "Team project",
      earlier: "Earlier work",
      earlierText: "HTML, CSS, JavaScript and first React projects.",
    },
    skills: { title: "Skills & tools" },
    contact: {
      title: "Let's work together",
      text: "I'm looking for a frontend developer role in Barcelona or remote. The fastest way to reach me is email or LinkedIn.",
      email: "Email",
      phone: "Phone",
    },
    footer: "Built with React & Vite by Anas Alnagar.",
  },

  es: {
    nav: { about: "Sobre mí", experience: "Experiencia", projects: "Proyectos", skills: "Habilidades", contact: "Contacto" },
    hero: {
      badge: "Disponible para puestos frontend · Barcelona y remoto",
      hello: "Hola, soy",
      role: "Desarrollador Frontend · React y TypeScript",
      text: "Desarrollo aplicaciones web responsive con React y TypeScript, desde flujos de autenticación y paneles de administración hasta pagos con Stripe. Vivo en Barcelona y actualmente me especializo en React y Angular en IT Academy (Barcelona Activa).",
      ctaProjects: "Ver proyectos",
      ctaCv: "Descargar CV",
      ctaContact: "Contactar",
    },
    about: {
      title: "Sobre mí",
      paragraphs: [
        "Soy desarrollador frontend y empecé en el diseño UI/UX, así que me importa cómo se siente una interfaz, no solo que funcione.",
        "He creado aplicaciones completas conectadas a APIs REST reales: autenticación con JWT, paneles según rol, pantallas CRUD, gráficos, tableros drag-and-drop y flujos de pago. Además, trabajo como freelance en tiendas online (Shopify, PrestaShop), lo que me mantiene cerca de las necesidades reales de negocio.",
        "Trabajo cómodamente en equipos multiculturales y hablo árabe, inglés, turco y español.",
      ],
      facts: [
        { label: "Ubicación", value: "Barcelona, España" },
        { label: "Enfoque", value: "React · TypeScript · Angular (aprendiendo)" },
        { label: "Idiomas", value: "Árabe (nativo) · Inglés · Turco · Español (A2, mejorando)" },
        { label: "Estado", value: "Disponible para trabajar" },
      ],
    },
    experience: { title: "Experiencia", education: "Formación", certs: "Certificados", present: "Actualidad" },
    projects: {
      title: "Proyectos destacados",
      subtitle: "Aplicaciones reales conectadas a APIs REST, con demo en vivo y código fuente.",
      demo: "Demo",
      code: "Código",
      team: "Proyecto en equipo",
      earlier: "Trabajos anteriores",
      earlierText: "Proyectos con HTML, CSS, JavaScript y mis primeras apps en React.",
    },
    skills: { title: "Habilidades y herramientas" },
    contact: {
      title: "Trabajemos juntos",
      text: "Busco un puesto de desarrollador frontend en Barcelona o en remoto. La forma más rápida de contactarme es por email o LinkedIn.",
      email: "Email",
      phone: "Teléfono",
    },
    footer: "Hecho con React y Vite por Anas Alnagar.",
  },
};

// ---------------------------------------------------------------------------
// Experience. Dates come from the CV. Set `end: null` for a current role.
// ---------------------------------------------------------------------------
export const experience = [
  {
    role: { en: "Freelance Web Developer", es: "Desarrollador web freelance" },
    company: "Self-employed · Barcelona",
    start: null,
    end: null,
    points: {
      en: [
        "Set up and customize e-commerce stores on PrestaShop and Shopify for small businesses.",
        "Fix frontend issues and improve page speed and usability on client sites.",
      ],
      es: [
        "Configuro y personalizo tiendas online en PrestaShop y Shopify para pequeñas empresas.",
        "Corrijo problemas de frontend y mejoro la velocidad y usabilidad de webs de clientes.",
      ],
    },
  },
  {
    role: { en: "Frontend Developer", es: "Desarrollador Frontend" },
    company: "FITS Lab Dev",
    start: { en: "Oct 2024", es: "oct. 2024" },
    end: null,
    points: {
      en: [
        "Guided and supported a team of developers to deliver project goals.",
        "Built frontend features for e-commerce, car-rental and user-management applications.",
      ],
      es: [
        "Guié y apoyé a un equipo de desarrolladores para cumplir los objetivos del proyecto.",
        "Desarrollé funcionalidades frontend para aplicaciones de e-commerce, alquiler de coches y gestión de usuarios.",
      ],
    },
  },
  {
    role: { en: "Frontend Developer", es: "Desarrollador Frontend" },
    company: "Upskilling Academy",
    start: { en: "May 2024", es: "may. 2024" },
    end: null,
    points: {
      en: [
        "Built React + TypeScript apps against production-style REST APIs: Book Shop, Food Recipes, Project Management System and User Management System.",
        "Implemented JWT authentication, protected routes, form validation and role-based dashboards.",
      ],
      es: [
        "Desarrollé apps con React + TypeScript conectadas a APIs REST: Book Shop, Food Recipes, Project Management System y User Management System.",
        "Implementé autenticación JWT, rutas protegidas, validación de formularios y paneles según rol.",
      ],
    },
  },
  {
    role: { en: "UI/UX Designer", es: "Diseñador UI/UX" },
    company: "Smart Developer Company",
    start: { en: "Feb 2024", es: "feb. 2024" },
    end: null,
    points: {
      en: ["Designed interfaces for government-service and product platforms."],
      es: ["Diseñé interfaces para plataformas de servicios públicos y de producto."],
    },
  },
  {
    role: { en: "UI/UX Design Intern", es: "Diseñador UI/UX en prácticas" },
    company: "Route",
    start: { en: "Oct 2023", es: "oct. 2023" },
    end: { en: "Jan 2024", es: "ene. 2024" },
    points: {
      en: [
        "Ran user research and turned findings into wireframes, prototypes and high-fidelity mockups.",
        "Designed \"Chill Away\", a travel app to find and compare travel packages, deals and hotels.",
      ],
      es: [
        "Realicé investigación de usuarios y la convertí en wireframes, prototipos y mockups de alta fidelidad.",
        "Diseñé \"Chill Away\", una app de viajes para buscar y comparar paquetes, ofertas y hoteles.",
      ],
    },
  },
];

export const education = [
  {
    title: { en: "Frontend Specialization: React & Angular", es: "Especialización Frontend: React y Angular" },
    place: "IT Academy · Barcelona Activa",
    period: { en: "2026 · In progress", es: "2026 · En curso" },
  },
  {
    title: { en: "JavaScript Fundamentals", es: "Fundamentos de JavaScript" },
    place: "IT Academy · Barcelona Activa",
    period: { en: "2026", es: "2026" },
  },
  {
    title: { en: "Information Systems", es: "Sistemas de Información" },
    place: "Abasia Institute",
    period: { en: "2011 – 2015", es: "2011 – 2015" },
  },
];

export const certifications = [
  {
    title: "Become a Programmer: Foundations (Learning Path, 25h)",
    issuer: "LinkedIn Learning · 2022",
    file: "/certifications/become-a-programmer-foundations.pdf",
  },
  {
    title: "Programming Foundations: Algorithms, Data Structures, OOP, Design Patterns, APIs, Web Security, Testing & TDD (13 courses)",
    issuer: "LinkedIn Learning · 2022",
    file: "/certifications/programming-foundations-apis-and-web-services.pdf",
  },
  {
    title: "Essentials of ChatGPT",
    issuer: "Almdrasa",
    file: "/certifications/chatgpt-certification.png",
  },
];

// ---------------------------------------------------------------------------
// Projects. `featured` ones get a big card with description.
// ---------------------------------------------------------------------------
export const featuredProjects = [
  {
    title: "StayCation · Hotel Booking",
    img: "/projects/hotel-booking.webp",
    demo: "https://booking-iota-one.vercel.app/",
    code: "https://github.com/DevsquadEg/booking",
    team: true,
    stack: ["React", "TypeScript", "Material UI", "Stripe", "React Hook Form", "Axios"],
    text: {
      en: "Two-sided booking platform. Guests search rooms, save favourites and pay with Stripe; admins manage rooms, facilities, ads, users and bookings from a dashboard with charts.",
      es: "Plataforma de reservas con dos perfiles. Los huéspedes buscan habitaciones, guardan favoritos y pagan con Stripe; los administradores gestionan habitaciones, servicios, anuncios, usuarios y reservas desde un panel con gráficos.",
    },
  },
  {
    title: "Project Management System",
    img: "/projects/pms.webp",
    demo: "https://project-management-system-y5bw.vercel.app/",
    code: "https://github.com/onisEg/project-management-system",
    stack: ["React", "TypeScript", "React Bootstrap", "dnd-kit", "AG Charts", "React Hook Form"],
    text: {
      en: "Role-based app for managers and employees. Managers create projects and assign tasks; employees move their tasks on a drag-and-drop board. Full auth flow (register, verify, reset password), dashboard charts and dark mode.",
      es: "App con roles para managers y empleados. Los managers crean proyectos y asignan tareas; los empleados mueven sus tareas en un tablero drag-and-drop. Flujo de autenticación completo, gráficos en el panel y modo oscuro.",
    },
  },
  {
    title: "Book Shop",
    img: "/projects/bookshop.webp",
    demo: "https://bookshop-git-main-onisegs-projects.vercel.app/",
    code: "https://github.com/onisEg/bookshop",
    stack: ["React", "TypeScript", "Redux Toolkit", "Material UI", "Stripe"],
    text: {
      en: "Online bookstore with catalogue, book details, a cart managed with Redux Toolkit and Stripe checkout.",
      es: "Librería online con catálogo, detalle de libros, carrito gestionado con Redux Toolkit y pago con Stripe.",
    },
  },
  {
    title: "Food Recipes",
    img: "/projects/food-recipes.webp",
    demo: "https://food-app-six-sepia.vercel.app",
    code: "https://github.com/onisEg/food_app",
    stack: ["React", "React Bootstrap", "React Hook Form", "Axios", "JWT"],
    text: {
      en: "Recipe management dashboard. Admins manage recipes, categories and users; regular users browse recipes and save favourites. JWT auth and protected routes.",
      es: "Panel de gestión de recetas. Los administradores gestionan recetas, categorías y usuarios; los usuarios exploran recetas y guardan favoritas. Autenticación JWT y rutas protegidas.",
    },
  },
  {
    title: "User Management System",
    img: "/projects/user-management.webp",
    demo: "https://user-management-system-orpin.vercel.app/",
    code: "https://github.com/onisEg/userManagementSystem",
    stack: ["React", "TypeScript", "React Bootstrap", "React Hook Form"],
    text: {
      en: "Admin dashboard to log in, list, view, add and edit users, with profile page and validated forms.",
      es: "Panel de administración para iniciar sesión, listar, ver, crear y editar usuarios, con página de perfil y formularios validados.",
    },
  },
];

export const earlierProjects = [
  { title: "RentCars", img: "/projects/rent-cars.webp", demo: "https://cars-mocha-phi.vercel.app/", code: "https://github.com/onisEg/cars", stack: "React" },
  { title: "Contacts", img: "/projects/contacts.webp", demo: "https://contacts-indol.vercel.app/", code: "https://github.com/onisEg/contacts", stack: "React" },
  { title: "eCommerce", img: "/projects/ecommerce.webp", demo: "https://oniseg.github.io/eCommerce/", code: "https://github.com/onisEg/eCommerce", stack: "HTML · CSS · JS" },
  { title: "Busicol", img: "/projects/busicol.webp", demo: "https://oniseg.github.io/busicol/", code: "https://github.com/onisEg/busicol", stack: "HTML · CSS · Bootstrap" },
  { title: "Fabric Store", img: "/projects/fabric-store.webp", demo: "https://oniseg.github.io/FabricStore/", code: "https://github.com/onisEg/FabricStore", stack: "HTML · CSS · JS" },
  { title: "BMI Calculator", img: "/projects/bmi-calculator.webp", demo: "https://oniseg.github.io/BMI-calculator/", code: "https://github.com/onisEg/BMI-calculator", stack: "HTML · CSS · JS" },
  { title: "My Family", img: "/projects/my-family.webp", demo: "https://oniseg.github.io/MeFamily/", code: "https://github.com/onisEg/MeFamily", stack: "HTML · CSS · Bootstrap" },
  { title: "Pixels", img: "/projects/pixels.webp", demo: "https://oniseg.github.io/pixels/", code: "https://github.com/onisEg/pixels", stack: "HTML · CSS · Bootstrap" },
  { title: "Developer Portfolio", img: "/projects/danial.webp", demo: "https://oniseg.github.io/danial/", code: "https://github.com/onisEg/danial", stack: "HTML · CSS · JS" },
];

// ---------------------------------------------------------------------------
// Skills, grouped. `logo` is optional.
// ---------------------------------------------------------------------------
export const skillGroups = [
  {
    title: { en: "Frontend", es: "Frontend" },
    items: [
      { name: "HTML5", logo: "/logos/html.webp" },
      { name: "CSS3", logo: "/logos/css3.webp" },
      { name: "JavaScript", logo: "/logos/javascript.webp" },
      { name: "TypeScript", logo: "/logos/typescript.webp" },
      { name: "React", logo: "/logos/react.webp" },
      { name: "Redux Toolkit", logo: "/logos/redux.webp" },
      { name: "Next.js", logo: "/logos/nextjs.webp", invert: true },
      { name: "Sass", logo: "/logos/sass.webp" },
      { name: "Bootstrap", logo: "/logos/bootstrap.webp" },
      { name: "Tailwind CSS", logo: "/logos/tailwind.svg", invert: true },
      { name: "Material UI", logo: "/logos/mui.webp" },
    ],
  },
  {
    title: { en: "Tools & workflow", es: "Herramientas" },
    items: [
      { name: "Git & GitHub", logo: "/logos/github.webp", invert: true },
      { name: "Vite", logo: "/logos/vite.webp" },
      { name: "REST APIs" },
      { name: "JWT auth" },
      { name: "Postman", logo: "/logos/postman.webp" },
      { name: "Swagger", logo: "/logos/swagger.webp" },
    ],
  },
  {
    title: { en: "Design", es: "Diseño" },
    items: [
      { name: "Figma", logo: "/logos/figma.webp" },
      { name: "UI/UX" },
      { name: "Prototyping" },
      { name: "Photoshop" },
      { name: "Canva" },
    ],
  },
  {
    title: { en: "CMS & e-commerce", es: "CMS y e-commerce" },
    items: [{ name: "Shopify" }, { name: "PrestaShop" }, { name: "WordPress" }],
  },
  {
    title: { en: "Currently learning", es: "Aprendiendo ahora" },
    items: [{ name: "Angular" }],
  },
];
