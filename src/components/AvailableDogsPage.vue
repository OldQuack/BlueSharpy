<script setup>
import TestimonialsPage from "@/components/TestimonialsPage.vue";
import HealthGuaranteesPage from "@/components/HealthGuaranteesPage.vue";
import AdoptionProcessPage from "@/components/AdoptionProcessPage.vue";
import pic1 from "@/assets/availableDogsPage/pic1.png";

import { ref } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const dogs = ref([
  {
    sex: "Male",
    color: "Brown",
    weight: 25,
    age: 12,
    image: pic1,
  },
  {
    sex: "Female",
    color: "Black",
    weight: 22,
    age: 10,
    image: pic1,
  },
  {
    sex: "Male",
    color: "Fawn",
    weight: 27,
    age: 14,
    image: pic1,
  },
]);

const activeIndex = ref(0);

const updateIndex = (index) => {
  activeIndex.value = index;
};
</script>

<template>
  <v-container>
    <v-row>
      <!-- Image column -->
      <v-col cols="0" xl="2"></v-col>

      <v-col xs="12" lg="9" xl="4" order-md="2">
        <v-carousel
          v-model="activeIndex"
          hide-delimiters
          @update:modelValue="updateIndex"
        >
          <v-carousel-item v-for="(dog, index) in dogs" :key="index">
            <v-img :src="dog.image" :alt="dog.sex" contain height="100%" />
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>

    <!-- Details column -->
    <v-row>
      <v-col cols="0" xl="2"></v-col>
      <v-col xs="12" lg="9" xl="4" order-md="1">
        <v-card>
          <v-card-title>{{ dogs[activeIndex].sex }}</v-card-title>
          <v-card-text>
            <p>
              <strong>{{ t("pages.available-dogs.color.title") }}:</strong>
              {{
                t(
                  `pages.available-dogs.color.${dogs[
                    activeIndex
                  ].color.toLowerCase()}`
                )
              }}
            </p>
            <p>
              <strong>{{ t("pages.available-dogs.weight") }}:</strong>
              {{ dogs[activeIndex].weight }} kg
            </p>
            <p>
              <strong>{{ t("pages.available-dogs.age") }}:</strong>
              {{ dogs[activeIndex].age }} {{ t("pages.available-dogs.months") }}
            </p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Additional pages -->
    <HealthGuaranteesPage />
    <AdoptionProcessPage />
    <TestimonialsPage />
  </v-container>
</template>
