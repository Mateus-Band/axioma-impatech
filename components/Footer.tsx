export default function Footer() {
  return (
    <footer
      className="px-6 py-10 text-center text-sm bg-secondary text-white/60"
    >
      <p className="mb-1">
        © Copyright 2025 Projeto Axioma —{' '}
        
        {/* Faltava a abertura da tag <a */}
        <a
          href="https://impatech.edu.br"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-primary"
        >
          IMPA Tech
        </a>
      </p>
      <p>Av. Prof. Pereira Reis, 76, Santo Cristo, Rio de Janeiro</p>
    </footer>
  )
}