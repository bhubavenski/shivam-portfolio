export function calculateFixedStateNavbar(nav: HTMLElement, hero: HTMLElement): void {
  const THRESHOLD = 1;

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.intersectionRatio < THRESHOLD) {
        nav.classList.add('fixed');
      } else {
        nav.classList.remove('fixed');
      }
    },
    {
      threshold: [THRESHOLD]
    }
  );

  observer.observe(hero);
}