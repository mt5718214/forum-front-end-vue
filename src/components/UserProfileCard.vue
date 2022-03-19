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
              @click="deleteFollow(user.id)"
              v-if="user.isFollowed"
            >
              取消追蹤
            </button>
            <button
              type="submit"
              class="btn btn-primary"
              @click="addFollow(user.id)"
              v-else
            >
              追蹤
            </button>
          </template>
          <template v-else>
            <router-link
              :to="{ name: 'user-edit', params: { id: user.id } }"
              class="btn btn-primary"
            >
              編輯
            </router-link>
          </template>
          <p></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { emptyImageFilter } from "../utils/mixins";
import userAPI from "../api/users";
import { Toast } from "../utils/helpers";

export default {
  name: "userProfileCard",
  props: {
    initialUser: {
      type: Object,
      required: true,
    },
    currentUser: {
      type: Object,
      required: true,
    },
  },
  mixins: [emptyImageFilter],
  data() {
    return {
      user: { ...this.initialUser },
    };
  },
  methods: {
    async addFollow(userId) {
      try {
        const { data } = await userAPI.addFollowing({ userId });
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        this.user.isFollowed = true;
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法加入追蹤, 請稍後再試",
        });
      }
    },
    async deleteFollow(userId) {
      try {
        const { data } = await userAPI.deleteFollowing({ userId });
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        this.user.isFollowed = false;
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法移除追蹤, 請稍後再試",
        });
      }
    },
  },
  watch: {
    initialUser(newValue) {
      this.user = {
        ...this.user,
        ...newValue,
      };
    },
  },
};
</script>