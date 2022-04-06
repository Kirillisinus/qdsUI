<template>
  <div class="draw-image">
    <div class="up">
      <div class="rounds">1/16</div>
      <img src="../images/logo_transparent.png" alt="logo" id="logo-write" />
      <div class="timer">
        <svg
          class="timer__svg"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g class="timer__circle">
            <circle class="timer__path-elapsed" cx="50" cy="50" r="45" />
            <path
              id="timer-path-remaining"
              stroke-dasharray="283"
              class="timer__path-remaining ${remainingPathColor}"
              d="
          M 50, 50
          m -45, 0
          a 45,45 0 1,0 90,0
          a 45,45 0 1,0 -90,0
        "
            ></path>
          </g>
        </svg>
        <span>
          <!-- Remaining time label -->
        </span>
      </div>
    </div>
    <div class="middle">
      <canvas id="canvas">Обновите браузер</canvas>
      <div class="cursor" id="cursor"></div>
      <div class="controls">
        <div class="btn-row">
          <!--<button type="button"
								v-on:click="removeHistoryItem"
								v-bind:class="{ disabled: !history.length }" title="Undo"> <i class="ion ion-reply"></i>remove </button>
        </div>
        <div class="btn-row">
          <button type="button"
								v-on:click="removeAllHistory"
								v-bind:class="{ disabled: !history.length }" title="Clear all"> <i class="ion ion-trash-a"></i>delete </button>
        </div>
        <div class="btn-row">
          <input type="color" class="palette-input">
        </div>
        <div class="btn-row">
          <label v-for="sizeItem in sizes" class="size-item">
            <input type="radio" name="size" v-model="size" v-bind:value="sizeItem">
            <span class="size"
									v-bind:style="{width: sizeItem + 'px', height: sizeItem + 'px'}"
									v-on:click="popups.showSize = !popups.showSize"></span> </label>-->
        </div>
        <div class="btn-row"></div>
        <router-link class="write" to="/album">done</router-link>
      </div>
    </div>
    <div class="down"></div>
  </div>
</template>

<script>
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
  width: 80%;
  height: calc(60vh - 60px);
  background-color: white;
  cursor: none;
  border-radius: 20px;
  border: 2px solid orange;
}

#canvas:hover + .cursor {
  opacity: 1;
}
#canvas:active + .cursor {
  border-color: rgb(60, 60, 60);
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