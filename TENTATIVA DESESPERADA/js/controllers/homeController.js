import { homeView } from '../views/homeView.js';

export function homeController() {
  // Inserir o HTML da homeView na página
  document.getElementById('app').innerHTML = homeView();

  // Aguarda o DOM estar pronto
  setTimeout(() => {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
      card.addEventListener('click', () => {
        // Desativa os outros
        cards.forEach(c => {
          if (c !== card) c.classList.remove('flipCard');
        });

        // Ativa ou desativa o clicado
        card.classList.toggle('flipCard');
      });
    });
  }, 0);
}

