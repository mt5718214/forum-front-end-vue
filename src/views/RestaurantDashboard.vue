<template>
  <div class="container py-5">
    <div>
      <h1>{{ restaurant.name }}</h1>
      <span class="badge badge-secondary mt-1 mb-3">
        {{ restaurant.categoryName }}
      </span>
    </div>

    <hr />

    <ul>
      <li>評論數： {{ restaurant.commentsLength }}</li>
      <li>瀏覽次數： {{ restaurant.viewCounts }}</li>
    </ul>

    <button type="button" class="btn btn-link" @click="$router.back()">
      回上一頁
    </button>
  </div>
</template>

<script>
import restaurantsAPI from "../api/restaurants";
import { Toast } from "../utils/helpers";

export default {
  name: "restaurantDashboard",
  data() {
    return {
      restaurant: {
        id: -1,
        name: "",
        categoryName: "",
        commentsLength: 0,
        viewCounts: 0,
      },
    };
  },
  methods: {
    async fetchRestaurant(restaurantId) {
      try {
        const { data } = await restaurantsAPI.getDetail({ restaurantId });
        const { id, name, Category, Comments, viewCounts } = data.restaurant;
        this.restaurant = {
          id,
          name,
          categoryName: Category.name,
          commentsLength: Comments.length,
          viewCounts,
        };
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法取得餐廳資料, 請稍後再試",
        });
      }
    },
  },
  created() {
    const { id } = this.$route.params;
    this.fetchRestaurant(id);
  },
};
</script>