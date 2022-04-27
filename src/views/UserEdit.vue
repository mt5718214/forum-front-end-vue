<template>
  <div class="container py-5">
    <form @submit.stop.prevent="handleSubmit">
      <legend>Info</legend>
      <div class="form-group">
        <label for="name">Name</label>
        <input
          v-model="user.name"
          id="name"
          type="text"
          name="name"
          class="form-control"
          placeholder="Enter Name"
          required
        />
      </div>

      <div class="form-group">
        <label for="image">Image</label>
        <img
          :src="user.image"
          v-if="user.image"
          class="d-block img-thumbnail mb-3"
          width="200"
          height="200"
        />
        <input
          @change="handleFileChange"
          id="image"
          type="file"
          name="image"
          accept="image/*"
          class="form-control-file"
        />
      </div>

      <legend>Notification</legend>
      <div class="list">
        <div class="list-item">
          <i class="bi bi-envelope-check-fill"></i>
          <input
            type="checkbox"
            id="mailNotification"
            name="mailNotification"
            v-model="user.mailNotification"
          />
          <label for="mailNotification">Mail Notification</label>
        </div>
      </div>

      <button type="submit" class="btn btn-primary" :disabled="isProcessing">
        Submit
      </button>
    </form>
  </div>
</template>

<script>
import usersAPI from "../api/users";
import { mapState } from "vuex";
import { Toast } from "../utils/helpers";

export default {
  name: "UserEdit",
  data() {
    return {
      user: {
        name: "test",
        image: "",
        mailNotification: true,
      },
      isProcessing: false,
    };
  },
  computed: {
    ...mapState(["currentUser"]),
  },
  methods: {
    async setUser(id) {
      try {
        if (this.currentUser.id !== id) {
          this.$router.push({ name: "not-found" });
        }

        this.user = this.currentUser;
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法取得使用者資料, 請稍後再試",
        });
      }
    },
    handleFileChange(e) {
      const { files } = e.target;
      if (files.length === 0) {
        this.user.image = "";
      } else {
        const imageURL = window.URL.createObjectURL(files[0]);
        this.user.image = imageURL;
      }
    },
    async handleSubmit(e) {
      try {
        if (!this.user.name.trim()) {
          Toast.fire({
            icon: "warning",
            title: "名稱不可為空",
          });
          return;
        }

        this.isProcessing = true;
        const form = e.target;
        const formData = new FormData(form);
        const { data } = await usersAPI.update({
          userId: this.currentUser.id,
          formData,
        });
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        this.$router.push({ name: "user" });
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法更新使用者資料, 請稍後再試",
        });
        this.$router.push({ name: "user" });
      }
    },
  },
  created() {
    const { id } = this.$route.params;
    this.setUser(id);
  },
};
</script>

<style scoped>
.list-item {
  width: 300px;
  height: 50px;
  background: #fff;
  padding: 12px;
  font-size: 20px;
  display: flex;
  align-items: center;
}
.list-item input[type="checkbox"] {
  position: absolute;
  clip: rect(0, 0, 0, 0);
}
.list-item input[type="checkbox"] + label {
  position: relative;
  flex: 1;
}
.list-item input[type="checkbox"] + label::before {
  content: "";
  display: inline-block;
  box-sizing: border-box;
  width: 54px;
  height: 30px;
  border-radius: 30px;
  border: 1px solid #ddd;
  box-shadow: 0 0 0 gray inset;
  transition: all 0.25s ease-in-out 0s;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}
.list-item input[type="checkbox"] + label::after {
  content: "";
  display: inline-block;
  width: 30px;
  height: 30px;
  border-radius: 30px;
  border: 1px solid #ddd;
  background-color: white;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  transition: all 0.25s ease-in-out 0s;
  position: absolute;
  right: 24px;
  top: 50%;
  transform: translateY(-50%);
}
.list-item input[type="checkbox"]:checked + label::before {
  border: 1px solid rgb(179, 32, 32);
  box-shadow: 0 0 100px rgb(179, 32, 32) inset;
}
.list-item input[type="checkbox"]:checked + label::after {
  right: 0;
  border: 1px solid limegreen;
}
.list-item i {
  font-size: 16px;
  margin-right: 12px;
  padding: 0.3em;
  background: rgb(179, 32, 32);
  color: white;
  border-radius: 6px;
}

body {
  background: #eee;
  font-family: Helvetica;
}

*,
*:before,
*:after {
  box-sizing: border-box;
}
</style>