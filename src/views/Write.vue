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
            <circle class="timer__path-elapsed" cx="50" cy="50" r="45"></circle>
            <path
              id="timer-path-remaining"
              stroke-dasharray="283"
              class="timer__path-remaining"
              d="M 50, 50
          m -45, 0
          a 45,45 0 1,0 90,0
          a 45,45 0 1,0 -90,0
        "
            ></path>
          </g>
        </svg>
        <span id="timer-label" class="timer__label">
          {{ timeLeft }}
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
export default {
  data() {
    return {
      timeLeft: this.$store.getters.getTimeLimit,
    };
  },
  mounted() {
    this.updateTime();
  },
  computed: {},
  methods: {
    updateTime() {
      if (this.timeLeft > 0) {
        setTimeout(() => {
          this.timeLeft -= 1;
          this.updateTime();
          /*setCircleDasharray();*/
        }, 1000);
      }
    },
    /*calculateTimeFraction() {
      return timeLeft / this.$store.getters.getTimeLimit;
    },
    setCircleDasharray() {
      const circleDasharray =
        "${(calculateTimeFraction() * FULL_DASH_ARRAY).toFixed(0)} 283";
      document
        .getElementById("base-timer-path-remaining")
        .setAttribute("stroke-dasharray", circleDasharray);
    },*/
  },
};
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
.timer__path-elapsed {
  stroke-width: 7px;
  stroke: grey;
}
.timer__label {
  position: absolute;
  width: 30px;
  height: 30px;
  top: 8px;
  left: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 26px;
}
.timer__path-remaining {
  stroke-width: 7px;
  stroke-linecap: round;
  transform: rotate(90deg);
  transition: 1s linear all;
  stroke: black;
}

.timer__svg {
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
  width: 80vw;
  height: 8vh;
  padding-left: 100px;
}
.sentence {
  width: 100vw;
  height: 6vh;
  margin-right: 1em;
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
