"use client";

import { useEffect } from "react";

export function ServiceWorkerRegistration() {
  useEffect(() => {
    if ("serviceWorker" in navigator && process.env.NODE_ENV === "production") {
      const register = () => {
        navigator.serviceWorker.register("/sw.js", { scope: "/" }).catch(() => {
          // La web debe seguir funcionando aunque el navegador bloquee la PWA.
        });
      };

      if (document.readyState === "complete") {
        register();
      } else {
        window.addEventListener("load", register, { once: true });
      }
    }
  }, []);

  return null;
}
