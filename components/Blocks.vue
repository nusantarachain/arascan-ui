<template>
  <fvTable
    :fields="['Number', 'Hash', 'Validator']"
    :rows="blocks"
    class="blocks"
  >
    <template v-slot:field="{ field, row }">
      <div v-if="field == 'Number'">{{ row["_id"] }}</div>
      <div v-if="field == 'Hash'" class="hash">{{ row["block_hash"] }}</div>
      <div v-if="field == 'Validator'">-</div>
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
  async fetch() {
    this.$axios.$get(`/blocks`).then((d) => {
      console.log(d);
      this.blocks = d.entries;
    });
  },
};
</script>

<style scoped>

</style>

