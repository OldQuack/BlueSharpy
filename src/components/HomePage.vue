<script setup>
import { ref, watch, onMounted, onUnmounted, computed } from "vue";
const fullscreen = ref(false);
const windowWidth = ref(window.innerWidth - 100 + "px");
const windowHeight = ref(window.innerHeight - 100 + "px");

const updateWindowSize = () => {
  windowWidth.value = window.innerWidth - 100 + "px";
  windowHeight.value = window.innerHeight - 100 + "px";
};

const toggleFullScreen = () => {
  fullscreen.value = !fullscreen.value;
};

const slides = computed(() => [
  {
    src: fullscreen.value
      ? new URL("@/assets/homePage/pic1.png", import.meta.url).href
      : new URL("@/assets/homePage/pic1F.png", import.meta.url).href,
  },
  {
    src: fullscreen.value
      ? new URL("@/assets/homePage/pic2.png", import.meta.url).href
      : new URL("@/assets/homePage/pic2.png", import.meta.url).href,
  },
  {
    src: fullscreen.value
      ? new URL("@/assets/homePage/pic3.png", import.meta.url).href
      : new URL("@/assets/homePage/pic3.png", import.meta.url).href,
  },
  {
    src: fullscreen.value
      ? new URL("@/assets/homePage/pic4.png", import.meta.url).href
      : new URL("@/assets/homePage/pic4.png", import.meta.url).href,
  },
  {
    src: fullscreen.value
      ? new URL("@/assets/homePage/pic5.png", import.meta.url).href
      : new URL("@/assets/homePage/pic5.png", import.meta.url).href,
  },
  {
    src: fullscreen.value
      ? new URL("@/assets/homePage/pic6.png", import.meta.url).href
      : new URL("@/assets/homePage/pic6.png", import.meta.url).href,
  },
  {
    src: fullscreen.value
      ? new URL("@/assets/homePage/pic7.png", import.meta.url).href
      : new URL("@/assets/homePage/pic7.png", import.meta.url).href,
  },
  {
    src: fullscreen.value
      ? new URL("@/assets/homePage/pic8.png", import.meta.url).href
      : new URL("@/assets/homePage/pic8.png", import.meta.url).href,
  },
]);

onMounted(() => {
  window.addEventListener("resize", updateWindowSize);
});

onUnmounted(() => {
  window.removeEventListener("resize", updateWindowSize);
});

watch(fullscreen, (newVal) => {
  if (newVal) {
    updateWindowSize();
  }
});
</script>

<template>
  <v-carousel
    :height="fullscreen ? windowHeight : '400px'"
    show-arrows="hover"
    cycle
    hide-delimiter-background
  >
    <v-btn class="fullscreen-btn" icon @click="toggleFullScreen">
      <v-icon>{{
        fullscreen ? " mdi-fullscreen-exit" : "mdi-fullscreen"
      }}</v-icon>
    </v-btn>
    <v-carousel-item v-for="(slide, i) in slides" :key="i">
      <div class="slide-container">
        <v-img :src="slide.src" height="100%" cover />
      </div>
    </v-carousel-item>
  </v-carousel>
</template>

<style scoped>
.slide-container {
  position: relative;
  width: 100%;
  height: 100%;
}

.fullscreen-btn {
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 10;
  padding: 5px;
  border-radius: 50%;
}
</style>
