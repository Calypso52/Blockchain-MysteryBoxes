<template>
  <div class="hello">
    <h1 v-show="isConnected">{{ account }}</h1>
    <button v-show="!isConnected" @click="connect">Connect Ale</button>
    <div style="color: #f00" v-show="isConnected">Connect Success!</div>
    <button v-show="isConnected" @click="getLikeStatus">click to get like status</button>
  </div>
</template>

<script>

import services from "@/api";

export default {
  data() {
    return {
      account: "",
      isConnected: false
    };
  },
  watch: {
    "$store.state.dapp": {
      handler(val) {
        this.account = val.account;
        this.isConnected = val.isConnected;
      },
      immediate: true,
      deep: true,
    },
  },
  methods: {
    getLikeStatus() {
      services.getLikeStatus();
    },
    connect() {
      window["aleereum"] && window["aleereum"].connect();
    },
    approveMoney() {
      services.approve(100).then((res) => {
        console.log('***approve:', res);
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
