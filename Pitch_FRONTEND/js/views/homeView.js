export function homeView() {
  return `
    <section class="carousel">
      <div class="carousel-container">
        <div class="slide">
          <img src="./assets/image1.webp" alt="Bem-vindo" />
          <div class="text">
            <h2>Bem-vindo à TLDR</h2>
            <p> Onde até as grandes ideias cabem num simples formulário!</p>
            <p> Seja qual for o teu percurso — génio do código, inventor de garagem ou simplesmente alguém com uma faísca de inspiração — esta página é para ti.
                Aqui podes submeter os teus projetos, ideias ou visões inovadoras, porque acreditamos que todas as contribuições têm valor, independentemente do teu background.</p>
                <p> Obrigado por confiares em nós para dar voz à tua criatividade.</p>
                <p> Agora é contigo — inspira, escreve e partilha. O palco é teu!</p>
          </div>
        </div>
        <div class="slide">
          <img src="./assets/image2.png" alt="Quem somos" />
          <div class="text">
            <h2>Quem somos</h2>
            <p>Somos especialistas em soluções digitais.</p>
          </div>
        </div>
        <div class="slide">
          <img src="./assets/image3.png" alt="O que fazemos" />
          <div class="text">
            <h2>O que fazemos</h2>
            <p>Criamos experiências web incríveis.</p>
            <a href="/webform" data-link class="explore-button">Explorar</a>
          </div>
        </div>
      </div>
    </section>
  `;
}

