<template>
  <div class="layout_wrapper">
    <!-- <div v-if="currentWidth > 700" class="header">
      <div class="title_app" @click="$router.push('/')">
        <div class="title">Unbreak.</div>
      </div>
      <div>Calcul d'allure</div>
    </div> -->
    <div class="h-20 bg-black text-white flex items-center">
      <div class="text-5xl font-extrabold pl-5">Unbreak.</div>
      <!-- <div class="burger_menu_wrapper" @click="openedMobileMenu()">
        <img
          v-if="!menuMobileIsOpened"
          class="burger_icon"
          src="@/assets/images/icons/menu_burger.png"
          alt=""
        />
        <img
          v-else
          class="close_icon"
          src="@/assets/images/icons/fermer.png"
          alt=""
        />
      </div> -->
    </div>
    <div
      class="modal_menu"
      :class="[menuMobileIsOpened ? 'active' : 'desactive']"
    >
      libellé du futur menu à définir
    </div>
    <slot />
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";

const currentWidth = ref("");
const menuMobileIsOpened = ref(false);

const openedMobileMenu = () => {
  menuMobileIsOpened.value = !menuMobileIsOpened.value;
  console.log(menuMobileIsOpened.value);
};

function obtenirLargeurEcran() {
  var widthScreen =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

  return widthScreen;
}

onMounted(() => {
  currentWidth.value = obtenirLargeurEcran();
  console.log("currentWidth : => ", currentWidth.value);
  window.addEventListener("resize", () => {
    currentWidth.value = obtenirLargeurEcran();
    console.log("currentWidth : => ", currentWidth.value);
  });
});
watchEffect(() => {
  // console.log(currentWidth.value);
});
</script>

<style>
.layout_wrapper {
  height: 100vh;
  width: 100vw;
  position: relative;
}
.header_mobile {
  height: 80px;
  background-color: #00a699;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 40px;
}

.burger_menu_wrapper {
  width: 50px;
  height: 50px;
  cursor: pointer;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.burger_menu_wrapper:hover {
  background-color: #007d8c;
}
.burger_icon {
  width: 30px;
  filter: invert(99%) sepia(3%) saturate(0%) hue-rotate(193deg) brightness(106%)
    contrast(102%);
}
.close_icon {
  width: 40px;
  filter: invert(99%) sepia(3%) saturate(0%) hue-rotate(193deg) brightness(106%)
    contrast(102%);
}
.title_mobile_app {
  /* font-weight: bold;
  font-size: 28px; */
}

.modal_menu {
  position: fixed;
  width: 60vw;
  height: 100vh;
  background-color: white;
  transition: right 0.3s;
}

.modal_menu.active {
  right: 0;
  transition: right 0.3s;
}

.modal_menu.desactive {
  right: -60vw;
  transition: right 0.3s;
}

@media (min-width: 701px) {
  .header {
    height: 100px;
    background-color: #00a699;
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 40px;
  }
  .title_app {
    font-size: 46px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    width: 256px;
    cursor: pointer;
    font-weight: bold;
  }
  .dot_logo {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    border: 1px solid white;
    color: white;
    background-color: white;
    position: absolute;
    /* right: 12%;
  bottom: 20%; */
    right: 75px;
    bottom: 16%;
  }
  .modal_menu {
    display: none;
  }
}
</style>
