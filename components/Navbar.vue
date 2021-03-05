<template>
  <fvHeader>
    <fvButton
      class="fv-margin-end fv-hidden-lg fv-hidden-xl"
      @click="toggleSidebar"
    >
      <i class="material-icons">menu</i>
    </fvButton>
    <div class="fv-margin-end">
      <AraLogo />
    </div>
    <div class="fv-grow">
        <div>
            <h1 class="fv-hidden-xs left">
                <NuxtLink to="/">AraScan</NuxtLink>
            </h1>
        <span class="fv-hidden-sm fv-hidden-xs">
            <div class="clear"></div>
          Nuchain Network Explorer
        </span>
        </div>
    </div>
    <fvButton class="fv-margin-end" :class=" this.$route.path == '/accounts' ? 'selected' : '' ">
      <i class="material-icons">people</i>
      <NuxtLink to="/accounts"
        ><span class="fv-hidden-xs fv-hidden-sm"> Accounts </span></NuxtLink
      >
      <!-- <fvMenu v-model="docsMenu">
            <div>
              <div class="fv-border-bottom fv-padding">
                <label class="fv-text-light"> <i class="material-icons">list</i> Documents </label>
              </div>
              <div class="fv-padding">
                <a class="fv-link fv-block fv-margin-bottom" target="_blank" rel="noopener noreferrer" href="https://www.framevuerk.com/"><i class="material-icons">link</i> Framevuerk Docs</a>
                <a class="fv-link fv-block fv-margin-bottom" target="_blank" rel="noopener noreferrer" href="https://github.com/framevuerk/framevuerk"><i class="material-icons">link</i> Framevuerk on Github</a>
                <a class="fv-link fv-block fv-margin-bottom" target="_blank" rel="noopener noreferrer" href="https://nuxtjs.org/"><i class="material-icons">link</i> Nuxt Docs</a>
                <a class="fv-link fv-block" target="_blank" rel="noopener noreferrer" href="https://github.com/nuxt/nuxt.js"><i class="material-icons">link</i> Nuxt on GitHub</a>
              </div>
            </div>
          </fvMenu> -->
    </fvButton>
    <fvButton class="fv-margin-end" @click.prevent="toggleDocsMenu">
      <i class="material-icons">notification_important</i>
      <NuxtLink to="/events"
        ><span class="fv-hidden-xs fv-hidden-sm"> Events </span></NuxtLink
      >
    </fvButton>
    <fvButton class="fv-margin-end" @click.prevent="toggleDocsMenu">
      <i class="material-icons">assignment</i>
      <NuxtLink to="/validators"
        ><span class="fv-hidden-xs fv-hidden-sm"> Validators </span></NuxtLink
      >
    </fvButton>
    <div class="fv-grow"></div>
  </fvHeader>
</template>


<script>
import AraLogo from "~/components/AraLogo.vue";

export default {
  components: [AraLogo],
  methods: {
    toggleSidebar() {
      this.sidebar = !this.sidebar;
    },
    toggleDocsMenu() {
      setTimeout(() => {
        this.docsMenu = !this.docsMenu;
      });
    },
  },
};
</script>

<style scoped>
button.selected {
    background-color: rgb(255, 253, 232) !important;
}
</style>