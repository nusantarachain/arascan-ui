<template>
  <div>
    <div class="content">
      <div class="fv-row">
        <div class="fv-col-lg-2 fv-col-md-4 fv-col-sm-6">
          <div
            class="fv-border shadow radius fv-margin-top fv-margin-bottom fv-padding notes"
          >
            <div>Finalized:</div>
            <div class="finalized num">{{ finalizedBlocks }}</div>
          </div>
        </div>

        <div class="fv-col-lg-2 fv-col-md-4 fv-col-sm-6">
          <div
            class="fv-border shadow radius fv-margin-top fv-margin-bottom fv-padding notes"
          >
            <div>Events:</div>
            <div class="finalized num">
              <NuxtLink to="/events">{{ events }}</NuxtLink>
            </div>
          </div>
        </div>

        <div class="fv-col-md-2 fv-col-sm-6">
          <div
            class="fv-border shadow radius fv-margin-top fv-margin-bottom fv-padding notes"
          >
            <div>Accounts:</div>
            <div class="finalized num">
              <NuxtLink to="/accounts">{{ accounts }}</NuxtLink>
            </div>
          </div>
        </div>

        <div class="fv-col-md-2 fv-col-sm-6">
          <div
            class="fv-border shadow radius fv-margin-top fv-margin-bottom fv-padding notes"
          >
            <div>Validators:</div>
            <div class="finalized num">{{ validators.length }}</div>
          </div>
        </div>
        <div class="fv-col-md-2 fv-hidden-xs fv-hidden-sm fv-hidden-md">
          <div
            class="fv-border shadow radius fv-margin-top fv-margin-bottom fv-padding notes"
          >
            <div>Session:</div>
            <div class="finalized num">{{ session }}</div>
          </div>
        </div>
        <div class="fv-col-md-2 fv-hidden-xs fv-hidden-sm fv-hidden-md">
          <div
            class="fv-border shadow radius fv-margin-top fv-margin-bottom fv-padding notes"
          >
            <div>Era:</div>
            <div class="finalized num">{{ era }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="fv-row">
      <div class="fv-col-lg-6 fv-col-md-12">
        <h3>Blocks:</h3>
        <Blocks />
      </div>

      <div class="fv-col-lg-6 fv-col-md-12">
        <h3>Events:</h3>
        <Events />
      </div>
    </div>
  </div>
</template>

<script>
// const WebSocket = require('ws');
// const wsc = new WebSocket("ws://localhost:8080");
export default {
  components: {},
  data() {
    return {
      accounts: 0,
      events: 0,
      finalizedBlocks: 0,
      session: 0,
      era: 0,
      validators: [],
    };
  },
  async fetch() {
    this.refreshData();
    // setTimeout(this.refreshData, 5000);
  },
  mounted() {
    //   console.log("mounted");
    // this.$ws.send("hello there");
    this.$root.$on("stats-update", (d)=>{
        console.log("stats updated");
        // console.log(d);
        this.updateStatsData(d.data);
    });
  },
  methods: {
    refreshData() {
      this.$axios.$get("/stats").then((d) => {
        let result = d.result;
        this.accounts = result.accounts;
        this.events = result.events;
        this.finalizedBlocks = result.finalized_block;
        this.session = result.session;
        this.validators = result.validators;
        this.era = result.era;
      });
    },
    updateStatsData(data){
        this.accounts = data.accounts;
        this.events = data.events;
        this.finalizedBlocks = data.finalized_block;
        this.session = data.session;
        this.validators = data.validators;
        this.era = data.era;
    }
  },
};
</script>

<style scoped>
.sidebar {
  min-width: 300px;
}
.content {
  margin: 0 auto;
  max-width: 1024px;
}
.num {
  text-align: center;
  font-size: 2.3em;
}
</style>
