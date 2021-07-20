<template>
  <div>

    <textarea v-model="text"/>
    <button type="button" @click="post_tweet">投稿</button>
    <Api ref="api"/>

  </div>
</template>

<script>

import Api from "./components/Api";

export default {
  name: 'App',
  components: {
    Api
  }, data() {
    return {
      text: null
    }
  },
  mounted() {
    this.show_tweet()
  },
  methods: {
    show_tweet() {
      this.$refs.api.show_tweet()
    },
    post_tweet() {
      this.$refs.api.post_tweet(this.text)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
