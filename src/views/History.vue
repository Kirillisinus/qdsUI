<template>
  <Loader id="load"></Loader>
  <div class="history">
    <router-link class="back" to="#" @click="home"> home </router-link>
    <div class="room">
      <section id="custom-players" class="players">
        <!--<div class="count-players">Players {{ getNumPlayers }}/16</div>
        <div class="player" v-for="(lobb, index) in getPlayers" :key="index">
          {{ lobb.user }}
        </div>-->
        <!-- <div class="count-players">Players {{ users.length }}/16</div>
        <div class="player" v-for="(lobb, index) in users" :key="index">
          {{ lobb }}
        </div> -->
      </section>
      <section class="album">
        <div class="album-name">album</div>
        <div class="settings"></div>
        <div class="end-game">
          <div class="end">
            <p class="end-p">end of {{ name }}'s album</p>
          </div>

          <router-link class="write" to="#" @click="newGame"
            >Играть ещё</router-link
          >
        </div>
      </section>
    </div>
  </div>
</template>

<script >
import axios from "axios";
import { mapGetters } from "vuex";
import Loader from "../components/loader.vue";
export default {
  components: {
    Loader,
  },
  data() {
    return {
      name: (String = "Гость123123123"),
      users: [],
    };
  },
  mounted() {
    if (localStorage.name) {
      this.name = localStorage.name;
    }

    this.loadGameSessionInfo();
  },
  methods: {
    async loadGameSessionInfo() {
      let url = "http://localhost:3000/history";
      let resp;

      await axios.get(url).then((response) => {
        resp = response.data;
      });

      let block_for_players = document.getElementById("custom-players");
      let playerCountBlock = document.createElement("div");
      playerCountBlock.className = "count-players";
      playerCountBlock.textContent = "Players " + resp.length + "/16";
      block_for_players.appendChild(playerCountBlock);

      for (let i = 0; i < resp.length; i++) {
        // this.users.push(resp[i].name);

        let playerBlock = document.createElement("div");
        playerBlock.className = "player";
        playerBlock.textContent = resp[i].name;
        block_for_players.appendChild(playerBlock);
      }

      console.log(this.users);
    },
    async newGame() {
      let loader = document.getElementById("load");

      let body = document.getElementsByClassName("history")[0];

      let content = document.getElementById("content");
      content.style.border = "none";

      body.style.display = "none";

      loader.style.display = "block";

      let url = "http://localhost:3000/login/" + this.name;
      let resp = "notok";

      await axios.get(url).then((response) => {
        resp = response.data.result;
        loader.style.display = "none";
        body.style.display = "flex";
        content.style.border = "4px #f5d731f1 solid";
      });

      if (resp != "ok") {
        alert(
          "В настоящий момент имя " +
            this.name +
            " уже используется, придумайте другое!"
        );
        return;
      }
      localStorage.name = this.name;

      this.$router.push("/lobby");
    },
    home() {
      this.$root.socket.emit("exitGame");

      this.$router.push("/");
    },
  },
  computed: {
    ...mapGetters(["getNumPlayers", "getPlayers"]),
  },
};
</script>

<style>
.room {
  justify-content: space-between;
  padding: 0 10px;
  margin-top: 1em;
}
.album {
  border-radius: 20px;
  background: rgba(255, 234, 13, 0.28);
  min-width: 55%;
  display: inherit;
  flex-direction: column;
  align-items: center;
  font-size: 2.5vw;
  padding: 0 0.5em;
}

#custom-players {
  border-radius: 20px;
  background: rgba(255, 234, 13, 0.28);
  min-width: 35%;
  margin: 0 1.5em;
  overflow: hidden;
}
.end-game {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 15px;
}
.end {
}

.end-p {
  font-family: Black;
  font-size: 11px;
  color: black;
  letter-spacing: 1.51px;
  text-align: center;
  text-transform: uppercase;
  line-height: 18px;
  margin: 0px auto;
}

.end-p::before,
.end-p::after {
  content: "";
  flex: 1 1 0%;
  height: 22px;
  background-color: black;
}
</style>