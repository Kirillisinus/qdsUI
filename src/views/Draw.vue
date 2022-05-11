<template>
  <div class="draw-image">
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
    <div class="call-draw">Попробуй нарисовать!</div>
    <div class="prev-sentence">Lorem ipsum</div>
    <div class="middle-draw">
      <div id="palette"></div>
      <canvas
        id="canvas"
        @mousemove="drawIfPressed($event)"
        height="500"
        width="900"
        >Обновите браузер!</canvas
      >
    </div>
    <div class="down">
      <div class="controls">
        <div class="btn-row">
          <button type="button" @click="clear" class="back">Clear</button>
        </div>

        <div class="btn-row">
          <label
            v-for="sizeItem in sizes"
            class="size-item"
            v-bind:key="sizeItem"
          >
            <input
              type="radio"
              name="size"
              v-model="size"
              v-bind:value="sizeItem"
              class="size"
              v-bind:style="{
                width: sizeItem + 10 + 'px',
                height: sizeItem + 10 + 'px',
              }"
              @change="setSize(sizeItem)"
            />
          </label>
        </div>
        <div class="btn-row"></div>
        <router-link id="d-bt" class="write" to="#" @click="done">done</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import baseTimer from "../components/baseTimer.vue";
export default {
  components: {
    baseTimer,
  },
  data() {
    return {
      ready:false,
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
        this.$root.socket.emit("drawImage", this.sentence);
      }

      this.$store.dispatch("setTimeLimit", args[0].round_time);

      this.$router.push("/" + args[0].next_page);
    });
  },
  mounted() {
    this.$forceUpdate();

    this.canvas = document.getElementById("canvas");
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
        this.$root.socket.emit("drawImage");
      }

      this.ready = true;
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
  },
  computed: {
    ...mapGetters(["getNumRounds"]),
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
  /*max-width: 80vw;
  max-height: 80vh;*/
  background-color: white;
  border: 2px solid orange;
  cursor: crosshair;
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
</style>