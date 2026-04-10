export default function Contact() {
  return (
    <section className="px-6 py-20 max-w-4xl mx-auto">
      <h2
        className="text-3xl font-bold mb-12"
        style={{ color: 'var(--color-secondary)' }}
      >
        Contato e localização
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div
          className="rounded-xl p-6"
          style={{ backgroundColor: 'var(--color-secondary)' }}
        >
          <h3 className="text-lg font-bold text-white mb-4">Dúvidas sobre o projeto</h3>
          <p className="text-sm mb-4" style={{ color: 'rgba(255,255,255,0.75)' }}>
            Questões sobre o processo seletivo ou as aulas podem ser enviadas para:
          </p>
          
          {/* Faltava a abertura da tag <a */}
          <a
            href="mailto:projeto.axioma@impatech.edu.br"
            className="font-bold underline"
            style={{ color: 'var(--color-primary)' }}
          >
            projeto.axioma@impatech.edu.br
          </a>
        </div>

        <div
          className="rounded-xl p-6"
          style={{ border: '2px solid var(--color-primary)' }}
        >
          <h3
            className="text-lg font-bold mb-4"
            style={{ color: 'var(--color-secondary)' }}
          >
            Localização
          </h3>
          <p className="text-base leading-relaxed" style={{ color: 'var(--color-text)' }}>
            <strong>IMPA Tech</strong>
            <br />
            Av. Prof. Pereira Reis, 76
            <br />
            Santo Cristo — Porto Maravalley
            <br />
            Rio de Janeiro, RJ
          </p>
        </div>
      </div>
    </section>
  )
}