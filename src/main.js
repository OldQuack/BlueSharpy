import { createApp } from "vue";
import App from "./App.vue";

import { createVuetify } from "vuetify";
import "vuetify/styles";
import "@mdi/font/css/materialdesignicons.css";

import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

import i18n from "./i18n/index";

const vuetify = createVuetify({
  theme: {
    defaultTheme: "dark",
    themes: {
      light: {
        dark: false,
        colors: {
          background: "#F0F4FF", // Soft Blueish White
          surface: "#FFFFFF", // Pure White
          primary: "#4169E1", // Royal Blue
          secondary: "#1E3A8A", // Deep Navy Blue
          accent: "#FFC107", // Golden Accent for contrast
          text: "#1E1E1E", // Dark Text
        },
      },
      dark: {
        dark: true,
        colors: {
          background: "#0D1B2A", // Dark Blue Black
          surface: "#1B263B", // Slightly Lighter Dark Blue
          primary: "#1E40AF", // Deep Royal Blue
          secondary: "#FFD700", // Gold Accent
          accent: "#4A90E2", // Bright Blue Accent
          text: "#E0E0E0", // Light Text
        },
      },
    },
  },
  icons: {
    defaultSet: "mdi",
  },
  components,
  directives,
});

createApp(App).use(vuetify).use(i18n).mount("#app");
