export default function Footer() {
  return (
    <footer
      className="px-6 py-10 text-center text-sm"
      style={{ backgroundColor: 'var(--color-secondary)', color: 'rgba(255,255,255,0.6)' }}
    >
      <p className="mb-1">
        Projeto Axioma —{' '}
        
        {/* Faltava a abertura da tag <a */}
        <a
          href="https://impatech.edu.br"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
          style={{ color: 'var(--color-primary)' }}
        >
          IMPA Tech
        </a>
      </p>
      <p>Av. Prof. Pereira Reis, 76, Santo Cristo, Rio de Janeiro</p>
    </footer>
  )
}