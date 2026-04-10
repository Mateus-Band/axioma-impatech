export default function Eligibility() {
  const items = [
    'Estudantes do 9º ano do Ensino Fundamental ao 3º ano do Ensino Médio',
    'Alunos de escolas públicas e privadas',
    'Interesse e curiosidade por matemática e ciências exatas',
    'Disponibilidade aos sábados das 8h às 12h no Rio de Janeiro',
  ]

  return (
    <section className="px-6 py-20 max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2
            className="text-3xl font-bold mb-6"
            style={{ color: 'var(--color-secondary)' }}
          >
            Para quem é?
          </h2>
          <p className="text-base leading-relaxed mb-8" style={{ color: 'var(--color-text)' }}>
            O projeto é voltado a jovens com potencial nas ciências exatas que buscam
            aprofundamento além do currículo escolar e querem se preparar para a universidade.
          </p>
          <ul className="space-y-3">
            {items.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span
                  className="mt-1 w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-bold text-white"
                  style={{ backgroundColor: 'var(--color-primary)' }}
                >
                  ✓
                </span>
                <span className="text-base" style={{ color: 'var(--color-text)' }}>
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div
          className="rounded-xl p-8 text-center"
          style={{ backgroundColor: 'var(--color-primary)' }}
        >
          <p className="text-6xl font-bold text-white mb-2">40</p>
          <p className="text-white text-lg font-bold mb-4">vagas por turma</p>
          <p className="text-sm" style={{ color: 'rgba(255,255,255,0.8)' }}>
            Se o número de inscritos exceder as vagas disponíveis, será realizada uma
            prova online para classificação dos candidatos.
          </p>
        </div>
      </div>
    </section>
  )
}