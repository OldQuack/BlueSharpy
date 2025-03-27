<script setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n();

const testimonials = [
  {
    id: 1,
    name: "Emily Johnson",
    country: "🇬🇧",
    message:
      "I couldn't be happier with my new puppy! The adoption process was smooth, and the team was incredibly supportive.",
    img: "testimonial1.jpg",
  },
  {
    id: 2,
    name: "Carlos Fernández",
    country: "🇪🇸",
    message:
      "La mejor decisión que tomé. Mi cachorro es sano, feliz y perfectamente cuidado antes de llegar a casa.",
    img: "testimonial2.jpg",
  },
  {
    id: 3,
    name: "Ana Pereira",
    country: "🇵🇹",
    message:
      "Um serviço incrível! Meu Shar-Pei veio saudável e muito bem treinado. Recomendo!",
    img: "testimonial3.jpg",
  },
];
</script>

<template>
  <v-container>
    <v-row class="mt-6">
      <v-col cols="0" xl="2"></v-col>
      <v-col cols="12" md="12" xl="8">
        <v-card class="pa-5">
          <v-card-title class="text-h5 text-center">
            {{ t("pages.testimonials.title") }}
          </v-card-title>
          <v-card-text>
            <v-row>
              <v-col
                v-for="testimonial in testimonials"
                :key="testimonial.id"
                cols="12"
                md="4"
              >
                <v-card class="testimonial-card">
                  <v-img
                    :src="`/assets/testimonials/${testimonial.img}`"
                    class="testimonial-img"
                  ></v-img>
                  <v-card-text>
                    <p class="testimonial-message">
                      "{{ testimonial.message }}"
                    </p>
                    <p class="testimonial-author">
                      {{ testimonial.country }} {{ testimonial.name }}
                    </p>
                  </v-card-text>
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
.testimonial-card {
  text-align: center;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}
.testimonial-img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin: 0 auto 10px;
}
.testimonial-message {
  font-style: italic;
}
.testimonial-author {
  font-weight: bold;
}
</style>
