import React, { useEffect, useState } from "react";

const FadeTransition: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const overlay = document.getElementById("fade-overlay");

    if (!overlay) return;

    function fadeOut() {
      setVisible(false);
    }

    function fadeIn() {
      setVisible(true);
    }

    // Al cargar la página o volver desde bfcache
    function handlePageShow(event: PageTransitionEvent) {
      if (event.persisted) {
        fadeOut();
      } else {
        fadeOut();
      }
    }

    window.addEventListener("pageshow", handlePageShow);

    // Escuchar clicks para hacer fadeIn antes de navegar
    function handleClick(e: MouseEvent) {
      const target = e.target as HTMLElement;
      if (!target) return;

      const link = target.closest("a") as HTMLAnchorElement | null;

      if (
        link &&
        link.href &&
        link.target !== "_blank" &&
        link.href.startsWith(window.location.origin)
      ) {
        e.preventDefault();
        fadeIn();

        setTimeout(() => {
          window.location.href = link.href;
        }, 800);
      }
    }

    document.body.addEventListener("click", handleClick);

    // Por defecto, hacemos fadeOut para que el overlay no bloquee
    fadeOut();

    return () => {
      window.removeEventListener("pageshow", handlePageShow);
      document.body.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div
      id="fade-overlay"
      className={`fixed inset-0 bg-black transition-opacity duration-700 z-50 pointer-events-none ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    />
  );
};

export default FadeTransition;
