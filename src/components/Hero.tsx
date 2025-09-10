'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import heroImage from '@/assets/images/hero-image.jpg';

export default function Hero() {
  const [showForm, setShowForm] = useState(false);

  return (
    <section
      id="hero"
      className="relative h-[85vh] flex flex-col items-center justify-center text-center text-background"
    >
      {/* Фон */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={heroImage}
          alt="Сварка металла"
          priority
          className="object-cover brightness-70"
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
              initial={{ y: 0, opacity: 1 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -200, opacity: 0 }}
              transition={{
                duration: 0.6,
                ease: [0.8, 0, 0.2, 1], // плотная ease
              }}
              className="space-y-6"
            >
              <h1 className="text-4xl md:text-6xl font-bold drop-shadow-md">
                Сварка, которая соединяет будущее
              </h1>
              <p className="text-lg md:text-2xl text-mist drop-shadow-md">
                От промышленных конструкций до творческих проектов — прочность и
                качество в каждом шве.
              </p>
              <button
                onClick={() => setShowForm(true)}
                className="bg-primary px-6 py-3 rounded-xl font-semibold 
                  hover:bg-mist hover:text-pine
                  transition-colors duration-250"
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
                duration: 0.6,
                ease: [0.8, 0, 0.2, 1],
              }}
              className="bg-background/80 p-6 rounded-2xl shadow-xl space-y-4"
            >
              <h2 className="text-2xl font-semibold">Оставьте заявку</h2>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Имя"
                  className="w-full p-3 rounded-xl border bg-background/80 text-foreground"
                />
                <input
                  type="tel"
                  placeholder="Телефон"
                  className="w-full p-3 rounded-xl border bg-background/80 text-foreground"
                />
                <textarea
                  placeholder="Описание"
                  rows={3}
                  className="w-full p-3 rounded-xl border bg-background/80 text-foreground"
                />
                <div className="flex gap-3 justify-center">
                  <button
                    type="submit"
                    className="bg-primary px-6 py-3 rounded-xl font-semibold 
                      hover:bg-mist hover:text-pine
                      transition-colors duration-250"
                  >
                    Отправить
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="bg-secondary px-6 py-3 rounded-xl font-semibold 
                      hover:bg-mist hover:text-foreground
                      transition-colors duration-250"
                  >
                    Назад
                  </button>
                </div>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
