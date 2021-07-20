<script>
import axios from "axios"

export default {
  name: "Api",
  methods: {
    post_tweet: async (text) => {
      console.log(text)

      let params = new URLSearchParams();
      params.append('text', text);

      const url = `http://localhost:3000/api/post-tweet`
      const res = await axios.post(url, params)
      console.log(res)
    },
    show_tweet(){
      const url = "http://localhost:3000/api/show-tweet"
      axios.get(url,
          {
            headers: {
              "Content-Type": "application/json;charset=utf-8",
              "Access-Control-Allow-Origin": "*",
            },
            withCredentials: true
          }).then(res => {

        console.log(res)
      })
    }
  }
}
</script>

<style scoped>

</style>