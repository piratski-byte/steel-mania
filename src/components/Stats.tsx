export default function Stats() {
  const stats = [
    { number: '10 000+', label: 'Деревьев посажено' },
    { number: '500+', label: 'Волонтёров' },
    { number: '25', label: 'Регионов охвачено' },
    { number: '5 лет', label: 'Работы сообщества' },
  ];

  return (
    <section id="stats" className="bg-evergreen text-mist py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-background">
          Наши достижения
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <span className="text-4xl md:text-5xl font-extrabold text-background drop-shadow-sm">
                {item.number}
              </span>
              <span className="mt-2 text-lg text-mist/90">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
