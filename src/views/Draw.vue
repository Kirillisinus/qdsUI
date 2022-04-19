<template>
  <div class="draw-image">
    <div class="up">
      <div class="rounds">1/16</div>
      <img src="../images/logo_transparent.png" alt="logo" id="logo-write" />
      <baseTimer class="base-timer" />
    </div>
    <div class="middle">
      <div id="palette"></div>
      <canvas
        id="canvas"
        @mousemove="drawIfPressed($event)"
        height="500"
        width="900"
        >Обновите браузер!</canvas
      >
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
        <router-link class="write" to="/album">done</router-link>
      </div>
    </div>
    <div class="down"></div>
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
      size: 12,
      sizes: [6, 12, 24, 48],
      canvas: null,
      context: null,
      colors: [
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
  mounted() {
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
  methods: {
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
};
</script>

<style>
@charset "utf-8";

.color {
  width: 15px;
  height: 15px;
  display: inline-block;
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

#canvas {
  /*width: 600px;
  height: 600px;*/
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
  margin-top: 2em;
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
</style>