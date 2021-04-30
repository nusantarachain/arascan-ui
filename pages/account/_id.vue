<template>
  <div>
    <div class="fv-row">
      <div class="fv-col-sm-2 fv-col-md-2">
        <Identicon
          :address="address"
          :size="128"
          class="fv-hidden-xs fv-hidden-sm fv-hidden-md"
        />
        <Identicon
          :address="address"
          :size="64"
          class="fv-hidden-lg fv-hidden-xl"
        />
      </div>
      <div class="fv-col-sm-10 fv-col-md-10 fv-padding">
        <div>Address:</div>
        <strong class="address fv-hidden-xs fv-hidden-sm">{{ address }}</strong>
        <strong class="address-sm fv-hidden-md fv-hidden-lg fv-hidden-xl">{{
          address
        }}</strong>

        <div class="balance">
          <div>Balance:</div>
          <strong>{{ balance }}</strong> ARA
        </div>
      </div>
    </div>

    <!-- ON CHAIN IDENTITY --->

    <div class="fv-row">
      <div class="fv-col-md-2 fv-col-md-2 fv-hidden-sm"></div>
      <div class="fv-col-md-10 fv-col-sm-12">
        <h3>On-chain identity:</h3>

        <div class="fv-padding">
          <div class="fv-table title identity fv-padding">
            <table>
              <tbody>
                <tr>
                  <td>Name</td>
                  <td>:</td>
                  <td v-if="identity">{{identity.legal}} ({{identity.display}})</td>
                  <td v-if="identity == null">-</td>
                </tr>
                <tr>
                  <td>Email</td>
                  <td>:</td>
                  <td v-if="identity">{{identity.email ? identity.email : "-"}}</td>
                  <td v-if="identity == null">-</td>
                </tr>
                <tr>
                  <td>Website</td>
                  <td>:</td>
                  <td v-if="identity && identity.web"><a class="link" target="_blank" :href="identity.web">{{identity.web}}</a></td>
                  <td v-if="identity == null || identity.web == null">-</td>
                </tr>
                <tr>
                  <td>Twitter</td>
                  <td>:</td>
                  <td v-if="identity && identity.twitter">
                    <a class="link" target="_blank" :href="'https://www.twitter.com/' + identity.twitter_link">{{identity.twitter}}</a>
                  </td>
                  <td v-if="!identity || !identity.twitter">-</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    <!-- TRANSACTION TRANSFERS --->

    <div class="fv-row fv-hidden-lg fv-hidden-xl">
      <div class="fv-col-md-2 fv-hidden-sm"></div>
      <div class="fv-col-md-10 fv-col-sm-12">
        <h3>Transactions:</h3>

        <fvList parent>
          <fvListItem v-for="tr in transfers" v-bind:key="tr._id">
              
              <div class="fv-row">
                    <div class="fv-col-6">
                    <NuxtLink class="address" :to="'/block/' + tr.block">#{{ tr.block }}</NuxtLink>
                    </div>
                    <div class="fv-col-6">
                        <i :class="'material-icons ' + tr.trf_type">{{tr.trf_icon}}</i>
                            {{ tr.trf_type }}
                    </div>
              </div>

              <div class="fv-row">
                    <div class="fv-col-6">
                        <NuxtLink class="address" :to="`/account/${tr.subaddr}`">{{tr.sortaddr}}</NuxtLink>
                    </div>
                    <div class="fv-col-6">
                        <strong>{{tr.amount}}</strong> ARA
                    </div>
              </div>

          </fvListItem>
        </fvList>

      </div>
    </div>

    <div class="fv-row fv-hidden-xs fv-hidden-sm fv-hidden-md">
      <div class="fv-col-md-2 fv-hidden-sm"></div>
      <div class="fv-col-md-10 fv-col-sm-12">
        <h3>Transactions:</h3>

        <div class="fv-padding">
          <div id="Transaction" class="fv-table title fv-padding">
            <table>
              <thead>
                <tr>
                  <th>block</th>
                  <th>time</th>
                  <th>transfer</th>
                  <th>address</th>
                  <th>amount</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="tr in transfers" v-bind:key="tr._id">
                  <td>
                    <NuxtLink class="link" :to="'/block/' + tr.block">#{{ tr.block }}</NuxtLink>
                  </td>
                  <td>
                    <Time :ts="tr.ts" />
                  </td>
                  <td>
                    <i :class="'material-icons ' + tr.trf_type">{{tr.trf_icon}}</i>
                    {{ tr.trf_type }}
                  </td>
                  <td>
                    <NuxtLink class="address" :to="`/account/${tr.subaddr}`">{{
                      tr.subaddr
                    }}</NuxtLink>
                  </td>
                  <td><strong>{{ tr.amount }}</strong> ARA</td>
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
// import Identicon from "~/components/Identicon";
// import Time from "~/components/Time";

import { ApiPromise, WsProvider } from "@polkadot/api";

export default {
//   components: [Identicon, Time],
  data() {
    return {
      address: this.$route.params.id,
      balance: "0",
      identity: {},
      transfers: [],
    };
  },
  async fetch() {
    this.$axios.$get(`/account/${this.address}`).then((d) => {
      if (!d.result.balance){
        return;
      }
      this.balance = this.$util.formatBalance(d.result.balance.free);
      this.identity = d.result.identity;
      if (this.identity && this.identity['twitter']){
        this.identity['twitter_link'] = this.identity['twitter'].substring(1);
      }
      this.fetchFromChain(this.address);
    });
    this.$axios.$get(`/account/${this.address}/transfers`).then((d) => {
      this.transfers = d.entries.map((d) => {
        d["trf_icon"] =
          d["src"] == this.address ? "call_made" : "call_received";
        d["trf_type"] = d["src"] == this.address ? "to" : "from";
        d["subaddr"] = d["src"] == this.address ? d["dst"] : d["src"];
        d['sortaddr'] = this.$util.addrShort(d.subaddr);
        d["amount"] = this.$util.formatBalance(d["amount"]);
        return d;
      });
    });
  },
  methods: {
    fetchFromChain(address) {
      
      this.$nuchain.api.query.system.account(address).then((account) => {
        this.balance = this.$util.formatBalance(account.data.free);
      });

    }
  }
};
</script>

<style scoped>
strong.address {
  font-size: 1.5em;
}
strong.address-sm {
  font-size: 0.8em;
}
.identity > table > tbody > tr > td:nth-child(1),
.identity > table > tbody > tr > td:nth-child(2),
.identity > table > tbody > tr > td:nth-child(3)
 {
  text-align: left !important;
}
.identity > table > tbody > tr > td:nth-child(2) {
  width: 10px;
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
.material-icons.to {
  color: red;
}
.material-icons.from {
  color: rgb(0, 162, 43);
}
</style>