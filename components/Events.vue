<template>
  <fvTable :fields="fields" :rows="rows" class="events">
    <template v-slot:field="{ field, row }">
      <span v-if="field == 'block'">
        <NuxtLink class="link" :to="`/block/${row[field]}`">{{
          row[field]
        }}</NuxtLink>
      </span>
      <span v-if="field != 'block'">
          {{row[field]}}
      </span>
    </template>
  </fvTable>
</template>


<script>
export default {
  data: () => {
    return {
      fields: ["block", "section", "method", "index"],
      rows: [],
    };
  },
  async fetch() {
    this.$axios.$get("/events").then(async (d) => {
      this.rows = d.entries.map((d) => {
        d["index"] = d["extrinsic_index"];
        return d;
      });
    });
  },
};
</script>

<style scoped>
</style>

