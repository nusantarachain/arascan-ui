<template>
  <fvHeader>
    <!-- <fvButton class="fv-margin-end fv-hidden-lg fv-hidden-xl">
      <i class="material-icons">menu</i>
    </fvButton> -->
    <div class="fv-margin-end logo-placeholder">
      <NuxtLink to="/"><AraLogo /></NuxtLink>
    </div>
    <div class="fv-grow">
      <div>
        <h1 class="fv-hidden-xs left">
          <NuxtLink class="fv-hidden-sm" to="/">ARAScan</NuxtLink>
        </h1>
        <span class="fv-hidden-sm fv-hidden-xs">
          <div class="clear"></div>
          Nuchain Network Explorer
        </span>
      </div>
    </div>

    <div class="fv-grow">
      <input
        class="search-box fv-input fv-size-md fv-grow"
        placeholder="Search block or hash..."
        v-on:keyup="doSearch"
      />
      <span class="fv-padding-start" />
    </div>
    <fvButton class="fv-margin-end fv-hidden-xs fv-hidden-sm fv-hidden-md">
      <i class="material-icons">home</i>
      <NuxtLink to="/"
        ><span class="fv-hidden-xs fv-hidden-sm"> Home </span></NuxtLink
      >
    </fvButton>
  </fvHeader>
</template>


<script>
// import AraLogo from "~/components/AraLogo.vue";

export default {
  //   components: {AraLogo},
  methods: {
    toggleSidebar() {
      this.sidebar = !this.sidebar;
    },
    toggleDocsMenu() {
      setTimeout(() => {
        this.docsMenu = !this.docsMenu;
      });
    },
    doSearch(ev) {
      // console.log(d);
      if (ev.keyCode == 13) {
        // alert(ev.target.value);
        this.$router.push(`/block/${ev.target.value}`);
      }
    },
  },
};
</script>

<style scoped>
.logo-placeholder {
  width: 60px;
}
button.selected {
  background-color: rgb(255, 253, 232) !important;
}
.search-box {
  min-width: 300px;
}
</style>