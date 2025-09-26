'use client';

import { Phone, Mail, MapPin, Send } from 'lucide-react';

export default function ContactUs() {
  return (
    <section
      id="contact"
      className="bg-background/85 text-muted py-20 scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Как с нами связаться
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Левая колонка: карта */}
          <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1998.6081158948277!2d30.31413031591959!3d59.9387321818765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4696311b0c1f1e2f%3A0x89a1e8b1b1c1c3b9!2z0JzQuNGF0L3QtdC90YLRgCDQn9C-0YfQutCw0YLQtdGA0YHQutC40Lkg0YHQutGA0LDRgdC40LvQsCDRg9C7Liwg0YPQuy4sINCc0L7RgdC60LLQsCwg0KDQtdGB0L8u!5e0!3m2!1sru!2sru!4v1674575989354!5m2!1sru!2sru"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
            ></iframe>
          </div>

          {/* Правая колонка: контакты + форма */}
          <div className="flex flex-col justify-between">
            <div className="space-y-4 mb-8">
              <p className="flex items-center gap-3 text-lg">
                <Phone className="text-primary w-6 h-6" />
                <a href="tel:+79998887766" className="hover:underline">
                  +7 (999) 888-77-66
                </a>
              </p>
              <p className="flex items-center gap-3 text-lg">
                <Mail className="text-primary w-6 h-6" />
                <a href="mailto:info@weldpro.ru" className="hover:underline">
                  info@weldpro.ru
                </a>
              </p>
              <p className="flex items-center gap-3 text-lg">
                <MapPin className="text-primary w-6 h-6" />
                Санкт-Петербург, ул. Промышленная, 15
              </p>
              <div className="flex gap-4 mt-4">
                <a
                  href="#"
                  className="text-primary hover:text-secondary transition"
                >
                  VK
                </a>
                <a
                  href="#"
                  className="text-primary hover:text-secondary transition"
                >
                  Telegram
                </a>
                <a
                  href="#"
                  className="text-primary hover:text-secondary transition"
                >
                  WhatsApp
                </a>
              </div>
            </div>

            {/* Форма заявки */}
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Имя"
                className="w-full p-3 rounded-lg border border-foreground/20 bg-background/80"
              />
              <input
                type="tel"
                placeholder="Телефон"
                className="w-full p-3 rounded-lg border border-foreground/20 bg-background/80"
              />
              <textarea
                placeholder="Кратко опишите задачу"
                rows={3}
                className="w-full p-3 rounded-lg border border-foreground/20 bg-background/80"
              />
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-primary cursor-pointer text-muted px-6 py-3 rounded-lg font-semibold hover:bg-secondary transition"
              >
                <Send className="w-5 h-5" /> Отправить заявку
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
