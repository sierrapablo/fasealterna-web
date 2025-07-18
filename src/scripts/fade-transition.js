function fadeOut(overlay) {
  overlay.classList.replace("opacity-100", "opacity-0");
}

function fadeIn(overlay) {
  overlay.classList.replace("opacity-0", "opacity-100");
}

function setupFadeTransition() {
  const overlay = document.getElementById("fade-overlay");
  if (!overlay) return;

  // Al cargar la página, ocultar el overlay
  fadeOut(overlay);

  // Detectar restauración desde bfcache
  window.addEventListener("pageshow", (event) => {
    if (event.persisted) {
      fadeOut(overlay);
    }
  });

  // Interceptar clicks en links internos una sola vez
  document.body.addEventListener("click", (e) => {
    const target = e.target;
    if (!(target instanceof HTMLElement)) return;

    const link = target.closest("a");
    if (
      link instanceof HTMLAnchorElement &&
      link.href &&
      link.target !== "_blank" &&
      link.href.startsWith(window.location.origin)
    ) {
      e.preventDefault();

      fadeIn(overlay);

      setTimeout(() => {
        window.location.href = link.href;
      }, 800);
    }
  });
}

window.addEventListener("DOMContentLoaded", setupFadeTransition);
