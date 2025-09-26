import { Flame, Wrench, Hammer, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-10 text-center border-t border-muted bg-background text-foreground">
      {/* Иконки/бренд */}
      <div className="flex justify-center gap-4 mb-4 text-primary">
        <Wrench className="w-6 h-6" />
        <Flame className="w-6 h-6" />
        <Hammer className="w-6 h-6" />
      </div>

      {/* Копирайт */}
      <p className="text-sm text-primary">
        © {new Date().getFullYear()} SteelMania. Все права защищены.
      </p>

      {/* Навигация */}
      <div className="mt-4">
        <a href="#services" className="mx-2 hover:text-primary transition">
          Услуги
        </a>
        <a href="#about" className="mx-2 hover:text-primary transition">
          О нас
        </a>
        <a href="#testimonials" className="mx-2 hover:text-primary transition">
          Отзывы
        </a>
      </div>

      {/* Контакты */}
      <div className="mt-4 flex flex-col items-center gap-2 text-sm">
        <p className="flex items-center gap-2">
          <Phone className="w-4 h-4 text-primary" />
          <a href="tel:+79998887766" className="hover:underline">
            +7 (999) 888-77-66
          </a>
        </p>
        <p className="flex items-center gap-2">
          <Mail className="w-4 h-4 text-primary" />
          <a href="mailto:info@weldpro.ru" className="hover:underline">
            info@weldpro.ru
          </a>
        </p>
      </div>
    </footer>
  );
}
