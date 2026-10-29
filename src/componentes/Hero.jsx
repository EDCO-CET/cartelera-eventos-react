// Banner de bienvenida: mismo HTML del proyecto en JS, con dos cambios de JSX:
// class -> className y aria-labelledby se escribe igual (los aria-* y data-* no cambian)
function Hero({titulo, texto, children }) {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-content">
        <h2 id="hero-title">{titulo}</h2>
        {texto && <p>{texto}</p>}
        {children}
      </div>
    </section>
  )
}

export default Hero
