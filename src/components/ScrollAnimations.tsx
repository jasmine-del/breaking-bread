"use client";

import { useEffect } from "react";

export function ScrollAnimations() {
  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Apply fade-up to all section headings and major blocks
    const selectors = [
      "section h2",
      "section .prose",
      "section .grid > div",
      "section blockquote",
    ];

    selectors.forEach((selector) => {
      document.querySelectorAll(selector).forEach((el) => {
        el.classList.add("fade-up");
        observer.observe(el);
      });
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
