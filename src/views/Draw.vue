<template>
  <div class="draw-image">
    <div class="up">
      <div class="rounds">1/16</div>
      <img src="../images/logo_transparent.png" alt="logo" id="logo-write" />
      <baseTimer class="base-timer" />
    </div>
    <div class="middle">
      <canvas id="canvas">Обновите браузер!</canvas>
      <div class="controls">
        <div class="btn-row">
          <button type="button" v-on:click="clear" class="back">Clear</button>
        </div>
        -

        <div class="btn-row">
          <div class="palette back"></div>
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
    };
  },
  computed: {},
  mounted() {
    var vm = this
    vm.canvas=vm.$refs.canvas;
    vm.context=vm.canvas.getContext("2d");
    vm.canvas.addEventListener('mousedown',vm.mousedown);
    vm.canvas.addEventListener('mousemove',vm.mousemove)
    document.addEventListener('mouseup',vm.mouseup);
    /*var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    context.lineCap = "round";
    context.lineWidth = 8;*/
  },
  methods: {
    clear() {
      this.context.clearRect(0, 0, canvas.width, canvas.height);
    },
     mousedown(e){
      var vm = this;
      var x = e.clientX - rect.left;
      var y = e.clientY - rect.top;
      
      vm.isDrawing = true;
      vm.startX = x;
      vm.startY = y;
      vm.points.push({
        x: x,
        y: y
      });
    },
    mousemove(e){
      var vm = this;
      var x = e.clientX - rect.left;
      var y = e.clientY - rect.top;
      
      if (vm.isDrawing) {
        vm.context.beginPath();
        vm.context.moveTo(vm.startX, vm.startY);
        vm.context.lineTo(x, y);
        vm.context.lineWidth = 1;
        vm.context.lineCap = 'round';
        vm.context.strokeStyle = "rgba(0,0,0,1)";
        vm.context.stroke();
        
        vm.startX = x;
        vm.startY = y;  
        
        vm.points.push({
          x: x,
          y: y
        });
      }
    },
    mouseup(e){
      var vm = this
      vm.isDrawing = false;
      if (vm.points.length > 0) {
        localStorage['points'] = JSON.stringify(vm.points);    
      }
    }
  },
};
</script>

<style>
@charset "utf-8";

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
  width: 60vw;
  height: 60vh;
  background-color: white;
  border-radius: 20px;
  border: 2px solid orange;
  cursor: crosshair;
}

#canvas:hover + .cursor {
  opacity: 3;
}
#canvas:active + .cursor {
  border-color: rgb(0, 0, 0);
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