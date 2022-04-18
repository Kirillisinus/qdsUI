<template>
  <div class="draw-image">
    <div class="up">
      <div class="rounds">1/16</div>
      <img src="../images/logo_transparent.png" alt="logo" id="logo-write" />
      <baseTimer class="base-timer" />
    </div>
    <div class="middle">
      <div id="palette"></div>
      <canvas id="canvas" @mousemove="drawIfPressed">Обновите браузер!</canvas>
      <div class="controls">
        <div class="btn-row">
          <button type="button" @click="clear" class="back">Clear</button>
        </div>
        -

        <div class="btn-row">
          
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
            />
            <span
              class="size"
              v-bind:style="{ width: sizeItem + 'px', height: sizeItem + 'px' }"
            ></span>
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
    };
  },
  computed: {},
  mounted() {
    this.canvas = document.getElementById("canvas");
    this.context = canvas.getContext("2d");
    this.context.lineCap = "round";
    this.context.lineWidth = 8;

    var palette=document.getElementById("palette");

    for (var r = 0, max = 4; r <= max; r++) {
        for (var g = 0; g <= max; g++) {
          for (var b = 0; b <= max; b++) {
            var paletteBlock = document.createElement('div');
            paletteBlock.className = 'color';
            paletteBlock.addEventListener('click', function changeColor(e) {
              this.context.strokeStyle = e.target.style.backgroundColor;
            });
 
            paletteBlock.style.backgroundColor = (
              'rgb(' + Math.round(r * 255 / max) + ", "
              + Math.round(g * 255 / max) + ", "
              + Math.round(b * 255 / max) + ")"
            );
 
            palette.appendChild(paletteBlock);
          }
        }
      }
  },
  created() {
    
  },
  methods: {
    clear() {
      this.context.clearRect(0, 0, canvas.width, canvas.height);
    },
    drawIfPressed (e) {
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
        this.context.stroke();
        this.context.closePath();
      }
    }
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
/*.cursor {
  position: fixed;
  top: 0;
  left: 0;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 3px solid rgb(30, 30, 30);
  pointer-events: none;
  user-select: none;
  mix-blend-mode: difference;
  opacity: 0;
  transition: opacity 1s;
}*/

#canvas {
  width: 600px;
  height: 600px;
  background-color: white;
  border-radius: 20px;
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
</style>