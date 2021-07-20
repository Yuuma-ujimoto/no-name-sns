<template>
  <div class="post-box">
    <p>{{text}}</p>
  </div>
</template>

<script>
export default {
  name: "Post",
  props:{
    text:String,
    created_at:Date
  }
}
</script>

<style scoped>

</style>