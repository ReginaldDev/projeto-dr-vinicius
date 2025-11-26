<template>
  <header class="header" :class="{ 'hidden-header': !isHeaderVisible }">
    <nav class="container">
      <div class="logo">
        <NuxtLink to="/">
          <img
            src="/assets/img/Logotipo02.png"
            alt="Logo Dr. Vinicius Sanches - Saúde Mental"
            class="logo-img"
            format="webp"
            quality="80"
          />
        </NuxtLink>
      </div>

      <div class="nav-links" :class="{ 'is-open': isMenuOpen }">
        <ul>
          <li @click="closeMenu"><a href="#sobre">Sobre</a></li>
          <li @click="closeMenu"><a href="#comoFunciona">Como funciona?</a></li>
          <li @click="closeMenu"><a href="#servicos">Serviços</a></li>
          <li @click="closeMenu"><a href="#depoimentos">Depoimentos</a></li>
          <li @click="closeMenu"><a href="#contato">Contato</a></li>
        </ul>

        <a
          href="https://www.doctoralia.com.br/vinicius-sanches-bersanete/psiquiatra/aparecida-de-goiania?utm_id=772678&utm_source=widget-doctor-772678&utm_medium=big-with-opinion&utm_campaign=&utm_content=#highlight-calendar"
          target="_blank"
          class="cta-button cta-mobile"
        >
          Agendar Consulta
        </a>
      </div>

      <a
        href="https://www.doctoralia.com.br/vinicius-sanches-bersanete/psiquiatra/aparecida-de-goiania?utm_id=772678&utm_source=widget-doctor-772678&utm_medium=big-with-opinion&utm_campaign=&utm_content=#highlight-calendar"
        target="_blank"
        class="cta-button cta-desktop"
      >
        Agendar Consulta
      </a>

      <button class="header-mobile-icon" @click="toggleMenu" aria-label="Abrir ou fechar menu de navegação">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </button>
    </nav>
  </header>
</template>

<script setup>
// 2. IMPORTEI 'onMounted' E 'onUnmounted'
import { ref, onMounted, onUnmounted } from "vue";

// 'isMenuOpen' (do seu código)
const isMenuOpen = ref(false);
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
const closeMenu = () => {
  isMenuOpen.value = false;
};

// --- 3. ADICIONEI TODA A LÓGICA DE VISIBILIDADE (DO SEU SCRIPT DA TESTFY) ---
const isHeaderVisible = ref(true);
let lastScrollY = 0;
let lastMouseY = 0;

// Usando o breakpoint do SEU CSS (768px)
const isMobile = () => {
  if (typeof window !== "undefined") {
    return window.innerWidth <= 768;
  }
  return false;
};

const handleScroll = () => {
  if (typeof window === "undefined") return;
  const currentScrollY = window.scrollY;

  if (currentScrollY < lastScrollY) {
    isHeaderVisible.value = true; // Rolando pra cima → mostra
  } else if (currentScrollY > lastScrollY + 10) {
    isHeaderVisible.value = false; // Rolando pra baixo → esconde
  }

  lastScrollY = currentScrollY < 0 ? 0 : currentScrollY;
};

const handleMouseMove = (event) => {
  if (!isMobile()) {
    const y = event.clientY;

    if (y <= 50) {
      isHeaderVisible.value = true;
    } else if (y > 100 && y > lastMouseY) {
      isHeaderVisible.value = false;
    }
    lastMouseY = y;
  }
};

onMounted(() => {
  if (typeof window !== "undefined") {
    lastScrollY = window.scrollY;
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);
  }
});

onUnmounted(() => {
  if (typeof window !== "undefined") {
    window.removeEventListener("mousemove", handleMouseMove);
    window.removeEventListener("scroll", handleScroll);
  }
});
</script>

<style scoped>
/* --- ESTILOS GLOBAIS DO HEADER --- */
.header {
  /* 4. MUDANÇA OBRIGATÓRIA PARA A FUNCIONALIDADE: */
  position: fixed; /* MUDADO DE 'sticky' PARA 'fixed' */
  top: 0;
  left: 0; /* Adicionado */
  width: 100%; /* Adicionado */

  background-color: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 100;
  height: 80px;

  /* 5. ADICIONADO: Transição para o 'esconder' */
  transition: transform 0.4s ease-in-out;
}

/* 6. ADICIONADO: Classe que esconde o header */
.hidden-header {
  transform: translateY(-100%);
}

/* O RESTANTE DO SEU CSS ESTÁ IDÊNTICO AO QUE VOCÊ ENVIOU
*/
.logo-img {
  max-height: 50px;
  width: 70%;
}
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  max-width: 1200px;
  margin: 0 auto;
  height: 100%;
}
.logo a {
  font-weight: bold;
  font-size: 1.25rem;
  text-decoration: none;
  color: #333;
}
.nav-links {
  position: fixed;
  top: 80px;
  left: 0;
  width: 100%;
  height: calc(100vh - 80px);
  background-color: white;
  transform: translateX(100%);
  transition: transform 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 40px;
}
.nav-links.is-open {
  transform: translateX(0);
}
.nav-links ul {
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: center;
}
.nav-links li {
  margin-bottom: 30px;
}
.nav-links a {
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: bold;
}
.cta-mobile {
  display: block;
  width: 80%;

  background-color: var(--primary-color);
  border: 2px solid var(--primary-color);
  color: var(--white);
}

.cta-mobile:hover {
  background-color: var(--secondary-color);
  color: var(--darktext);
  
}
.cta-desktop {
  display: none;
}
.header-mobile-icon {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 25px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 101;
}
.header-mobile-icon .bar {
  display: block;
  width: 100%;
  height: 3px;
  background-color: #333;
  border-radius: 2px;
}

@media (min-width: 768px) {
  .container {
    padding: 0 40px;
  }
  .header-mobile-icon {
    display: none;
  }
  .logo-img {
    max-height: 50px;
    width: 100%;
  }
  .nav-links {
    position: static;
    transform: none;
    height: auto;
    width: auto;
    background-color: transparent;
    flex-direction: row;
    align-items: center;
    padding-top: 0;
  }
  .nav-links ul {
    display: flex;
    gap: 20px;
    margin-right: 20px;
  }
  .nav-links li {
    margin-bottom: 0;
  }
  .nav-links a {
    font-size: 1rem;
  }
  .nav-links a:hover{
    font-size: 1.02rem;
    transition: 0.5ms;
    color: var(--darktext);
  }
  .cta-mobile {
    display: none;
  }
  .cta-desktop:hover {
  background-color: var(--secondary-color);
  color: var(--darktext);
  transition: background-color 0.4s ease;
  }
  .cta-desktop {
    display: block;
  }
}
</style>
