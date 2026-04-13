import { CardProps } from '@/types'

const cards: Omit<CardProps, 'icon'>[] = [
  {
    title: 'Aos sábados',
    description: 'As aulas acontecem toda semana aos sábados, das 8h às 12h.',
    accentColor: 'var(--color-primary)',
  },
  {
    title: 'No IMPA Tech',
    description:
      'Presencial no Porto Maravalley — Av. Prof. Pereira Reis, 76, Santo Cristo, Rio de Janeiro.',
    accentColor: 'var(--color-secondary)',
  },
  {
    title: 'Aulas gratuitas',
    description:
      'Sem nenhum custo para o aluno. O transporte até o campus é responsabilidade individual.',
    accentColor: 'var(--color-matematica)',
  },
  {
    title: 'Conteúdo universitário',
    description:
      'As aulas partem de tópicos independentes e avançam para conteúdo estruturado e interconectado.',
    accentColor: 'var(--color-computacao)',
  },
]

export default function HowItWorks() {
  return (
    <section
      className="px-6 py-20"
      style={{ backgroundColor: '#fff' }}
    >
      <div className="max-w-4xl mx-auto">
        <h2
          className="text-3xl font-bold mb-12"
          style={{ color: 'var(--color-secondary)' }}
        >
          Como funciona
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cards.map((card) => (
            <div
              key={card.title}
              className="rounded-xl p-8 border"
              style={{
                backgroundColor: '#fff',
                borderColor: card.accentColor,
                boxShadow: '0 1px 3px rgba(0,0,0,0.02)',
              }}
            >
              <div className="flex items-center gap-3 mb-3">
                <span
                  className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                  style={{ backgroundColor: card.accentColor }}
                />
                <h3
                  className="text-xl font-bold"
                  style={{ color: 'var(--color-secondary)' }}
                >
                  {card.title}
                </h3>
              </div>
              <p
                className="text-base leading-relaxed"
                style={{ color: 'var(--color-text)' }}
              >
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}