<template>
  <section id="servicos">
    <div class="process-wrapper">
      <h2>Como funciona a consulta online</h2>
      <div class="process-grid">
        <div class="process-card">
          <h4>1. Avaliação Detalhada</h4>
          <p>
            A primeira consulta tem duração média de 1 hora, focada em uma
            avaliação clínica completa, investigando seu histórico de vida e
            sintomas atuais. As consultas seguintes duram em média 50 minutos.
          </p>
        </div>

        <div class="process-card">
          <h4>2. Diagnóstico e Plano Terapêutico</h4>
          <p>
            Com base na avaliação, é feita a formulação de uma hipótese
            diagnóstica. Inclui prescrição médica com assinatura digital, válida
            em todo o país.
          </p>
        </div>

        <div class="process-card">
          <h4>3. Acompanhamento Contínuo</h4>
          <p>
            O acompanhamento é individualizado, com um canal de contato
            disponível para dúvidas e intercorrências entre as consultas,
            garantindo um cuidado próximo e humanizado.
          </p>
        </div>
      </div>
    </div>

    <div class="specialties-wrapper">
      <h2>Principais áreas de atuação</h2>
      <p class="section-subtitle">
        Atendimento especializado para diversas condições de saúde mental.
      </p>

      <div class="specialties-grid">
        <div class="specialty-card">
          <span class="card-icon">🌀</span>
          <h4>Ansiedade e Pânico</h4>
          <p>
            Cuidado para Transtorno de Ansiedade Generalizada (TAG), Transtorno
            do Pânico e fobias.
          </p>
        </div>

        <div class="specialty-card">
          <span class="card-icon">💧</span>
          <h4>Depressão</h4>
          <p>
            Tratamento para episódios depressivos, distimia e outros transtornos
            de humor.
          </p>
        </div>

        <div class="specialty-card">
          <span class="card-icon">🎭</span>
          <h4>Transtorno Bipolar</h4>
          <p>
            Manejo e estabilização do humor, focado na qualidade de vida do
            paciente.
          </p>
        </div>

        <div class="specialty-card">
          <span class="card-icon">🧠</span>
          <h4>TDAH</h4>
          <p>
            Serviço focado no diagnóstico e tratamento do Transtorno de Déficit
            de Atenção e Hiperatividade.
          </p>
        </div>

        <div class="specialty-card">
          <span class="card-icon">🔄</span>
          <h4>Dependência Química</h4>
          <p>
            Atendimento especializado no uso de substâncias químicas e outros
            vícios.
          </p>
        </div>

        <div class="specialty-card">
          <span class="card-icon">🗣️</span>
          <h4>Esquizofrenia</h4>
          <p>
            Acompanhamento e tratamento de transtornos psicóticos, incluindo
            esquizofrenia.
          </p>
        </div>

        <div class="specialty-card">
          <span class="card-icon">🍽️</span>
          <h4>Transtornos Alimentares</h4>
          <p>
            Cuidado para anorexia, bulimia e transtorno de compulsão alimentar.
          </p>
        </div>

        <div class="specialty-card">
          <span class="card-icon">👤</span>
          <h4>Transtornos de Personalidade</h4>
          <p>Abordagem para condições como Borderline, Narcisismo e outras.</p>
        </div>

        <div class="specialty-card cta-card">
          <h4>E muito mais</h4>
          <p>
            Outras condições, como Transtornos do Espectro Autista e Insônia,
            podem ser consultados no perfil.
          </p>
          <a
            href="https://www.doctoralia.com.br/vinicius-sanches-bersanete/psiquiatra/campinas"
            target="_blank"
            class="cta-card-link"
          >
            Ver Perfil Completo
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* A seção de serviços terá duas partes com fundos diferentes para dividir visualmente */
#servicos {
  padding: 0; /* Remove o padding da section global */
}

.process-wrapper {
  padding: 60px 20px;
  background-color: var(--white);
}

.specialties-wrapper {
  padding: 60px 20px;
  background-color: var(--light-gray); /* Fundo cinza claro */
}

h2 {
  color: var(--primary-color);
  margin-bottom: 30px;
}

.section-subtitle {
  text-align: center;
  font-size: 1.15rem;
  max-width: 600px;
  margin: -20px auto 40px auto;
  color: #555;
}

/* --- ESTILO "COMO FUNCIONA" --- */

.process-grid {
  display: grid;
  grid-template-columns: 1fr; /* Mobile: 1 coluna */
  gap: 25px;
  max-width: 1200px;
  margin: 0 auto;
}

.process-card {
  background: var(--white);
  border-radius: 8px;
  padding: 25px;
  border-left: 5px solid var(--primary-color);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
}

.process-card h4 {
  font-family: var(--font-heading);
  font-size: 1.3rem;
  color: var(--primary-color);
  margin-top: 0;
}

/* --- ESTILO "ÁREAS DE ATUAÇÃO" --- */

.specialties-grid {
  display: grid;
  grid-template-columns: 1fr; /* Mobile: 1 coluna */
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.specialty-card {
  background-color: var(--white);
  border-radius: 8px;
  padding: 30px 25px;
  text-align: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex; /* Adicionado para alinhamento */
  flex-direction: column; /* Adicionado para alinhamento */
}

/* Adicionado para os cards terem a mesma altura */
.specialty-card > p {
  flex-grow: 1;
}

.specialty-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}

.card-icon {
  font-size: 2.5rem;
  line-height: 1;
}

.specialty-card h4 {
  font-size: 1.25rem;
  color: var(--primary-color);
  margin-bottom: 10px;
}

.specialty-card p {
  font-size: 0.95rem;
  line-height: 1.6;
}

/* Card CTA Doctoralia */
.cta-card {
  background-color: var(--primary-color);
  color: var(--white);
  justify-content: center;
  align-items: center;
}

.cta-card h4 {
  color: var(--white);
}

.cta-card p {
  opacity: 0.9;
}

.cta-card-link {
  color: var(--primary-color);
  background-color: var(--white);
  padding: 10px 20px;
  text-decoration: none;
  font-weight: bold;
  border-radius: 5px;
  margin-top: 15px;
  transition: background-color 0.3s ease;
}
.cta-card-link:hover {
  background-color: #f0f0f0;
}

/* --- BREAKPOINTS (DESKTOP) --- */

@media (min-width: 768px) {
  .process-grid {
    grid-template-columns: repeat(3, 1fr); /* 3 colunas */
  }

  .specialties-grid {
    grid-template-columns: repeat(2, 1fr); /* 2 colunas */
  }
}

@media (min-width: 1024px) {
  .specialties-grid {
    grid-template-columns: repeat(3, 1fr); /* 3 colunas */
  }
}
</style>
