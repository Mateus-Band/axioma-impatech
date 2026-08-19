'use client';

import Image from 'next/image';

export default function Navbar() {
  return (
    <header 
  // Removi o mb-8 para eliminar o espaço em branco
  className="sticky top-0 left-0 w-full z-50 py-2 flex items-center" 
  style={{ 
    backgroundColor: 'var(--color-secondary)', 
    paddingLeft: '24px', 
    paddingRight: '24px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)' 
  }}
>
      <div className="flex items-center" style={{ gap: '16px' }}>
        <Image
          src="/logo.png"
          alt="Axioma Icon"
          width={60}  
          height={60}
          priority
        />
        <div>
          <h1 className="text-2xl font-bold leading-none">Axioma</h1>
          <p className="mt-1 text-sm text-gray-400">Impatech — em breve</p>
        </div>
      </div>
      <div className="flex-1 flex items-center justify-end">
        <Image
          src="/icon.svg"
          alt="Logo IMPA Tech"
          width={80}  
          height={60} 
        />
      </div>
    </header>
  );
}