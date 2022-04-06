<template>
  <div class="write-sentence">
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
      <div class="middle-logo">
        <img src="../images/pen.png" alt="logo" class="mid-logo" />
        <div class="card">Write a sentence</div>
      </div>

      <div class="input-sentence">
        <div class="input">
          <input class="sentence" type="text" />
          <router-link class="write" to="/draw">done</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
</script>


<style>
#logo-write {
  display: block;
  margin: auto;
  width: 100px;
}
.timer {
  position: relative;
  height: 3em;
  width: 3em;
  /*margin-right: 10vh;*/
}
.timer__circle {
  fill: none;
  stroke: none;
}

/* The SVG path that displays the timer's progress */
.timer__path-elapsed {
  stroke-width: 7px;
  stroke: grey;
}
.timer__label {
  position: absolute;

  /* Size should match the parent container */
  width: 300px;
  height: 300px;

  /* Keep the label aligned to the top */
  top: 0;

  /* Create a flexible box that centers content vertically and horizontally */
  display: flex;
  align-items: center;
  justify-content: center;

  /* Sort of an arbitrary number; adjust to your liking */
  font-size: 48px;
}
.timer__path-remaining {
  /* Такая же ширина, что и у исходного кольца */
  stroke-width: 7px;

  /* Замыкаем концы линии, чтобы создать круг */
  stroke-linecap: round;

  /* Делаем так, чтобы анимация начиналась вверху */
  transform: rotate(90deg);
  transform-origin: center;

  /* Одна секунда подгоняется под таймер обратного отсчета */
  transition: 1s linear all;

  /* Задаем смену цвета кольца, когда обновляется значение цвета */
  stroke: currentColor;
}

.timer__svg {
  /* Переворачиваем кольцо и задаем движение анимации слева направо */
  transform: scaleX(-1);
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
  font-size: 10vh;
  margin-bottom: 10px;
}
.input {
  align-content: center;
  align-items: center;
  display: flex;
  width: 150vh;
  height: 8vh;
  padding-left: 100px;
}
.sentence {
  width: 100vh;
  height: 6vh;
  margin-right: 10vh;
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
</style>