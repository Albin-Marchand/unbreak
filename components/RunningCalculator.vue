<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="bg-white p-8 rounded shadow-md w-full max-w-md">
      <h1 class="text-3xl font-semibold mb-6 text-gray-800">
        Calculatrice de Course à Pied
      </h1>

      <div class="mb-4">
        <label for="distance" class="block text-gray-600 text-sm mb-2"
          >Distance (en kilomètres):</label
        >
        <input
          type="number"
          v-model="distance"
          id="distance"
          class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
        />
      </div>

      <div class="mb-4">
        <label for="hours" class="block text-gray-600 text-sm mb-2"
          >Temps (heures):</label
        >
        <input
          type="number"
          v-model="hours"
          id="hours"
          class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
        />
      </div>

      <div class="mb-4">
        <label for="minutes" class="block text-gray-600 text-sm mb-2"
          >Temps (minutes):</label
        >
        <input
          type="number"
          v-model="minutes"
          id="minutes"
          class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
        />
      </div>

      <div class="mb-4">
        <label for="seconds" class="block text-gray-600 text-sm mb-2"
          >Temps (secondes):</label
        >
        <input
          type="number"
          v-model="seconds"
          id="seconds"
          class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
        />
      </div>

      <button
        @click="calculate"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded align-content: center"
      >
        Calculer
      </button>

      <p v-if="calculated" class="mt-4 text-gray-800">
        Vitesse Moyenne: {{ speed }} km/h <br />
        Allure: {{ pace }} min/km
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      distance: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      calculated: false,
      speed: 0,
      pace: 0,
    };
  },
  methods: {
    calculate() {
      const totalTimeInMinutes =
        parseInt(this.hours) * 60 +
        parseInt(this.minutes) +
        parseInt(this.seconds) / 60;
      this.speed = (this.distance / totalTimeInMinutes).toFixed(2);
      this.pace = (totalTimeInMinutes / this.distance).toFixed(2);
      this.calculated = true;
    },
  },
};
</script>

<style scoped>
/* Ajoutez des styles Tailwind CSS ici si nécessaire */
</style>
