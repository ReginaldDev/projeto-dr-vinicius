<template>
  <section id="sobre">
    <h2>Conheça o Dr. Vinicius Sanches Bersanete</h2>

    <div class="about-content">
      
      <!-- COLUNA DA FOTO -->
      <div class="about-image" id="about-image">
        
        <!-- 
          IMAGEM 1: VERSÃO MOBILE 
          Aparece apenas em telas pequenas (celulares)
        -->
        <div class="image-display mobile-only">
          <NuxtPicture
            src="/img/foto-mobile.png"
            alt="Dr. Vinicius Sanches (Mobile)"
            :img-attrs="{ style: 'width:100%; height:auto; border-radius:8px;' }"
            format="webp"
            quality="80"
          />
        </div>

        <!-- 
          IMAGEM 2: VERSÃO DESKTOP 
          Aparece apenas em telas maiores (tablets e PC)
        -->
        <div class="image-display desktop-only">
          <NuxtPicture
            src="/img/foto-desktop.jpg"
            alt="Dr. Vinicius Sanches (Desktop)"
            :img-attrs="{ style: 'width:100%; height:auto; border-radius:8px;' }"
            format="webp"
            quality="80"
          />
        </div>

      </div>

      <!-- COLUNA DE TEXTO -->
      <div class="about-text">
        <p>
          Sou médico psiquiatra com atuação voltada a quadros que exigem atenção cuidadosa e manejo especializado. Atendo adultos que convivem com ansiedade persistente, depressão que não respondeu aos primeiros tratamentos, oscilações de humor que interferem no cotidiano, dificuldades importantes de atenção, irritabilidade que desgasta vínculos, alterações de sono e uso disfuncional de substâncias.
        </p>
        <p>
          Minha prática reúne investigação clínica aprofundada e escuta atenta, permitindo compreender sua história com precisão e responsabilidade. O diagnóstico é construído de forma criteriosa e o tratamento é planejado com clareza, sempre em alinhamento com sua realidade e seus objetivos.
        </p>
        <p>
          O acompanhamento é contínuo e orientado para oferecer estabilidade emocional, clareza de pensamento e recuperação da funcionalidade com segurança e discrição. Aqui, cada etapa recebe tempo e atenção genuína para que o cuidado avance de forma consistente e confiável.
        </p>

        <div class="credentials-box">
          <h3>Formação e Qualificações</h3>
          <p>
            Residência Médica em Psiquiatria credenciada pela Secretaria de Saúde do Estado de São Paulo, com RQE ativo e reconhecido pelo Conselho Federal de Medicina.
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

/* Lógica de troca de imagem (Mobile First) */
.mobile-only {
  display: block; /* Mostra a imagem mobile */
}
.desktop-only {
  display: none; /* Esconde a imagem desktop */
}

.about-text {
  flex: 1.5;
}

.about-text p {
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
  line-height: 1.7;
}

.credentials-box {
  background-color: var(--light-gray);
  border-left: 5px solid var(--primary-color);
  padding: 25px;
  margin-top: 30px;
  border-radius: 0 8px 8px 0;
}

.credentials-box h3 {
  text-align: left;
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

  /* Inverte a visibilidade das imagens */
  .mobile-only {
    display: none; /* Esconde mobile */
  }
  .desktop-only {
    display: block; /* Mostra desktop */
  }

  .about-image {
    position: sticky;
    top: 120px;
    align-self: center;
  }

  .about-text p {
    font-size: 1rem;
  }
}
</style>