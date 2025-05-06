document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();

      const targetId = link.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const targetPosition = targetElement.offsetTop;
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        const duration = 1000;
        let startTimestamp = null;

        const easeInOutQuad = (t) =>
          t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

        const step = (timestamp) => {
          if (!startTimestamp) startTimestamp = timestamp;
          const elapsed = timestamp - startTimestamp;
          const progress = Math.min(elapsed / duration, 1);
          const easing = easeInOutQuad(progress);

          window.scrollTo(0, startPosition + distance * easing);

          if (elapsed < duration) {
            requestAnimationFrame(step);
          }
        };

        requestAnimationFrame(step);
      }
    });
  });
});
async function setElementStyles(el, styles) {
  for (const [key, value] of Object.entries(styles)) {
    el.style[key] = value;
  }
}
const mediaQueries = `
@media (max-width: 850px) {
  nav.nav_head {
    padding-inline: 30px;
    padding-block: 20px;
    
  }
  header {
    flex-wrap: wrap;
    padding: 0px; 
  }
}`;
const style = document.createElement('style');
style.textContent = mediaQueries;
document.head.appendChild(style);

const data = { success: true };