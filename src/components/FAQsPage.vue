<script setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const faqs = computed(() => [
  {
    question: t("pages.faqs-page.faqs.q1"),
    answer: t("pages.faqs-page.faqs.a1"),
  },
  {
    question: t("pages.faqs-page.faqs.q2"),
    answer: t("pages.faqs-page.faqs.a2"),
  },
  {
    question: t("pages.faqs-page.faqs.q3"),
    answer: t("pages.faqs-page.faqs.a3"),
  },
  {
    question: t("pages.faqs-page.faqs.q4"),
    answer: t("pages.faqs-page.faqs.a4"),
  },
]);
</script>

<template>
  <v-container>
    <v-row class="mt-6">
      <v-col cols="0" xl="2"></v-col>
      <v-col cols="12" md="12" xl="8">
        <v-card>
          <v-card-title class="text-h4">{{
            t("pages.faqs-page.title")
          }}</v-card-title>
          <v-card-text>
            <v-expansion-panels>
              <v-expansion-panel v-for="(faq, index) in faqs" :key="index">
                <v-expansion-panel-title>{{
                  faq.question
                }}</v-expansion-panel-title>
                <v-expansion-panel-text>{{
                  faq.answer
                }}</v-expansion-panel-text>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
