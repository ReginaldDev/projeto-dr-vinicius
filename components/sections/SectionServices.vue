<script setup>
import { ref, onMounted } from "vue";

// 1. Crie 'refs' para cada card que você quer animar
const card1 = ref(null);
const card2 = ref(null);
const card3 = ref(null);

// 2. onMounted garante que o código rode apenas no navegador
onMounted(() => {
  // 3. O IntersectionObserver é o JS moderno para "ver"
  //    quando um elemento entra na tela
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        // Se o card está na tela, adicione a classe 'is-visible'
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        } else {
          // NOVO: Se não está na tela, remove a classe
          entry.target.classList.remove("is-visible");
        }
      });
    },
    {
      threshold: 0.1, // Dispara quando 10% do card estiver visível
    }
  );

  // 4. Diga ao observer para "assistir" seus cards
  if (card1.value) observer.observe(card1.value);
  if (card2.value) observer.observe(card2.value);
  if (card3.value) observer.observe(card3.value);
});
</script>

<template>
  <section id="servicos">
    <!-- PARTE 1: COMO FUNCIONA A CONSULTA (NOVO TEMPLATE) -->
    <div class="process-wrapper">
      <h2>O que esperar da minha consulta:</h2>

      <!-- Removemos o .process-grid e usamos um novo layout -->
      <div class="process-layout">
        <!-- CARD 1 (Vem da Direita) -->
        <div ref="card1" class="process-row slide-from-right">
          <div class="process-text">
            <h4>1. Entender</h4>
            <p>
              Na primeira sessão, que costuma durar cerca de uma hora, realizo uma avaliação minuciosa da sua história, do padrão dos sintomas, do contexto emocional e dos fatores que sustentam o quadro atual. Nada é interpretado de forma fragmentada. A compreensão clínica nasce da integração de todas as dimensões da sua experiência.
            </p>
          </div>
          <div class="process-image">
            <!-- Substitua pela imagem que desejar -->
            <NuxtPicture
              src="/img/doutor1.jpeg"
              alt="Foto de Avaliação Detalhada"
              :img-attrs="{ style: 'width:100%;height:auto;border-radius:8px;' }"
              format="webp"
              quality="80"
            /> 
            
          </div>
        </div>

        <!-- CARD 2 (Vem da Esquerda) -->
        <div ref="card2" class="process-row slide-from-left">
          <div class="process-text">
            <h4>2. Direcionar</h4>
            <p>
              Com base no que identificarmos, definimos juntos a conduta terapêutica mais adequada, incluindo medicação quando indicada, psicoterapia, intervenções comportamentais e orientações práticas. As prescrições são emitidas digitalmente e têm validade nacional, garantindo agilidade e acesso imediato sem deslocamentos desnecessários.
            </p>
          </div>
          <div class="process-image">
            <NuxtPicture
              src="/img/doutor2.jpeg"
              alt="Foto de Diagnostico"
              :img-attrs="{ style: 'width:100%;height:auto;border-radius:8px;' }"
              format="webp"
              quality="80"
            /> 
          </div>
        </div>

        <!-- CARD 3 (Vem da Direita) -->
        <div ref="card3" class="process-row slide-from-right">
          <div class="process-text">
            <h4>3. Acompanhar</h4>
            <p>
              A evolução é monitorada com atenção contínua, ajustando o tratamento conforme sua resposta e necessidades. Você dispõe de um canal de contato* para esclarecer dúvidas pontuais entre consultas, preservando estabilidade e segurança ao longo do processo. A meta é avanço clínico concreto, não apenas manutenção.
            </p>
          </div>
          <div class="process-image">
            <NuxtPicture
              src="/img/doutor3.jpeg"
              alt="Foto de Acompanhamento Contínuo"
              :img-attrs="{ style: 'width:100%;height:auto;border-radius:8px;' }"
              format="webp"
              quality="80"
            /> 
          </div>
        </div>
      </div>
    </div>

    <!-- PARTE 2: ÁREAS DE ATUAÇÃO (SEU TEMPLATE ANTIGO, QUE ESTÁ CORRETO) -->
    <div class="specialties-wrapper">
      <h2>Como posso te ajudar</h2>
      <p class="section-subtitle">
        Temas mais procurados e avaliados com cuidado individual e rigor clínico
      </p>

      <div class="specialties-grid">
        <!-- Card 1: Ansiedade -->
        <div class="specialty-card">
          <span class="card-icon">
            <img src="/img/ansiedade.png" alt="Ansiedade Icone">
          </span>
          <h4>Ansiedade Intensa</h4>
          <p>
            Identificação de gatilhos e padrões que sustentam o quadro. 
          </p>
        </div>

        <!-- Card 2: Depressão -->
        <div class="specialty-card">
          <span class="card-icon">
            <img src="/img/depression.png" alt="Depressão Icone">
          </span>
          <h4>Depressão Persistente</h4>
          <p>
            Revisão do histórico e construção de plano combinado para restaurar funcionalidade e equilibrar o ritmo emocional.
          </p>
        </div>

        
        <!-- Card 3: TDAH (Destaque do Doctoralia) -->
        <div class="specialty-card">
          <span class="card-icon">
            <img src="/img/deficit.png" alt="Depressão Icone">
          </span>
          <h4>Déficit de Atenção em Adultos</h4>
          <p>
            Diferenciação entre TDAH verdadeiro e sobrecarga, estresse ou ansiedade. Manejo ajustado à rotina e demandas profissionais.
          </p>
        </div>

        <!-- Card 4: Bipolar -->
        <div class="specialty-card">
          <span class="card-icon">
            <img src="/img/bipolar.png" alt="">
          </span>
          <h4>Oscilações de Humor e Bipolaridade</h4>
          <p>
            Avaliação longitudinal de ciclos e variações de humor, com estratégias específicas para fase clínica.
          </p>
        </div>

        <!-- Card 5: Impulsos (Destaque do Doctoralia) -->
        <div class="specialty-card">
          <span class="card-icon">
            <img src="/img/angry2.png" alt="">
          </span>
          <h4>Controle de Impulsos e Emoções Intensas</h4>
          <p>
            Redução da reatividade, melhoria da tomada de decisão e fortalecimento de recursos internos.
          </p>
        </div>

        <!-- Card 6: Insônia -->
        <div class="specialty-card">
          <span class="card-icon">
            <img src="/img/insomnia.png" alt="">
          </span>
          <h4>Insônia e sono Irregular</h4>
          <p>
            Análise de hábitos, medicações e fatores emocionais. Plano individualizado para qualidade e regularidade do sono.
          </p>
        </div>

        <!-- Card 7: Uso problemático de álcool e drogas -->
        <div class="specialty-card">
          <span class="card-icon">
            <img src="/img/alcohol.png" alt="">
          </span>
          <h4>Uso problemático de Álcool e Drogas</h4>
          <p>
            Avaliação do padrão de uso, riscos e impacto na vida. Manejo focado em redução de danos e prevenção de recaídas.
          </p>
        </div>

        <!-- Card 8: Traumas e TEPT -->
        <div class="specialty-card">
          <span class="card-icon">
            <img src="/img/sad.png" alt="">
          </span>
          <h4>Trauma psicológico e TEPT</h4>
          <p>Exploração de sintomas intrusivos, hipervigilância e impacto emocional dos eventos. Cuidado seguro, ajustado ao seu ritmo.</p>
        </div>

        <!-- Card 9: CTA Doctoralia -->
        <div class="specialty-card cta-card">
          <h4>E outros Temas também</h4>
          <p>
            Esquizofrenia, TEA, fobias, luto, transtorno alimentares e outros desafios de saúde mental.
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

<!--
  *** ESTE É O SEU STYLE REFATORADO E LIMPO ***
-->
<style scoped>
/* A seção de serviços terá duas partes com fundos diferentes para dividir visualmente */
#servicos {
  padding: 0; /* Remove o padding da section global */
  max-width: 100%;
}

.process-wrapper {
  padding: 60px 20px;
  /* --- CORREÇÃO 1: Fundo Cinza Claro --- */
  background-color: var(--primary-color);
  

}

.specialties-wrapper {
  padding: 60px 20px;
  /* --- CORREÇÃO 1: Fundo Branco --- */
  background-color: var(--light-gray);
}

.process-wrapper h2 {
  color: var(--white);
  margin-bottom: 30px;
}

.section-subtitle {
  text-align: center;
  font-size: 1.15rem;
  max-width: 600px;
  margin: -20px auto 40px auto;
  color: var(--dark-text);
}

/* --- ESTILO "COMO FUNCIONA" (ATUALIZADO) --- */

.process-layout {
  display: flex;
  flex-direction: column;
  gap: 3rem; /* Espaço entre os cards */
  max-width: 1000px;
  margin: 0 auto;
}

.process-row {
  background: var(--white);
  border-radius: 12px;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.07);
  padding: 2rem;
  display: grid;
  grid-template-columns: 1fr; /* Mobile: 1 coluna */
  gap: 1.5rem;

  /* --- Base da Animação --- */
  opacity: 0;
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

/* Posição inicial (fora da tela) */
.process-row.slide-from-right {
  transform: translateX(50px);
}
.process-row.slide-from-left {
  transform: translateX(-50px);
}

/* Posição final (ativada pelo JS) */
.process-row.is-visible {
  opacity: 1;
  transform: translateX(0);
}

.process-image img {
  width: 100%;
  height: auto;
  border-radius: 8px;
  object-fit: cover;
}

.process-text h4 {
  font-family: var(--font-heading);
  font-size: 1.5rem; /* Título maior */
  color: var(--primary-color);
  margin-top: 0;
  margin-bottom: 1rem;
}

.process-text p {
  font-size: 1rem;
  line-height: 1.7;
}

/* --- ESTILO "ÁREAS DE ATUAÇÃO" (SEU CSS ANTIGO - CORRETO) --- */

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
  box-shadow: 0 5px 15px 2px rgba(0, 0, 0, 0.05);
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
  width: 48px;        /* Tamanho fixo do container do ícone */
  height: 48px;
  margin: 0 auto 15px auto;
  display: flex;      /* Centraliza a imagem */
  align-items: center;
  justify-content: center;
}

/* Adicione ou atualize esta regra para pegar a imagem PNG */
.card-icon img {
  width: 100%;
  height: 100%;
  object-fit: contain; /* Garante que o ícone caiba sem esticar/deformar */
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
  /* --- Transição na classe base --- */
  transition: all 0.3s ease;
}
.cta-card-link:hover {
  /* Usando a cor secundária (azul claro) para o fundo */
  background-color: var(--secondary-color);
  /* Corrigindo a variável de texto (dark-text) */
  color: var(--dark-text);
}

/* --- BREAKPOINTS (DESKTOP) --- */

@media (min-width: 768px) {
  /* --- DESKTOP (Layout Alternado) --- */
  .process-row {
    grid-template-columns: 1fr 1fr; /* 2 colunas */
    align-items: center;
    gap: 2.5rem;
    padding: 2.5rem;
  }

  /* Faz o card da esquerda (Card 2) inverter a ordem */
  .process-row.slide-from-left .process-image {
    order: -1; /* Joga a imagem para a primeira coluna */
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
