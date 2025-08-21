import { Zap, Sprout, ShieldCheck, Handshake } from 'lucide-react';

export default function Features() {
  const features = [
    {
      title: 'Быстро',
      description:
        'Поддержка высадки деревьев в режиме реального времени, чтобы каждый волонтёр знал, где нужна помощь.',
      icon: <Zap className="w-8 h-8 text-white" />,
    },
    {
      title: 'Просто',
      description:
        'Интуитивно понятный интерфейс: зарегистрироваться и присоединиться к акции может каждый.',
      icon: <Sprout className="w-8 h-8 text-white" />,
    },
    {
      title: 'Надёжно',
      description:
        'Мы отслеживаем каждую высадку, чтобы гарантировать результат и прозрачность действий.',
      icon: <ShieldCheck className="w-8 h-8 text-white" />,
    },
    {
      title: 'Сообщество',
      description:
        'Сотни волонтёров объединены общей целью — восстановить леса и заботиться о природе.',
      icon: <Handshake className="w-8 h-8 text-white" />,
    },
  ];

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-background drop-shadow-lg">
          Наши преимущества
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="text-center p-6 border-2 border-pine rounded-2xl backdrop-blur-sm bg-background/20 hover:shadow-lg transition"
            >
              <div className="text-4xl mb-4 flex justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-background">
                {feature.title}
              </h3>
              <p className="text-sm md:text-base text-background/90">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
