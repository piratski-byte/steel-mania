import Image from 'next/image';
import aboutImage from '@/assets/images/about-image.jpg';

export default function About() {
  return (
    <section id="about" className="relative text-foreground py-20 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Текст */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
            О компании SteelMania
          </h2>
          <p className="mb-4 text-lg text-muted leading-relaxed">
            <strong>SteelMania</strong> — это мастерская с более чем 15-летним
            опытом сварочных работ. Работаем с любыми металлами и технологиями,
            выполняем ремонт, изготовление и монтаж конструкций. Для нас важны
            качество, надёжность и честные сроки.
          </p>
        </div>

        {/* Картинка */}
        <div className="relative w-full h-56 md:h-72 rounded-xl overflow-hidden shadow-lg">
          <Image
            src={aboutImage}
            alt="Сварочные работы SteelMania"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
