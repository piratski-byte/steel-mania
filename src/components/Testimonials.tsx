'use client';

import { useEffect, useRef, useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import person1 from '@/assets/images/person1.jpg';
import person2 from '@/assets/images/person2.jpg';
import person3 from '@/assets/images/person3.jpg';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  text: string;
  image: StaticImageData;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Иван Иванов',
    role: 'Волонтер',
    text: 'Высадка лесов изменила мой взгляд на природу. Рекомендую участвовать всем!',
    image: person1,
  },
  {
    id: 2,
    name: 'Мария Петрова',
    role: 'Эколог',
    text: 'Приятно видеть, как люди объединяются для сохранения лесов.',
    image: person2,
  },
  {
    id: 3,
    name: 'Алексей Смирнов',
    role: 'Волонтер',
    text: 'Каждое дерево важно! Участвовать легко и приятно.',
    image: person3,
  },
];

export default function Testimonials() {
  const refs = useRef<(HTMLDivElement | null)[]>([]);
  const [visible, setVisible] = useState<boolean[]>(
    Array(testimonials.length).fill(false)
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
    <section id="testimonials" className="py-16 bg-mist">
      <div className="max-w-5xl mx-auto px-4 space-y-12">
        {testimonials.map((t, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <div
              key={t.id}
              ref={(el) => {
                refs.current[idx] = el;
              }}
              data-index={idx}
              className={`flex flex-col md:flex-row items-center gap-6 transition-all duration-700 ease-out 
                          ${
                            visible[idx]
                              ? 'opacity-100 translate-y-0'
                              : 'opacity-0 translate-y-12'
                          }
                          ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
            >
              <div className="w-32 h-32 flex-shrink-0 rounded-full overflow-hidden">
                <Image
                  src={t.image}
                  alt={t.name}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="bg-background/80 p-6 rounded-lg shadow-md flex-1">
                <p className="mb-4">{t.text}</p>
                <h4 className="font-bold">{t.name}</h4>
                <span className="text-muted">{t.role}</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
