import { StepProps } from '@/types'

const steps: StepProps[] = [
  {
    number: 1,
    title: 'Inscrição online',
    description:
      'Preencha o formulário de inscrição dentro do prazo divulgado pelo IMPA Tech.',
  },
  {
    number: 2,
    title: 'Prova classificatória (se necessário)',
    description:
      'Se as inscrições excederem as 40 vagas, uma prova online será aplicada para rankear os candidatos.',
  },
  {
    number: 3,
    title: 'Início das aulas',
    description:
      'Os selecionados são convocados e as aulas têm início conforme o calendário divulgado.',
  },
]

export default function Selection() {
  return (
    <section
      className="px-6 py-20"
      style={{ backgroundColor: 'var(--color-alternative)' }}
    >
      <div className="max-w-3xl mx-auto">
        <h2
          className="text-3xl font-bold mb-12"
          style={{ color: 'var(--color-secondary)' }}
        >
          Processo de inscrição
        </h2>

        <div className="space-y-8">
          {steps.map((step, index) => (
            <div key={step.number} className="flex gap-6">
              <div className="flex flex-col items-center">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white flex-shrink-0"
                  style={{ backgroundColor: 'var(--color-secondary)' }}
                >
                  {step.number}
                </div>
                {index < steps.length - 1 && (
                  <div
                    className="w-px flex-1 mt-2"
                    style={{ backgroundColor: 'var(--color-secondary)', opacity: 0.3 }}
                  />
                )}
              </div>
              <div className="pb-8">
                <h3
                  className="text-lg font-bold mb-2"
                  style={{ color: 'var(--color-secondary)' }}
                >
                  {step.title}
                </h3>
                <p className="text-base leading-relaxed" style={{ color: 'var(--color-text)' }}>
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}