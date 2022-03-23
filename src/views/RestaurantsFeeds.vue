<template>
  <div class="container py-5">
    <NavTabs />
    <Spinner v-if="isLoading" />
    <template v-else>
      <h1 class="mt-5">最新動態</h1>
      <hr />
      <div class="row">
        <div class="col-md-6">
          <h3>最新餐廳</h3>
          <!-- 最新餐廳 NewestRestaurants -->
          <NewestRestaurants :restaurants="restaurants" />
        </div>
        <div class="col-md-6">
          <h3>最新評論</h3>
          <!-- 最新評論 NewestComments-->
          <NewestComments :comments="comments" />
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import NavTabs from "../components/NavTabs.vue";
import NewestRestaurants from "../components/NewestRestaurants.vue";
import NewestComments from "../components/NewestComments.vue";
import Spinner from "../components/Spinner.vue";
import restaurantAPI from "../api/restaurants";
import { Toast } from "../utils/helpers";

export default {
  data() {
    return {
      restaurants: [],
      comments: [],
      isLoading: true,
    };
  },
  components: {
    NavTabs,
    NewestRestaurants,
    NewestComments,
    Spinner,
  },
  methods: {
    async fetchFeeds() {
      try {
        this.isLoading = true;
        const res = await restaurantAPI.getRestaurantsFeeds();
        const { restaurants, comments } = res.data;
        this.isLoading = false;
        this.restaurants = restaurants;
        this.comments = comments;
      } catch (error) {
        console.log("error", error);
        this.isLoading = false;
        Toast.fire({
          icon: "error",
          title: "無法取得資料，請稍後再試",
        });
      }
    },
  },
  created() {
    this.fetchFeeds();
  },
};
</script>