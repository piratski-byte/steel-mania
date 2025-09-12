export default function MetalsPage() {
  const metals = [
    'Сварка чугуна (ремонт трещин, заварка корпусов, блоков и деталей)',
    'Сварка нержавеющей стали (трубы, ёмкости, поручни, конструкции)',
    'Сварка цветных металлов (медь, алюминий, латунь, бронза)',
    'Сварка черных металлов (сталь, конструкционный металл)',
    'Сварка разнородных металлов',
  ];

  return (
    <section className="py-20">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          Сварка металлов
        </h1>
        <ul className="space-y-4">
          {metals.map((item, idx) => (
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
