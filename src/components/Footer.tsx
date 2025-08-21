import { Leaf, TreePine, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-8 text-center border-t border-[var(--muted)] bg-background text-primary">
      <div className="flex justify-center gap-4 mb-4 text-[var(--primary)]">
        <Leaf className="w-6 h-6" />
        <TreePine className="w-6 h-6" />
        <Heart className="w-6 h-6" />
      </div>
      <p className="text-sm">
        © {new Date().getFullYear()} YourForest. Все права защищены.
      </p>
      <div className="mt-2">
        <a
          href="#about"
          className="mx-2 hover:text-[var(--primary)] transition"
        >
          О нас
        </a>
        <a href="#how" className="mx-2 hover:text-[var(--primary)] transition">
          Помощь лесу
        </a>
      </div>
    </footer>
  );
}
