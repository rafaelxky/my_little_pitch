import { homeView } from '../views/homeView.js';

export function homeController() {
  document.getElementById('app').innerHTML = homeView();

  //setInterval(changeSlide, 5000);

  // Slide click - mostrar info (exemplo básico)
  slides.forEach((slide, index) => {
    slide.addEventListener("click", () => {
      const existing = document.querySelector(".slide-info");
      if (existing) existing.remove();

      const info = document.createElement("div");
      info.classList.add("slide-info");
      info.innerHTML = `<p>Informação extra sobre o slide ${index + 1}</p>`;
      document.getElementById("app").appendChild(info);
    });
  });

  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
      card.classList.toggle('flipped');
    });
  });
}

