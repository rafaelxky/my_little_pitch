export function homeView() {
  return `
    <section class="carousel">
      <!-- Container de Cards -->
      <div class="cards-container">
        <div class="card" id="card1">
          <div class="card-inner">
            <div class="card-front">
              <h3>Título Card 1</h3>
            </div>
            <div class="card-back">
              <p>Informação do Card 1: Aqui vão os detalhes sobre este card.</p>
            </div>
          </div>
        </div>

        <div class="card" id="card2">
          <div class="card-inner">
            <div class="card-front">
              <h3>Título Card 2</h3>
            </div>
            <div class="card-back">
              <p>Informação do Card 2: Aqui vão os detalhes sobre este card.</p>
            </div>
          </div>
        </div>

        <div class="card" id="card3">
          <div class="card-inner">
            <div class="card-front">
              <h3>Título Card 3</h3>
            </div>
            <div class="card-back">
              <p>Informação do Card 3: Aqui vão os detalhes sobre este card.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
