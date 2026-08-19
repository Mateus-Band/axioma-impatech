export default function Hero() {
  return (
    <section
      className="flex flex-col items-center justify-center text-center px-6 py-24 bg-background"
    >
      <p
        className="text-xs font-bold uppercase tracking-widest mb-5 text-secondary"
      >
        Extensão do IMPA Tech
      </p>
      <h2
        className="text-5xl font-bold mb-6 max-w-3xl leading-tight text-secondary"
      >
        Matemática universitária para estudantes do ensino médio
      </h2>
      <p className="text-lg max-w-xl mb-10 text-text">
        O Projeto Axioma oferece aulas gratuitas e presenciais para jovens com
        talento em ciências exatas, preparando-os para a realidade acadêmica.
      </p>
      <a
        href="mailto:projeto.axioma@impatech.edu.br"
        className="px-8 py-3 rounded-lg font-bold text-base transition-opacity hover:opacity-90 bg-secondary text-white"
      >
        Quero me inscrever
      </a>
    </section>
  )
}