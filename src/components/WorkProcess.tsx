'use client';

import { ClipboardCheck, Hammer, Truck } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const steps = [
  {
    id: 1,
    icon: <ClipboardCheck className="w-10 h-10 text-primary" />,
    title: 'Заявка',
    text: 'Вы оставляете заявку на сайте или звоните нам напрямую.',
  },
  {
    id: 2,
    icon: <Hammer className="w-10 h-10 text-primary" />,
    title: 'Расчёт и работы',
    text: 'Мы делаем расчёт, согласовываем детали и выполняем сварочные работы.',
  },
  {
    id: 3,
    icon: <Truck className="w-10 h-10 text-primary" />,
    title: 'Сдача проекта',
    text: 'Сдаём готовую конструкцию, даём гарантию и при необходимости доставляем.',
  },
];

export default function WorkProcess() {
  const refs = useRef<(HTMLDivElement | null)[]>([]);
  const [visible, setVisible] = useState<boolean[]>(
    Array(steps.length).fill(false)
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute('data-index'));
          if (entry.isIntersecting) {
            setVisible((prev) => {
              const copy = [...prev];
              copy[index] = true;
              return copy;
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    refs.current.forEach((el) => el && observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="process" className="mt-20 bg-background/85 text-muted py-20">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-12">Как мы работаем</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <div
              key={step.id}
              ref={(el) => {
                refs.current[idx] = el;
              }}
              data-index={idx}
              className={`text-center p-6 rounded-xl border border-foreground/20 bg-onyx/40 backdrop-blur-sm hover:shadow-xl cursor-default flex flex-col items-center shadow-md
                          transition-all duration-700 ease-out
                          ${
                            visible[idx]
                              ? 'opacity-100 translate-y-0'
                              : 'opacity-0 translate-y-12'
                          }`}
            >
              <div className="mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-foreground">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
