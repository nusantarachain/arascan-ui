<template>
  <fvTable :fields="['Number', 'Hash']" :rows="blocks" class="blocks">
    <template v-slot:field="{ field, row }">
      <div v-if="field == 'Number'">
        <NuxtLink class="link" :to="`/block/${row['_id']}`"
          >#{{ row["block_num"] }}</NuxtLink
        >
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
    this.$ws.socket.on("new_block", (message) => {
      console.log("🚀 ~ file: Blocks.vue ~ line 23 ~ this.$ws.socket.on ~ message", message)
      const { data: {best} } = JSON.parse(message);
      this.blocks.splice(0, 0, { block_num: best.number, block_hash: best.hash });
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

