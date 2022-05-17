<template>
  <div class="lobby-view">
    <div class="btn-back">
      <router-link class="back" to="#" @click="goBack"> Назад </router-link>
      <img src="../images/logo_transparent.png" alt="logo" id="logo-lobby" />
    </div>
    <div class="lobby">
      <div class="room">
        <div class="right-side">
          <div class="count-players">Players {{ getNumPlayers }}/16</div>
          <section class="players">
            <div
              id="plyr"
              class="player"
              v-for="(lobb, index) in getPlayers"
              :key="index"
            >
              {{ lobb.user }}
              <div class="adm-sign"></div>
            </div>
          </section>
        </div>
        <section class="game-settings">
          <div class="settings-text">Custom settings</div>
          <div class="settings"></div>
          <div class="start-game">
            <router-link class="button start-btn" to="#" @click="startGame">
              <div>Начать</div>
              <i class="icon-arrow-right"></i>
            </router-link>
            <div class="button invite-btn">
              <div>Пригласить</div>
              <i class="icon-arrow-right"></i>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      name: localStorage.name,
    };
  },
  beforeMount() {},
  mounted() {
    this.$forceUpdate();

    setTimeout(() => {
      this.updateAdminDiv();
    }, 500);
  },
  async created() {  
    this.$root.socket.on("enterMsg", (...args) => {
      //this.admin = args;

      this.$store.dispatch("reqPlayers", args);
      //this.$store.dispatch("setAdminName", args);
    });

    this.$root.socket.on("exitMsg", (...args) => {
      this.$store.dispatch("reqPlayers", args);
    });

    this.$root.socket.on("startMsg", (...args) => {
      //alert("this is args from serv: " + args);
      this.$store.dispatch("setRounds");
      this.$store.dispatch("setTimeLimit", args);
      this.$router.push("/write");
    });

    this.$root.socket.emit("enterLobby", this.name);
  },
  beforeUnmount() {
    this.$root.socket.emit("exitLobby", this.name);
  },
  methods: {
    startGame() {
      this.$root.socket.emit("startGame", localStorage.name);
    },

    goBack() {
      this.$router.push("/");
    },
    updateAdminDiv() {
      let adms = document.getElementsByClassName("player");
      for (let i = 0; i < adms.length; i++) {
        let arg1 = adms[i].textContent;

        //alert(arg1.trim() + "/ /" + this.$store.state.admin_name + "/");

        if (arg1.trim() == this.$store.state.admin_name) {
          adms[i].childNodes[1].style.display = "block";
        }
      }

      /*if (adms.length <= 1) {
        adm.childNodes[1].style.display = "block";
      }*/
    },
  },
  computed: {
    ...mapGetters(["getNumPlayers", "getPlayers"]),
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
  text-transform: uppercase;
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
  /*margin-bottom: 20px;*/
  cursor: pointer;
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
  max-height: 70vh;
}
.right-side {
  border-radius: 20px;
  background: rgba(255, 234, 13, 0.28);
  min-width: 35%;
  margin: 0 1.5em;
  overflow: hidden;
}
.players {
  max-height: 65vh;
  display: inherit;
  flex-direction: column;
  align-items: center;
  font-size: 2.5vw;
  padding: 0 0.5em;
  overflow-y: scroll;
}
.players::-webkit-scrollbar,
.count-players::-webkit-scrollbar {
  width: 0;
}
.count-players {
  background: none;
  font-size: 3vw;
  -webkit-text-fill-color: orange;
  text-align: center;
  margin-top: 10px;
}
.player {
  display: flex;
  align-items: center;
  justify-content: space-between;
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
.adm-sign {
  display: none;
  width: 0;
  height: 0;
  border-width: 20px 10px 5px;
  border-style: solid;
  border-color: #e95557 #e95557 transparent;
}
</style>