<template>
  <div class="h-full flex flex-col justify-around">
    <div class="h-full flex flex-col justify-between lg:justify-start">
      <div class="text-center px-6 pt-6">
        Calculez en un clin d’oeil votre vitesse moyenne et votre allure par
        kilometre. <br />
        Il vous suffit de rentrer la distance de course et le chonro à réaliser
        et le tour est joué !
      </div>
      <h1
        class="text-2xl flex items-center justify-center font-extrabold text-center px-6 lg:h-48"
      >
        Calculatrice d'allure de course
      </h1>

      <div class="flex flex-col lg:max-h-100 mx-auto">
        <div class="flex flex-col lg:flex-row lg:border-2 lg:rounded-xl">
          <div class="h-80 flex flex-col justify-around px-6 lg:w-1/2">
            <div class="max-w-sm">
              <label for="distance">Distance (km): </label>
              <input
                v-model="objParametersRunningCalculator.distance"
                type="number"
                step="0.01"
                id="distance"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div class="flex gap-5 max-w-sm">
              <div>
                <label for="hours">Heures :</label>
                <input
                  v-model="objParametersRunningCalculator.hours"
                  type="number"
                  id="hours"
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>

              <div>
                <label for="minutes">Minutes :</label>
                <input
                  v-model="objParametersRunningCalculator.minutes"
                  type="number"
                  id="minutes"
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>

              <div>
                <label for="seconds">Secondes :</label>
                <input
                  v-model="objParametersRunningCalculator.seconds"
                  type="number"
                  id="seconds"
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
            </div>

            <div class="w-full flex justify-center max-w-sm">
              <button
                @click="calculate"
                class="bg-black text-white w-full h-14 text-2xl font-extrabold"
              >
                C'est parti !
              </button>
            </div>
          </div>

          <!-- <div
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
      </div> -->

          <div class="flex content-end relative lg:w-1/2">
            <img
              class="w-full h-auto object-cover lg:rounded-tr-lg lg:rounded-br-lg"
              src="@/assets/images/icons/runner_1.jpg"
              alt=""
            />
            <div class="absolute bottom-0 left-0 p-5 text-white">
              <h1 class="text-5xl font-extrabold">Unbreak.</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { usePacesStore } from "@/stores/paces";

const paces = usePacesStore();

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
    pace:
      isNaN(paceMinutes) && isNaN(paceSeconds)
        ? 0 + "min/km"
        : `${paceMinutes}'${paceSeconds}" min/km`,
  };
}
onMounted(() => {
  console.log(process.env.NODE_ENV);
  console.log(
    "objParametersRunningCalculator => ",
    objParametersRunningCalculator.value
  );
  console.log("Store =>", paces.paces);
});
</script>

<style scoped>
/* .container { */
/* font-family: "Arial", sans-serif; */
/* margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
} */
/* h1 {
  color: #333;
  text-align: center;
  font-weight: bold;
} */

label {
  display: block;
  font-size: 14px;
  margin-bottom: 5px;
}

/* input {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 10px;
} */

/* button {
  background-color: #00a699;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
  font-size: 16px;
} */

/* button:hover {
  background-color: #007d8c;
} */

/* h2 {
  margin-top: 20px;
  color: #333;
} */
</style>
