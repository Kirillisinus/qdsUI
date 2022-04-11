<template>
  <div class="write-sentence">
    <div class="up">
      <div class="rounds">1/16</div>
      <img src="../images/logo_transparent.png" alt="logo" id="logo-write" />
      <baseTimer class="base-timer"/>
    </div>
    <div class="middle">
      <div class="middle-logo">
        <img src="../images/pen.png" alt="logo" class="mid-logo" />
        <div class="card">Write a sentence</div>
      </div>
      
      <div class="input-sentence">
        <div class="input">
          <input class="sentence" type="text" />
          <router-link class="write" to="/draw">done</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import baseTimer from "../components/baseTimer.vue";
export default {
  components: {
    baseTimer,
  },
  data() {
    return {
      
    };
  },
  methods: {
  },
};
</script>

<style>
#logo-write {
  display: block;
  margin: auto;
  width: 100px;
}
.middle-logo {
  margin-top: 5em;
}
.mid-logo {
  display: block;
  margin: auto;
  width: 110px;
}

.up {
  display: flex;
  justify-content: space-between;
}

.rounds {
  color: orange;
  font-size: 2.5em;
}

.middle {
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;
}

.card {
  margin-top: 0.5em;
  text-transform: uppercase;
  font-size: 10vh;
  margin-bottom: 10px;
}
.input {
  align-content: center;
  align-items: center;
  display: flex;
  width: 80vw;
  height: 8vh;
  padding-left: 100px;
}
.sentence {
  width: 100vw;
  height: 6vh;
  margin-right: 1em;
  font-size: 40px;
}

.write {
  color: black;
  height: 6vh;
  background-color: orange;
  padding: 10px 40px;
  text-transform: uppercase;
  text-decoration: none;
  font-size: 1.5em;
  box-shadow: 0px 5px 10px rgba(darken(dodgerblue, 40%));
  transition: all 0.3s;
  cursor: pointer;
  border-radius: 5px;
  border-bottom: 4px solid lighten(gray, 70%);
}
.write:hover {
  box-shadow: 0px 15px 25px -5px rgba(darken(dodgerblue, 40%));
  transform: scale(1.03);
}
.write:active {
  box-shadow: 0px 4px 8px rgba(darken(dodgerblue, 30%));
  transform: scale(0.98);
}
</style>
