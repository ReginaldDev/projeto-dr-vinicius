<template>
  <section id="inicio" class="section-hero">
    <h1>Sua Dor é real e merece ser acolhida com respeito</h1>
    <p>Tratamento psiquiátrico especializado, técnico e humanizado. Agende sua consulta online e dê o primeiro passo para o seu bem-estar</p>
    <a
      href="https://www.doctoralia.com.br/vinicius-sanches-bersanete/psiquiatra/aparecida-de-goiania?utm_id=772678&utm_source=widget-doctor-772678&utm_medium=big-with-opinion&utm_campaign=&utm_content=#highlight-calendar"
      target="_blank"
      class="cta-button"
      >Agendar Consulta</a
    >
  </section>
</template>

<style scoped>
/* Seu seletor de classe. 
  (Verifique se no seu <template> a tag é <section id="inicio" class="section-hero">)
*/
.section-hero {
  /* --- 1. MUDANÇAS PARA O NOVO DESIGN --- */
  background-color: var(--primary-color); /* Fundo azul escuro */
  
  /* 80px (para o header fixo) + 60px (padding de respiro) = 140px 
    Isso é crucial para o conteúdo não ficar atrás do header.
  */
  padding-top: 140px; 
  padding-bottom: 60px;
  text-align: center;
  max-width: 100%;
}

/* --- 2. TEXTO PRECISA SER BRANCO --- */
/* O seletor global 'h1' não funciona aqui, 
  temos que ser mais específicos.
*/
.section-hero h1 {
  color: var(--white);
}

/* Estilo que você já tinha, agora com a cor corrigida */
.section-hero p {
  color: var(--white);
  opacity: 0.9;
  max-width: 600px;
  margin: 1.5rem auto;
  font-size: 1.15rem;
}

/* --- 3. CORREÇÃO DO BOTÃO --- */
/* Sobrescreve o .cta-button global.
  Este é o estado 'base' do botão.
*/
.section-hero .cta-button {
  background-color: var(--secondary-color); /* Fundo azul claro */
  color: var(--primary-color); /* Texto azul escuro (corrigi o --darktext) */
  font-weight: 700;
  
  /* A transição deve vir AQUI (na classe base) */
  transition: all 0.3s ease;
}

/* O :hover agora tem um efeito diferente 
  para se destacar no fundo escuro.
*/
.section-hero .cta-button:hover {
  background-color: var(--white); /* Fica branco no hover */
  transform: scale(1.05); /* Efeito de 'crescer' sutil */
}
</style>
