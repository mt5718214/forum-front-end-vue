<template>
  <div class="container py-5">
    <!-- AdminNav Component -->
    <AdminNav />
    <Spinner v-if="isLoading" />
    <template v-else>
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
    </template>
  </div>
</template>

<script>
import AdminNav from "../components/AdminNav.vue";
import Spinner from "../components/Spinner.vue";
import adminAPI from "../api/admin";
import { mapState } from "vuex";
import { Toast } from "../utils/helpers";

export default {
  name: "AdminUsers",
  components: {
    AdminNav,
    Spinner,
  },
  data() {
    return {
      users: [],
      isLoading: true,
    };
  },
  methods: {
    async fetchUsers() {
      try {
        this.isLoading = true;
        const { data } = await adminAPI.users.get();
        this.users = data.users;
        this.isLoading = false;
      } catch (error) {
        this.isLoading = false;
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