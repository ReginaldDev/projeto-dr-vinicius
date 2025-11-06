<template>
  <div>
    <LayoutAppHeader />

    <main>
      <slot />
    </main>

    <LayoutAppFooter />
  </div>
</template>

<script setup>
// Graças ao Nuxt, os componentes 'LayoutAppHeader' e 'LayoutAppFooter' 
// são importados automaticamente. Note a nomenclatura: 
// 'components/layout/AppHeader.vue' vira <LayoutAppHeader />
</script>