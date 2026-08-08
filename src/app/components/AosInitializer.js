"use client";

import AOS from "aos";
import { useEffect } from "react";

export default function AosInitializer() {
  useEffect(() => {
    AOS.init({
      duration: 850,
      easing: "ease-out-cubic",
      once: true,
      offset: 90,
      delay: 80,
    });

    window.addEventListener("load", AOS.refresh);

    return () => {
      window.removeEventListener("load", AOS.refresh);
    };
  }, []);

  return null;
}
