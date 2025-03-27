<script setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import pic1 from "@/assets/team/diogo.jpg";
import pic2 from "@/assets/team/daniel.jpg";
import pic3 from "@/assets/team/daniel.jpg";
import pic4 from "@/assets/utilitary/sharpeipuppi.jpg";

const { t } = useI18n();

const team = ref([
  {
    name: "John Doe",
    role: t("pages.about-us.team.breeder"),
    image: pic1,
  },
  {
    name: "Jane Smith",
    role: t("pages.about-us.team.vet"),
    image: pic2,
  },
  {
    name: "Emily Johnson",
    role: t("pages.about-us.team.trainer"),
    image: pic3,
  },
]);
</script>
<template>
  <v-container>
    <v-row class="mt-6">
      <v-col cols="0" md="0" xl="2"> </v-col>
      <v-col cols="12" md="12" xl="8">
        <v-card>
          <v-card-title class="text-h4">{{
            t("pages.about-us.title")
          }}</v-card-title>
          <v-card-text>
            <p class="text-center text-subtitle-1">
              {{ t("pages.about-us.subtitle") }}
            </p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <!-- Breeding Philosophy -->
    <v-row class="mt-6">
      <v-col cols="0" md="0" xl="2"> </v-col>
      <v-col cols="12" md="6" xl="4">
        <v-img
          :src="pic4"
          alt="Breeding Philosophy"
          contain
          height="365"
        ></v-img>
      </v-col>
      <v-col cols="12" md="6" xl="4">
        <v-card>
          <v-card-title>{{
            t("pages.about-us.philosophy.title")
          }}</v-card-title>
          <v-card-text>{{ t("pages.about-us.philosophy.text") }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <!-- History -->
    <v-row class="mt-6">
      <v-col cols="0" md="0" xl="2"> </v-col>

      <v-col cols="12" md="6" xl="4" order-md="2">
        <v-img :src="pic4" alt="Our History" contain height="365"></v-img>
      </v-col>
      <v-col cols="12" md="6" xl="4" order-md="1">
        <v-card>
          <v-card-title>{{ t("pages.about-us.history.title") }}</v-card-title>
          <v-card-text>{{ t("pages.about-us.history.text") }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <!-- Meet the Team -->
    <v-row class="mt-6">
      <v-col cols="0" md="0" xl="2"> </v-col>
      <v-col cols="12" md="12" xl="8">
        <v-card>
          <v-card-title class="text-center">{{
            t("pages.about-us.team.title")
          }}</v-card-title>
          <v-card-text>
            <v-row>
              <v-col v-for="member in team" :key="member.name" cols="12" md="4">
                <v-card class="team-card">
                  <v-img
                    :src="member.image"
                    :alt="member.name"
                    height="250"
                    contain
                  ></v-img>
                  <v-card-title>{{ member.name }}</v-card-title>
                  <v-card-text>{{ member.role }}</v-card-text>
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
.about-card {
  padding: 20px;
  border-radius: 12px;
}
.team-card {
  text-align: center;
  padding-bottom: 10px;
}
</style>
