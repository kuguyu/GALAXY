<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import axios from "axios";
export default {
  name: "Home",
  components: {
    HelloWorld
  },
  mounted() {
    this.login();
    this.list();
  },
  methods: {
    login() {
      axios.post("/login").then(response => {
        if (response.data) {
          // console.log(response.data)
        }
      });
      this.$api.upload().then(res => {
        console.log(res, 1);
      });
    },
    list() {
      axios.post("/list").then(response => {
        if (response.data) {
          console.log(response.data);
        }
      });
    }
  }
};
</script>
