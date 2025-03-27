<script setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n();

const steps = [
  { id: 1, icon: "mdi-magnify", key: "research" },
  { id: 2, icon: "mdi-clipboard-check", key: "application" },
  { id: 3, icon: "mdi-phone", key: "interview" },
  { id: 4, icon: "mdi-home", key: "home_visit" },
  { id: 5, icon: "mdi-handshake", key: "approval" },
  { id: 6, icon: "mdi-dog", key: "meet_dog" },
  { id: 7, icon: "mdi-heart", key: "finalize", center: true }, // Passo 7 centralizado
];
</script>

<template>
  <v-container>
    <v-row class="mt-6">
      <v-col cols="0" xl="2"></v-col>
      <v-col cols="12" md="12" xl="8">
        <v-card class="pa-5">
          <v-card-title class="text-h5 text-center">
            {{ t("pages.adoption.title") }}
          </v-card-title>

          <v-card-text>
            <v-row justify="center">
              <v-col
                v-for="step in steps.filter((s) => !s.center)"
                :key="step.id"
                cols="12"
                md="4"
              >
                <v-card class="step-card">
                  <v-icon size="48" class="mb-2">{{ step.icon }}</v-icon>
                  <h3 class="text-h6">
                    {{ t(`pages.adoption.steps.${step.key}.title`) }}
                  </h3>
                  <p>{{ t(`pages.adoption.steps.${step.key}.description`) }}</p>
                </v-card>
              </v-col>

              <!-- Passo 7 Centralizado -->
              <v-col
                v-if="steps.find((s) => s.center)"
                cols="12"
                md="6"
                class="d-flex justify-center"
              >
                <v-card class="step-card final-step">
                  <v-icon size="48" class="mb-2">
                    {{ steps.find((s) => s.center).icon }}
                  </v-icon>
                  <h3 class="text-h6">
                    {{
                      t(
                        `pages.adoption.steps.${
                          steps.find((s) => s.center).key
                        }.title`
                      )
                    }}
                  </h3>
                  <p>
                    {{
                      t(
                        `pages.adoption.steps.${
                          steps.find((s) => s.center).key
                        }.description`
                      )
                    }}
                  </p>
                </v-card>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.step-card {
  text-align: center;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}
</style>
