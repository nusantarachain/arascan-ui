<template>
    
    <div class="content fv-padding">
        <div class="fv-margin-bottom fv-hidden-xs fv-hidden-sm" />
        <h2>Blocks:</h2>
        <!-- <div class="content__header fv-margin-bottom fv-padding">
          <div class="fv-padding fv-margin-bottom fv-text-center">
            <Logo />
          </div>
          <p>
            <b>Framevuerk</b> is a Fast, Responsive, Without Dependencies, Both Direction Support and Configurable UI Framework based on <b>Vue.js</b>.
            In this template we just add it to <b>Nuxt.js</b> and put some of most usable component inside a form to show you how it's look like.
          </p>
        </div>
        <div class="content__body fv-border fv-radius fv-shadow">
          <label class="fv-control-label fv-padding"> <i class="material-icons">person_add</i> Create New User </label>
          <div class="fv-padding container">
            
          </div>
        </div> -->
        <div class="fv-padding">
            <Blocks />
        </div>
    </div>
</template>

<script>
export default {
  components: {
    
  },
  data () {
    return {
      sidebar: false,
      docsMenu: false,
    }
  },
  methods: {
    
  }
}
</script>

<style scoped>
.sidebar {
  min-width: 300px;
}
</style>
