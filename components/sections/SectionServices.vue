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
              src="/img/avaliacao.jpg"
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
              src="/img/diagnostico.jpg"
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
              src="/img/acompanhamento.jpg"
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
      <h2>Principais áreas de atuação</h2>
      <p class="section-subtitle">
        Atendimento especializado para diversas condições de saúde mental.
      </p>

      <div class="specialties-grid">
        <!-- Card 1: Ansiedade -->
        <div class="specialty-card">
          <span class="card-icon"></span>
          <h4>Ansiedade e Pânico</h4>
          <p>
            Cuidado para Transtorno de Ansiedade Generalizada (TAG), Transtorno
            do Pânico e fobias.
          </p>
        </div>

        <!-- Card 2: Depressão -->
        <div class="specialty-card">
          <span class="card-icon">💧</span>
          <h4>Depressão</h4>
          <p>
            Tratamento para episódios depressivos, distimia e outros transtornos
            de humor.
          </p>
        </div>

        <!-- Card 3: Bipolar -->
        <div class="specialty-card">
          <span class="card-icon">🎭</span>
          <h4>Transtorno Bipolar</h4>
          <p>
            Manejo e estabilização do humor, focado na qualidade de vida do
            paciente.
          </p>
        </div>

        <!-- Card 4: TDAH (Destaque do Doctoralia) -->
        <div class="specialty-card">
          <span class="card-icon">🧠</span>
          <h4>TDAH</h4>
          <p>
            Serviço focado no diagnóstico e tratamento do Transtorno de Déficit
            de Atenção e Hiperatividade.
          </p>
        </div>

        <!-- Card 5: Dependência (Destaque do Doctoralia) -->
        <div class="specialty-card">
          <span class="card-icon">🔄</span>
          <h4>Dependência Química</h4>
          <p>
            Atendimento especializado no uso de substâncias químicas e outros
            vícios.
          </p>
        </div>

        <!-- Card 6: Esquizofrenia -->
        <div class="specialty-card">
          <span class="card-icon">🗣️</span>
          <h4>Esquizofrenia</h4>
          <p>
            Acompanhamento e tratamento de transtornos psicóticos, incluindo
            esquizofrenia.
          </p>
        </div>

        <!-- Card 7: Transtornos Alimentares -->
        <div class="specialty-card">
          <span class="card-icon">🍽️</span>
          <h4>Transtornos Alimentares</h4>
          <p>
            Cuidado para anorexia, bulimia e transtorno de compulsão alimentar.
          </p>
        </div>

        <!-- Card 8: Personalidade -->
        <div class="specialty-card">
          <span class="card-icon">👤</span>
          <h4>Transtornos de Personalidade</h4>
          <p>Abordagem para condições como Borderline, Narcisismo e outras.</p>
        </div>

        <!-- Card 9: CTA Doctoralia -->
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
