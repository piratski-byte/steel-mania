import Image from 'next/image';
import aboutImage from '@/assets/images/about-image.jpg';

export default function About() {
  return (
    <section
      id="about"
      className="relative bg-background text-foreground py-20"
    >
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Текст */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
            О нас
          </h2>
          <p className="mb-4 text-lg leading-relaxed">
            <strong>YourForest</strong> — это общественная инициатива по
            восстановлению лесов. Мы объединяем людей, компании и организации,
            чтобы сажать деревья и возвращать природе её силу.
          </p>
          <p className="mb-6 text-lg leading-relaxed">
            За последние годы мы высадили тысячи саженцев в разных регионах,
            привлекли сотни волонтёров и доказали, что вместе мы можем изменить
            будущее.
          </p>
          <a
            href="#how"
            className="inline-block bg-primary text-background px-6 py-3 rounded-xl font-semibold hover:bg-secondary hover:text-foreground transition"
          >
            Как помочь
          </a>
        </div>

        {/* Картинка */}
        <div className="relative w-full h-72 md:h-96 rounded-2xl overflow-hidden shadow-lg">
          <Image
            src={aboutImage}
            alt="Добровольцы высаживают деревья"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
