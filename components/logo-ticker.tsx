"use client";

const partners = [
  "Лукойл",
  "Газпромнефть",
  "Роснефть",
  "Татнефть",
  "Башнефть",
  "Сургутнефтегаз",
  "Neste",
  "ЕКА",
  "Трасса",
  "Фаэтон",
];

export function LogoTicker() {
  return (
    <section className="border-y border-border bg-card/30 py-5 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <p className="text-center text-[10px] sm:text-xs font-medium uppercase tracking-wide text-muted-foreground mb-4">
          Работаем с крупнейшими сетями АЗС России
        </p>
      </div>
      <div className="flex animate-scroll">
        {[...partners, ...partners].map((name, i) => (
          <div
            key={`${name}-${i}`}
            className="flex-shrink-0 mx-6 flex items-center justify-center"
          >
            <span className="text-sm sm:text-base font-heading font-bold text-muted-foreground/40 whitespace-nowrap">
              {name}
            </span>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
          will-change: transform;
        }
      `}</style>
    </section>
  );
}
