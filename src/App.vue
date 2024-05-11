<template>
  <div id="app">
    <main>
      <router-view></router-view>
      <PasswordInput></PasswordInput>
      <Buttons></Buttons>
      <EmailInput></EmailInput>
      <ForgotPassword></ForgotPassword>
    </main>

    <div class="center">
      <img src="Logo/Logo.png" alt="Logo">
    </div>

    <header>
      <h1>Dobro došli</h1>
    </header>

    <div class="center gray-text">
      Nisi još registriran?
    </div>
  </div>
</template>

<script>
import PasswordInput from './components/PasswordInput.vue';
import Buttons from './components/Buttons.vue';
import EmailInput from './components/EmailInput.vue';
import ForgotPassword from './components/ForgotPassword.vue';

export default {
  name: 'Justthegame',
  components: {
    PasswordInput,
    Buttons,
    EmailInput,
    ForgotPassword
  },
}
</script>


