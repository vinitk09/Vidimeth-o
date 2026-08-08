import Image from "next/image";

const footerLinks = [
  { label: "About", href: "https://vidimeth.com/about/" },
  { label: "Contact", href: "https://vidimeth.com/contact/" },
  { label: "Our Services", href: "https://vidimeth.com/our-services/" },
  { label: "Career", href: "https://vidimeth.com/career/" },
];

const quickLinks = [
  { label: "www.vmacademys.com", href: "https://www.vmacademys.com/" },
  { label: "www.villagemycity.com", href: "https://www.villagemycity.com/" },
  { label: "www.gojobin.com", href: "https://www.gojobin.com/" },
  { label: "www.loanvidhi.com", href: "https://www.loanvidhi.com/" },
  { label: "www.vmhomemart.com", href: "https://www.vmhomemart.com/" },
];

const legalLinks = [
  { label: "Grievance", href: "https://vidimeth.com/grievance/" },
  { label: "Privacy Policy", href: "https://vidimeth.com/privacy-policy/" },
  { label: "Terms of Use", href: "https://vidimeth.com/terms-of-use/" },
  { label: "Disclaimer", href: "https://vidimeth.com/disclaimer/" },
];

function FooterHeading({ children }) {
  return (
    <div className="mb-4">
      <h2 className="text-[15px] font-semibold uppercase tracking-[0.08em] text-white">
        {children}
      </h2>
      <span className="mt-2 block h-px w-12 bg-white/45" />
    </div>
  );
}

function Icon({ type }) {
  const paths = {
    pin: "M12 21s6.5-5.9 6.5-11.2A6.5 6.5 0 0 0 5.5 9.8C5.5 15.1 12 21 12 21Z M12 12.1a2.3 2.3 0 1 0 0-4.6 2.3 2.3 0 0 0 0 4.6Z",
    mail: "M4.5 6.5h15v11h-15v-11Z M5.2 7.4 12 12.2l6.8-4.8",
    clock:
      "M12 20.25a8.25 8.25 0 1 0 0-16.5 8.25 8.25 0 0 0 0 16.5Z M12 7.5V12l3 1.8",
    arrow: "m9 6 6 6-6 6",
    facebook:
      "M14 8.2h2.1V4.7c-.36-.05-1.6-.16-3.05-.16-3.02 0-5.08 1.84-5.08 5.22v2.94H4.6v3.9h3.37v9.86h4.13V16.6h3.23l.51-3.9H12.1v-2.55c0-1.13.31-1.95 1.9-1.95Z",
    twitter:
      "M21 7.7c-.65.3-1.35.48-2.08.57.75-.45 1.32-1.16 1.6-2.02-.7.42-1.48.72-2.3.88A3.58 3.58 0 0 0 15.6 6a3.6 3.6 0 0 0-3.58 3.58c0 .28.03.56.1.82A10.18 10.18 0 0 1 4.73 6.65a3.55 3.55 0 0 0-.48 1.8c0 1.24.62 2.33 1.58 2.97-.58-.02-1.13-.18-1.6-.45v.05a3.59 3.59 0 0 0 2.88 3.52c-.3.08-.62.13-.95.13-.23 0-.46-.02-.68-.07a3.6 3.6 0 0 0 3.35 2.48A7.22 7.22 0 0 1 4.38 18.6c-.29 0-.58-.02-.86-.05A10.18 10.18 0 0 0 9.02 20.15c6.6 0 10.22-5.47 10.22-10.22v-.46A7.27 7.27 0 0 0 21 7.7Z",
    linkedin:
      "M6.6 9.3H3.25v10.45H6.6V9.3ZM4.92 4.25a1.94 1.94 0 1 0 0 3.88 1.94 1.94 0 0 0 0-3.88ZM20.75 13.98c0-3.15-1.68-4.9-3.93-4.9-1.8 0-2.6.98-3.05 1.68V9.3h-3.32c.04.95 0 10.45 0 10.45h3.32v-5.84c0-.31.03-.62.12-.84.27-.63.88-1.28 1.9-1.28 1.34 0 1.88.97 1.88 2.54v5.42h3.08v-5.77Z",
  };

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d={paths[type]} />
    </svg>
  );
}

function FooterList({ links }) {
  return (
    <ul className="space-y-0.5">
      {links.map((link) => (
        <li key={link.href}>
          <a
            href={link.href}
            className="group flex items-center gap-1.5 border-b border-white/10 py-1.5 text-[15px] font-normal text-white/78 transition hover:text-white"
          >
            <span className="flex h-5 w-5 shrink-0 items-center justify-center text-white/72 transition group-hover:translate-x-0.5 group-hover:text-white [&_svg]:h-4 [&_svg]:w-4 [&_svg]:fill-none [&_svg]:stroke-current [&_svg]:stroke-[2] [&_svg]:stroke-linecap-round [&_svg]:stroke-linejoin-round">
              <Icon type="arrow" />
            </span>
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#05070c] text-white">
      <div className="border-b border-white/10 px-5 py-10 sm:px-8 lg:px-10 lg:py-10">
        <div className="mx-auto grid w-full max-w-7xl gap-8 lg:grid-cols-[1.15fr_0.8fr_1fr]">
          <div data-aos="fade-up">
            <div className="mb-5 flex items-center gap-4">
              <Image
                src="/vidimethlogo1.png"
                alt="Vidi Meth Digital Services"
                width={72}
                height={72}
                className="h-16 w-16 rounded-full bg-white object-cover ring-2 ring-white/15"
              />
              <div>
                <p className="text-[18px] font-semibold leading-tight">
                  Vidi Meth Digital Services
                </p>
                <p className="mt-1 text-sm font-normal text-white/58">
                  OPC Private Limited
                </p>
              </div>
            </div>

            <FooterHeading>Registered Office Address</FooterHeading>

            <div className="space-y-2 text-[15px] font-normal leading-[1.55] text-white/78">
              <p className="flex gap-3">
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center text-white/78 [&_svg]:h-5 [&_svg]:w-5 [&_svg]:fill-none [&_svg]:stroke-current [&_svg]:stroke-[1.8] [&_svg]:stroke-linecap-round [&_svg]:stroke-linejoin-round">
                  <Icon type="pin" />
                </span>
                <span>
                  147, Aambagan Road, Near Bengal Club, Sakchi, Jamshedpur -
                  831001, Jharkhand, INDIA
                </span>
              </p>

              <p>CIN No: U52100JH2017OPC009718</p>
              <p>GSTIN: 20AAFCV8003N1ZC</p>
              <p>PAN No.: AAFCV8003N</p>

              <a
                href="mailto:info@vidimeth.com"
                className="flex w-fit items-center gap-3 transition hover:text-white"
              >
                <span className="flex h-5 w-5 shrink-0 items-center justify-center text-white/78 [&_svg]:h-5 [&_svg]:w-5 [&_svg]:fill-none [&_svg]:stroke-current [&_svg]:stroke-[1.8] [&_svg]:stroke-linecap-round [&_svg]:stroke-linejoin-round">
                  <Icon type="mail" />
                </span>
                info@vidimeth.com
              </a>

              <p className="flex items-center gap-3">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center text-white/78 [&_svg]:h-5 [&_svg]:w-5 [&_svg]:fill-none [&_svg]:stroke-current [&_svg]:stroke-[1.8] [&_svg]:stroke-linecap-round [&_svg]:stroke-linejoin-round">
                  <Icon type="clock" />
                </span>
                Mon-Sat: 10:00 AM - 6:00 PM
              </p>
            </div>

            <div className="mt-5 flex gap-3">
              {["facebook", "twitter", "linkedin"].map((type) => (
                <a
                  key={type}
                  href="https://vidimeth.com/"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-white/9 text-white transition hover:bg-[#0077c8] hover:shadow-[0_12px_26px_rgba(0,119,200,0.28)] [&_svg]:h-5 [&_svg]:w-5 [&_svg]:fill-current"
                  aria-label={`Vidi Meth ${type}`}
                >
                  <Icon type={type} />
                </a>
              ))}
            </div>
          </div>

          <div data-aos="fade-up" data-aos-delay="120">
            <FooterHeading>Links</FooterHeading>
            <FooterList links={footerLinks} />
          </div>

          <div data-aos="fade-up" data-aos-delay="220">
            <FooterHeading>Quick Links</FooterHeading>
            <FooterList links={quickLinks} />
          </div>
        </div>
      </div>

      <div className="bg-[#10141b] px-5 py-2.5 sm:px-8 lg:px-10">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-2 text-sm font-normal leading-5 text-white/70 lg:flex-row lg:items-center lg:justify-between">
          <p>© 2024 Vidi Meth Digital Services (OPC) Private Limited.</p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {legalLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
