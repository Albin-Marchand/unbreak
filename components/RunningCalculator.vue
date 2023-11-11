<template>
  <div>
    <div class="container">
      <h1>Calculatrice de course à pied</h1>

      <div>
        <label for="distance">Distance (km): </label>
        <input v-model="distance" type="number" step="0.01" id="distance" />
      </div>

      <div>
        <label for="hours">Heures: </label>
        <input v-model="hours" type="number" id="hours" />
        <label for="minutes">Minutes: </label>
        <input v-model="minutes" type="number" id="minutes" />
        <label for="seconds">Secondes: </label>
        <input v-model="seconds" type="number" id="seconds" />
      </div>

      <div>
        <button @click="calculate">Calculer</button>
      </div>

      <div v-if="result">
        <h2>Résultats :</h2>
        <p>Vitesse moyenne: {{ result.speed.toFixed(2) }} km/h</p>
        <p>Allure: {{ result.pace }}</p>
      </div>
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
      result: null,
    };
  },
  methods: {
    calculate() {
      const totalMinutes =
        parseInt(this.hours) * 60 +
        parseInt(this.minutes) +
        parseInt(this.seconds) / 60;

      const pace = totalMinutes / this.distance;

      const paceMinutes = Math.floor(pace);
      const paceSeconds = Math.round((pace - paceMinutes) * 60);

      this.result = {
        speed: this.distance / (totalMinutes / 60),
        pace: `${paceMinutes}'${paceSeconds}" min/km`,
      };
    },
  },
};
</script>

<style scoped>
.container {
  font-family: "Arial", sans-serif;
  background-color: #f5f5f5;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
}
h1 {
  color: #333;
  text-align: center;
}

div {
  margin-bottom: 15px;
}

label {
  display: block;
  font-size: 14px;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 10px;
}

button {
  background-color: #00a699;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
  font-size: 16px;
}

button:hover {
  background-color: #007d8c;
}

h2 {
  margin-top: 20px;
  color: #333;
}
</style>
