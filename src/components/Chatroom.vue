<template>
  <div class="chat-room">
    <div class="chat-users">
      <div class="title">
        上線使用者 ({{ onlineUsers ? onlineUsers.length : 0 }})
      </div>
      <div class="list-group" v-if="onlineUsers.length > 0">
        <div
          v-for="user in onlineUsers"
          :key="`${user.id + Math.random()}`"
          class="list-group-item"
        >
          <div
            class="avatar"
            @click="$router.push(`/users/${user.id}`).catch(() => {})"
            :style="{
              background: `url(${user.image}) no-repeat center/cover`,
            }"
          ></div>
          <div class="info">
            <div
              class="name"
              @click="$router.push(`/users/${user.id}`).catch(() => {})"
            >
              {{ user.name }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <MessengeBoard></MessengeBoard>
  </div>
</template>

<script>
import MessengeBoard from "./MessengeBoard.vue";
import { mapState } from "vuex";

export default {
  name: "Chatroom",
  computed: {
    ...mapState(["currentUser", "onlineUsers"]),
  },
  components: {
    MessengeBoard,
  },
};
</script>

<style scoped>
.chat-room {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
}
.chat-users {
  width: 100%;
  max-width: 375px;
}
.title {
  width: 100%;
  position: relative;
  text-align: left;
  padding: 15px 0 0 15px;
  font-weight: bold;
  font-size: 18px;
  line-height: 26px;
  height: 55px;
}
.list-group {
  border: none;
}
.list-group-item {
  position: relative;
  border: none;
  border-radius: 0;
  border-top: 1px solid #e6ecf0;
  border-bottom: 1px solid #e6ecf0;
  height: 71px;
  padding: 10px 15px 10px 15px;
  background: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  transition: ease-in 0.2s;
}
.active-bar {
  width: 2px;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  background: #ff6600;
}
.avatar {
  margin-right: 10px;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  cursor: pointer;
}
.info {
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  height: 28px;
}
.name {
  text-align: left;
  margin-right: 10px;
  font-weight: 900;
  font-size: 19px;
  height: 28px;
  line-height: 28px;
  cursor: pointer;
}
.account {
  text-align: left;
  font-weight: 500;
  font-size: 15px;
  line-height: 22px;
  vertical-align: bottom;
  height: 24px;
  color: #657786;
  cursor: pointer;
}
</style>