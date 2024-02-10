<template>
  <div class="h-full">
    <div class="h-[calc(100%-80px)] overflow-auto w-full" ref="conversationContainer">
      <div class="mx-4 h-[calc(100%-80px)] md:mx-20">
        <h2 class="text-2xl pb-5">Run GPT</h2>

        <div v-for="(prompt, index) in OpenAiGptStore.conversationWithAI" :key="index">
          <div class="font-extrabold">{{ prompt.type === "AI" ? "RunGPT" : "You" }}</div>
          <div class="pb-4">{{ prompt.text }}</div>
        </div>
      </div>
    </div>

    <div class="flex justify-center gap-8">
      <input
        class="shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
        v-model="inputUser"
      />

      <button class="bg-black text-white w-36 h-14 text-2xl font-extrabold" @click="submitPrompt(inputUser)">
        {{ loader === true ? "loading" : "Valider" }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import OpenAI from "openai";
import { useRunGPTStore } from "@/stores/runGPT";
const runtimeConfig = useRuntimeConfig();

const OpenAiGptStore = useRunGPTStore();

const loader = ref(false);
const inputUser = ref("");
const responseRunGPT = ref("");

//A retirer potentiellement et également la ref dans la div
const conversationContainerRef = ref(null);

onMounted(async () => {
  OpenAiGptStore.getAllConversationFromStorage();

  //await scrollToBottom();
});

async function submitPrompt(prompt) {
  loader.value = true;
  inputUser.value = "";

  OpenAiGptStore.addNewPrompt(prompt);
  OpenAiGptStore.addConversation({ type: "user", text: prompt });

  const openai = new OpenAI({
    apiKey: runtimeConfig.public.OPENAI_API_KEY,
    dangerouslyAllowBrowser: true,
  });

  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content: prompt,
      },
    ],
    model: "gpt-3.5-turbo",
  });

  //console.log(completion.choices[0]);
  responseRunGPT.value = completion.choices[0].message.content;
  OpenAiGptStore.addNewGPTResponseOpenAI(responseRunGPT.value);
  OpenAiGptStore.addConversation({ type: "AI", text: responseRunGPT.value });
  OpenAiGptStore.saveAllConversationInStorage();

  loader.value = false;

  //scrollToBottom();
}
//A REVOIR OU REFAIRE
// async function scrollToBottom() {
//   await nextTick();
//   if (conversationContainerRef.value) {
//     conversationContainerRef.value.scrollTop = conversationContainerRef.value.scrollHeight;
//   }
// }
</script>

<style scoped>
/* Ajoutez des styles CSS au besoin */
</style>
