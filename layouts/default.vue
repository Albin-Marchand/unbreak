<template>
  <div class="h-screen">
    <div class="h-20 bg-black text-white flex justify-between items-center">
      <div
        class="text-5xl font-extrabold pl-5 cursor-pointer"
        @click="
          () => {
            $router.push('/');
            openedMobileMenu();
          }
        "
      >
        Unbreak.
      </div>

      <div class="hidden md:flex pr-5 justify-center gap-10">
        <div
          class="hover:text-slate-400 cursor-pointer font-bold"
          v-for="(item, index) in listOfMenuLibelle"
          :key="index"
          @click="
            () => {
              $router.push(item.route);
            }
          "
        >
          {{ item.libelle }}
        </div>
      </div>

      <div
        class="md:hidden cursor-pointer rounded-full flex items-center justify-center pr-5"
        @click="openedMobileMenu()"
      >
        <img v-if="!menuMobileIsOpened" class="burger_icon" src="@/assets/images/icons/menu_burger.png" alt="" />
        <img v-else class="close_icon" src="@/assets/images/icons/fermer.png" alt="" />
      </div>
    </div>

    <div
      class="md:hidden z-50 flex flex-col items-start gap-7 px-5 py-5"
      :class="
        menuMobileIsOpened
          ? 'fixed w-full h-screen bg-gray-50 transition-right duration-300 right-0 '
          : 'fixed w-full h-screen bg-gray-50 transition-right duration-300 right-[-100vw] '
      "
    >
      <div
        class="cursor-pointer hover:text-slate-400 text-lg font-bold"
        v-for="(item, index) in listOfMenuLibelle"
        :key="index"
        @click="
          () => {
            $router.push(item.route);
            openedMobileMenu();
          }
        "
      >
        {{ item.libelle }}
      </div>
    </div>
    <slot />
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";

const router = useRouter();

const currentWidth = ref("");
const menuMobileIsOpened = ref(false);
const listOfMenuLibelle = ref([
  { libelle: "Calcule ton allure", route: "/calcul-allure-course" },
  { libelle: "Calcule ta vitesse / temps moyen", route: "/calcul-vitesse-temps-moyen-course" },
]);

const openedMobileMenu = () => {
  menuMobileIsOpened.value = !menuMobileIsOpened.value;
  console.log(menuMobileIsOpened.value);
};

function obtenirLargeurEcran() {
  var widthScreen = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

  return widthScreen;
}

onMounted(() => {
  currentWidth.value = obtenirLargeurEcran();

  window.addEventListener("resize", () => {
    currentWidth.value = obtenirLargeurEcran();
  });

  console.log("router: => ", router.currentRoute.value);
});
watchEffect(() => {});
</script>

<style>
.burger_icon {
  width: 30px;
  filter: invert(99%) sepia(3%) saturate(0%) hue-rotate(193deg) brightness(106%) contrast(102%);
}
.close_icon {
  width: 40px;
  filter: invert(99%) sepia(3%) saturate(0%) hue-rotate(193deg) brightness(106%) contrast(102%);
}
</style>
