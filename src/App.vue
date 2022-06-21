<template>
  <slot></slot>
  <div id="content">
    <router-view />
  </div>
  <div id="footer"></div>
</template>

<script>
import { Vue } from "vue";
export default {
  data() {
    return {
      socket: 2,
    };
  },
  created() {
    this.socket = io("https://qds-serv.herokuapp.com/");
  },
  errorHandler(err, vm, info) {
    alert(`Error: ${err.toString()}\nInfo: ${info}`);
  },
  errorCaptured(err, vm, info) {
    if (info === "render function") {
      //alert(`cat EC: ${err.toString()}\ninfo: ${info}`);
      //setTimeout(() => {
      window.location.reload();
      //}, 50);
    }

    return false;
  },
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "Neucha", cursive;
}

body {
  background-color: #fff6e1;
}

#content {
  margin: 1em auto;
  padding: 20px;
  border: solid black;
  border-color: #ffaf3b;
  border: 4px #f5d731f1 solid;
  box-shadow: inset 0px 2px 0px 0px rgb(255 255 255 / 15%),
    0px 3px 0px 0px rgb(255 255 255 / 15%);
  border-radius: 12px;
  max-width: 80vw;
  min-height: 90vh;
}

@media (max-width: 877px) {
  #content {
    max-width: 50em;
    margin: 30px 2em;
  }
}
</style>