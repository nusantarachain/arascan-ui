<template>
  <fvTable id="Accounts" :fields="fields" :rows="rows" class="accounts">
      <template v-slot:field="{field, row}">
          <!-- <div v-for="row in rows" v-bind:key="row['Address']"> -->

                <span v-if="field=='Identicon'">
                    <Identicon :address="row['Address']" :size="50" />
                </span>
                <span v-if="field=='Address'">
                    <NuxtLink class="address" :to="`/account/${row[field]}`">{{row[field]}}</NuxtLink>
                </span>
                <span v-if="field=='Balance'">{{row[field]}}</span>
                <div class="time" v-if="field=='Created At'">
                    <Time :ts="row['ts']" />
                </div>

          <!-- </div> -->
      </template>
  </fvTable>
</template>

<script>
import Time from "~/components/Time";
export default {
  components: {Time},
  data() {
    return {
      sidebar: false,
      docsMenu: false,
      fields: ["Identicon","Address", "Balance", "Created At"],
      rows: [],
    };
  },
  async fetch() {
    this.$axios.$get("/accounts").then(async (d) => {
    //   console.log(d);
      this.rows = d.entries.map(
        ({ _id, balance, created_at_block, created_ts }) => {
          return {
            Address: _id,
            Balance: this.$util.formatBalance(balance.free),
            ts: created_ts
          };
        }
      );
      //   this.rows = [{'Address':'satu', 'Balance':0, 'Created At': 2}];
    });
  },
  methods: {},
};

</script>

<style>
#Accounts.fv-table.accounts tr td,
.fv-table.accounts tr th {
  text-align: left !important;
}
#Accounts.fv-table.accounts tr th:nth-child(1){
    max-width: 50px;
}
#Accounts.fv-table.accounts tr th:nth-child(1),
#Accounts.fv-table.accounts tr td:nth-child(2) {
  text-align: left !important;
}
</style>
