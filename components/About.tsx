export default function About() {
  return (
    <section
      className="px-6 py-20"
      style={{ backgroundColor: 'var(--color-background)' }}
    >
      <div className="max-w-4xl mx-auto">
        <h2
          className="text-3xl font-bold mb-6"
          style={{ color: 'var(--color-secondary)' }}
        >
          O que é o Projeto Axioma?
        </h2>
        <p className="text-lg leading-relaxed mb-6" style={{ color: 'var(--color-text)' }}>
          O Projeto Axioma tem como objetivo despertar o interesse pelas ciências exatas,
          identificando e apoiando jovens talentosos. O programa prepara e introduz estudantes
          a conteúdos de matemática normalmente vistos apenas na universidade.
        </p>
        <p className="text-lg leading-relaxed mb-10" style={{ color: 'var(--color-text)' }}>
          As aulas são ministradas por graduandos do curso de Bacharelado em Matemática para
          Tecnologia e Inovação do IMPA Tech, sob supervisão do professor e pesquisador do
          IMPA <strong>Vinicius Ramos</strong>.
        </p>
        <div
          className="rounded-xl p-6"
          style={{
            backgroundColor: '#fff',
            borderLeft: '4px solid var(--color-primary)',
            boxShadow: '0 1px 4px rgba(0,0,0,0.07)',
          }}
        >
          <p
            className="text-base italic leading-relaxed"
            style={{ color: 'var(--color-text)' }}
          >
            "Um axioma é uma proposição cuja verdade é tão evidente que nenhum raciocínio
            pode torná-la mais clara — a base de um sistema dedutivo formal. Com os alunos
            do projeto, consolidamos conhecimentos para que se tornem cada vez mais
            interessados nessa bela e importante ciência."
          </p>
          <p className="mt-3 text-sm font-bold" style={{ color: 'var(--color-secondary)' }}>
            — Equipe Axioma, IMPA Tech
          </p>
        </div>
      </div>
    </section>
  )
}