<template>
  <div class="container py-5">
    <NavTabs />
    <!-- 餐廳類別標籤 -->
    <RestaurantsNavPills :categories="categories" />

    <div class="row">
      <!-- 餐廳卡片 -->
      <RestaurantCard
        v-for="restaurant in restaurants"
        :key="restaurant.id"
        :initial-restaurant="restaurant"
      />
    </div>

    <!-- 分頁標籤 -->
    <RestaurantsPagination
      :categoryId="categoryId"
      :currentPage="currentPage"
      :nextPage="nextPage"
      :previousPage="previousPage"
      :totalPage="totalPage"
    />
  </div>
</template>

<script>
import NavTabs from "../components/NavTabs.vue";
import RestaurantCard from "../components/RestaurantCard.vue";
import RestaurantsNavPills from "../components/RestaurantsNavPills.vue";
import RestaurantsPagination from "../components/RestaurantsPagination.vue";
import restaurantAPI from "../api/restaurants";
import { Toast } from "../utils/helpers";

export default {
  data() {
    return {
      restaurants: [],
      categories: [],
      totalPage: [],
      currentPage: 1,
      previousPage: -1,
      nextPage: -1,
      categoryId: -1,
    };
  },
  methods: {
    async fetchRestaurants({ queryPage, queryCategoryId }) {
      try {
        const res = await restaurantAPI.getRestaurants({
          page: queryPage,
          categoryId: queryCategoryId,
        });
        const {
          restaurants,
          categories,
          categoryId,
          page,
          totalPage,
          prev,
          next,
        } = res.data;
        this.restaurants = restaurants;
        this.categories = categories;
        this.totalPage = totalPage;
        this.previousPage = prev;
        this.nextPage = next;
        this.currentPage = page;
        this.categoryId = categoryId;
      } catch (error) {
        console.log("error", error);
        Toast.fire({
          icon: "error",
          title: "無法取得餐廳資料，請稍後再試",
        });
      }
    },
  },
  beforeRouteUpdate(to, from, next) {
    const { page = "", categoryId = "" } = to.query;
    this.fetchRestaurants({ queryPage: page, queryCategoryId: categoryId });
    next();
  },
  created() {
    const { page = "", categoryId = "" } = this.$route.query;
    this.fetchRestaurants({ queryPage: page, queryCategoryId: categoryId });
  },
  components: {
    NavTabs,
    RestaurantCard,
    RestaurantsNavPills,
    RestaurantsPagination,
  },
};
</script>