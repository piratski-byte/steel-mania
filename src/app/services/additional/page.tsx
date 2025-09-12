export default function AdditionalPage() {
  const additional = [
    'Резка металла (газ, плазма, болгарка)',
    'Гибка и подготовка металла',
    'Шлифовка и полировка сварных швов',
    'Мобильная выездная сварка (работа на объекте клиента)',
    'Срочный ремонт на месте (аварийные ситуации)',
    'Консультация и подбор технологии сварки',
  ];

  return (
    <section className="py-20">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          Дополнительные услуги
        </h1>
        <ul className="space-y-4">
          {additional.map((item, idx) => (
            <li
              key={idx}
              className="p-4 border rounded-xl bg-muted/40 hover:bg-muted/60 transition"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
