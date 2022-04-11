<template>
  <div class="timer">
    <svg
      class="timer__svg"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g class="timer__circle">
        <circle class="timer__path-elapsed" cx="50" cy="50" r="45"></circle>
        <path
          :stroke-dasharray="circleDasharray"
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
      {{ formattedTimeLeft }}
    </span>
  </div>
</template>

<script>
const FULL_DASH_ARRAY = 283;

export default {
  data() {
    return {
      timePassed: 0,
      timerInterval: null,
    };
  },
  computed: {
    formattedTimeLeft() {
      const timeLeft = this.timeLeft;
      // The largest round integer less than or equal
      //   to the result of time divided being by 60.
      const minutes = Math.floor(timeLeft / 60);
      // Seconds are the remainder of the time divided
      //   by 60 (modulus operator)
      let seconds = timeLeft % 60;
      // If the value of seconds is less than 10,
      //   then display seconds with a leading zero
      if (seconds < 10) {
        seconds = 0 + seconds;
      }
      // The output in MM:SS format
      return minutes + ":" + seconds;
    },
    circleDasharray() {
      return (this.timeFraction * FULL_DASH_ARRAY).toFixed(0) + "283";
    },
    timeLeft() {
      return this.$store.getters.getTimeLimit - this.timePassed;
    },
    timeFraction() {
      const rawTimeFraction = this.timeLeft / this.$store.getters.getTimeLimit;

      return rawTimeFraction - (1 / this.$store.getters.getTimeLimit) * (1 - rawTimeFraction);
    },
  },
  watch: {
    timeLeft(newValue) {
      if (newValue === 0) {
        this.onTimesUp();
      }
    },
  },
  mounted() {
    this.startTimer();
  },
  methods: {
    onTimesUp() {
      clearInterval(this.timerInterval);
    },
    startTimer() {
      this.timerInterval = setInterval(() => (this.timePassed += 1), 1000);
    },
  },
};
</script>

<style scoped>
/* Sets the containers height and width */
.timer {
  position: relative;
  height: 3em;
  width: 3em;
}
/* Removes SVG styling that would hide the time label */
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
  width: 30px;
  height: 30px;
  top: 8px;
  left: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1em;
}
.timer__path-remaining {
  /* Just as thick as the original ring */
  stroke-width: 7px;
  /* Rounds the line endings to create a seamless circle */
  stroke-linecap: round;
  /* Makes sure the animation starts at the top of the circle */
  transform: rotate(90deg);
  transform-origin: center;
  /* One second aligns with the speed of the countdown timer */
  transition: 1s linear all;
  /* Allows the ring to change color when the color value updates */
  stroke: rgb(65, 184, 131);
}
.timer__svg {
  /* Flips the svg and makes the animation to move left-to-right*/
  transform: scaleX(-1);
}
</style>
