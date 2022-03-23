<template>
  <div class="container py-5">
    <NavTabs />
    <Spinner v-if="isLoading" />
    <template v-else>
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

      <div v-if="restaurants.length < 1" class="ml-3">此類別目前無餐廳資料</div>

      <!-- 分頁標籤 -->
      <RestaurantsPagination
        v-if="restaurants.length"
        :categoryId="categoryId"
        :currentPage="currentPage"
        :nextPage="nextPage"
        :previousPage="previousPage"
        :totalPage="totalPage"
      />
    </template>
  </div>
</template>

<script>
import NavTabs from "../components/NavTabs.vue";
import RestaurantCard from "../components/RestaurantCard.vue";
import RestaurantsNavPills from "../components/RestaurantsNavPills.vue";
import RestaurantsPagination from "../components/RestaurantsPagination.vue";
import Spinner from "../components/Spinner.vue";
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
      isLoading: true,
    };
  },
  methods: {
    async fetchRestaurants({ queryPage, queryCategoryId }) {
      try {
        this.isLoading = true;
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
        this.isLoading = false;
      } catch (error) {
        console.log("error", error);
        this.isLoading = false;
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
    Spinner,
  },
};
</script>