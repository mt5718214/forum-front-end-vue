<template>
  <div class="chat-main">
    <div class="chat-container p-5">
      <Chatroom></Chatroom>
    </div>
  </div>
</template>

<script>
import Chatroom from "../components/Chatroom.vue";
// import { mapState } from "vuex";

export default {
  name: "Chat",
  // computed: {
  //   ...mapState(["currentUser", "isAuthenticated"]),
  // },
  components: {
    Chatroom,
  },
};
</script>