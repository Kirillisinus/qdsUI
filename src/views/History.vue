<template>
  <div class="lobby">
    <router-link class="back" to="/"> home </router-link>
    <div class="room">
      <section class="players">
        <div class="count-players">Players 1/16</div>
        <div class="player">{{ name }}</div>
        <div class="empty">Empty</div>
      </section>
      <section class="album">
        <div class="album-name">album</div>
        <div class="settings"></div>
        <div class="end-game">
          <div class="end"><p class="end-p">end of 's album</p></div>

          <button class="write">new turn</button>
        </div>
      </section>
    </div>
  </div>
</template>

<script >
</script>

<style>
.album {
  border-radius: 20px;
  background: rgba(255, 234, 13, 0.28);
  min-width: 55%;
  max-width: 65%;
  display: inherit;
  flex-direction: column;
  align-items: center;
  font-size: 2.5vw;
  padding: 0 0.5em;
}

.end {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 20px;
}

.end-p {
  font-family: Black;
  font-size: 11px;
  color: black;
  letter-spacing: 1.51px;
  text-align: center;
  text-transform: uppercase;
  line-height: 18px;
  margin: 0px 10px;
}

.end-p::before,
.end-p::after {
  content: "";
  flex: 1 1 0%;
  height: 22px;
  background-color: black;
}
</style>