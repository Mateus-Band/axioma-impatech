import { CardProps } from '@/types'

const cards: CardProps[] = [
  {
    icon: '📅',
    title: 'Aos sábados',
    description: 'As aulas acontecem toda semana aos sábados, das 8h às 12h.',
    accentColor: 'var(--color-primary)',
  },
  {
    icon: '📍',
    title: 'No IMPA Tech',
    description:
      'Presencial no Porto Maravalley — Av. Prof. Pereira Reis, 76, Santo Cristo, Rio de Janeiro.',
    accentColor: 'var(--color-secondary)',
  },
  {
    icon: '🎓',
    title: 'Aulas gratuitas',
    description:
      'Sem nenhum custo para o aluno. O transporte até o campus é responsabilidade individual.',
    accentColor: 'var(--color-matematica)',
  },
  {
    icon: '🔢',
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
      style={{ backgroundColor: 'var(--color-secondary)' }}
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-white">Como funciona</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card) => (
            <div
              key={card.title}
              className="rounded-xl p-6"
              style={{ backgroundColor: 'rgba(255,255,255,0.07)' }}
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center text-xl mb-4"
                style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
              >
                {card.icon}
              </div>
              <h3
                className="text-lg font-bold mb-2"
                style={{ color: card.accentColor }}
              >
                {card.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.75)' }}>
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}