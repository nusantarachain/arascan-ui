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

.content {
  /* margin: 0 auto; */
  /* max-width: 1024px; */
}

.hash {
    font-family: consolas, menlo, monaco, monospace;
}

a.address {
    color: rgb(29, 90, 195) !important;
    font-family: consolas, menlo, monaco, monospace;
}
</style>
