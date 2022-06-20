<template>
  <Loader id="load"></Loader>
  <div class="history">
    <router-link class="back" to="#" @click="home"> home </router-link>
    <div class="room">
      <section id="custom-players" class="players"></section>
      <section class="album">
        <div id="albn" class="album-name count-players">
          {{ active_player_name }}'s album
        </div>
        <div id="albgs" class="game-session-album"></div>
        <div class="end-game">
          <div class="end">
            <p class="end-p">end of {{ active_player_name }}'s album</p>
          </div>
          <div class="end-buttons">
            <button
              id="prev_btn"
              class="write"
              @click="choosePlayer($event, 'p')"
            >
              Предыдущий
            </button>
            <button
              id="next_btn"
              class="write"
              @click="choosePlayer($event, 'n')"
            >
              Следующий
            </button>
            <router-link id="new_turn" class="write" to="#" @click="home"
              >Играть ещё</router-link
            >
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script >
import { SCOPABLE_TYPES } from "@babel/types";
import { createSimpleExpression } from "@vue/compiler-core";
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
      game_info: null,
      active_user: null,
      active_player_name: null,
    };
  },
  async mounted() {
    if (localStorage.name) {
      this.name = localStorage.name;
    }

    const result = await Promise.all([this.loadGameSessionInfo()]);

    // setTimeout(() => {
    this.buildHistory();
    // }, 1000);
  },
  methods: {
    async loadGameSessionInfo() {
      let url = "http://localhost:3000/history";
      let resp;

      await axios.get(url).then((response) => {
        resp = response.data;
        this.game_info = response.data;
      });

      let block_for_players = document.getElementById("custom-players");
      let playerCountBlock = document.createElement("div");
      playerCountBlock.className = "count-players";
      playerCountBlock.textContent = "Players " + resp.length + "/16";
      block_for_players.appendChild(playerCountBlock);

      for (let i = 0; i < resp.length; i++) {
        if (i == 0) {
          this.active_user = i;
          this.active_player_name = resp[i].name;
        }

        this.users.push(resp[i].name);

        let playerBlock = document.createElement("div");
        playerBlock.className = "player";
        playerBlock.textContent = resp[i].name;
        block_for_players.appendChild(playerBlock);
      }

      block_for_players.childNodes[1].style.backgroundColor =
        "rgb(175, 174, 174)";
    },
    async buildHistory() {
      var game_session_block = document.getElementById("albgs");

      //e.firstElementChild can be used.
      var child = game_session_block.lastElementChild;
      while (child) {
        game_session_block.removeChild(child);
        child = game_session_block.lastElementChild;
      }

      var msgLeftBlock = document.createElement("div");
      msgLeftBlock.className = "msg-block-left";

      for (let i = 0; i < this.game_info[this.active_user].items.length; i++) {
        if (i % 2 == 0) {
          let msgRightBlock = document.createElement("div");
          msgRightBlock.className = "msg-block-right";

          let msgAutor = document.createElement("span");
          msgAutor.className = "msg-autor";
          msgAutor.innerHTML =
            this.game_info[this.active_user].items[i].creator;
          msgRightBlock.appendChild(msgAutor);

          let msgMessage = document.createElement("div");
          msgMessage.className = "message";

          let msgText = document.createElement("span");
          msgText.className = "msg-text";
          msgText.innerHTML = this.game_info[this.active_user].items[i].data;
          msgMessage.appendChild(msgText);

          msgRightBlock.appendChild(msgMessage);

          msgRightBlock.classList.add("b-show");
          game_session_block.appendChild(msgRightBlock);
          await this.sleep(2500);
        } else {
          let msgLeftBlock = document.createElement("div");
          msgLeftBlock.className = "msg-block-left";

          let msgAutor = document.createElement("span");
          msgAutor.className = "msg-autor";
          msgAutor.innerHTML =
            this.game_info[this.active_user].items[i].creator;
          msgLeftBlock.appendChild(msgAutor);

          let msgMessage = document.createElement("div");
          msgMessage.className = "message";

          let msgContent = document.createElement("div");
          msgContent.className = "msg-content";

          let msgImg = document.createElement("img");
          msgImg.setAttribute("id", "img_msg");
          msgImg.src = this.game_info[this.active_user].items[i].data;
          msgImg.style.height = "100px";
          msgImg.style.width = "200px";
          msgContent.appendChild(msgImg);
          msgMessage.appendChild(msgContent);

          msgLeftBlock.appendChild(msgMessage);
          msgLeftBlock.classList.add("b-show");
          game_session_block.appendChild(msgLeftBlock);
          await this.sleep(2500);
        }
      }
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
    choosePlayer(e, arg) {
      let block_for_players = document.getElementById("custom-players");

      let next_btn = document.getElementById("next_btn");
      let prev_btn = document.getElementById("prev_btn");
      let new_btn = document.getElementById("new_turn");

      if (e && arg == "n") {
        if (this.active_user === this.game_info.length - 2) {
          next_btn.style.display = "none";
          prev_btn.style.display = "block";
          new_btn.style.display = "block";
        } else {
          new_btn.style.display = "block";
        }
        block_for_players.childNodes[
          this.active_user + 1
        ].style.backgroundColor = "#bfedcd";

        this.active_user++;
        this.active_player_name = this.game_info[this.active_user].name;

        block_for_players.childNodes[
          this.active_user + 1
        ].style.backgroundColor = "rgb(175, 174, 174)";

        this.buildHistory();
      } else if (e && arg == "p") {
        let index = this.game_info.length - 1;
        if (this.active_user === 1) {
          prev_btn.style.display = "none";
          next_btn.style.display = "block";
        } else {
          new_btn.style.display = "block";
        }
        block_for_players.childNodes[
          this.active_user + 1
        ].style.backgroundColor = "#bfedcd";

        this.active_user--;
        this.active_player_name = this.game_info[this.active_user].name;

        block_for_players.childNodes[
          this.active_user + 1
        ].style.backgroundColor = "rgb(175, 174, 174)";

        this.buildHistory();
      }
    },
    home() {
      this.$root.socket.emit("exitGame");

      this.$router.push("/");
    },
    sleep(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    },
  },
  computed: {
    ...mapGetters(["getNumPlayers", "getPlayers"]),
  },
};
</script>

<style>
#new_turn {
  display: none;
}
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
  height: 100%;
}

#custom-players {
  border-radius: 20px;
  background: rgba(255, 234, 13, 0.28);
  min-width: 35%;
  margin: 0 1.5em;
  overflow-y: scroll;
}
.end-game {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 15px;
}

/* .player:hover {
  opacity: 1;
  background-color: rgb(175, 174, 174);
  cursor: pointer;
} */

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

.end {
  margin-bottom: 6px;
}

.game-session-album {
  height: 100%;
  width: 100%;
  overflow: hidden;
}
.players {
  max-height: 100%;
}
.album-name {
  text-transform: uppercase;
}
#prev_btn {
  display: none;
  border: none;
  margin-bottom: 10px;
  font-size: 0.5em;
}
#next_btn {
  border: none;
  margin-bottom: 10px;
  font-size: 0.5em;
}
#new_turn {
  font-size: 0.5em;
}
.msg-block-right {
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
.msg-block-right > .message {
  padding: 10px;
  min-height: 26px;
  position: relative;
  display: flex;
  flex-direction: row;
  -webkit-box-align: center;
  align-items: center;
  max-width: 460px;
  background-color: rgb(255, 255, 255);
  margin: 0px 10px 0px 0px;
  border: 1px solid rgb(194, 194, 194);
  border-radius: 5px 0px 5px 5px;
  box-shadow: rgb(0 0 0 / 17%) 0px 2px 2px 0px;
  font-family: Bold;
  font-size: 2vw;
  color: rgb(68, 68, 68);
  letter-spacing: -0.13px;
  line-height: 18px;
  word-break: break-word;
}
.msg-block-right > .message::after {
  position: absolute;
  top: -1px;
  right: -15px;
  display: flex;
  content: "";
  width: 16px;
  height: 18px;
  background-image: url("../images/bg_ans.png");
  background-repeat: no-repeat;
}

.msg-block-right > .msg-autor {
  font-size: 10px;
  text-align: right;
  text-transform: uppercase;
}
.msg-block-right > .msg-text {
  margin: 5px 5px 3px;
}
.msg-block-left {
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.msg-block-left > .message {
  position: relative;
  width: 30vw;
  min-width: 56px;
  /* height: 257px; */
  min-height: 42px;
  background-color: rgb(255, 255, 255);
  margin: 5px 0px 0px 10px;
  border: 1px solid rgb(194, 194, 194);
  border-radius: 0px 5px 5px;
  box-shadow: rgb(0 0 0 / 17%) 0px 2px 2px 0px;
  padding: 2px;
  display: flex;
  flex-direction: row;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
}
.msg-block-left > .msg-autor {
  font-size: 10px;
  text-align: left;
  text-transform: uppercase;
}

.msg-block-left > .message::before {
  position: absolute;
  top: -1px;
  left: -15px;
  display: flex;
  content: "";
  width: 16px;
  height: 18px;
  background-image: url("../images/bg_drawing.png");
  background-repeat: no-repeat;
  background-position: 0px -1px;
}
.b-show {
  animation: showBlock 1s linear forwards;
}

@keyframes showBlock {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
#albgs {
  overflow-y: scroll;
}
#img_msg {
  height: 200;
  width: 200;
}
@media (max-width: 860px) {
  .player {
    font-size: 1em;
    padding: 1em;
  }
  #custom-players {
    margin: 0;
    margin-bottom: 0.3em;
    min-width: 55%;
    min-height: 20vh;
  }

  .game-session-album {
    max-height: 40vh;
  }
  .end-p {
    font-size: 0.6em;
  }

  #next_btn {
    font-size: 0.6em;
  }

  #new_turn {
    font-size: 0.6em;
  }
  #prev_btn {
    font-size: 0.6em;
  }
}
</style>