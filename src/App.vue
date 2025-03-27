<script setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import { useTheme } from "vuetify";

import HomePage from "@/components/HomePage.vue";
import AvailableDogsPage from "@/components/AvailableDogsPage.vue";
import InfoPage from "@/components/InfoPage.vue";
import ContactPage from "@/components/ContactPage.vue";

const { t, locale } = useI18n();

const tab = ref("home");
const email = ref("");
const password = ref("");
const errorMessage = ref("");
const isOpen = ref(false);
const changeLanguage = (lang) => {
  locale.value = lang;
};
const theme = useTheme();

const toggleTheme = () => {
  theme.global.name.value =
    theme.global.name.value === "light" ? "dark" : "light";
};

const tabItems = ref([
  { value: "home", label: "headers.home" },
  { value: "dogs", label: "headers.dogs" },
  { value: "info", label: "headers.info" },
  { value: "contact", label: "headers.contact" },
]);

const openModal = () => {
  isOpen.value = true;
};

const closeDialog = () => {
  isOpen.value = false;
  email.value = "";
  password.value = "";
  errorMessage.value = "";
};

const handleLogin = async () => {
  try {
    const response = await fetch("http://localhost:3000/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify({
        email: email.value,
        password: password.value,
      }),
      credentials: "include", // Ensure credentials are included
    });

    if (!response.ok) {
      throw new Error("Login failed");
    }

    const data = await response.json();
    // Save token to localStorage or sessionStorage for subsequent requests
    localStorage.setItem("token", data.token);
    console.log("Login success:", data);
  } catch (error) {
    errorMessage.value = error.message; // Display error message
    console.error("Error during login:", error);
  }
};
</script>

<template>
  <div>
    <div class="tabs-container">
      <v-tabs v-model="tab" color="primary" class="tabs" show-arrows>
        <v-tab
          v-for="item in tabItems"
          :key="item.value"
          :value="item.value"
          class="small-tab"
        >
          {{ t(item.label) }}
        </v-tab>
      </v-tabs>

      <div class="lang-switcher">
        <v-btn density="compact" @click="openModal">Login</v-btn>
        <v-btn density="compact" @click="toggleTheme" icon>
          <v-icon>{{
            theme.global.name.value === "light"
              ? "mdi-weather-night"
              : "mdi-weather-sunny"
          }}</v-icon>
        </v-btn>
        <v-menu open-on-click>
          <template v-slot:activator="{ props }">
            <v-btn density="compact" v-bind="props" icon>
              <v-icon>{{ "mdi-google-translate" }}</v-icon>
            </v-btn>
          </template>

          <v-list>
            <v-list-item @click="changeLanguage('pt-PT')">
              <v-list-item-title>{{
                t("common.languages.pt")
              }}</v-list-item-title>
            </v-list-item>
            <v-list-item @click="changeLanguage('en-GB')">
              <v-list-item-title>{{
                t("common.languages.en")
              }}</v-list-item-title>
            </v-list-item>
            <v-list-item @click="changeLanguage('es-ES')">
              <v-list-item-title>{{
                t("common.languages.es")
              }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </div>

    <v-card-text>
      <HomePage v-if="tab === 'home'" />
      <AvailableDogsPage v-if="tab === 'dogs'" />
      <InfoPage v-if="tab === 'info'" />
      <ContactPage v-if="tab === 'contact'" />
    </v-card-text>
  </div>
  <v-dialog v-model="isOpen" max-width="400px">
    <v-card>
      <v-card-title class="text-h5">Login</v-card-title>

      <v-card-text>
        <v-form @submit.prevent="handleLogin">
          <v-text-field
            v-model="email"
            label="Email"
            type="email"
            required
          ></v-text-field>

          <v-text-field
            v-model="password"
            label="Password"
            type="password"
            required
          ></v-text-field>

          <v-btn type="submit" color="primary" block> Login </v-btn>

          <p v-if="errorMessage" class="text-red-500 text-sm mt-2">
            {{ errorMessage }}
          </p>
        </v-form>
      </v-card-text>

      <v-card-actions>
        <v-btn text @click="closeDialog"> Close </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<style>
#app {
  text-align: center;
  color: #2c3e50;
  background-image: url("@/assets/utilitary/BG.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 100vh;
}

.lang-switcher {
  position: absolute;
  right: 0;
  display: flex;
  align-items: center;
  gap: 8px;
  padding-right: 10px;
  flex-shrink: 0;
}

.small-tab {
  font-size: 12px;
  min-width: 80px;
  padding: 4px 8px;
  text-transform: none;
}

.tabs {
  min-width: 300px;
  max-width: calc(100% - 150px);
  flex-grow: 1;
}
.tabs-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}
</style>
