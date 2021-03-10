<template>
  <fvTable
    :fields="['Number', 'Hash']"
    :rows="blocks"
    class="blocks"
  >
    <template v-slot:field="{ field, row }">
      <div v-if="field == 'Number'">
          <NuxtLink class="link" :to="`/block/${row['_id']}`">#{{row['_id']}}</NuxtLink>
      </div>
      <div v-if="field == 'Hash'" class="hash">{{ row["block_hash"] }}</div>
    </template>
  </fvTable>
</template>

<script>
export default {
  data: () => {
    return {
      blocks: [],
    };
  },
  mounted() {
      this.$root.$on("new_block", ({data})=> {
          console.log("on new block");
          console.log(data);
          this.blocks.splice(0, 0, {'_id': data.number, 'block_hash': data.hash});
          this.blocks.pop();
      });
  },
  async fetch() {
    this.$axios.$get(`/blocks`).then((d) => {
      this.blocks = d.entries;
    });
  },
};
</script>

<style scoped>
.hash {
    font-size: 0.8em;
}
</style>

