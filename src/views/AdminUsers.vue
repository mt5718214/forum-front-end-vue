<template>
  <div class="container py-5">
    <!-- AdminNav Component -->
    <AdminNav />

    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Email</th>
          <th scope="col">Role</th>
          <th scope="col" width="140">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <th scope="row">{{ user.id }}</th>
          <td>{{ user.email }}</td>
          <td>{{ user.isAdmin ? "admin" : "user" }}</td>
          <td>
            <button
              type="button"
              class="btn btn-link"
              v-if="currentUser.id !== user.id"
              @click="toggleUserRole(user.id, user.isAdmin)"
            >
              {{ user.isAdmin ? "set as user" : "set as admin" }}
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import AdminNav from "../components/AdminNav.vue";
import adminAPI from "../api/admin";
import { mapState } from "vuex";
import { Toast } from "../utils/helpers";

export default {
  name: "AdminUsers",
  components: {
    AdminNav,
  },
  data() {
    return {
      users: [],
    };
  },
  methods: {
    async fetchUsers() {
      try {
        const { data } = await adminAPI.users.get();
        this.users = data.users;
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法取得使用者列表資料, 請稍後再試",
        });
      }
    },
    async toggleUserRole(userId, isAdmin) {
      try {
        const { data } = await adminAPI.users.toggleRole({ userId, isAdmin });
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        this.users.forEach((user) => {
          if (user.id === userId) {
            user.isAdmin = !user.isAdmin;
          }
        });
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法更新使用者角色, 請稍後再試",
        });
      }
    },
  },
  computed: {
    ...mapState(["currentUser"]),
  },
  created() {
    this.fetchUsers();
  },
};
</script>