<template>
  <div class="container py-5">
    <form class="w-100" @submit.prevent.stop="handleSubmit">
      <div class="text-center mb-4">
        <h1 class="h3 mb-3 font-weight-normal">Sign In</h1>
      </div>

      <div class="form-label-group mb-2">
        <label for="email">email</label>
        <input
          id="email"
          v-model="email"
          name="email"
          type="email"
          class="form-control"
          placeholder="email"
          autocomplete="username"
          required
          autofocus
        />
      </div>

      <div class="form-label-group mb-3">
        <label for="password">Password</label>
        <input
          id="password"
          v-model="password"
          name="password"
          type="password"
          class="form-control"
          placeholder="Password"
          autocomplete="current-password"
          required
        />
      </div>

      <button
        class="btn btn-lg btn-primary btn-block mb-3"
        type="submit"
        :disabled="isProcessing"
      >
        Submit
      </button>

      <div class="text-center mb-3">
        <p>
          <router-link to="/signup">Sign Up</router-link>
        </p>
      </div>

      <p class="mt-5 mb-3 text-muted text-center">&copy; 2021-2022</p>
    </form>
  </div>
</template>

<script>
import authorizationApi from "../api/authorization";
import { Toast } from "../utils/helpers";

export default {
  data() {
    return {
      email: "",
      password: "",
      isProcessing: false,
    };
  },
  methods: {
    async handleSubmit() {
      if (!this.email || !this.password) {
        Toast.fire({
          icon: "warning",
          title: "帳號密碼為必填欄位",
        });
        return;
      }
      this.isProcessing = true;

      try {
        const res = await authorizationApi.signIn({
          email: this.email,
          password: this.password,
        });
        const { token, status, message } = res.data;

        if (status !== "success") {
          throw new Error(message);
        }
        localStorage.setItem("token", token);

        // 登入成功後轉址
        this.$router.push("/restaurants");
      } catch (error) {
        console.log("error", error);

        this.password = "";
        this.isProcessing = false;
        Toast.fire({
          icon: "warning",
          title: "請確認您輸入了正確的帳號密碼",
        });
      }
    },
  },
};
</script>