import Tarjeta from './componentes/Tarjeta'
import ListaEventos from './componentes/ListaEventos'
import Header from './componentes/Header'
import Hero from './componentes/Hero'
import Footer from './componentes/Footer'
import Contador from './componentes/Contador'
import FormularioRegistro from './componentes/FormularioRegistro'

const eventos = [
  {
    "id": 1,
    "titulo": "Concierto de jazz",
    "descripcion": "Big band en vivo en el Teatro Colón",
    "categoria": "Música",
    "fecha": "Viernes 2 de octubre, 8 pm",
    "lugar": "Teatro Colón",
    "precio": 52000,
    "cupos": 3,
    "imagen": "/img/jazz.jpg",
    "alt": "Fila de saxofonistas tocando en un concierto",
    "destacado": true
  },
  {
    "id": 2,
    "titulo": "Festival Indie Bogotá",
    "descripcion": "Doce bandas, dos escenarios y food trucks",
    "categoria": "Música",
    "fecha": "Sábado 10 de octubre, 2 pm",
    "lugar": "Parque Simón Bolívar",
    "precio": 120000,
    "cupos": 5,
    "imagen": "/img/festival.jpg",
    "alt": "Público con las manos arriba frente a un escenario iluminado",
    "destacado": false
  },
  {
    "id": 3,
    "titulo": "Taller de fotografía",
    "descripcion": "Fundamentos de luz y composición con cámara analógica",
    "categoria": "Taller",
    "fecha": "Martes 13 de octubre, 6 pm",
    "lugar": "Casa Cultural La Candelaria",
    "precio": 80000,
    "cupos": 2,
    "imagen": "/img/fotografia.jpg",
    "alt": "Cámara analógica antigua sobre una mesa",
    "destacado": false
  },
  {
    "id": 4,
    "titulo": "Feria gastronómica",
    "descripcion": "Cocina local, mercado campesino y showcooking",
    "categoria": "Gastronomía",
    "fecha": "Domingo 18 de octubre, 11 am",
    "lugar": "Plaza de Mercado de Paloquemao",
    "precio": 0,
    "cupos": 10,
    "imagen": "/img/cocina.jpg",
    "alt": "Cebollas, hierbas y especias sobre una tabla de madera",
    "destacado": false
  },
  {
    "id": 5,
    "titulo": "Hackathon Frontend",
    "descripcion": "48 horas para construir una app web en equipo",
    "categoria": "Tecnología",
    "fecha": "Viernes 23 de octubre, 5 pm",
    "lugar": "Universidad de los Andes",
    "precio": 30000,
    "cupos": 4,
    "imagen": "/img/tecnologia.jpg",
    "alt": "Portátil abierto junto a un cuaderno de notas",
    "destacado": false
  },
  {
    "id": 6,
    "titulo": "Noche de vinilos",
    "descripcion": "Sesión de DJ con clásicos del soul y el funk",
    "categoria": "Música",
    "fecha": "Sábado 31 de octubre, 9 pm",
    "lugar": "Bar Latino, Chapinero",
    "precio": 25000,
    "cupos": 1,
    "imagen": "/img/vinilos.jpg",
    "alt": "Aguja de un tocadiscos sobre un vinilo",
    "destacado": false
  }
]


function App() {

  /* JSX */ 
  return (
    <>
      <Header />
      <Hero />
      <div className="layout">
        <aside className="aside aside--featured">
          <h2>Eventos Destacados</h2>
          <ListaEventos eventos={eventos.filter(evento => evento.destacado)} />
        </aside>
        <main id="home" className="main">
          <section id="events">
            <h2>Proximos Eventos</h2>
            <ListaEventos eventos={eventos} />
          </section>
          <section>
            <h2>Formulario de Registro</h2>
            <FormularioRegistro />
          </section>
        </main>
        <aside className="aside aside--info">
          <h2>Info util</h2>
          <section>
            <h3>Horarios</h3>
            <p>Lunes a viernes de 7pm a 9pm</p>
          </section>
          <Contador />
        </aside>
      </div>
      <Footer />
    </>
  )
}

export default App
