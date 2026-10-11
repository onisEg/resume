"""
Builds the CV (EN + ES) from the data below.

  python3 cv-src/build.py          -> writes cv-src/cv.en.html, cv-src/cv.es.html
                                      and, if Playwright is installed, the PDFs in public/cv/

No Playwright? Open cv-src/cv.en.html in Chrome -> Ctrl+P -> "Save as PDF"
(paper A4, margins None, "Background graphics" ON).
"""
import html, pathlib, sys

ROOT = pathlib.Path(__file__).resolve().parent
OUT_PDF = ROOT.parent / "public" / "cv"

CONTACT = [
    ("Barcelona, Spain", "Barcelona, España", None),
    ("+34 666 28 13 90", "+34 666 28 13 90", "tel:+34666281390"),
    ("anasdesigneruiux@gmail.com", "anasdesigneruiux@gmail.com", "mailto:anasdesigneruiux@gmail.com"),
    ("anascv.com", "anascv.com", "https://www.anascv.com"),
    ("linkedin.com/in/anaseg", "linkedin.com/in/anaseg", "https://www.linkedin.com/in/anaseg/"),
    ("github.com/onisEg", "github.com/onisEg", "https://github.com/onisEg"),
]

T = {
  "en": {
    "file": "Anas_Alnagar_Frontend_Developer_CV_EN.pdf",
    "title": "Frontend Developer · React & TypeScript",
    "h": {"contact": "Contact", "skills": "Skills", "langs": "Languages", "certs": "Certifications",
          "profile": "Profile", "exp": "Experience", "projects": "Selected Projects", "edu": "Education"},
    "profile": "Frontend developer specialising in React and TypeScript, with a background in UI/UX design. "
               "I have built complete web applications on top of REST APIs: JWT authentication, protected routes, "
               "role-based dashboards, CRUD screens, charts, drag-and-drop boards and Stripe payments. "
               "I also customise Shopify and PrestaShop stores as a freelancer. Currently taking the Web Development "
               "Course at IT Academy (Barcelona Activa). Open to frontend roles in Barcelona or remote.",
    "langs": [("English", "B1"), ("Spanish", "A2 · improving"), ("Arabic", "Native")],
    "present": "Present",
    "code_note": "Source code for all projects: github.com/onisEg",
  },
  "es": {
    "file": "Anas_Alnagar_Desarrollador_Frontend_CV_ES.pdf",
    "title": "Desarrollador Frontend · React y TypeScript",
    "h": {"contact": "Contacto", "skills": "Habilidades", "langs": "Idiomas", "certs": "Certificados",
          "profile": "Perfil", "exp": "Experiencia", "projects": "Proyectos destacados", "edu": "Formación"},
    "profile": "Desarrollador frontend especializado en React y TypeScript, con experiencia previa en diseño UI/UX. "
               "He creado aplicaciones web completas conectadas a APIs REST: autenticación JWT, rutas protegidas, "
               "paneles según rol, pantallas CRUD, gráficos, tableros drag-and-drop y pagos con Stripe. "
               "Además, personalizo tiendas Shopify y PrestaShop como freelance. Actualmente curso el Curso de "
               "Desarrollo Web en IT Academy (Barcelona Activa). Disponible para puestos frontend en Barcelona o en remoto.",
    "langs": [("Inglés", "B1"), ("Español", "A2 · mejorando"), ("Árabe", "Nativo")],
    "present": "Actualidad",
    "code_note": "Código fuente de todos los proyectos: github.com/onisEg",
  },
}

SKILLS = {
  "en": [("Frontend", "JavaScript (ES6+), TypeScript, React, Redux Toolkit, Next.js, HTML5, CSS3, Sass"),
         ("UI & styling", "Material UI, Tailwind CSS, Bootstrap, React Bootstrap, responsive design"),
         ("Libraries", "React Hook Form, Axios, dnd-kit, AG Charts, Stripe"),
         ("APIs", "REST APIs, JWT auth, protected routes, role-based access, Postman, Swagger"),
         ("Tools", "Git, GitHub, Vite, npm, Vercel"),
         ("Design", "Figma, UI/UX, wireframing, prototyping, user research, Photoshop"),
         ("CMS & e-commerce", "Shopify, PrestaShop, WordPress")],
  "es": [("Frontend", "JavaScript (ES6+), TypeScript, React, Redux Toolkit, Next.js, HTML5, CSS3, Sass"),
         ("UI y estilos", "Material UI, Tailwind CSS, Bootstrap, React Bootstrap, diseño responsive"),
         ("Librerías", "React Hook Form, Axios, dnd-kit, AG Charts, Stripe"),
         ("APIs", "APIs REST, autenticación JWT, rutas protegidas, acceso por roles, Postman, Swagger"),
         ("Herramientas", "Git, GitHub, Vite, npm, Vercel"),
         ("Diseño", "Figma, UI/UX, wireframes, prototipado, investigación de usuarios, Photoshop"),
         ("CMS y e-commerce", "Shopify, PrestaShop, WordPress")],
}

# (role, company, start, end or None=Present, bullets)
EXP = {
  "en": [
    ("Freelance Web Developer", "Self-employed · Barcelona", None, None,
     ["Set up and customise e-commerce stores on Shopify and PrestaShop for small businesses.",
      "Fix frontend issues and improve page speed and usability on client websites."]),
    ("Frontend Developer", "FITS Lab Dev · Remote", "Oct 2024", "May 2025",
     ["Guided and supported a team of developers to deliver project goals.",
      "Built frontend features for e-commerce, car-rental and user-management applications."]),
    ("Frontend Developer", "Upskilling Academy", "May 2024", "Oct 2024",
     ["Built React + TypeScript apps on REST APIs: Book Shop, Food Recipes, Project Management System and User Management System.",
      "Implemented JWT authentication, protected routes, form validation and role-based dashboards."]),
    ("UI/UX Designer", "Smart Developer for Programming & Design", "Feb 2024", "Oct 2024",
     ["Designed interfaces for government-service and product platforms."]),
    ("UI/UX Design Intern", "Route · Remote", "Oct 2023", "Jan 2024",
     ["Ran user research and turned findings into wireframes, prototypes and high-fidelity mockups.",
      "Designed “Chill Away”, a travel app to find and compare packages, deals and hotels."]),
    ("Internship Trainee", "Kal-Bunyan Al-Marsous", "Apr 2022", "Oct 2022",
     ["Frontend training focused on JavaScript and CSS."]),
    ("Designer and Developer", "Gorgov Digital Advertising Agency", "Jul 2019", "Aug 2021",
     ["Web development and graphic design (Adobe Photoshop) for agency clients."]),
    ("Frontend Developer", "Tech Village Egypt", "Aug 2018", "Nov 2018",
     ["Built website layouts with HTML, CSS and Bootstrap."]),
  ],
  "es": [
    ("Desarrollador web freelance", "Autónomo · Barcelona", None, None,
     ["Configuro y personalizo tiendas online en Shopify y PrestaShop para pequeñas empresas.",
      "Corrijo problemas de frontend y mejoro la velocidad y usabilidad de webs de clientes."]),
    ("Desarrollador Frontend", "FITS Lab Dev · Remoto", "oct. 2024", "may. 2025",
     ["Guié y apoyé a un equipo de desarrolladores para cumplir los objetivos del proyecto.",
      "Desarrollé funcionalidades frontend para aplicaciones de e-commerce, alquiler de coches y gestión de usuarios."]),
    ("Desarrollador Frontend", "Upskilling Academy", "may. 2024", "oct. 2024",
     ["Desarrollé apps con React + TypeScript conectadas a APIs REST: Book Shop, Food Recipes, Project Management System y User Management System.",
      "Implementé autenticación JWT, rutas protegidas, validación de formularios y paneles según rol."]),
    ("Diseñador UI/UX", "Smart Developer for Programming & Design", "feb. 2024", "oct. 2024",
     ["Diseñé interfaces para plataformas de servicios públicos y de producto."]),
    ("Diseñador UI/UX en prácticas", "Route · Remoto", "oct. 2023", "ene. 2024",
     ["Realicé investigación de usuarios y la convertí en wireframes, prototipos y mockups de alta fidelidad.",
      "Diseñé “Chill Away”, una app de viajes para comparar paquetes, ofertas y hoteles."]),
    ("Becario en prácticas", "Kal-Bunyan Al-Marsous", "abr. 2022", "oct. 2022",
     ["Formación frontend centrada en JavaScript y CSS."]),
    ("Diseñador y desarrollador", "Gorgov Digital Advertising Agency", "jul. 2019", "ago. 2021",
     ["Desarrollo web y diseño gráfico (Adobe Photoshop) para clientes de la agencia."]),
    ("Desarrollador Frontend", "Tech Village Egypt", "ago. 2018", "nov. 2018",
     ["Maqueté sitios web con HTML, CSS y Bootstrap."]),
  ],
}

PROJECTS = {
  "en": [
    ("StayCation · Hotel Booking", "Team project", "React, TypeScript, Material UI, Stripe",
     "Two-sided booking platform: guests search rooms, save favourites and pay with Stripe; admins manage rooms, ads, users and bookings from a dashboard with charts.",
     "booking-iota-one.vercel.app"),
    ("Project Management System", None, "React, TypeScript, dnd-kit, AG Charts",
     "Role-based app: managers create projects and assign tasks, employees move tasks on a drag-and-drop board. Full auth flow, charts and dark mode.",
     "project-management-system-y5bw.vercel.app"),
    ("Book Shop", None, "React, TypeScript, Redux Toolkit, Stripe",
     "Online bookstore with catalogue, book details, Redux Toolkit cart and Stripe checkout.", None),
    ("Food Recipes", None, "React, React Bootstrap, JWT",
     "Recipe dashboard: admins manage recipes, categories and users; users browse and save favourites.", None),
  ],
  "es": [
    ("StayCation · Reservas de hotel", "Proyecto en equipo", "React, TypeScript, Material UI, Stripe",
     "Plataforma con dos perfiles: los huéspedes buscan habitaciones, guardan favoritos y pagan con Stripe; los administradores gestionan habitaciones, anuncios, usuarios y reservas desde un panel con gráficos.",
     "booking-iota-one.vercel.app"),
    ("Project Management System", None, "React, TypeScript, dnd-kit, AG Charts",
     "App con roles: los managers crean proyectos y asignan tareas; los empleados las mueven en un tablero drag-and-drop. Autenticación completa, gráficos y modo oscuro.",
     "project-management-system-y5bw.vercel.app"),
    ("Book Shop", None, "React, TypeScript, Redux Toolkit, Stripe",
     "Librería online con catálogo, detalle de libros, carrito con Redux Toolkit y pago con Stripe.", None),
    ("Food Recipes", None, "React, React Bootstrap, JWT",
     "Panel de recetas: los administradores gestionan recetas, categorías y usuarios; los usuarios exploran y guardan favoritas.", None),
  ],
}

EDU = {
  "en": [("Web Development Course · Frontend React", "IT Academy · Barcelona Activa", "Apr 2026 – Mar 2027 · In progress"),
         ("Information Systems", "Abasia Institute", "2011 – 2015")],
  "es": [("Curso de Desarrollo Web · Frontend React", "IT Academy · Barcelona Activa", "abr. 2026 – mar. 2027 · En curso"),
         ("Sistemas de Información", "Abasia Institute", "2011 – 2015")],
}

CERTS = [("Become a Programmer: Foundations", "LinkedIn Learning · 2022"),
         ("Programming Foundations (13 courses)", "LinkedIn Learning · 2022"),
         ("Essentials of ChatGPT", "Almdrasa")]

CSS = (ROOT / "cv.css").read_text(encoding="utf-8")
e = html.escape

def build(lang):
    t = T[lang]; h = t["h"]
    contact = "".join(
        f'<li>{"<a href=%s>%s</a>" % (e(u, quote=True), e(en if lang=="en" else es)) if u else e(en if lang=="en" else es)}</li>'
        for en, es, u in CONTACT)
    skills = "".join(f"<div class='sk'><b>{e(k)}</b><span>{e(v)}</span></div>" for k, v in SKILLS[lang])
    langs = "".join(f"<li><b>{e(n)}</b><span>{e(l)}</span></li>" for n, l in t["langs"])
    certs = "".join(f"<li><b>{e(n)}</b><span>{e(i)}</span></li>" for n, i in CERTS)
    exp = ""
    for role, comp, s, en_, pts in EXP[lang]:
        date = t["present"] if s is None else f"{s} – {en_ or t['present']}"
        bl = "".join(f"<li>{e(p)}</li>" for p in pts)
        exp += (f"<div class='item'><div class='ih'><div><h3>{e(role)}</h3><p class='co'>{e(comp)}</p></div>"
                f"<span class='date'>{e(date)}</span></div><ul>{bl}</ul></div>")
    proj = ""
    for name, tag, stack, desc, demo in PROJECTS[lang]:
        tg = f" <span class='tag'>{e(tag)}</span>" if tag else ""
        dm = f" <a class='demo' href='https://{demo}'>{e(demo)}</a>" if demo else ""
        proj += (f"<div class='item'><h3>{e(name)}{tg}</h3><p class='stack'>{e(stack)}</p>"
                 f"<p class='desc'>{e(desc)}{dm}</p></div>")
    proj += f"<p class='note'>{e(t['code_note'])}</p>"
    edu = "".join(f"<div class='item'><div class='ih'><div><h3>{e(a)}</h3><p class='co'>{e(b)}</p></div>"
                  f"<span class='date'>{e(c)}</span></div></div>" for a, b, c in EDU[lang])
    return f"""<!doctype html>
<html lang="{lang}"><head><meta charset="utf-8">
<title>Anas Alnagar – CV</title>
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<style>{CSS}</style></head>
<body><div class="page">
<header class="hd"><div><h1>Anas <span>Alnagar</span></h1><p class="role">{e(t['title'])}</p></div></header>
<div class="cols">
<aside class="side">
  <section><h2>{h['contact']}</h2><ul class="contact">{contact}</ul></section>
  <section><h2>{h['skills']}</h2>{skills}</section>
  <section><h2>{h['langs']}</h2><ul class="kv">{langs}</ul></section>
</aside>
<main class="main">
  <section><h2>{h['profile']}</h2><p class="profile">{e(t['profile'])}</p></section>
  <section><h2>{h['exp']}</h2>{exp}</section>
  <section><h2>{h['projects']}</h2>{proj}</section>
  <section><h2>{h['edu']}</h2>{edu}</section>
  <section><h2>{h['certs']}</h2><ul class="kv certs">{certs}</ul></section>
</main></div></div></body></html>"""

def main():
    pages = {}
    for lang in ("en", "es"):
        p = ROOT / f"cv.{lang}.html"
        p.write_text(build(lang), encoding="utf-8")
        pages[lang] = p
        print("wrote", p.relative_to(ROOT.parent))
    try:
        from playwright.sync_api import sync_playwright
    except ImportError:
        print("Playwright not installed: open the HTML files in Chrome and print to PDF.")
        return
    OUT_PDF.mkdir(parents=True, exist_ok=True)
    with sync_playwright() as pw:
        b = pw.chromium.launch()
        for lang, p in pages.items():
            pg = b.new_page()
            pg.goto(p.as_uri(), wait_until="networkidle")
            pg.evaluate("document.fonts.ready")
            out = OUT_PDF / T[lang]["file"]
            pg.pdf(path=str(out), format="A4", print_background=True, margin={"top": "0", "bottom": "0", "left": "0", "right": "0"})
            print("wrote", out.relative_to(ROOT.parent))
        b.close()

if __name__ == "__main__":
    main()
