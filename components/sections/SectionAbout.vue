<template>
  <section id="sobre">
    <h2>Conheça o Dr. Vinicius Sanches Bersanete</h2>

    <div class="about-content">
      <div class="about-image" id="about-image">
        <img
            src="/assets/img/foto-about2.jpg"
            alt="Logo Dr. Vinicius Sanches - Saúde Mental"
            class="logo-img"
          />
      </div>

      <div class="about-text">
        <p>
          Sou médico psiquiatra com experiência clínica ampla e sólida formação
          voltada à escuta qualificada e ao cuidado ético e individualizado em
          saúde mental.
        </p>
        <p>
          Após anos atuando em diferentes contextos da medicina (da atenção
          básica à urgência e ao cuidado domiciliar) decidi me dedicar
          exclusivamente à especialidade que sempre me fascinou: a psiquiatria.
        </p>
        <p>
          Entendo que cada sofrimento psíquico é único e que nenhum diagnóstico
          define, por si só, a complexidade de uma pessoa. Por isso, meu
          trabalho parte da escuta atenta, do respeito à singularidade de cada
          paciente e do uso criterioso do conhecimento científico.
        </p>
        <p>
          Minha prática é pautada por diretrizes atualizadas da psiquiatria, com
          base em obras como Kaplan & Sadock, Stahl, Dalgalarrondo, The Maudsley
          Guidelines e UpToDate. Acredito que técnica sem empatia é insuficiente
          e empatia sem embasamento técnico pode ser arriscada.
        </p>
        <p>
          Se você sente que precisa de ajuda, tem dúvidas sobre sintomas, ou
          busca um espaço de cuidado sério e acolhedor, estou à disposição. O
          primeiro passo pode ser difícil mas não precisa ser solitário.
        </p>

        <div class="credentials-box">
          <h3>Formação e Qualificações</h3>
          <p>
            Especialista em Psiquiatria, com Residência Médica pela Secretaria
            de Saúde do Estado de São Paulo, no Hospital das Clínicas Luzia de
            Pinho Melo.
          </p>
          <ul>
            <li><strong>CRMSP 193281</strong></li>
            <li><strong>RQE 136261</strong></li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* --- MOBILE FIRST (Default) --- */
.about-content {
  display: flex;
  flex-direction: column; /* Coluna no mobile */
  gap: 30px;
}

.about-image {
  flex: 1;
  
}

.about-text {
  flex: 1.5; /* O texto ocupa mais espaço */
}

.about-text p {
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
  line-height: 1.7;
}

.credentials-box {
  background-color: var(--light-gray);
  border-left: 5px solid var(--primary-color); /* Destaque com a cor primária */
  padding: 25px;
  margin-top: 30px;
  border-radius: 0 8px 8px 0;
}

.credentials-box h3 {
  text-align: left; /* Alinha o h3 da caixa à esquerda */
  margin-top: 0;
  margin-bottom: 15px;
  color: var(--primary-color);
}

.credentials-box p {
  margin-bottom: 1rem;
}

.credentials-box ul {
  list-style: none;
  padding: 0;
}
.credentials-box ul li {
  font-weight: bold;
  font-size: 1.1rem;
  margin-bottom: 5px;
}

/* --- DESKTOP (>= 768px) --- */
@media (min-width: 768px) {
  .about-content {
    flex-direction: row; /* Lado a lado no desktop */
    gap: 40px;
  }

  /* Efeito 'sticky': A foto "gruda" na tela enquanto o usuário rola o texto */
  .about-image {
    position: sticky;
    top: 120px; /* (altura do header + um espaço) */
    align-self: center; /* Alinha no topo */
  }

  .about-text p {
    font-size: 1rem;
  }
}
</style>
