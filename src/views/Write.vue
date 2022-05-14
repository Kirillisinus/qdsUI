<template>
  <div class="write-player-sentence">
    <div class="up">
      <div class="rounds">{{ getCurRound }}/{{ getNumRounds }}</div>
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
        <!--<img src="../images/pen.png" alt="logo" class="mid-logo" />-->
        <canvas id="drawed-img">Обновите браузер!</canvas>
        <div class="card">Write a sentence</div>
      </div>

      <div class="input">
        <input class="sentence" type="text" v-model="sentence" />
        <router-link id="wr-bt" class="write" to="#" @click="done"
          >done</router-link
        >
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

      this.$store.dispatch("setRound");
      this.$router.push("/" + args[0].next_page);
    }),
      this.$root.socket.on("timeIsUp", () => {
        this.ready = true;

        this.$root.socket.emit("writeSentence", this.sentence);
      });
  },
  mounted() {
    this.$forceUpdate();
  },
  beforeUnmount() {
    TweenMax.pauseAll();
  },
  computed: {
    ...mapGetters(["getNumRounds", "getCurRound"]),
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
  width: 100%;
}

.card {
  margin-top: 0.5em;
  text-transform: uppercase;
  font-size: 8vh;
  margin-bottom: 10px;
}
.input {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 8vh;
}
.sentence {
  width: 60vw;
  height: 6vh;
  margin-right: 1em;
  font-size: 36px;
}

.write {
  color: black;
  text-align: center;
  max-height: 6vh;
  background-color: orange;
  padding: 10px 40px;
  text-transform: uppercase;
  text-decoration: none;
  font-size: 1em;
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
