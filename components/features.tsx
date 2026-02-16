"use client";

import {
  BarChart3,
  ShieldCheck,
  Zap,
  MapPin,
  FileText,
  Users,
} from "lucide-react";

const features = [
  {
    icon: BarChart3,
    title: "Полный контроль расходов",
    description:
      "Отслеживайте каждую заправку в реальном времени. Устанавливайте лимиты по картам, водителям и транспортным средствам.",
    color: "bg-primary/8 text-primary",
    hoverColor: "group-hover:bg-primary group-hover:text-primary-foreground",
  },
  {
    icon: ShieldCheck,
    title: "Защита от махинаций",
    description:
      "Интеллектуальная система выявляет подозрительные транзакции и мгновенно уведомляет вас. Сливы топлива уходят в прошлое.",
    color: "bg-emerald-500/8 text-emerald-600",
    hoverColor: "group-hover:bg-emerald-500 group-hover:text-card",
  },
  {
    icon: Zap,
    title: "Автоматизация отчётности",
    description:
      "Забудьте о ручном сборе чеков. Автоматическая выгрузка в 1С, детализированные отчёты и электронные акты.",
    color: "bg-accent/8 text-accent",
    hoverColor: "group-hover:bg-accent group-hover:text-accent-foreground",
  },
  {
    icon: MapPin,
    title: "25 000+ АЗС по России",
    description:
      "Работаем со всеми крупными сетями: Лукойл, Газпромнефть, Роснефть, Shell, BP и независимыми АЗС.",
    color: "bg-primary/8 text-primary",
    hoverColor: "group-hover:bg-primary group-hover:text-primary-foreground",
  },
  {
    icon: FileText,
    title: "Прозрачное ценообразование",
    description:
      "Никаких скрытых комиссий и наценок. Вы платите фиксированную стоимость за обслуживание — и видите реальные цены на топливо.",
    color: "bg-emerald-500/8 text-emerald-600",
    hoverColor: "group-hover:bg-emerald-500 group-hover:text-card",
  },
  {
    icon: Users,
    title: "Персональный менеджер",
    description:
      "Выделенный менеджер для вашей компании. Помощь с подключением, настройкой и решением любых вопросов.",
    color: "bg-accent/8 text-accent",
    hoverColor: "group-hover:bg-accent group-hover:text-accent-foreground",
  },
];

export function Features() {
  return (
    <section id="features" className="py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs sm:text-sm font-medium text-primary mb-4">
            <Zap className="h-3 w-3" />
            Возможности
          </div>
          <h2 className="font-heading text-xl font-extrabold text-foreground sm:text-3xl lg:text-4xl text-balance leading-tight">
            Всё, что нужно для контроля расходов на топливо
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
            Инструмент для полного контроля топливных расходов от первого литра до годового отчёта.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-xl border border-border bg-card p-5 sm:p-6"
            >
              <div
                className={`flex h-11 w-11 items-center justify-center rounded-xl ${feature.color} mb-4`}
              >
                <feature.icon className="h-5 w-5" />
              </div>
              <h3 className="font-heading text-base sm:text-lg font-bold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
