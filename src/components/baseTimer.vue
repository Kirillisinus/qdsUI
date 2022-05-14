<template>
  <div id="tim" class="timer">
    <svg viewBox="-1 -1 2 2" class="timer__svg donut">
      <circle cx="0" cy="0" r="1" fill="#dddddd" />
      <path :d="calc" :fill="color"></path>
    </svg>
  </div>
</template>

<script>
export default {
  data() {
    return {
      time: this.$store.getters.getTimeLimit,
      percent: 1,
      color: "green",
      startX: 1,
      startY: 0,
      currentPercent: 0,
    };
  },
  methods: {
    getPieVal(per) {
      const x = Math.cos(2 * Math.PI * per);
      const y = Math.sin(2 * Math.PI * per);
      return [x, y];
    },
    start() {
      TweenMax.to(this.$data, this.time, {
        currentPercent: this.$data.percent,
        onComplete: this.complete,
        ease: Power0.easeNone,
      });
    },
    stop() {
      TweenMax.pauseAll();
    },
    complete() {
      document.getElementById("timer").style.display = "none";
      //this.$root.socket.emit("timeIsUp");
    },
  },
  computed: {
    calc() {
      const [endX, endY] = this.getPieVal(this.$data.currentPercent);
      const largeArcFlag = this.currentPercent > 0.5 ? 1 : 0;
      const pathData = [
        `M ${this.$data.startX} ${this.startY}`,
        `A 1 1 0 ${largeArcFlag} 1 ${endX} ${endY}`,
        `L 0 0`,
      ].join(" ");
      return pathData;
    },
  },
  beforeUnmount() {},
  mounted() {
    setTimeout(() => {
      this.start();
    }, 100);
  },
};
</script>

<style>
.timer {
  position: relative;
  height: 3em;
  width: 3em;
}

.donut {
  transform: rotate(-90deg);
}
</style>
