'use client';

import heroImage from '@/assets/images/hero-image.jpg';
import { AnimatePresence, motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [showForm, setShowForm] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    setShowForm(false);

    // обновляем URL
    window.history.pushState({}, '', '/');

    // скроллим к секции hero
    const heroSection = document.getElementById('hero');
    if (heroSection) {
      heroSection.scrollIntoView();
    }

    // показываем уведомление
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  useEffect(() => {
    if (!showForm) return;

    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowForm(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showForm]);

  return (
    <section
      id="hero"
      className="relative h-[100vh] flex flex-col items-center justify-center text-center text-background"
    >
      {/* Фон */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={heroImage}
          alt="Сварка металла"
          priority
          className="object-cover brightness-30"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
        />
      </div>

      {/* Контент */}
      <div className="max-w-3xl px-6">
        <AnimatePresence mode="wait">
          {!showForm ? (
            <motion.div
              key="slogan"
              initial={{ y: -200, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -200, opacity: 0 }}
              transition={{
                duration: 0.5,
                ease: [0.8, 0, 0.2, 1],
              }}
              className="space-y-6"
            >
              <h1 className="text-4xl md:text-6xl text-muted font-semibold drop-shadow-md">
                Сварка без компромиссов
              </h1>
              <p className="text-lg md:text-2xl text-muted drop-shadow-md">
                От промышленных конструкций до творческих проектов — прочность и
                качество в каждом шве.
              </p>
              <button
                onClick={() => setShowForm(true)}
                className="bg-primary px-6 py-3 rounded-md font-semibold
                  hover:bg-secondary hover:text-foreground
                  transition-colors duration-250 cursor-pointer"
              >
                Оставить заявку
              </button>
            </motion.div>
          ) : (
            <motion.div
              key="form"
              initial={{ y: 200, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 200, opacity: 0 }}
              transition={{
                duration: 0.5,
                ease: [0.8, 0, 0.2, 1],
              }}
              className="bg-background/80 p-6 rounded-lg shadow-xl space-y-4"
            >
              <h2 className="text-2xl font-semibold text-muted">
                Оставьте заявку
              </h2>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Имя"
                  className="w-full p-3 rounded-lg border border-foreground bg-background/80 text-foreground"
                />
                <input
                  type="tel"
                  placeholder="Телефон"
                  className="w-full p-3 rounded-lg border border-foreground bg-background/80 text-foreground"
                />
                <textarea
                  placeholder="Описание"
                  rows={3}
                  className="w-full p-3 rounded-lg border border-foreground bg-background/80 text-foreground"
                />
                <div className="flex gap-3 justify-center">
                  <button
                    type="submit"
                    className="bg-primary px-6 py-3 rounded-md font-semibold
                      hover:bg-secondary hover:text-foreground
                      transition-colors duration-250 cursor-pointer"
                  >
                    Отправить
                  </button>
                </div>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Уведомление */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed flex gap-2 bottom-4 right-20 bg-secondary text-muted px-6 py-3 rounded-lg shadow-lg font-medium z-100"
          >
            <CheckCircle className="w-5 h-5" />
            Заявка отправлена!
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
