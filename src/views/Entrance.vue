<template>
  <Loader id="load"></Loader>
  <div class="entrance">
    <div id="header">
      <img src="../images/logo_transparent.png" alt="logo" id="logo" />
    </div>

    <span class="invite">Представьтесь, пожалуйста </span>
    <span class="wrong-name">Name has already taken</span>
    <input
      type="text"
      class="input-name"
      placeholder="Гость123123123"
      v-model="name"
    />
    <router-link class="button continue" @click="saveName" to="#">
      <div>Продолжить как {{ name }}</div>
      <i class="icon-arrow-right"></i>
    </router-link>
    <router-link class="button create-room" to="#">
      <div>Cоздать комнату</div>
      <i class="icon-arrow-right"></i>
    </router-link>
  </div>
</template>

<script>
import axios from "axios";
import Loader from "../components/loader.vue";
export default {
  components: {
    Loader,
  },
  data() {
    return {
      name: (String = "Гость123123123"),
    };
  },
  mounted() {
    if (localStorage.name) {
      this.name = localStorage.name;
    }
  },
  methods: {
    async saveName() {
      let loader = document.getElementById("load");
      let body = document.getElementsByClassName("entrance")[0];
      /*let content = document.getElementById("conent");
      content.style.border = "none";*/
      body.style.display = "none";
      loader.style.display = "block";
      let url = "https://qds-serv.herokuapp.com/login/" + this.name;
      let resp = "notok";

      await axios.get(url).then((response) => {
        resp = response.data.result;
        loader.style.display = "none";
        body.style.display = "flex";
        //content.style.border = "border: 4px #f5d731f1 solid";
      });

      if (resp != "ok") {
        let warn = document.getElementsByClassName("wrong-name")[0];
        let input = document.getElementsByClassName("input-name")[0];

        warn.style.display = "inline-block";
        input.style.border = "1px solid red";
        return;
      }
      localStorage.name = this.name;
      this.$router.push("/lobby");
    },
  },
};
</script>

<style>
#load {
  display: none;
  position: absolute;
  top: 50%;
  left: 50%;
}
#logo {
  display: block;
  margin: auto;
  width: 170px;
}

.entrance {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.invite {
  font-size: 1.8em;
}

.wrong-name {
  display: none;
  color: red;
  font-size: 1.8em;
}

.input-name {
  display: block;
  max-width: 30em;
  height: calc(2.25rem + 2px);
  padding: 0.375rem 0.75rem;
  font-family: inherit;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #bdbdbd;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  margin-top: 1em;
}

.button {
  color: inherit;
  text-decoration: inherit;
  font-size: 20px;
  font-weight: 200;
  letter-spacing: 1px;
  padding: 13px 30px 13px;
  outline: 0;
  border: 1px solid black;
  cursor: pointer;
  position: relative;
  background-color: rgba(0, 0, 0, 0);
  margin-top: 1.5em;
}

.button i {
  opacity: 0;
  font-size: 13px;
  transition: 0.2s;
  position: absolute;
  right: 10px;
  top: 21px;
  transition: transform 1;
}

.button div {
  transition: transform 0.8s;
}

.button:hover div {
  transform: translateX(-6px);
}

.button::after {
  content: "";
  background-color: #e8c446;
  width: 100%;
  z-index: -1;
  position: absolute;
  height: 100%;
  top: 7px;
  left: 7px;
}

.button:hover i {
  opacity: 1;
  transform: translateX(-6px);
}
</style>