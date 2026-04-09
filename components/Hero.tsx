// components/Hero.tsx
import { SectionProps } from '@/types'

export default function Hero({ title, description, ctaLabel }: SectionProps) {
  return (
    <section className="flex flex-col items-center py-20">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="mt-4 text-lg text-gray-600">{description}</p>
      {ctaLabel && (
        <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg">
          {ctaLabel}
        </button>
      )}
    </section>
  )
}