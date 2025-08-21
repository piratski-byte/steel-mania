'use client';

import { TreePine, HandHeart, Users } from 'lucide-react'; // иконки lucide
import { useEffect, useRef, useState } from 'react';

const steps = [
  {
    id: 1,
    icon: <Users className="w-10 h-10 text-primary" />,
    title: 'Присоединяйся',
    text: 'Зарегистрируйся и стань частью сообщества волонтёров.',
  },
  {
    id: 2,
    icon: <HandHeart className="w-10 h-10 text-primary" />,
    title: 'Поддержи',
    text: 'Выбери удобный способ помочь: посадка деревьев или донат.',
  },
  {
    id: 3,
    icon: <TreePine className="w-10 h-10 text-primary" />,
    title: 'Посади лес',
    text: 'Выезжай на мероприятия и вноси свой вклад в будущее планеты.',
  },
];

export default function HowToHelp() {
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
    <section id="how" className="bg-evergreen text-mist py-20">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-12">Как нам помочь</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <div
              key={step.id}
              ref={(el) => {
                refs.current[idx] = el;
              }}
              data-index={idx}
              className={`flex flex-col items-center p-6 rounded-xl shadow-md border bg-background/80 
                          transition-all duration-700 ease-out
                          ${
                            visible[idx]
                              ? 'opacity-100 translate-y-0'
                              : 'opacity-0 translate-y-12'
                          }`}
            >
              <div className="mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-primary">
                {step.title}
              </h3>
              <p className="text-primary">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
