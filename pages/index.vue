<template>
  <div>
    <SectionsSectionHero />
    <SectionsSectionAbout />
    <SectionsSectionServices />
    <SectionsSectionBenefits />
    <SectionsSectionTestimonials />
    <SectionsSectionContact />
  </div>
</template>

<script setup>
// --- CONFIGURAÇÃO DE SEO PARA ESTA PÁGINA ---

// Vamos usar o 'useHead' do Nuxt para definir as meta tags
useHead({
  title: "Dr. Vinicius Bersanete - Psiquiatra Online",
  meta: [
    {
      name: "description",
      content:
        "Agende sua consulta online com o Dr. Vinicius Bersanete, psiquiatra especialista em TDAH, ansiedade e depressão. Atendimento humanizado via telemedicina.",
    },
  ],
});

// Note que, assim como no layout, os componentes das seções
// são auto-importados. 'components/sections/SectionHero.vue'
// vira <SectionsSectionHero />
</script>
