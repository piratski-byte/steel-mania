import Image from 'next/image';
import heroImage from '@/assets/images/hero-image.jpg';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-[85vh] flex flex-col items-center justify-center text-center text-background"
    >
      {/* Фоновая картинка */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={heroImage}
          alt="Лес на рассвете"
          priority
          className="object-cover brightness-70"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
        />
      </div>

      {/* Контент */}
      <div className="max-w-3xl px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-md">
          Вместе посадим леса будущего
        </h1>
        <p className="text-lg md:text-2xl mb-8 text-mist drop-shadow-md">
          Присоединяйтесь к движению по восстановлению природы — каждый саженец
          важен.
        </p>

        {/* CTA кнопки */}
        <div className="flex gap-4 justify-center">
          <a
            href="#how"
            className="bg-primary px-6 py-3 rounded-xl font-semibold 
           hover:bg-mist hover:text-pine
           transition-colors duration-250"
          >
            Присоединиться
          </a>
          <a
            href="#about"
            className="bg-secondary px-6 py-3 rounded-xl font-semibold 
           hover:bg-mist hover:text-foreground
           transition-colors duration-250"
          >
            Узнать больше
          </a>
        </div>
      </div>
    </section>
  );
}
