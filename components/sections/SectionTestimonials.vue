<template>
  <section id="depoimentos">
    <h2>O que meus pacientes dizem</h2>
    <p class="section-subtitle">
      Opiniões reais de pacientes que confiaram em nosso atendimento.
    </p>

    <div class="testimonials-grid">
      <div class="testimonial-card">
        <p class="testimonial-text">
          "A consulta foi maravilhosa, e buscar ajuda me fez enxergar um futuro
          melhor. O espaço que foi me dado para poder falar sobre meus tramas e
          a atenção, com certeza vai me auxiliar para iniciar esse processo.
          Obrigada Doutor!"
        </p>
        <div class="testimonial-author">
          <span class="author-name">Beatriz</span>
          <span class="author-source">Via Doctoralia</span>
        </div>
      </div>

      <div class="testimonial-card">
        <p class="testimonial-text">
          "Dr. Vinicius Sanches, é um médico de excelência, que possui um grande
          conhecimento. Um profissional amoroso, que se preocupa realmente com
          os seus pacientes!! Muito obrigada DR. o senhor é excepcional."
        </p>
        <div class="testimonial-author">
          <span class="author-name">Izabella Souza</span>
          <span class="author-source">Via Doctoralia</span>
        </div>
      </div>

      <div class="testimonial-card">
        <p class="testimonial-text">
          "Excelente profissional, me atendeu com prontidão quando mais
          precisei."
        </p>
        <div class="testimonial-author">
          <span class="author-name"
            >Paulo Vinícius C. M. de Souza</span
          >
          <span class="author-source">Via Doctoralia</span>
        </div>
      </div>

      <div class="testimonial-card">
        <p class="testimonial-text">
          "Profissional excelente, atencioso, nunca tinha realizado uma consulta
          on-line e superou minhas expectativas, parabéns ótimo professional
          recomendo!"
        </p>
        <div class="testimonial-author">
          <span class="author-name">Fabricio Marques</span>
          <span class="author-source">Via Doctoralia</span>
        </div>
      </div>

      <div class="testimonial-card">
        <p class="testimonial-text">
          "Médico excelente. Soube me ouvir sem pressa, fez uma anamnese bem
          detalhada, me deixou a vontade para falar sobre como eu me sentia.
          Super recomendo. Médico muito humano."
        </p>
        <div class="testimonial-author">
          <span class="author-name">Ana Paula Araujo</span>
          <span class="author-source">Via Doctoralia</span>
        </div>
      </div>

      <div class="testimonial-card">
        <p class="testimonial-text">
          "O Dr. Vinicius se destaca pelo seu profissionalismo e empatia,
          fazendo uma diferença real no meu tratamento. Gente boa demais, só
          tenho a agradecer!"
        </p>
        <div class="testimonial-author">
          <span class="author-name">Leandro C. de Andrade </span>
          <span class="author-source">Via Doctoralia</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
#depoimentos {
  max-width: 100%;
  background-color: var(--primary-color);
  padding: 60px 20px;
  color: var(--white);
}

.section-subtitle {
  text-align: center;
  font-size: 1.15rem;
  max-width: 600px;
  margin: -20px auto 40px auto;
  color: var(--light-gray);
}

.testimonials-grid {
  display: grid;
  grid-template-columns: 1fr; /* 1 coluna no mobile */
  gap: 25px;
  max-width: 1200px;
  margin: 0 auto;
}

.testimonial-card {
  background: var(--white);
  border-radius: 8px;
  padding: 30px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
}

/* --- NOVO: Esconde do 4º card em diante NO MOBILE --- */
/* :nth-child(n+4) seleciona o 4º, 5º, 6º, etc. */
.testimonial-card:nth-child(n + 4) {
  display: none;
}

.testimonial-text {
  font-family: var(--font-body);
  font-size: 1.1rem;
  line-height: 1.7;
  font-style: italic;
  color: #333;
  margin: 0;
  flex-grow: 1;
  padding-bottom: 20px;
  border-bottom: 2px solid var(--secondary-color);
}

.testimonial-author {
  margin-top: 20px;
}

.author-name {
  display: block;
  font-family: var(--font-heading);
  font-weight: 700;
  color: var(--primary-color);
  font-size: 1.1rem;
}

.author-source {
  font-size: 0.9rem;
  color: #777;
}

/* --- BREAKPOINTS (DESKTOP) --- */
@media (min-width: 768px) {
  .testimonials-grid {
    grid-template-columns: repeat(2, 1fr); /* 2 colunas */
  }

  /* --- NOVO: Re-exibe os cards no desktop --- */
  .testimonial-card:nth-child(n + 4) {
    display: flex; /* Mostra os cards 4, 5, 6 */
  }
}

@media (min-width: 1024px) {
  .testimonials-grid {
    grid-template-columns: repeat(3, 1fr); /* 3 colunas */
  }
}
</style>
