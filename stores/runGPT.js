import { defineStore } from "pinia";

export const useRunGPTStore = defineStore("runGPT", {
  state: () => ({
    userPrompts: [],
    AImodelResponse: [],
    conversationWithAI: [],
  }),
  getters: {
    onlyUserPrompt(state) {
      return state.conversationWithAI.filter((text) => text.type === "user");
    },
    onlyAiResponse(state) {
      return state.conversationWithAI.filter((response) => {
        return response.type === "AI";
      });
    },
  },
  actions: {
    addNewPrompt(payload) {
      this.userPrompts.push(payload);
    },
    addNewGPTResponseOpenAI(payload) {
      this.AImodelResponse.push(payload);
    },
    addConversation(payload) {
      this.conversationWithAI.push(payload);
    },
    saveAllConversationInStorage() {
      localStorage.setItem("conversationsGPT", JSON.stringify(this.conversationWithAI));
    },
    getAllConversationFromStorage() {
      const convGPT = localStorage.getItem("conversationsGPT");
      if (convGPT) {
        this.conversationWithAI = JSON.parse(convGPT);
      }
    },
  },
});
