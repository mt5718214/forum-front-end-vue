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
              @click="toggleUserRole(user.id)"
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
const dummyUser = {
  users: [
    {
      id: 1,
      name: "root",
      email: "root@example.com",
      password: "$2a$10$Uim7q15P7OVma61/ExL/heqfoFPmwkln1zZI0WP6CWcdcTKZ8YYfK",
      isAdmin: true,
      image: null,
      createdAt: "2022-01-14T10:11:33.000Z",
      updatedAt: "2022-01-14T10:11:33.000Z",
      Followers: [],
      FollowerCount: 0,
      isFollowed: false,
    },
    {
      id: 2,
      name: "user1",
      email: "user1@example.com",
      password: "$2a$10$XhQPgnmozqTFXVzWJkv//.SypTpxxFho7AldEuVA29Vw61m9/Q4KK",
      isAdmin: false,
      image: null,
      createdAt: "2022-01-14T10:11:33.000Z",
      updatedAt: "2022-01-14T10:11:33.000Z",
      Followers: [],
      FollowerCount: 0,
      isFollowed: false,
    },
    {
      id: 3,
      name: "user2",
      email: "user2@example.com",
      password: "$2a$10$1kmMuIhz9Iv5eYOUIZFLx.D5fzu1gn8khoDlrq5lgJyHcuicGq4AG",
      isAdmin: false,
      image: null,
      createdAt: "2022-01-14T10:11:33.000Z",
      updatedAt: "2022-01-14T10:11:33.000Z",
      Followers: [],
      FollowerCount: 0,
      isFollowed: false,
    },
  ],
};

const dummyCurrentUser = {
  currentUser: {
    id: 1,
    isAdmin: true,
  },
  isAuthenticated: true,
};

export default {
  name: "AdminUsers",
  components: {
    AdminNav,
  },
  data() {
    return {
      users: [],
      currentUser: dummyCurrentUser.currentUser,
    };
  },
  methods: {
    fetchUsers() {
      this.users = dummyUser.users;
    },
    toggleUserRole(userId) {
      //TODO:透過 API 去向伺服器更新使用者角色
      this.users.forEach((user) => {
        if (user.id === userId) {
          user.isAdmin = !user.isAdmin;
        }
      });
    },
  },
  created() {
    this.fetchUsers();
  },
};
</script>