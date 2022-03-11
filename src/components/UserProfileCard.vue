<template>
  <div class="card mb-3">
    <div class="row no-gutters">
      <div class="col-md-4">
        <img :src="user.image | emptyImage" width="300px" height="300px" />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">{{ user.name }}</h5>
          <p class="card-text">
            {{ user.email }}
          </p>
          <ul class="list-unstyled list-inline">
            <li>
              <strong>{{ user.commentsLength }}</strong> 已評論餐廳
            </li>
            <li>
              <strong>{{ user.favoritedRestaurantsLength }}</strong> 收藏的餐廳
            </li>
            <li>
              <strong>{{ user.followingsLength }}</strong> followings (追蹤者)
            </li>
            <li>
              <strong>{{ user.followersLength }}</strong> followers (追隨者)
            </li>
          </ul>
          <p></p>
          <template v-if="user.id !== currentUser.id">
            <button
              type="submit"
              class="btn btn-danger"
              @click="deleteFollow"
              v-if="user.isFollowed"
            >
              取消追蹤
            </button>
            <button
              type="submit"
              class="btn btn-primary"
              @click="addFollow"
              v-else
            >
              追蹤
            </button>
          </template>
          <template v-else>
            <button type="submit" class="btn btn-primary" @click="addFollow">
              編輯
            </button>
          </template>
          <p></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { emptyImageFilter } from "../utils/mixins";
const dummyUser = {
  currentUser: {
    id: 100,
    name: "test",
    email: "test@1234",
    image: "",
    isAdmin: false,
    commentsLength: 0,
    favoritedRestaurantsLength: 0,
    followersLength: 0,
    followingsLength: 0,
    isFollowed: false,
  },
};

export default {
  name: "userProfileCard",
  props: {
    initialUser: {
      type: Object,
      required: true,
    },
  },
  mixins: [emptyImageFilter],
  data() {
    return {
      user: { ...this.initialUser },
      currentUser: {},
    };
  },
  methods: {
    addFollow() {
      this.user.isFollowed = true;
    },
    deleteFollow() {
      this.user.isFollowed = false;
    },
  },
  created() {
    this.currentUser = dummyUser.currentUser;
  },
};
</script>