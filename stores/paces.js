import { defineStore } from "pinia";

export const usePacesStore = defineStore("paces", {
  state: () => ({
    paces: [],
  }),
  getters: {
    pacesDistanceSuperiorAtTen(state) {
      return state.paces.filter((pace) => pace.distance > 10);
    },
  },
  actions: {
    //possibiliter de faire du asynx await aégalement
    addPaces(payload) {
      this.paces.push(payload);
    },
  },
});
