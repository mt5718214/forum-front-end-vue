<template>
  <div class="container">
    <UserProfileCard :initial-user="user" :current-user="currentUser" />

    <div class="row">
      <div class="col-md-4">
        <UserFollowingsCard :initial-followings="followings" />
        <br />
        <UserFollowersCard :initial-followers="followers" />
      </div>
      <div class="col-md-8">
        <UserCommentsCard :initial-comments="comments" />
        <br />
        <UserFavoritedRestaurantsCard
          :favoritedRestaurants="favoritedRestaurants"
        />
      </div>
    </div>
  </div>
</template>

<script>
import UserProfileCard from "../components/UserProfileCard.vue";
import UserFollowingsCard from "../components/UserFollowingsCard.vue";
import UserFollowersCard from "../components/UserFollowersCard.vue";
import UserCommentsCard from "../components/UserCommentsCard.vue";
import UserFavoritedRestaurantsCard from "../components/UserFavoritedRestaurantsCard.vue";
import usersAPI from "../api/users";
import { Toast } from "../utils/helpers";
import { mapState } from "vuex";

export default {
  data() {
    return {
      user: {
        id: -1,
        name: "",
        email: "",
        image: "",
        isAdmin: false,
        commentsLength: 0,
        favoritedRestaurantsLength: 0,
        followersLength: 0,
        followingsLength: 0,
        isFollowed: false,
      },
      comments: [],
      favoritedRestaurants: [],
      followers: [],
      followings: [],
    };
  },
  methods: {
    async fetchUser(userId) {
      try {
        const { data } = await usersAPI.get({ userId });
        const {
          profile: {
            id,
            name,
            email,
            isAdmin,
            image,
            Comments,
            FavoritedRestaurants,
            Followers,
            Followings,
          },
          isFollowed,
        } = data;

        this.user = {
          id,
          name,
          email,
          isAdmin,
          image,
          commentsLength: Comments.length,
          favoritedRestaurantsLength: FavoritedRestaurants.length,
          followersLength: Followers.length,
          followingsLength: Followings.length,
          isFollowed,
        };
        this.comments = Comments;
        this.favoritedRestaurants = FavoritedRestaurants;
        this.followers = Followers;
        this.followings = Followings;
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法取得使用者資料, 請稍後再試",
        });
      }
    },
  },
  computed: {
    ...mapState(["currentUser"]),
  },
  beforeRouteUpdate(to, from, next) {
    const { id } = to.params;
    this.fetchUser(id);
    next();
  },
  created() {
    const { id } = this.$route.params;
    this.fetchUser(id);
  },
  components: {
    UserProfileCard,
    UserFollowingsCard,
    UserFollowersCard,
    UserCommentsCard,
    UserFavoritedRestaurantsCard,
  },
};
</script>