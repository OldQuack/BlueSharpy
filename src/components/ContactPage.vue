<script setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import emailjs from "emailjs-com"; // Import emailjs

const { t } = useI18n();
const form = ref({
  name: "",
  email: "",
  message: "",
});

const submitForm = async () => {
  console.log("Form Submitted:", form.value);

  try {
    const result = await emailjs.send(
      "service_eh1gekr",
      "template_j7rz9dg",
      {
        name: form.value.name,
        email: form.value.email,
        message: form.value.message,
      },
      "QJTtFDv6UFIAi5izp"
    );
    console.log("Email sent successfully:", result);
    form.value = { name: "", email: "", message: "" };
  } catch (error) {
    console.error("Error sending email:", error);
  }
};
</script>

<template>
  <v-container>
    <v-row class="mt-6">
      <v-col cols="0" xl="2"></v-col>
      <v-col cols="12" md="12" xl="8">
        <v-card class="contact-card">
          <v-card-title class="text-h4">{{
            t("pages.contacts-page.title")
          }}</v-card-title>
          <v-card-text class="social-icons">
            <div>
              <v-icon style="margin-top: -3px; margin-right: 5px"
                >mdi-phone</v-icon
              >
              {{ t("pages.contacts-page.phone") }} +351 933 321 921
            </div>
            <div style="margin-top: 5px">
              <v-icon style="margin-top: -3px; margin-right: 5px"
                >mdi-email</v-icon
              >
              {{ t("pages.contacts-page.email") }} contact@yourbusiness.com
            </div>
            <a href="https://www.instagram.com/bluesharpy/" target="_blank">
              <v-icon style="font-size: 50px; margin-top: 10px" color="primary"
                >mdi-instagram</v-icon
              >
            </a>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row class="mt-6">
      <v-col cols="0" xl="2"></v-col>
      <v-col cols="12" md="12" xl="8">
        <v-card class="contact-card">
          <v-card-title>{{
            t("pages.contacts-page.send-message")
          }}</v-card-title>
          <v-card-text>
            <v-form @submit.prevent="submitForm">
              <v-text-field
                v-model="form.name"
                :label="t('pages.contacts-page.name')"
                outlined
                required
              ></v-text-field>

              <v-text-field
                v-model="form.email"
                :label="t('pages.contacts-page.email')"
                outlined
                required
                type="email"
              ></v-text-field>

              <v-textarea
                v-model="form.message"
                :label="t('pages.contacts-page.message')"
                outlined
                required
              ></v-textarea>

              <v-btn type="submit" color="primary">{{
                t("pages.contacts-page.send-message")
              }}</v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.social-icons {
  gap: 15px;
}

.contact {
  display: flex;
  align-items: center;
  gap: 5px;
}

.contact p {
  margin: 0;
  font-size: 14px;
  color: black;
}
</style>
