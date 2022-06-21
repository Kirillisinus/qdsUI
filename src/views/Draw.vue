<template>
  <div class="draw-image">
    <div class="up">
      <div class="rounds">{{ getCurRound }}/{{ getNumRounds }}</div>
      <img src="../images/logo_transparent.png" alt="logo" id="logo-write" />
      <baseTimer id="timer" class="base-timer"></baseTimer>
      <img src="../images/check.png" alt="ready" class="ready-icon" id="rdy-i" />
    </div>
    <div class="call-draw">Попробуй нарисовать!</div>
    <div class="prev-sentence">{{ sentence }}</div>
    <div class="middle-draw">
      <div id="palette"></div>
      <canvas id="canvas" @mousemove="drawIfPressed($event)" @touchmove="drawIfTouched($event)"
        @touchstart="startDrawing($event)" @touchend="stopDrawing($event)" height="500" width="900">Обновите
        браузер!</canvas>
    </div>
    <div class="down">
      <div class="controls">
        <div class="btn-row">
          <button type="button" @click="clear" class="back">Clear</button>
        </div>

        <div class="btn-row">
          <label v-for="sizeItem in sizes" class="size-item" v-bind:key="sizeItem">
            <input type="radio" name="size" v-model="size" v-bind:value="sizeItem" class="size" v-bind:style="{
              width: sizeItem + 10 + 'px',
              height: sizeItem + 10 + 'px',
            }" @change="setSize(sizeItem)" />
          </label>
        </div>
        <div class="btn-row"></div>
        <router-link id="d-bt" class="write" to="#" @click="done">done</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";
import baseTimer from "../components/baseTimer.vue";
export default {
  components: {
    baseTimer,
  },
  data() {
    return {
      sentence: "Lorem ipsum",
      isDrawing: false,
      ready: false,
      size: 12,
      sizes: [6, 12, 24, 48],
      canvas: null,
      context: null,
      colors: [
        "#ffffff",
        "#000000",
        "#13f7ab",
        "#13f3f7",
        "#13c5f7",
        "#138cf7",
        "#1353f7",
        "#2d13f7",
        "#7513f7",
        "#a713f7",
        "#d413f7",
        "#f713e0",
        "#f71397",
        "#f7135b",
        "#f71313",
        "#f76213",
        "#f79413",
        "#f7e013",
      ],
    };
  },
  created() {
    this.$root.socket.on("goNextMsg", (...args) => {
      if (!this.ready) {
        this.$root.socket.emit("writeData", { "sentence": this.canvas.toDataURL(), "creator": this.$store.getters.getCreator });
      }

      this.$store.dispatch("setTimeLimit", args[0].round_time);

      
      this.$router.push("/" + args[0].next_page);
    }),
      this.$root.socket.on("timeIsUp", () => {
        if (!this.ready) {
          this.$root.socket.emit("writeData", { "sentence": this.canvas.toDataURL(), "creator": this.$store.getters.getCreator });
        }
        this.ready = true;
      });
  },
  beforeMount() {
    this.updContent();
  },
  mounted() {
    this.$forceUpdate();

    this.canvas = document.getElementById("canvas");

    var bodySize = document.body.getBoundingClientRect();
    this.canvas.setAttribute("width", bodySize.width * 0.65);
    //this.canvas.setAttribute("height", bodySize.width * 0.65);

    this.context = this.canvas.getContext("2d");
    this.context.lineCap = "round";
    this.context.lineWidth = this.size;

    var palette = document.getElementById("palette");

    for (var r = 0, max = this.colors.length; r < max; r++) {
      var paletteBlock = document.createElement("div");
      paletteBlock.className = "color";
      paletteBlock.addEventListener("click", this.changeColor);
      paletteBlock.style.backgroundColor = this.colors[r];
      palette.appendChild(paletteBlock);
    }


  },
  beforeUnmount() {
    TweenMax.pauseAll();
    this.$store.dispatch("setRound");
  },
  methods: {
    done() {
      document.getElementById("rdy-i").style.display = "block";
      let d_btn = document.getElementById("d-bt");
      d_btn.style.backgroundColor = "gray";

      TweenMax.pauseAll();
      let timer = document.getElementById("timer");
      timer.style.display = "none";

      if (!this.ready) {
        let crtr = this.$store.getters.getCreator;
        this.$root.socket.emit("writeData", { "sentence": this.canvas.toDataURL(), "creator": crtr });
      }

      this.ready = true;
    },
    async updContent() {
      let round_now=this.$store.getters.getCurRound-2;
      //alert("round_now" + round_now);
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

      if (status_code === "200") {
        await axios.get(url).then((response) => {
          this.sentence = response.data.data;
          //alert(response.data.data);

          this.$store.dispatch("setCreator", response.data.creator);
        });
      }
    },
    setSize(s) {
      this.context.lineWidth = s;
    },
    changeColor(e) {
      this.context.strokeStyle = e.target.style.backgroundColor;
    },
    clear() {
      this.context.clearRect(0, 0, canvas.width, canvas.height);
    },
    drawIfPressed(e) {
      // в "e"  попадает экземпляр MouseEvent
      var x = e.offsetX;
      var y = e.offsetY;
      var dx = e.movementX;
      var dy = e.movementY;

      // Проверяем зажата ли какая-нибудь кнопка мыши
      // Если да, то рисуем
      if (e.buttons > 0) {
        this.context.beginPath();
        this.context.moveTo(x, y);
        this.context.lineTo(x - dx, y - dy);
        //debugger;
        this.context.stroke();
        this.context.closePath();
      }
    },
    startDrawing(e) {
      if (e.target == canvas) {
        document.body.style.overflow = "hidden";
        this.isDrawing = true;

        this.context.beginPath();
        this.context.moveTo(
          e.touches[0].pageX - this.canvas.offsetLeft,
          e.touches[0].pageY - this.canvas.offsetTop
        );
      }
    },
    drawIfTouched(e) {
      if (e.target == canvas) {
        document.body.style.overflow = "hidden";
        if (this.isDrawing == true) {
          var x = e.touches[0].pageX - this.canvas.offsetLeft;
          var y = e.touches[0].pageY - this.canvas.offsetTop;

          this.context.lineTo(x, y);
          this.context.stroke();
        }
      }
    },
    stopDrawing(e) {
      document.body.style.overflow = "hidden";
      if (e.target == canvas) {
        this.isDrawing = true;
      }
    },
  },
  computed: {
    ...mapGetters(["getNumRounds", "getCurRound"]),
  },
};
</script>
<style>
@charset "utf-8";

.color {
  width: 1.5em;
  height: 1.5em;
  display: flex;
  flex-direction: column;
  padding: 1px;
  cursor: pointer;
  border: solid 1px #fff;
}

.color:hover {
  border: solid 1px #f00;
}

.color:active {
  border: solid 1px #ff0;
}

.middle-draw {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

#canvas {
  /*max-width: 80vw;*/
  max-height: 80vh;
  background-color: white;
  border: 2px solid orange;
  cursor: crosshair;
  margin-left: 1em;
}

.controls {
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
}

.btn-row {
  position: relative;
  margin-bottom: 5px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0 15px;
  border-radius: 4px;
}

.size {
  background-color: rgb(140, 140, 140);
  display: inline-block;
  border-radius: 50%;
  transition: all 0.15s;
  transform: translate(-50%, -50%) scale(0.6);
  position: absolute;
  top: 50%;
  left: 50%;
}

.size:hover {
  opacity: 0.8;
}

.size-item {
  width: 40px;
  height: 60px;
  display: inline-flex;
  position: relative;
  justify-content: center;
  align-items: center;
  vertical-align: top;
  cursor: pointer;
}

.down {
  margin-top: 1em;
}

.prev-sentence {
  text-transform: uppercase;
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 10px;
  color: white;
  text-shadow: -0 -2px 0 #000000, 0 -2px 0 #000000, -0 2px 0 #000000,
    0 2px 0 #000000, -2px -0 0 #000000, 2px -0 0 #000000, -2px 0 0 #000000,
    2px 0 0 #000000, -1px -2px 0 #000000, 1px -2px 0 #000000, -1px 2px 0 #000000,
    1px 2px 0 #000000, -2px -1px 0 #000000, 2px -1px 0 #000000,
    -2px 1px 0 #000000, 2px 1px 0 #000000, -2px -2px 0 #000000,
    2px -2px 0 #000000, -2px 2px 0 #000000, 2px 2px 0 #000000,
    -2px -2px 0 #000000, 2px -2px 0 #000000, -2px 2px 0 #000000,
    2px 2px 0 #000000;
}

.call-draw {
  text-transform: uppercase;
  font-size: 1.5rem;
  text-align: center;
}

@media (max-width: 1214px) {
  .middle-draw {
    flex-direction: column;
  }

  #palette {
    display: flex;
    justify-content: center;
    margin: 0 auto;
  }

  .color {
    width: 1.2em;
    height: 1.2em;
  }

  #canvas {
    /*width: 100%;
    height: 100%;*/
    margin: 0;
    margin-top: 1em;
  }

  .btn-row>.back {
    width: 90px;
  }

  .controls>.write {
    margin-bottom: 7px;
    padding: 10px 29px;
  }

  .size-item {
    width: 20px;
    height: 45px;
  }

  .size-item:last-child {
    margin-left: 0.7em;
  }
}
</style>