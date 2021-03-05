<template>

    <div>
        <h2>{{this.$route.path}}</h2>
        <fvTable :fields="fields" :rows="rows" class="validators">
      <template v-slot:field="{field, row}">
            <span v-if="field=='Identicon'">
                <Identicon :address="row['Address']" :size="50" />
            </span>
            <span v-if="field=='Address'">
                <NuxtLink class="address" :to="`/account/${row[field]}`">{{row[field]}}</NuxtLink>
            </span>
            <span v-if="field=='Balance'">{{row[field]}}</span>
            <div class="time" v-if="field=='Created At'">
                <div>{{row[field][0]}}</div>
                <small>{{row[field][1]}}</small>
            </div>

      </template>
  </fvTable>
    </div>
  
</template>

<script>
export default {
  components: {},
  data() {
    return {
      sidebar: false,
      docsMenu: false,
      fields: ["Identicon","Address", "Balance", "Created At"],
      rows: [],
    };
  },
  async fetch() {
    this.$axios.$get("/validators").then(async (d) => {
    //   console.log(d);
      this.rows = d.entries.map(
        ({ _id, balance, created_at_block, created_ts }) => {
          return {
            Address: _id,
            Balance: this.$util.formatBalance(balance.free),
            "Created At": [
                this.$moment(created_ts).fromNow(),
                this.$moment(created_ts),
            ],
          };
        }
      );
      //   this.rows = [{'Address':'satu', 'Balance':0, 'Created At': 2}];
    });
  },
  methods: {},
};

</script>

<style scoped>
.fv-table tr td,
.fv-table tr th {
  text-align: left;
}
.fv-table tr th:nth-child(2),
.fv-table tr td:nth-child(2) {
  text-align: center;
}
div.time small {
    color: #9a9a9a;
}
</style>
