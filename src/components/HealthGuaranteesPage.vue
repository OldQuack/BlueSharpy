<script setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>

<template>
  <v-container>
    <v-row class="mt-6">
      <v-col cols="0" xl="2"></v-col>
      <v-col cols="12" md="12" xl="8">
        <v-card class="pa-5">
          <v-card-title class="text-h5 text-center">
            {{ t("pages.health.title") }}
          </v-card-title>

          <v-card-text>
            <v-row>
              <v-col cols="12" md="12">
                <h2 class="text-h6">
                  {{ t("pages.health.examinations.title") }}
                </h2>
                <li>{{ t("pages.health.examinations.vet") }}</li>
                <li>{{ t("pages.health.examinations.diseases") }}</li>
                <li>{{ t("pages.health.examinations.deworming") }}</li>
              </v-col>
            </v-row>

            <v-divider class="my-4"></v-divider>

            <h2 class="text-h6">{{ t("pages.health.vaccination.title") }}</h2>
            <p>{{ t("pages.health.vaccination.description") }}</p>

            <!--
        <v-divider class="my-4"></v-divider>
        <h2 class="text-h6">{{ t("pages.health.guarantees.title") }}</h2>
        <p>{{ t("pages.health.guarantees.description") }}</p>
        <v-divider class="my-4"></v-divider>
         <h2 class="text-h6">{{ t("pages.health.returns.title") }}</h2>
        <p>{{ t("pages.health.returns.description") }}</p> -->
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
ul {
  padding-left: 20px;
}
ul li {
  margin-bottom: 8px;
}
</style>

<style scoped></style>
