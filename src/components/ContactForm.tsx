'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 max-w-xl mx-auto px-4">
      {submitted ? (
        <p className="text-center text-mist font-medium">
          🌱 Спасибо за ваше сообщение! Мы скоро свяжемся с вами.
        </p>
      ) : (
        <>
          <h2 className="text-3xl font-bold text-center mb-6 text-[var(--foreground)]">
            Свяжитесь с нами
          </h2>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 bg-background/80 p-6 rounded-2xl shadow-md"
          >
            <input
              type="text"
              name="name"
              placeholder="Ваше имя"
              value={formData.name}
              onChange={handleChange}
              required
              className="border border-[var(--muted)] p-3 rounded-lg bg-[var(--background)] text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
            />
            <input
              type="email"
              name="email"
              placeholder="Ваш email"
              value={formData.email}
              onChange={handleChange}
              required
              className="border border-[var(--muted)] p-3 rounded-lg bg-[var(--background)] text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
            />
            <textarea
              name="message"
              placeholder="Ваше сообщение"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="border border-[var(--muted)] p-3 rounded-lg bg-[var(--background)] text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
            />
            <button
              type="submit"
              className="bg-[var(--primary)] text-[var(--foreground)] p-3 rounded-lg font-semibold hover:bg-[var(--background2)] cursor-pointer transition"
            >
              Отправить
            </button>
          </form>
        </>
      )}
    </section>
  );
}
