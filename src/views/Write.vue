<template>
  <div class="write-player-sentence">
    <div class="up">
      <div class="rounds">{{ getNumRounds }}/16</div>
      <img src="../images/logo_transparent.png" alt="logo" id="logo-write" />
      <baseTimer id="timer" class="base-timer"></baseTimer>
      <img
        src="../images/check.png"
        alt="ready"
        class="ready-icon"
        id="rdy-i"
      />
    </div>
    <div class="middle">
      <div class="middle-logo">
        <img src="../images/pen.png" alt="logo" class="mid-logo" />
        <div class="card">Write a sentence</div>
      </div>

      <div class="input-sentence">
        <div class="input">
          <input class="sentence" type="text" v-model="sentence" />
          <router-link id="wr-bt" class="write" to="#" @click="done"
            >done</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import baseTimer from "../components/baseTimer.vue";
export default {
  data() {
    return {
      sentence: "",
      ready: false,
    };
  },
  components: {
    baseTimer,
  },
  methods: {
    done() {
      document.getElementById("rdy-i").style.display = "block";
      let w_btn = document.getElementById("wr-bt");
      w_btn.style.backgroundColor = "gray";

      TweenMax.pauseAll();
      let timer = document.getElementById("timer");
      timer.style.display = "none";

      if (!this.ready) {
        this.$root.socket.emit("writeSentence", this.sentence);
      }

      this.ready = true;
    },
  },
  created() {
    this.$root.socket.on("goNextMsg", (...args) => {
      if (!this.ready) {
        this.$root.socket.emit("writeSentence", this.sentence);
      }

      this.$store.dispatch("setTimeLimit", args[0].round_time);

      this.$router.push("/" + args[0].next_page);
    });
  },
  mounted() {
    this.$forceUpdate();
  },
  beforeUnmount() {
    TweenMax.pauseAll();
  },
  computed: {
    ...mapGetters(["getNumRounds"]),
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
  font-size: 8vh;
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
.ready-icon {
  display: none;
  height: 3em;
  width: 3em;
}
</style>
