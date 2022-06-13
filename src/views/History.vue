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
        <div id="albgs" class="game-session-album">
          <div class="msg-block-right">
            <span class="msg-autor">Гость123123123</span>
            <div class="message">
              <span class="msg-text">lorem ipsum</span>
            </div>
          </div>
          <!-- <div class="msg-block-left">
            <span class="msg-autor">Баба Пчола</span>
            <div class="message">
              <div class="msg-content">
                <img id="img_msg" />
              </div>
            </div>
          </div>
          <div class="msg-block-right">
            <span class="msg-autor">Деда Шер</span>
            <div class="message">
              <span class="msg-text">lorem ipsum</span>
            </div>
          </div> -->
          <div class="msg-block-left">
            <span class="msg-autor">james</span>
            <div class="message">
              <div class="msg-content">
                <img
                  id="img_msg"
                  src="data:image/png;base64,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"
                  height="200"
                  width="200"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="end-game">
          <div class="end">
            <p class="end-p">end of {{ name }}'s album</p>
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
  mounted() {
    if (localStorage.name) {
      this.name = localStorage.name;
    }

    this.loadGameSessionInfo();

    this.buildHistory();
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
    buildHistory() {
      let game_session_block = document.getElementById("albgs");

      let msgRightBlock = document.createElement("div");
      msgRightBlock.className = "msg-block-right";

      let msgLeftBlock = document.createElement("div");
      msgLeftBlock.className = "msg-block-left";

      let msgAutor = document.createElement("div");
      msgRightBlock.className = "msg-autor";

      let msgMessage = document.createElement("div");
      msgRightBlock.className = "message";

      let msgText = document.createElement("div");
      msgRightBlock.className = "msg-text";

      let msgContent = document.createElement("div");
      msgRightBlock.className = "msg-content";

      let msgImg = document.createElement("div");
      msgRightBlock.className = "img_msg";
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
  max-height: 100%;
  width: 100%;
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
#canvas_msg {
  /* display: none; */
}
#albgs {
  overflow-y: scroll;
}
@media (max-width: 860px) {
  .player {
    font-size: 14px;
    padding: 20px;
  }
  #custom-players {
    margin: 0;
    margin-bottom: 0.3em;
    min-width: 55%;
    min-height: 50%;
  }

  .game-session-album {
    max-height: 20vh;
  }
  .end-p {
    font-size: 7px;
  }
}
</style>