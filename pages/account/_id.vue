<template>
  <div>
    <div class="fv-row">
      <div class="fv-col-sm-2 fv-col-md-2">
        <Identicon :address="address" :size="128" />
      </div>
      <div class="fv-col-sm-10 fv-col-md-10 fv-padding">
          <div>Address:</div>
        <strong class="address">{{ this.$route.params.id }}</strong>

        <div class="balance">
            <div>Balance:</div>
            <strong>{{balance}}</strong>
        </div>
      </div>
    </div>

    <!-- ON CHAIN IDENTITY --->

    <div class="fv-row">
      <div class="fv-col-2"></div>
      <div class="fv-col-9">
        <h3>On-chain identity:</h3>

        <div class="fv-padding">
          <div class="fv-table title identity fv-padding">
            <table>
              <tbody>
                <tr>
                  <td>Name</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>Email</td>
                  <td>-</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>


    <!-- TRANSACTION TRANSFERS --->

    <div class="fv-row">
      <div class="fv-col-2"></div>
      <div class="fv-col-9">
        <h3>Transaction:</h3>

        <div class="fv-padding">
          <div id="Transaction" class="fv-table title identity fv-padding">
            <table>
                <thead>
                    <tr>
                        <th>block</th>
                        <th>time</th>
                        <th>transaction</th>
                        <th>address</th>
                        <th>amount</th>
                    </tr>
                </thead>
              <tbody>
                <tr v-for="tr in transfers" v-bind:key="tr._id">
                    <td>{{tr.block}}</td>
                    <td>
                        <Time :ts="tr.ts" />
                    </td>
                    <td>{{tr.txtype}}</td>
                    <td>
                        <NuxtLink class="address" :to="`/account/${tr.subaddr}`">{{tr.subaddr}}</NuxtLink>
                    </td>
                    <td>{{tr.amount}}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
import Identicon from "~/components/Identicon";
import Time from "~/components/Time";

export default {
  components: [Identicon, Time],
  data() {
    return {
      address: this.$route.params.id,
      balance: '0',
      transfers: []
    };
  },
  async fetch(){
      this.$axios.$get(`/account/${this.address}`).then((d)=>{
          this.balance = this.$util.formatBalance(d.result.balance.free);
      });
      this.$axios.$get(`/account/${this.address}/transfers`).then((d)=>{
          this.transfers = d.entries.map((d)=>{
              d['txtype'] = (d['src'] == this.address) ? 'transfer to' : 'transfer from';
              d['subaddr'] = (d['src'] == this.address) ? d['dst'] : d['src'];
              d['amount'] = this.$util.formatBalance(d['amount']);
              return d;
          });
      });
  }
};
</script>

<style scoped>
strong.address {
    font-size: 1.5em;
}
#Transaction > table > thead > tr > th:nth-child(1),
#Transaction > table > thead > tr > th:nth-child(2) ,
#Transaction > table > thead > tr > th:nth-child(3)
{
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