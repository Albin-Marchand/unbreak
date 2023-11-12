<template>
  <div class="container">
    <h1>Calculatrice de course à pied</h1>

    <div>
      <label for="distance">Distance (km): </label>
      <input v-model="objParametersRunningCalculator.distance" type="number" step="0.01" id="distance" />
    </div>

    <div>
      <label for="hours">Heures: </label>
      <input v-model="objParametersRunningCalculator.hours" type="number" id="hours" />
      <label for="minutes">Minutes: </label>
      <input v-model="objParametersRunningCalculator.minutes" type="number" id="minutes" />
      <label for="seconds">Secondes: </label>
      <input v-model="objParametersRunningCalculator.seconds" type="number" id="seconds" />
    </div>

    <div>
      <button @click="calculate">Calculer</button>
    </div>

    <div
      v-if="
        typeof objParametersRunningCalculator.result.speed === 'number' &&
        objParametersRunningCalculator.result.speed !== 0
      "
    >
      <h2>Résultats :</h2>
      <p>
        Vitesse moyenne:
        {{
          isNaN(objParametersRunningCalculator.result.speed.toFixed(2))
            ? 0
            : objParametersRunningCalculator.result.speed.toFixed(2)
        }}
        km/h
      </p>
      <p>Allure: {{ objParametersRunningCalculator.result.pace }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const objParametersRunningCalculator = ref({
  distance: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
  result: { speed: 0, pace: "" },
});

function calculate() {
  const totalMinutes = parseInt(
    objParametersRunningCalculator.value.hours * 60 +
      parseInt(objParametersRunningCalculator.value.minutes) +
      parseInt(objParametersRunningCalculator.value.seconds) / 60
  );
  const pace = totalMinutes / objParametersRunningCalculator.value.distance;
  const paceMinutes = Math.floor(pace);
  const paceSeconds = Math.round((pace - paceMinutes) * 60);
  objParametersRunningCalculator.value.result = {
    speed: objParametersRunningCalculator.value.distance / (totalMinutes / 60),
    pace: isNaN(paceMinutes) && isNaN(paceSeconds) ? 0 + "min/km" : `${paceMinutes}'${paceSeconds}" min/km`,
  };
}
onMounted(() => {
  console.log(process.env.NODE_ENV);
  console.log("objParametersRunningCalculator => ", objParametersRunningCalculator.value);
});
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
  height: 100%;
}
h1 {
  color: #333;
  text-align: center;
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
