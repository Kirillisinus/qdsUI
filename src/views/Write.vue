<template>
  <div class="write-player-sentence">
    <div class="up">
      <div class="rounds">{{ getCurRound }}/{{ getNumRounds }}</div>
      <img src="../images/logo_transparent.png" alt="logo" id="logo-write" />
      <baseTimer id="timer" class="base-timer"></baseTimer>
      <img src="../images/check.png" alt="ready" class="ready-icon" id="rdy-i" />
    </div>
    <div class="middle">
      <div class="middle-logo">
        <!--<img src="../images/pen.png" alt="logo" class="mid-logo" />-->
        <!-- <canvas id="drawed-img">Обновите браузер!</canvas> -->
        <img v-bind:src="imageSrc" alt="image" id="game_img" class="what-to-write" />
        <div class="card">Write a sentence</div>
      </div>

      <div class="input">
        <input class="sentence" type="text" v-model="sentence" />
        <router-link id="wr-bt" class="write" to="#" @click="done">done</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";
import baseTimer from "../components/baseTimer.vue";
export default {
  data() {
    return {
      sentence: "",
      ready: false,
      canvas: null,
      context: null,
      imageSrc:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==",
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
        this.ready = true;
        let crtr = this.$store.getters.getCreator;

        this.$root.socket.emit("writeData", {
          sentence: this.sentence,
          creator: crtr,
        });
      }

      
    },
    async updContent() {
      let round_now = this.$store.getters.getCurRound - 2;
      if (round_now < 0) {
        let game_img = document.getElementById("game_img");
        game_img.style.display = "none";
      }
      let crtr = this.$store.getters.getCreator;
      let status_code = "200";
      let url =
        "https://qds-serv.herokuapp.com/whattomake/" +
        localStorage.name +
        "/" +
        //crtr;
        round_now;

      await axios.get(url).catch(function (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          status_code = error.response.status;
          console.log(error.response.headers);
          console.log(error.config);
        }
      });

      var image = new Image();
      let IMG = document.getElementById("rdy-i");

      if (status_code === "200") {
        await axios.get(url).then((response) => {
          image.src = response.data.data;
          // console.log(image.src);
          this.imageSrc = response.data.data;

          IMG.style.height = "100px";
          IMG.style.width = "200px";
          // this.context.drawImage(image, 0, 0, 500, 300);

          //this.loadImageURL(response.data.data);
          //this.sentence = response.data.data;
          //alert(response.data.data);

          //this.$store.dispatch("setCreator", response.data.creator);
        });
      }
    },
    loadImageURL(base64) {
      var image = document.createElement("img");
      image.addEventListener("load", function () {
        var color = this.context.fillStyle,
          size = this.context.lineWidth;
        this.context.canvas.width = image.width;
        this.context.canvas.height = image.height;
        this.context.drawImage(image, 0, 0);
        this.context.fillStyle = color;
        this.context.strokeStyle = color;
        this.context.lineWidth = size;
      });
      image.src = base64;
    },
  },
  created() {
    this.$root.socket.on("goNextMsg", (...args) => {
      if (!this.ready) {
        this.$root.socket.emit("writeData", {
          sentence: this.sentence,
          creator: this.$store.getters.getCreator,
        });
      }

      this.$store.dispatch("setTimeLimit", args[0].round_time);

      this.$router.replace("/" + args[0].next_page);
    });

    this.$root.socket.on("timeIsUp", () => {
      if (!this.ready) {
        this.ready = true;

        this.$root.socket.emit("writeData", {
          sentence: this.sentence,
          creator: this.$store.getters.getCreator,
        });
      }
    });

    /*this.$root.socket.on("updCreator", (...args) => {
      alert("set creator = " + args);
    });*/
  },
  beforeMount() {
    this.updContent();
  },
  mounted() {
    this.$forceUpdate();

    this.canvas = document.getElementById("drawed-img");
    this.context = this.canvas.getContext("2d");
    //this.canvas.setAttribute("width", bodySize.width * 0.65);
  },
  beforeUnmount() {
    TweenMax.pauseAll();
    this.$store.dispatch("setRound");
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
  margin: 0 auto;
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

#rdy-i {
  display: none;
}

@media (max-width: 858px) {
  .player {
    font-size: 2em;
  }

  .card {
    font-size: 4vh;
    text-align: center;
  }

  .input {
    flex-direction: column;
  }

  .sentence {
    height: 4vh;
    margin: 0;
    font-size: 3.7vh;
  }

  .input>.write {
    margin-top: 10px;
  }

  .what-to-write {
    max-height: 200px;
    max-width: 400px;
  }
}
</style>
