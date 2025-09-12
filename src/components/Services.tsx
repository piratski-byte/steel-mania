import { Cog, Layers, Hammer, Wrench } from 'lucide-react';

export default function Services() {
  const categories = [
    {
      title: 'Работа с металлами',
      description:
        'Чугун, нержавейка, цветные и черные металлы, а также сварка разнородных соединений.',
      icon: <Layers className="w-10 h-10 text-firework" />,
      link: '/services/metals',
    },
    {
      title: 'Технологии сварки',
      description:
        'Электродуговая, TIG, MIG/MAG, плазменная резка и точечная сварка.',
      icon: <Cog className="w-10 h-10 text-firework" />,
      link: '/services/technologies',
    },
    {
      title: 'Виды работ',
      description:
        'Ремонт, монтаж и изготовление конструкций, мебель, техника, авто и декоративные изделия.',
      icon: <Hammer className="w-10 h-10 text-firework" />,
      link: '/services/work-types',
    },
    {
      title: 'Дополнительные услуги',
      description:
        'Резка, гибка, шлифовка, мобильная сварка и срочный ремонт на месте.',
      icon: <Wrench className="w-10 h-10 text-firework" />,
      link: '/services/additional',
    },
  ];

  return (
    <section
      className="pb-16 pt-8 bg-background/85 text-foreground"
      id="services"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl text-muted font-bold text-center mb-8">
          Наши услуги
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {categories.map((cat, idx) => (
            <a
              href={cat.link}
              key={idx}
              className="text-center p-6 rounded-xl border border-foreground/20 bg-onyx/40 backdrop-blur-sm hover:shadow-2xl hover:border-foreground transition"
            >
              <div className="mb-4 flex justify-center">{cat.icon}</div>
              <h3 className="text-xl text-muted font-semibold mb-2">
                {cat.title}
              </h3>
              <p className="text-sm md:text-base opacity-90">
                {cat.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
