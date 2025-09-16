'use client';

import heroImage from '@/assets/images/hero-image.jpg';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowDown, CheckCircle } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [showForm, setShowForm] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    setShowForm(false);
    window.history.pushState({}, '', '/');

    const heroSection = document.getElementById('hero');
    if (heroSection) heroSection.scrollIntoView();

    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  useEffect(() => {
    setScrollY(window.scrollY);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!showForm) return;
    const handleScroll = () => {
      setScrollY(window.scrollY);
      if (window.scrollY > 40) setShowForm(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showForm]);

  const opacity = Math.max(0, 1 - scrollY / 400);

  const scrollToServices = () => {
    const el = document.getElementById('services');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

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

      <div
        className={`group fixed z-100 right-[3rem] bottom-[2rem] w-14 h-14 bg-secondary animate-bounce
        text-muted  px-[0.75rem] flex justify-start items-center rounded-full hover:bg-primary cursor-pointer
        gap-[1rem] overflow-hidden hover:w-40 transition-all duration-300 whitespace-nowrap
        hover:animate-none [animation-duration:1.5s] ${
          opacity === 0
            ? 'invisible pointer-events-none'
            : 'visible pointer-events-auto'
        }`}
        onClick={scrollToServices}
        style={{ opacity }}
      >
        <ArrowDown className="w-8 h-8 shrink-0" />
        <span className="">К услугам</span>
      </div>

      {/* <motion.button
        onClick={scrollToServices}
        onMouseEnter={() => setIsArrowOpen(true)}
        onMouseLeave={() => setIsArrowOpen(false)}
        initial={{ opacity: 1 }}
        animate={{ opacity }}
        transition={{ duration: 0.2 }}
        className="group fixed bottom-6 right-12 flex items-center
             gap-[0.75rem] hover:pr-[1rem] pr-3 py-3 rounded-full bg-background/85
             text-muted shadow-lg hover:bg-primary hover:text-muted
             transition-all duration-300 cursor-pointer overflow-hidden"
      >
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [-4, 4, -4] }}
          transition={{
            duration: 1.25,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="pl-3"
        >
          <ArrowDown className="w-6 h-6 shrink-0" />
        </motion.div>

        <motion.span
          initial={{ opacity: 0, x: 10 }}
          whileHover={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="ml-2 whitespace-nowrap"
        >
          К услугам
        </motion.span>
      </motion.button> */}

      {/* Уведомление */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed flex gap-2 bottom-4 right-28 bg-secondary text-muted px-6 py-3 rounded-lg shadow-lg font-medium z-100"
          >
            <CheckCircle className="w-5 h-5" />
            Заявка отправлена!
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
