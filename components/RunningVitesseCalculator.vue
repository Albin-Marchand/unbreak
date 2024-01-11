<template>
  <div>
    <h2>Calculateur de Temps de Course</h2>

    <div>
      <label for="paceMinutes">Allure Moyenne (minutes): </label>
      <input type="number" v-model="paceMinutes" />
    </div>

    <div>
      <label for="paceSeconds">Allure Moyenne (secondes): </label>
      <input type="number" v-model="paceSeconds" />
    </div>

    <div>
      <label for="distance">Distance (km): </label>
      <input type="number" v-model="distance" />
    </div>

    <button @click="calculateTime">Calculer</button>

    <div v-if="result">
      <h3>Résultat :</h3>
      <p>
        {{ result.hours }} heures, {{ result.minutes }} minutes,
        {{ result.seconds }} secondes
      </p>
      <p>Vitesse Moyenne: {{ result.speed.toFixed(2) }} km/h</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      paceMinutes: 0,
      paceSeconds: 0,
      distance: 0,
      result: null,
    };
  },
  methods: {
    calculateTime() {
      const paceInSeconds = this.paceMinutes * 60 + this.paceSeconds; // Convert average pace to seconds per kilometer
      const totalSeconds = paceInSeconds * this.distance; // Calculate total time in seconds

      // Convert total seconds to hours, minutes, and remaining seconds
      const hours = Math.floor(totalSeconds / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const seconds = Math.floor(totalSeconds % 60);

      this.result = { hours, minutes, seconds };

      const totalHours = totalSeconds / 3600;
      const speed = this.distance / totalHours;

      this.result = { hours, minutes, seconds, speed };
    },
  },
};
</script>

<style scoped>
/* Ajoutez des styles CSS au besoin */
</style>
