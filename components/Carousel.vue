<template>
  <div
    class="w-full max-w-7xl mx-auto overflow-hidden relative rounded-lg"
    @mouseenter="stopAutoplay"
    @mouseleave="startAutoplay"
  >
    <!-- Slider Container -->
    <div
      class="flex transition-transform duration-700 ease-in-out"
      :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
    >
      <!-- Slide Items -->
      <div
        v-for="(slide, index) in slides"
        :key="index"
        class="relative w-full flex-shrink-0"
      >
        <!-- Background Image -->
        <div class="relative group rounded-lg overflow-hidden">
          <img
            :src="slide.thumb"
            :alt="slide.alt"
            class="w-full h-[400px] sm:h-[600px] object-cover cursor-pointer transform group-hover:scale-105 transition-transform duration-500 ease-out"
          />
          <!-- Gradient Overlay -->
          <div
            class="absolute inset-0 bg-gradient-to-t from-black via-gray-900/70 to-transparent"
          ></div>
        </div>

        <!-- Text Overlay -->
        <div
          class="absolute inset-0 text-white flex flex-col justify-end p-6 sm:p-12 space-y-4 rounded-lg"
        >
          <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <NuxtLink :to="'/detail/' + slide.id">
              <div class="flex-1 cursor-pointer space-y-2">
                <h2 class="text-xl sm:text-3xl font-extrabold tracking-tight">
                  {{ slide.title }}
                </h2>
                <p class="text-sm sm:text-lg line-clamp-2">
                  {{ slide.description }}
                </p>
                <div class="flex flex-wrap gap-2 mt-4">
                  <span
                    v-for="(tag, idx) in slide.tags.split(',')"
                    :key="idx"
                    class="bg-gray-800 bg-opacity-75 px-3 py-1 rounded text-xs sm:text-sm"
                  >
                    {{ tag }}
                  </span>
                </div>
              </div>
            </NuxtLink>
            <!-- Play Now Button -->
            <div class="mt-4 sm:mt-0 sm:ml-6">
              <button
                @click.stop="$emit('playnow', slide)"
                class="w-20 h-20  bg-custom-500 text-white px-5 py-3 rounded-full text-sm sm:text-base font-bold shadow-md hover:bg-custom-400 hover:shadow-lg transform hover:scale-105 transition-all"
              >
                Play Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Navigation -->
    <button
      class="absolute top-1/2 left-4 -translate-y-1/2 bg-gray-800 bg-opacity-60 text-white p-3 rounded-full hover:bg-gray-700 shadow-lg hover:scale-110 transition-transform"
      @click="prevSlide"
    >
      ◀
    </button>
    <button
      class="absolute top-1/2 right-4 -translate-y-1/2 bg-gray-800 bg-opacity-60 text-white p-3 rounded-full hover:bg-gray-700 shadow-lg hover:scale-110 transition-transform"
      @click="nextSlide"
    >
      ▶
    </button>

    <!-- Pagination -->
    <div class="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-3">
      <button
        v-for="(slide, index) in slides"
        :key="index"
        :class="[
          'w-4 h-4 rounded-full transition-all duration-300',
          index === currentSlide
            ? 'bg-custom-500 scale-125 shadow-md'
            : 'bg-gray-400 hover:bg-custom-300',
        ]"
        @click="goToSlide(index)"
      ></button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const props = defineProps({
  slides: {
    type: Array,
    required: true,
    default: () => [],
  },
});

const currentSlide = ref(0);
const totalSlides = ref(props.slides.length);

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % totalSlides.value;
};

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + totalSlides.value) % totalSlides.value;
};

const goToSlide = (index) => {
  currentSlide.value = index;
};

// Auto-play functionality
let autoplayInterval;

const startAutoplay = () => {
  autoplayInterval = setInterval(() => {
    nextSlide();
  }, 5000);
};

const stopAutoplay = () => {
  clearInterval(autoplayInterval);
};

// Start autoplay on mounted
onMounted(() => {
  startAutoplay();
});

// Clean up interval when component is destroyed
onUnmounted(() => {
  stopAutoplay();
});
</script>
