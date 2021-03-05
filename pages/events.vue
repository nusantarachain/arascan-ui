<template>
  <fvTable :fields="fields" :rows="rows" class="events">
      
  </fvTable>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      sidebar: false,
      docsMenu: false,
      fields: ["block","section", "method", "index"],
      rows: [],
    };
  },
  async fetch() {
    this.$axios.$get("/events").then(async (d) => {
    //   console.log(d);
      this.rows = d.entries.map((d) => {
          d['index'] = d['extrinsic_index'];
          return d;
      });
      //   this.rows = [{'Address':'satu', 'Balance':0, 'Created At': 2}];
    });
  },
  methods: {},
};

</script>

<style scoped>
.fv-table.events tr td,
.fv-table.events tr th {
  text-align: left;
}
.fv-table.events tr th:nth-child(2),
.fv-table.events tr td:nth-child(2) {
  text-align: center;
}
div.time small {
    color: #9a9a9a;
}
</style>
