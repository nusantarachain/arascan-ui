<template>
  <div>
    <div class="fv-row">
      <div class="fv-col-md-2 fv-col-sm-12"  v-if="data != null">
        <div>Block number:</div>
        <h2 v-if="data['_id'] != 0">#{{ data['_id'] }}</h2>
      </div>
      <div class="fv-col-9" v-if="data == null">
          Cannot load block data :(
      </div>
      <div class="fv-col-md-9 fv-col-sm-12" v-if="data != null">
        <div>Hash:</div>
        <strong class="hash">{{ data["block_hash"] }}</strong>

        <div>Parent:</div>
        <strong class="hash">
            <NuxtLink class="link" :to="`/block/${data['block_parent_hash']}`">{{ data["block_parent_hash"] }}</NuxtLink>
        </strong>

        <div>Timestamp:</div>
        <div>
            {{timestamp}}
        </div>

        <div class="divider" />

        <!-- EXTRINSICS -->
        <div><strong>Extrinsics:</strong></div>
        <div class="fv-margin"></div>
        <div class="fv-table title">
          <table>
            <thead>
              <tr>
                <th>method</th>
                <th>args</th>
                <th>signer</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="extr in data.extrinsics" v-bind:key="extr.method.callIndex">
                <td>{{ extr.method.callIndex }}</td>
                <td>{{ extr.method.args }}</td>
                <td>{{ extr.signature.signer.Id }}</td>
              </tr>
            </tbody>
          </table>
        </div>

<!-- <pre>{{data}}</pre> -->
      </div>
    </div>
  </div>
</template>

<script>
// import Identicon from "~/components/Identicon";
// import Time from "~/components/Time";

export default {
//   components: [Identicon, Time],
  data() {
    return {
      num_or_hash: this.$route.params.num_or_hash,
      data: {
          _id: 0,
          block_hash: '-',
          block_parent_hash: '-',
          extrinsics: []
      },
      timestamp: '-'
    };
  },
  mounted(){
      if (this.num_or_hash.length == 48){
          // handle account address
          this.$router.push(`/account/${this.num_or_hash}`);
      }
  },
  async fetch() {
    this.$axios.$get(`/block/${this.num_or_hash}`).then((d) => {
        // console.log(d);
      this.data = d.result;
      const extr = this.data.extrinsics.find(d => d.method.callIndex == "0x0300");
      if (extr){
          this.timestamp = this.$moment(extr.method.args.now);
      }
    });
  },
};
</script>

<style scoped>
strong.address {
  font-size: 1.5em;
}
#Transaction > table > thead > tr > th:nth-child(1),
#Transaction > table > thead > tr > th:nth-child(2),
#Transaction > table > thead > tr > th:nth-child(3) {
  max-width: 10px !important;
  text-align: left !important;
}
div.fv-table table tbody tr td,
div#Transaction tbody tr td {
  text-align: left !important;
}
.balance {
  padding-top: 10px;
}
</style>