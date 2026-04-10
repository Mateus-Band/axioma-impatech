'use client';

import Image from 'next/image';

export default function Navbar() {
  return (
    <header 
      className="py-4 flex items-center" 
      style={{ backgroundColor: 'var(--color-secondary)', margin: '0', paddingLeft: '24px', paddingRight: '24px' }}
    >
      <div className="flex items-center" style={{ gap: '24px' }}>
        <Image
          src="/logo.png"
          alt="Axioma Icon"
          width={120}
          height={120}
          priority
        />
        <div>
          <h1 className="text-5xl font-bold">Axioma</h1>
          <p className="mt-4 text-gray-400">Impatech — em breve</p>
        </div>
      </div>
      <div className="flex-1 flex items-center justify-end">
        <Image
          src="/icon.svg"
          alt="Logo IMPA Tech"
          width={120}
          height={100}
        />
      </div>
    </header>
  );
}