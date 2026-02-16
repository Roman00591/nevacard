"use client";

import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Алексей Петров",
    role: "Финансовый директор",
    company: "ТрансЛогистика",
    text: "До NevaCard мы тратили 3 дня в месяц на сверку чеков. Сейчас всё автоматически выгружается в 1С. Экономия времени — колоссальная.",
    rating: 5,
    fleet: "120 автомобилей",
  },
  {
    name: "Марина Соколова",
    role: "Руководитель автопарка",
    company: "СтройСервис Про",
    text: "Подключили 85 карт за один день. Менеджер провёл за руку через всю настройку. Сливы топлива сократились на 90% за первый месяц.",
    rating: 5,
    fleet: "85 автомобилей",
  },
  {
    name: "Дмитрий Волков",
    role: "Владелец",
    company: "Экспресс Доставка",
    text: "Раньше водители заправлялись где попало и за наличные. Теперь полная прозрачность — я вижу каждую транзакцию в телефоне.",
    rating: 5,
    fleet: "45 автомобилей",
  },
];

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-12 sm:py-16 lg:py-20 bg-card/50 border-y border-border"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-3 py-1 text-xs sm:text-sm font-medium text-accent mb-4">
            <Star className="h-3 w-3 fill-current" />
            Отзывы клиентов
          </div>
          <h2 className="font-heading text-xl font-extrabold text-foreground sm:text-3xl lg:text-4xl text-balance leading-tight">
            Нам доверяют 4 200+ компаний
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
            Что говорят наши клиенты о работе с NevaCard.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-xl border border-border bg-background p-5 sm:p-6"
            >
              {/* Quote icon */}
              <Quote className="h-7 w-7 text-primary/10 mb-3" />

              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star
                    key={`star-${t.name}-${j}`}
                    className="h-3.5 w-3.5 fill-accent text-accent"
                  />
                ))}
              </div>

              <blockquote className="text-foreground leading-relaxed mb-6 text-sm">
                {`"${t.text}"`}
              </blockquote>

              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/8 font-heading font-bold text-primary text-xs">
                  {t.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div className="flex-1">
                  <p className="font-heading font-semibold text-xs sm:text-sm text-foreground">
                    {t.name}
                  </p>
                  <p className="text-[10px] sm:text-xs text-muted-foreground">
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
