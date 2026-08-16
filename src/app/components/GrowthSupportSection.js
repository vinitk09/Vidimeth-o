import Image from "next/image";

const supportTiles = [
  {
    title: "Benefits",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    text: "We offer more to your employees while still growing your business.",
  },
  {
    title: "Expansion",
    image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=800&q=80",
    text: "Look for new ways to innovate and bring your company to the next level.",
  },
  {
    title: "Marketing",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    text: "Find advanced marketing strategies to motive business growth.",
  },
  {
    title: "Talent",
    image: "https://images.unsplash.com/photo-1528819622765-d6bcf132f793?auto=format&fit=crop&w=800&q=80",
    text: "Review strategies to recruit top candidates in your industry.",
  },
  {
    title: "Money",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80",
    text: "Learn what financial techniques to focus on during expansion.",
  },
  {
    title: "Safeguards",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
    text: "Reduce your risk and protect your growing business.",
  },
];

export default function GrowthSupportSection() {
  return (
    <section className="bg-white px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
      <div
        className="mx-auto w-full max-w-7xl overflow-hidden rounded-lg bg-[#02060d] text-white shadow-[0_28px_80px_rgba(2,6,13,0.24)]"
        data-aos="fade-up"
      >
        <div className="grid gap-10 px-6 py-10 sm:px-8 lg:grid-cols-[0.36fr_0.64fr] lg:px-14 lg:py-14">
          <div className="flex flex-col justify-center">
            <p className="mb-3 text-sm font-normal uppercase tracking-[0.18em] text-[#39b76f]">
              Business Growth
            </p>
            <h2 className="max-w-sm text-[28px] font-bold leading-[1.28] sm:text-[32px]">
              We help your Business / Grow up your business
            </h2>
            <p className="mt-6 max-w-lg text-justify text-[15px] font-normal leading-relaxed text-white/85">
              Vidi Meth Digital Services supports businesses with practical
              growth planning, marketing direction, expansion ideas, talent
              strategy, financial focus, and safeguards that keep progress
              steady. Our goal is to empower organizations with innovative
              tools, strategic guidance, cutting-edge digital marketing, direct
              advertising, and scalable management solutions designed for
              sustained commercial success, long-term brand authority, risk
              mitigation, and seamless operational excellence across
              competitive Indian and global markets.
            </p>

          </div>

          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {supportTiles.map((tile) => (
              <article
                key={tile.title}
                className="group relative min-h-56 overflow-hidden rounded-md border border-white/10 bg-[#0a1220]"
                data-aos="zoom-in"
              >
                <Image
                  src={tile.image}
                  alt={tile.title}
                  fill
                  unoptimized
                  sizes="(min-width: 1280px) 20vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover opacity-58 transition duration-500 group-hover:scale-105 group-hover:opacity-75"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#07143a]/78 via-[#07143a]/50 to-black/82" />
                <div className="relative z-10 flex h-full min-h-56 flex-col justify-between p-6">
                  <h3 className="text-[22px] font-bold leading-tight text-white">
                    {tile.title}
                  </h3>
                  <p className="text-[15px] font-normal leading-[1.58] text-white/82">
                    {tile.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
