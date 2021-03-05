<template>
  <div class="time">
    <div>{{ rel }}</div>
    <small>{{ abs }}</small>
  </div>
</template>


<script>
export default {
    props: ['ts'],
    data(){
        return {
            abs: this.$moment(this.ts),
            rel: this.$moment(this.ts).fromNow()
        }
    }
}
</script>

<style scoped>
div.time small {
    color: #9a9a9a;
}
</style>