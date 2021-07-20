<script>
import axios from "axios"

export default {
  name: "Api",
  methods: {
    sayHello(){
      alert("hello")
    },
    post_tweet: async (text) => {
      const url = `http://localhost:3000/api/post-tweet`
      const res = await axios.post(url, {
        text: text
      })
      console.log(res)
    },
    show_tweet: async () => {
      const url = "http://localhost:3000/api/show-tweet"
      const res = await axios.get(url)
      console.log(res)
    }
  }
}
</script>

<style scoped>

</style>