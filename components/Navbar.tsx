'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import logoImg from '../public/logo.png';
import { NAV_ITEMS } from './navigation';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState<string>('hero');

  // Identifica a seção visível ao rolar a página
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      for (const item of NAV_ITEMS) {
        const element = document.getElementById(item.id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Rolagem suave com compensação para a altura do cabeçalho
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 70;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;

      window.scrollTo({
        top: elementPosition - navOffset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header className="sticky top-0 left-0 w-full z-50 py-2.5 px-3 sm:px-6 flex items-center justify-between bg-navbar/90 backdrop-blur-md border-b border-secondary/10 shadow-sm transition-all duration-300">
      {/* Logo Esquerda */}
      <div className="flex items-center shrink-0">
        <Image
          src={logoImg}
          alt="Axioma Icon"
          width={200}
          height={200}
          priority
          className="w-auto h-7 sm:h-9 object-contain"
        />
      </div>

      {/* Navegação Central */}
      <nav className="flex items-center gap-1 sm:gap-1.5 px-2 py-1 rounded-full bg-(--color-alternative) border border-secondary/20 shadow-inner max-w-[60vw] sm:max-w-none overflow-x-auto no-scrollbar">
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;

          return (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              title={item.label}
              aria-label={item.label}
              className={`flex items-center gap-1.5 px-2.5 sm:px-3.5 py-1.5 rounded-full transition-all duration-200 text-xs sm:text-sm font-medium shrink-0 focus:outline-none ${
                isActive
                  ? 'bg-secondary text-white shadow-sm scale-105'
                  : 'text-(--color-text) hover:text-secondary hover:bg-secondary/10'
              }`}
            >
              <Icon className="w-4 h-4 shrink-0" />
              <span className="hidden md:inline whitespace-nowrap">
                {item.label}
              </span>
            </button>
          );
        })}
      </nav>

      {/* Logo Direita */}
      <div className="flex items-center justify-end shrink-0">
        <Image
          src="/icon.svg"
          alt="Logo IMPA Tech"
          width={80}
          height={60}
          className="w-12 sm:w-16 h-auto object-contain"
        />
      </div>
    </header>
  );
}