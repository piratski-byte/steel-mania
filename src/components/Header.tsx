'use client';

import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [open, setOpen] = useState(false);

  const navItems = [
    {
      href: '#hero',
      label: 'Оставить заявку',
      styles: `bg-primary px-3 py-1.5 rounded-2xl text-background font-semibold
                  hover:bg-onyx/40 hover:text-foreground
                  transition-colors duration-250 cursor-pointer`,
    },
    { href: '#services', label: 'Услуги' },
    { href: '#about', label: 'О нас' },
    { href: '#features', label: 'Наши преимущества' },
  ];

  // Блокируем скролл body, когда открыто меню
  useEffect(() => {
    if (open) {
      const original = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = original;
      };
    }
  }, [open]);

  // Закрытие по Esc
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full bg-background/90 backdrop-blur-md shadow-md z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Логотип */}
        <h1 className="text-xl font-bold text-primary cursor-default flex items-center gap-2">
          <a href="#" className="hover:text-primary text-2xl transition">
            Steel Mania
          </a>
        </h1>

        {/* Навигация (Desktop) */}
        <nav className="hidden md:flex md:justify-center gap-6 text-foreground font-medium">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`hover:text-primary flex justify-center items-center transition ${item.styles}`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Бургер (Mobile) */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(true)}
          aria-label="Открыть меню"
        >
          <Menu className="w-7 h-7" />
        </button>
      </div>

      {/* Оверлей + модалка (Mobile) */}
      {open && (
        <div
          className={`
            fixed top-0 left-0 w-full h-screen z-[100]
            bg-forest/50 backdrop-blur-md
            flex items-center justify-center
            transition-opacity duration-200
            animate-[fadeIn_.25s_ease]
          `}
          role="dialog"
          aria-modal="true"
          onClick={() => setOpen(false)} /* клик по фону закрывает */
        >
          {/* сама модалка; клики внутри не закрывают */}
          <div
            className="relative w-full max-w-md bg-background text-foreground p-8 rounded-2xl shadow-xl mx-4
                       animate-[slideUp_.25s_ease_forwards]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Кнопка закрытия */}
            <button
              className="absolute top-4 right-4 w-9 h-9 inline-flex items-center justify-center rounded-md
                         hover:bg-foreground/10 transition"
              onClick={() => setOpen(false)}
              aria-label="Закрыть меню"
            >
              <X className="w-6 h-6" />
            </button>

            <h2 className="text-xl font-semibold mb-6 text-primary">Меню</h2>

            <nav className="flex flex-col gap-4 text-lg font-medium">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="px-3 py-2 rounded-lg hover:bg-foreground/10 hover:text-primary transition"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
