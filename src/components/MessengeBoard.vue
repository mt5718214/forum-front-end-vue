<template>
  <div class="messenge-board" v-if="$refs">
    <div class="top-wrapper">
      <div class="public-text">公開聊天室</div>
    </div>
    <div ref="boardWrapper" class="board-wrapper">
      <div class="messages">
        <div v-for="(message, index) in messages" :key="`msg-${index}`">
          <div
            class="broacast-message-wrapper"
            v-if="
              message.type === 'userComein' && currentUser.id !== message.UserId
            "
          >
            <div class="broacast-message">{{ message.message }}</div>
          </div>
          <div
            class="other message"
            v-if="
              message.type !== 'userComein' && currentUser.id !== message.UserId
            "
          >
            <div
              class="avatar"
              :style="{
                background: `url(${message.image}) no-repeat center/cover`,
              }"
            ></div>
            <div class="wrapper">
              <div class="text">{{ message.message }}</div>
              <div class="time">{{ message.createdAt | fromNow }}</div>
            </div>
          </div>
          <div
            class="self message"
            v-if="
              message.type !== 'userComein' && currentUser.id === message.UserId
            "
          >
            <div class="text">{{ message.message }}</div>
            <div class="time">{{ message.createdAt | fromNow }}</div>
          </div>
        </div>
      </div>
    </div>
    <form @submit.prevent="sendMessage">
      <div class="text-wrapper">
        <input
          v-model="message"
          class="text"
          placeholder="輸入訊息..."
          onfocus="this.placeholder = ''"
          onblur="this.placeholder = '輸入訊息...'"
        />
        <div
          class="icon-wrapper"
          type="submit"
          @click.stop.prevent="sendMessage"
        >
          <div class="bi-send">送出</div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { Toast } from "../utils/helpers";
import { fromNowFilter } from "../utils/mixins";

export default {
  data() {
    return {
      message: "",
      messages: [],
    };
  },
  mixins: [fromNowFilter],
  methods: {
    async sendMessage() {
      if (!this.message.trim()) {
        Toast.fire({
          icon: "warning",
          title: "請輸入訊息",
        });
        return;
      }
      this.$socket.emit("send message", {
        UserId: this.currentUser.id,
        avatar: this.currentUser.avatar,
        message: this.message,
        createdAt: new Date(),
        type: "chat",
        User: this.currentUser,
      });
      this.message = "";
    },
    async fetchChatroom() {},
    async leaveChatroom() {
      this.$socket.emit();
    },
  },
  watch: {
    messages() {
      return this.messages;
    },
  },
  mounted() {
    this.$socket.emit("joinRoom", this.currentUser);
    this.$socket.on("newUser", (data) => {
      const { newUser, onlineUsers } = data;
      this.$store.commit("addOnlineUsers", { newUser, onlineUsers });
    });

    // 收到訊息
    this.$socket.on("msg", (data) => {
      return this.messages.push(data);
    });

    // 向伺服器拿取歷史訊息
    this.$socket.emit("get history", { namespace: "public" });

    // 伺服器回傳歷史訊息
    this.$socket.once("history", (data) => {
      return (this.messages = data);
    });

    // 其他使用者離開
    this.$socket.on("leave", (user) => {
      this.$store.commit("removeOnlineUsers", user);
      console.log(`${user.name} leaved`);
    });
  },
  beforeDestroy() {
    this.$socket.emit("leave", this.currentUser.id);
  },
  created() {
    /**
     * https://developer.mozilla.org/zh-CN/docs/Web/API/Window/beforeunload_event
     * 当浏览器窗口关闭或者刷新时，会触发beforeunload事件。当前页面不会直接关闭，可以点击确定按钮关闭或刷新，也可以取消关闭或刷新。
     */
    window.addEventListener("beforeunload", this.leaveChatroom());
  },
  computed: {
    ...mapState(["currentUser", "isAuthenticated"]),
  },
};
</script>

<style scpoed>
.messenge-board {
  height: calc(100vh - 110px);
  width: 100%;
  border-left: 1px solid #e6ecf0;
  position: relative;
}
.top-wrapper {
  position: absolute;
  top: 0;
  height: 55px;
  width: 100%;
  text-align: left;
}
.info {
  margin: 6px 0 0 15px;
  position: relative;
}
.name {
  font-weight: 900;
  font-size: 19px;
  line-height: 28px;
}
.account {
  position: absolute;
  top: 23px;
  font-weight: 500;
  font-size: 13px;
  color: #e6ecf0;
}
.public-text {
  width: 100%;
  height: 100%;
  text-align: left;
  padding: 15px 0 0 15px;
  font-weight: bold;
  font-size: 18px;
  line-height: 26px;
}
.board-wrapper {
  border-top: #e6ecf0 1px solid;
  position: absolute;
  top: 55px;
  width: 100%;
  height: calc(100vh - 220px);
  padding: 15px;
  overflow-y: scroll;
}
.broacast-message-wrapper {
  display: flex;
  flex-direction: column;
}
.broacast-message {
  width: 100%;
  margin: 10px auto;
  padding: 0 15px;
  width: auto;
  border-radius: 100px;
  vertical-align: middle;
  background: #f0f0f0;
  font-size: 15px;
  height: 22px;
  line-height: 22px;
  vertical-align: middle;
  font-weight: 700;
  color: #657786;
}
.messages {
  width: 100%;
  height: 100%;
  position: relative;
}
.messages .message {
  margin: 10px 0;
  width: 100%;
  font-weight: 500;
  font-size: 15px;
  line-height: 22px;
}
.message.other {
  display: flex;
  flex-direction: row;
}
.message.other .avatar {
  margin-right: 10px;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  cursor: pointer;
}
.message.other .wrapper {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}
.message.other .time {
  margin-left: 10px;
  font-size: 13px;
  text-align: left;
  color: #657786;
}
.message.other .text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: left;
  max-width: 300px;
  min-height: 40px;
  background: #f0f0f0;
  padding: 0 15px;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
}

.message.self {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
}
.message.self .time {
  margin-right: 10px;
  font-size: 13px;
  text-align: right;
  color: #657786;
}
.message.self .text {
  max-width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: right;
  padding: 0 15px;
  min-height: 40px;
  background: #ff6600;
  color: #fff;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  border-bottom-left-radius: 30px;
}

.messenge-board .text-wrapper {
  position: absolute;
  bottom: 0;
  border-top: #e6ecf0 1px solid;
  height: 55px;
  width: 100%;
  display: flex;
  align-items: center;
}
.text-wrapper .text {
  margin-left: 15px;
  padding: 15px;
  border-radius: 100px;
  border: none;
  height: 36px;
  width: 100%;
  background: #f5f8fa;
}
.text-wrapper .icon-wrapper {
  height: 36px;
  width: 72px;
  display: flex;
  align-items: center;
}
.bi-send {
  margin: auto;
  background: #f5f8fa;
  border-radius: 10px;
}
</style>
