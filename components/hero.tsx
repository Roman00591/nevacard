"use client";

import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ShieldCheck,
  MapPin,
  CreditCard,
  TrendingDown,
  Zap,
} from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative pt-20 pb-10 sm:pt-24 sm:pb-12 lg:pt-32 lg:pb-20">{/* Simple background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/5 to-transparent" />

      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Copy */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs sm:text-sm text-muted-foreground mb-6">
              <span className="inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              Покрытие 25 000+ АЗС по всей России
            </div>

            <h1 className="font-heading text-2xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance leading-tight">
              Топливные расходы <span className="text-primary">под контролем</span>
            </h1>

            <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl">
              NevaCard — корпоративные топливные карты для компаний с автопарком.
              Автоматизируйте учёт ГСМ, сократите расходы до 15% и забудьте
              о бумажных чеках навсегда.
            </p>

            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3">
              <Button size="lg" className="rounded-lg text-sm sm:text-base px-6" asChild>
                <Link href="#contact">
                  Получить карты бесплатно
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="rounded-lg text-sm sm:text-base px-6" asChild>
                <Link href="#how-it-works">Как это работает</Link>
              </Button>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-4 text-xs sm:text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Zap className="h-4 w-4 text-accent" />
                Подключение за 1 день
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-emerald-500" />
                Без скрытых комиссий
              </span>
            </div>
          </div>

          {/* Right: Visual Card */}
          <div className="relative flex items-center justify-center lg:justify-end mt-8 lg:mt-0">
            <div className="relative w-full max-w-sm mx-auto lg:mx-0">
              {/* Main card */}
              <div className="relative rounded-2xl bg-foreground p-5 sm:p-6 text-primary-foreground shadow-lg">
                <div className="flex items-center justify-between mb-6">
                  <span className="font-heading text-sm sm:text-base font-bold">NevaCard</span>
                  <CreditCard className="h-5 w-5 sm:h-6 sm:w-6 opacity-40" />
                </div>

                {/* Chip */}
                <div className="mb-5 w-9 h-6 sm:w-10 sm:h-7 rounded bg-gradient-to-br from-amber-300/60 to-amber-500/40" />

                <div className="mb-5 flex gap-2 sm:gap-3 text-sm sm:text-base tracking-[0.2em] font-mono opacity-70">
                  <span>4276</span>
                  <span>****</span>
                  <span>****</span>
                  <span>8901</span>
                </div>
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-[10px] uppercase tracking-wider opacity-40 mb-1">
                      {"Владелец"}
                    </p>
                    <p className="text-xs sm:text-sm font-medium opacity-80">
                      {'ООО "ЛОГИСТИКА+"'}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] uppercase tracking-wider opacity-40 mb-1">
                      {"Лимит/день"}
                    </p>
                    <p className="text-xs sm:text-sm font-medium opacity-80">
                      {"15 000 ₽"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
