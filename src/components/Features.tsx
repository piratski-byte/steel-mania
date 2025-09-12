import { ShieldCheck, Timer, Truck, Wrench } from 'lucide-react';

export default function Features() {
  const features = [
    {
      title: 'Опыт и мастерство',
      description:
        'Более 15 лет практики сварочных работ любой сложности — от ремонта деталей до изготовления конструкций.',
      icon: <Wrench className="w-10 h-10 text-firework" />,
    },
    {
      title: 'Выезд на объект',
      description:
        'Мобильная сварка с собственным бензогенератором — ремонт и монтаж прямо на вашей территории.',
      icon: <Truck className="w-10 h-10 text-firework" />,
    },
    {
      title: 'Любые металлы',
      description:
        'Чугун, сталь, нержавейка, алюминий, цветные и разнородные металлы — подберём оптимальную технологию.',
      icon: <ShieldCheck className="w-10 h-10 text-firework" />,
    },
    {
      title: 'Сроки и надёжность',
      description:
        'Честные цены и соблюдение сроков. Ответственность и качество — главные принципы работы.',
      icon: <Timer className="w-10 h-10 text-firework" />,
    },
  ];

  return (
    <section
      id="features"
      className="py-20 bg-background/85 text-foreground scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-muted">
          Наши преимущества
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="text-center p-6 rounded-xl border border-foreground/20 bg-onyx/40 backdrop-blur-sm hover:shadow-xl cursor-default transition"
            >
              <div className="mb-4 flex justify-center">{feature.icon}</div>
              <h3 className="text-xl text-muted font-semibold mb-2">
                {feature.title}
              </h3>
              <p className="text-sm md:text-base opacity-90">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
