export default function TechnologiesPage() {
  const techs = [
    'Электродуговая сварка',
    'Аргонодуговая (TIG) сварка',
    'MIG/MAG сварка (полуавтомат)',
    'Плазменная сварка и резка',
    'Спот-сварка (точечная)',
  ];

  return (
    <section className="py-20">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          Технологии сварки
        </h1>
        <ul className="space-y-4">
          {techs.map((item, idx) => (
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
