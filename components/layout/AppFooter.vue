<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-info">
        <p class="footer-name">Dr. Vinicius Sanches Bersanete</p>
        <p>Psiquiatra</p>
        <p>CRMSP 193281 | RQE 136261</p>
      </div>

      <div class="footer-contact">
        <a
          href="https://wa.me/5511995685893"
          target="_blank"
          aria-label="Link para o WhatsApp"
        >
          <svg class="icon" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M19.05 4.91A9.816 9.816 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21h.01c5.46 0 9.91-4.45 9.91-9.91c0-2.73-1.11-5.19-2.91-7.01zm-7.01 15.24h-.01c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31c-.82-1.31-1.26-2.83-1.26-4.43c0-4.34 3.52-7.86 7.86-7.86c2.11 0 4.1.83 5.56 2.3c1.46 1.46 2.3 3.45 2.3 5.56c.02 4.34-3.5 7.86-7.84 7.86zm4.52-6.13c-.25-.12-1.47-.72-1.7-.8c-.23-.08-.39-.12-.56.12c-.17.25-.64.8-.79.96c-.15.17-.3.19-.56.06c-.26-.12-1.08-.4-2.06-1.27c-.76-.66-1.27-1.47-1.42-1.72c-.15-.25-.02-.38.11-.51c.11-.11.25-.28.37-.43c.13-.15.17-.25.25-.41c.08-.17.04-.31-.02-.43c-.06-.12-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.42c-.14 0-.3-.02-.46-.02c-.17 0-.43.06-.66.31c-.23.25-.87.85-.87 2.07c0 1.22.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.72c.59.25 1.05.4 1.41.51c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.15-1.18c-.07-.11-.23-.18-.48-.3z"
            />
          </svg>
        </a>
        <a
          href="https://instagram.com/psiqvinicius"
          target="_blank"
          aria-label="Link para o Instagram"
        >
          <svg class="icon" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8c1.99 0 3.6-1.61 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3z"
            />
          </svg>
        </a>
        <a
          href="mailto:drviniciussb@gmail.com"
          target="_blank"
          aria-label="Link para enviar e-mail"
        >
          <svg class="icon" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5l-8-5h16zm0 12H4V8l8 5l8-5v10z"
            />
          </svg>
        </a>
        <a
          href="https://www.doctoralia.com.br/vinicius-sanches-bersanete/psiquiatra/campinas"
          target="_blank"
          aria-label="Link para o perfil no Doctoralia"
          class="doctoralia-logo"
        >
          <img
            src="/assets/img/doctoralia-seeklogo.png"
            alt="Ícone Doctoralia"
            class="doctoralia-img"
          />
        </a>
      </div>

      <div class="footer-legal">
        <p>
          Em caso de emergência, procure o pronto-socorro mais próximo ou ligue
          para 192 (SAMU) ou 188 (CVV).
        </p>
        <p>
          &copy; {{ new Date().getFullYear() }} Dr. Vinicius Sanches Bersanete.
          Todos os direitos reservados.
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: var(--primary-color);
  color: var(--light-gray);
  text-align: center;
  padding: 40px 20px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.footer-info {
  margin-bottom: 30px;
}

.footer-name {
  font-family: var(--font-heading);
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
}

.footer-info p {
  margin: 5px 0 0 0;
  font-size: 1rem;
  opacity: 0.9;
}

.footer-contact {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-bottom: 30px;
}

.footer-contact a {
  color: var(--white);
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-contact a:hover {
  color: var(--secondary-color); /* Azul claro da paleta */
}

.icon {
  width: 30px;
  height: 30px;
}

.doctoralia-img {
  height: 30px; /* Ajuste a altura conforme os outros ícones */
  width: auto;
  filter: brightness(0) invert(1); /* Isso transforma a cor do SVG em branco para contrastar com o fundo */
}

img.doctoralia-img:hover {
  filter: brightness(0) invert(0.9); /* Leve alteração na cor ao passar o mouse */
}

.footer-legal {
  font-size: 0.85rem;
  opacity: 0.7;
}
.footer-legal p {
  margin: 10px 0;
}
</style>
