<template>
  <section id="beneficios">
    <h2>Por que escolher o atendimento online?</h2>
    <p class="section-subtitle">
      A teleconsulta oferece a mesma qualidade e sigilo de um atendimento
      presencial, com mais conforto e flexibilidade.
    </p>

    <div class="benefits-grid">
      <div class="benefit-card">
        <div class="card-icon">🏠</div>
        <div class="card-text">
          <h4>Conforto e Privacidade</h4>
          <p>
            Seja atendido no conforto e sigilo da sua casa, sem trânsito ou
            salas de espera. Um ambiente seguro para você se expressar.
          </p>
        </div>
      </div>

      <div class="benefit-card">
        <div class="card-icon">📝</div>
        <div class="card-text">
          <h4>Prescrição Digital Válida</h4>
          <p>
            Receba suas receitas e atestados com assinatura digital, válidos em
            todo o território nacional, diretamente no seu celular.
          </p>
        </div>
      </div>

      <div class="benefit-card">
        <div class="card-icon">🛡️</div>
        <div class="card-text">
          <h4>Atendimento Sério e Seguro</h4>
          <p>
            O atendimento é realizado por teleconsulta em total conformidade com
            as normas do Conselho Federal de Medicina (CFM).
          </p>
        </div>
      </div>

      <div class="benefit-card">
        <div class="card-icon">💻</div>
        <div class="card-text">
          <h4>Qualidade de Onde Estiver</h4>
          <p>
            Tenha acesso a um atendimento psiquiátrico especializado de qualquer
            lugar do Brasil, bastando uma conexão de internet.
          </p>
        </div>
      </div>

      <div class="benefit-card">
        <div class="card-icon">🗓️</div>
        <div class="card-text">
          <h4>Agendamento Fácil</h4>
          <p>
            Marque sua consulta de forma rápida e segura através da plataforma
            <a
              href="https://www.doctoralia.com.br/vinicius-sanches-bersanete/psiquiatra/aparecida-de-goiania"
              target="_blank"
              class="text-link"
              >Doctoralia</a
            >, com total transparência de horários.
          </p>
        </div>
      </div>

      <div class="benefit-card">
        <div class="card-icon">❤️</div>
        <div class="card-text">
          <h4>Escuta Individualizada</h4>
          <p>
            Uma escuta qualificada e um cuidado ético, focado em construir um
            caminho terapêutico que faça sentido para você.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Esta seção (beneficios) terá fundo branco,
   assumindo que a anterior (serviços) terminou com fundo cinza. */
#beneficios {
  background-color: var(--white);
}

.section-subtitle {
  text-align: center;
  font-size: 1.15rem;
  max-width: 600px;
  margin: -20px auto 40px auto;
  color: #555;
}

/* --- MOBILE FIRST (Default) --- */
.benefits-grid {
  display: grid;
  grid-template-columns: 1fr; /* 1 coluna no mobile */
  gap: 30px;
  max-width: 1000px; /* Um pouco mais estreito */
  margin: 0 auto;
}

.benefit-card {
  display: flex;
  align-items: flex-start; /* Alinha o ícone e o texto no topo */
  gap: 20px;
}

.card-icon {
  font-size: 2.5rem;
  line-height: 1.2;
  color: var(--primary-color);
}

.card-text h4 {
  font-family: var(--font-heading);
  font-size: 1.3rem;
  color: var(--primary-color);
  margin: 0 0 10px 0;
  text-align: left; /* Garante alinhamento */
}

.card-text p {
  margin: 0;
  line-height: 1.7;
}

/* Estilo para links no meio do texto */
.text-link {
  color: var(--primary-color); /* Usa a cor primária da marca */
  font-weight: 700; /* Deixa o link com mais destaque */
  text-decoration: none; /* Remove o sublinhado padrão */
  transition: opacity 0.3s ease;
}

.text-link:hover {
  opacity: 0.8; /* Um efeito sutil de hover */
  text-decoration: underline; /* Adiciona sublinhado no hover */
}

/* --- DESKTOP (>= 768px) --- */
@media (min-width: 768px) {
  .benefits-grid {
    grid-template-columns: repeat(2, 1fr); /* 2 colunas */
    gap: 40px 30px; /* (gap vertical | gap horizontal) */
  }
}
</style>
