'use client';

import Image from 'next/image';
import logoImg from '../public/logo.png';

export default function Navbar() {
  return (
    <header
      // Removi o mb-8 para eliminar o espaço em branco
      className="sticky top-0 left-0 w-full z-50 py-2 px-6 flex items-center bg-navbar shadow-md"
    >
      <div className="flex items-center gap-4">
        <Image
          src={logoImg}
          alt="Axioma Icon"
          width={200}
          height={200}
          priority
        />
      </div>
      <div className="flex-1 flex items-center justify-end">
        <Image
          src="/icon.svg"
          alt="Logo IMPA Tech"
          width={80}
          height={60}
          className="w-20 h-auto"
        />
      </div>
    </header>
  );
}