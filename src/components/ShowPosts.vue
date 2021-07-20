<template>
  <div v-for="post in posts" v-bind:key="posts._id">
  </div>
</template>

<script>
export default {
  name: "ShowPosts",
  props:{
    posts:Array
  }

}
</script>

<style scoped>

</style>