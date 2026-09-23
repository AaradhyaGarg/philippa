document.addEventListener("DOMContentLoaded", () => {
  const typedTarget = document.getElementById("typedText");
  const utcTimeEl = document.getElementById("utcTime");
  const revealEls = document.querySelectorAll("[data-reveal]");
  const nav = document.querySelector(".site-nav");
  const menuToggle = document.querySelector(".menu-toggle");

  if (typedTarget && typeof Typed !== "undefined") {
    new Typed(typedTarget, {
      strings: [
        "geospatial intelligence",
        "technical strategy",
        "creative storytelling",
        "community leadership",
        "human-centered innovation"
      ],
      typeSpeed: 42,
      backSpeed: 22,
      backDelay: 1400,
      startDelay: 350,
      loop: true,
      smartBackspace: true,
      showCursor: true,
      cursorChar: "|",
    });
  }

  const updateUtc = () => {
    const now = new Date();
    const utc = now.toISOString().substring(11, 19);
    if (utcTimeEl) utcTimeEl.textContent = `[${utc} UTC]`;
  };

  updateUtc();
  setInterval(updateUtc, 1000);

  if (typeof gsap !== "undefined") {
    gsap.fromTo(
      revealEls,
      { opacity: 0, y: 18 },
      { opacity: 1, y: 0, duration: 0.9, stagger: 0.08, ease: "power2.out", delay: 0.08 }
    );
  } else {
    revealEls.forEach((el) => {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    });
  }

  if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("is-open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("is-open");
        menuToggle.setAttribute("aria-expanded", "false");
      });
    });
  }
});
