export default function Stats() {
  const stats = [
    { number: '15+ лет', label: 'Опыт работы' },
    { number: '1200+', label: 'Выполненных проектов' },
    { number: '98%', label: 'Довольных клиентов' },
    { number: '24/7', label: 'Поддержка и выезд' },
  ];

  return (
    <section id="stats" className="mt-20 bg-background/85 text-muted py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Наши достижения
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <span className="text-4xl md:text-5xl font-extrabold drop-shadow-sm text-primary">
                {item.number}
              </span>
              <span className="mt-2 text-lg text-muted">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
