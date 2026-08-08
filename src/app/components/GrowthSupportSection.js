import Image from "next/image";

const supportTiles = [
  {
    title: "Benefits",
    image: "/b5.png",
    text: "Offer more to your employees while continuing to grow your business.",
  },
  {
    title: "Expansion",
    image: "/b2.png",
    text: "Find new ways to innovate and take your company to the next level.",
  },
  {
    title: "Marketing",
    image: "/b4.png",
    text: "Use advanced marketing strategies to support steady business growth.",
  },
  {
    title: "Talent",
    image: "/b1.jpeg",
    text: "Review strategies to recruit strong candidates for your industry.",
  },
  {
    title: "Money",
    image: "/b6.png",
    text: "Focus on financial techniques that support confident expansion.",
  },
  {
    title: "Safeguards",
    image: "/b3.jpeg",
    text: "Reduce risk and protect the progress of your growing business.",
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
            <h2 className="max-w-sm text-[28px] font-medium leading-[1.28] sm:text-[32px]">
              We help your Business grow with clarity.
            </h2>
            <p className="mt-6 max-w-md text-[17px] font-normal leading-[1.7] text-white/78">
              Vidi Meth Digital Services supports businesses with practical
              growth planning, marketing direction, expansion ideas, talent
              strategy, financial focus, and safeguards that keep progress
              steady.
            </p>
            <a
              href="https://vidimeth.com/contact/"
              className="mt-9 inline-flex w-fit items-center rounded-full border border-white/70 px-7 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-white transition hover:border-[#39b76f] hover:bg-[#39b76f]"
            >
              See More
              <span className="ml-3 text-lg leading-none">-</span>
            </a>
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
                  sizes="(min-width: 1280px) 20vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover opacity-58 transition duration-500 group-hover:scale-105 group-hover:opacity-75"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#07143a]/78 via-[#07143a]/50 to-black/82" />
                <div className="relative z-10 flex h-full min-h-56 flex-col justify-between p-6">
                  <h3 className="text-[22px] font-semibold leading-tight text-white">
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
