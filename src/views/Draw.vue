<template>
  <div class="draw-image">
    <div class="up">
      <div class="rounds">1/16</div>
      <img src="../images/logo_transparent.png" alt="logo" id="logo-write" />
      <baseTimer class="base-timer"/>
    </div>
    <div class="middle">
      <canvas id="canvas">Обновите браузер</canvas>
      <div class="cursor" id="cursor"></div>
      <div class="controls">
        <!--<div class="btn-row">
          <button type="button"
								v-on:click="removeHistoryItem"
								v-bind:class="{ disabled: !history.length }" title="Undo"> <i class="ion ion-reply"></i>remove </button>
        </div>
        <div class="btn-row">
          <button type="button"
								v-on:click="removeAllHistory"
								v-bind:class="{ disabled: !history.length }" title="Clear all"> <i class="ion ion-trash-a"></i>delete </button>
        </div>-->

        <div class="btn-row">
          <input type="color" class="palette-input" />
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
  methods: {
  }
};
</script>

<style>
@charset "utf-8";

.cursor {
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
}

#canvas {
  width: 60vw;
  height: 60vh;
  background-color: white;
  cursor: none;
  border-radius: 20px;
  border: 2px solid orange;
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