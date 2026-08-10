"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { targetNumber: 215, suffix: "+", label: "Happy Clients" },
  { targetNumber: 582, suffix: "", label: "Projects Done" },
  { targetNumber: 70, suffix: "+", label: "Awards Won" },
  { targetNumber: 25, suffix: "+", label: "Experience Years" },
];

function CounterItem({ targetNumber, suffix, label }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const itemRef = useRef(null);

  useEffect(() => {
    const el = itemRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    let start = 0;
    const duration = 2000;
    const steps = 50;
    const increment = targetNumber / steps;
    const stepTime = duration / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= targetNumber) {
        setCount(targetNumber);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [hasAnimated, targetNumber]);

  return (
    <article
      ref={itemRef}
      className="rounded-lg border border-white/10 bg-white/8 p-7 text-center transition-all duration-300 hover:border-[#0077c8]/40 hover:bg-white/12"
      data-aos="fade-up"
    >
      <p className="text-[40px] font-bold leading-none text-white sm:text-[48px]">
        {count}
        {suffix}
      </p>
      <h3 className="mt-3 text-[16px] font-medium text-white/80">
        {label}
      </h3>
    </article>
  );
}

export default function StatsCounterSection() {
  return (
    <section className="bg-[#071326] px-5 py-14 text-white sm:px-8 lg:px-10">
      <div className="mx-auto grid w-full max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <CounterItem
            key={stat.label}
            targetNumber={stat.targetNumber}
            suffix={stat.suffix}
            label={stat.label}
          />
        ))}
      </div>
    </section>
  );
}
