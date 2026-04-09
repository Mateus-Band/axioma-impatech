'use client';

import Image from 'next/image';

export default function Navbar() {
  return (
    <header className="w-full py-4" style={{ backgroundColor: 'var(--color-primary)', margin: '0' }}>
      <div className="flex items-center" style={{ paddingLeft: '24px' }}>
        <Image
          src="/icon.svg"
          alt="Axioma Icon"
          width={120}
          height={100}
          priority
        />
      </div>
    </header>
  );
}