<template>
  <div class="btn-back">
    <router-link class="back" to="/"> Назад </router-link>
    <img src="../images/logo_transparent.png" alt="logo" id="logo-lobby" />
  </div>
  <div class="lobby">
    <div class="room">
      <section class="players">
        <div class="count-players">Players 1/16</div>
        <div class="player">{{ name }}</div>
        <div class="empty">Empty</div>
        <div class="empty">Empty</div>
        <div class="empty">Empty</div>
        <div class="empty">Empty</div>
        <div class="empty">Empty</div>
        <div class="empty">Empty</div>
        <div class="empty">Empty</div>
        <div class="empty">Empty</div>
        <div class="empty">Empty</div>
        <div class="empty">Empty</div>
        <div class="empty">Empty</div>
        <div class="empty">Empty</div>
      </section>
      <section class="game-settings">
        <div class="settings-text">Custom settings</div>
        <div class="settings"></div>
        <div class="start-game">
          <div class="button start-btn">
            <div>Начать</div>
            <i class="icon-arrow-right"></i>
          </div>
          <div class="button invite-btn">
            <div>Пригласить</div>
            <i class="icon-arrow-right"></i>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: (String = ""),
    };
  },
  methods: {
    mounted() {
      this.name = this.$cookies.get("username");
    },
  },
};
</script>

<style>
.btn-back {
  margin-bottom: 1em;
  display: flex;
}

#logo-lobby {
  margin: 0 auto;
  width: 7em;
}

.back {
  color: inherit;
  text-decoration: inherit;
  width: 130px;
  height: 40px;
  padding: 10px 25px;
  border: 2px solid orange;
  background: transparent;
  transition: all 0.3s ease;
  /*position: relative;*/
  display: inline-block;
  margin-bottom: 20px;
}
.back:after {
  /*position: absolute;*/
  content: " ";
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
}
.back:hover {
  color: #fff;
  background: orange;
}
.back:hover:after {
  background: orange;
}

.room {
  display: flex;
  max-height: 75vh;
}
.players {
  border-radius: 20px;
  background: rgba(255, 234, 13, 0.28);
  min-width: 35%;
  display: inherit;
  flex-direction: column;
  align-items: center;
  font-size: 2.5vw;
  margin: 0 1.5em;
  padding: 0.5em;
  overflow: scroll;
}
.count-players {
  font-size: 3vw;

  -webkit-text-fill-color: orange;
}
.player {
  border: 2px solid black;
  background-color: #bfedcd;
  width: 100%;
  padding: 20px;
  border-top-left-radius: 40px;
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 10px;
  border-top-right-radius: 10px;
  margin: 0.2em auto;
}
.empty {
  border: 2px solid black;
  background-color: #cfcece;
  width: 100%;
  padding: 20px;
  border-top-left-radius: 40px;
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 10px;
  border-top-right-radius: 10px;
  margin: 0.2em auto;
}
.game-settings {
  border-radius: 20px;
  background: rgba(255, 234, 13, 0.28);
  min-width: 55%;
  max-width: 65%;
  display: inherit;
  flex-direction: column;
  align-items: center;
  font-size: 2.5vw;
  padding: 0.5em;
}
.start-game {
  display: flex;
}
.start-btn {
  margin-right: 2em;
}
</style>