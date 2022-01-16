<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">
      美食達人
    </h1>
    <hr>
    <div class="row text-center">
      <div class="col-3" v-for="user in users" :key="user.id">
        <router-link :to=" { name: 'users-top' } ">
          <img
            :src="user.image"
            width="140px"
            height="140px"
          >
        </router-link>
        <h2>{{user.name}}</h2>
        <span class="badge badge-secondary">追蹤人數：{{user.FollowerCount}}</span>
        <p class="mt-3">
          <button
            v-if="isFollowed"
            type="button"
            class="btn btn-danger"
          >
            取消追蹤
          </button>
          <button
            v-else
            type="button"
            class="btn btn-primary"
          >
            追蹤
          </button>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import NavTabs from '../components/NavTabs.vue'
const dummyUser = {
  "users": [
    {
      "id": 1,
      "name": "root",
      "email": "root@example.com",
      "password": "$2a$10$Uim7q15P7OVma61/ExL/heqfoFPmwkln1zZI0WP6CWcdcTKZ8YYfK",
      "isAdmin": true,
      "image": null,
      "createdAt": "2022-01-14T10:11:33.000Z",
      "updatedAt": "2022-01-14T10:11:33.000Z",
      "Followers": [],
      "FollowerCount": 0,
      "isFollowed": false
    },
    {
      "id": 2,
      "name": "user1",
      "email": "user1@example.com",
      "password": "$2a$10$XhQPgnmozqTFXVzWJkv//.SypTpxxFho7AldEuVA29Vw61m9/Q4KK",
      "isAdmin": false,
      "image": null,
      "createdAt": "2022-01-14T10:11:33.000Z",
      "updatedAt": "2022-01-14T10:11:33.000Z",
      "Followers": [],
      "FollowerCount": 0,
      "isFollowed": false
    },
    {
      "id": 3,
      "name": "user2",
      "email": "user2@example.com",
      "password": "$2a$10$1kmMuIhz9Iv5eYOUIZFLx.D5fzu1gn8khoDlrq5lgJyHcuicGq4AG",
      "isAdmin": false,
      "image": null,
      "createdAt": "2022-01-14T10:11:33.000Z",
      "updatedAt": "2022-01-14T10:11:33.000Z",
      "Followers": [],
      "FollowerCount": 0,
      "isFollowed": false
    }
  ]
}

export default {
    components: {
        NavTabs
    },
    data() {
      return {
        users: []
      }
    },
    methods: {
      fetchUser() {
        this.users = dummyUser.users
      }
    },
    created() {
      this.fetchUser()
    }
}
</script>