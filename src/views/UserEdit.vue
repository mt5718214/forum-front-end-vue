<template>
  <div class="container py-5">
    <form @submit.stop.prevent="handleSubmit">
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