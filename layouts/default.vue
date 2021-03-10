<template>
  <fvMain>
    <fvContent>
      <Navbar />
      <div class="content fv-padding">
          <nuxt />
      </div>
    </fvContent>
  </fvMain>
</template>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 15px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

html,
body,
#__nuxt,
#__layout {
  min-height: 100%;
  height: 100%;
  position: initial;
}

body .material-icons {
  vertical-align: middle;
}

.hash {
    font-family: consolas, menlo, monaco, monospace;
}

a.address {
    color: rgb(29, 90, 195) !important;
}
.address {
    font-family: consolas, menlo, monaco, monospace;
}

.mono-font {
    font-family: consolas, menlo, monaco, monospace;
}

a.link {
    color: rgb(29, 90, 195) !important;
}

.divider {
  flex-grow: 1;
  border-bottom: 1px solid rgb(213, 213, 213);
  margin: 5px;
  margin-bottom: 20px;
}

.radius {
    border-radius: 4px!important;
}
.border {
    border: 1px solid #e0e0e0!important;
}
.shadow {
    -webkit-box-shadow: 0 3px 3px rgba(0,0,0,.05)!important;
    box-shadow: 0 3px 3px rgba(0,0,0,.05)!important;
}
</style>
