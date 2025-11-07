<template>
  <section id="contato">
    <h2>Dê o primeiro passo para sua saúde mental</h2>
    <p class="subtitle">
      Envie uma mensagem para dúvidas ou informações. 
    </p>

    <form @submit.prevent="onSubmit" class="contact-form">
      <div v-if="resultMessage" :class="isSuccess ? 'success' : 'error'">
        {{ resultMessage }}
      </div>

      <input type="hidden" name="access_key" :value="accessKey" />

      <div class="form-group">
        <label for="name">Nome Completo</label>
        <input type="text" id="name" v-model="formData.name" required />
      </div>

      <div class="form-group">
        <label for="email">Seu melhor E-mail</label>
        <input type="email" id="email" v-model="formData.email" required />
      </div>

      <div class="form-group">
        <label for="phone">Telefone / WhatsApp</label>
        <input type="tel" id="phone" v-model="formData.phone" />
      </div>

      <div class="form-group">
        <label for="message">Mensagem</label>
        <textarea
          id="message"
          v-model="formData.message"
          rows="5"
          required
        ></textarea>
      </div>

      <button type="submit" class="cta-button form-button">
        {{ statusMessage }}
      </button>
    </form>

    <div class="cta-divider">
      <span class="line"></span>
      <span class="text">ou</span>
      <span class="line"></span>
    </div>

    <a
      href="https://www.doctoralia.com.br/vinicius-sanches-bersanete/psiquiatra/campinas?utm_id=772678&utm_source=widget-doctor-772678&utm_medium=big-with-opinion&utm_campaign=&utm_content=#highlight-calendar"
      target="_blank"
      class="cta-button doctoralia-button"
    >
      Agendar sua consulta agora
    </a>
  </section>
</template>

<script setup>
import { ref } from "vue";

// --- CONFIGURAÇÃO DO FORMULÁRIO ---
const accessKey = "COLE_SUA_ACCESS_KEY_DO_WEB3FORMS_AQUI";

// Reatividade dos dados do formulário
const formData = ref({
  name: "",
  email: "",
  phone: "",
  message: "",
});

// Mensagens de estado
const statusMessage = ref("Enviar Mensagem");
const resultMessage = ref("");
const isSuccess = ref(false);

// Função de envio
const onSubmit = async () => {
  statusMessage.value = "Enviando...";
  isSuccess.value = false;
  resultMessage.value = "";

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...formData.value,
        access_key: accessKey,
        subject: `Nova Mensagem do Site - ${formData.value.name}`,
      }),
    });

    const result = await response.json();

    if (result.success) {
      isSuccess.value = true;
      resultMessage.value =
        "Mensagem enviada com sucesso! Entraremos em contato em breve.";
      statusMessage.value = "Enviar Mensagem";
      // Limpa o formulário
      formData.value = { name: "", email: "", phone: "", message: "" };
    } else {
      throw new Error(result.message || "Ocorreu um erro ao enviar.");
    }
  } catch (error) {
    isSuccess.value = false;
    resultMessage.value = "Ocorreu um erro. Por favor, tente novamente.";
    statusMessage.value = "Tentar Novamente";
    console.error("Erro no formulário:", error);
  }
};
</script>

<style scoped>
/* --- MOBILE FIRST --- */
#contato {
  background-color: var(--light-gray);
  text-align: center;
}

section{
  margin: 30px auto;
}

.subtitle {
  text-align: center;
  font-size: 1.1rem;
  max-width: 600px;
  margin: 0 auto 30px auto;
}

.contact-form {
  max-width: 600px;
  margin: 0 auto;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
  font-family: var(--font-heading);
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  font-family: var(--font-body);
  box-sizing: border-box; /* Garante que o padding não quebre o layout */
}

.form-button {
  width: 100%;
}
.form-button:hover {
  background-color: var(--secondary-color);
  color: var(--darktext);
  transition: background-color 0.4s ease;
}

/* Mensagens de Feedback */
.success {
  color: green;
  background: #e0f8e0;
  padding: 15px;
  border-radius: 5px;
  margin-bottom: 20px;
  text-align: center;
}
.error {
  color: #a00;
  background: #f8e0e0;
  padding: 15px;
  border-radius: 5px;
  margin-bottom: 20px;
  text-align: center;
}

/* Divisor "ou" */
.cta-divider {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 40px 0;
}
.line {
  flex: 1;
  height: 1px;
  background-color: #ccc;
}
.text {
  padding: 0 20px;
  font-family: var(--font-heading);
  color: #777;
}

.doctoralia-button {
  width: auto;
  background-color: #009386; /* Cor aproximada do Doctoralia */
}
.doctoralia-button:hover {
  background-color: #007a6e;
  transition: background-color 0.4s ease;
}

/* --- DESKTOP --- */
@media (min-width: 768px) {
  .form-button,
  .doctoralia-button {
    width: auto;
    max-width: 400px;
    margin: 0 auto;
  }
}
</style>
