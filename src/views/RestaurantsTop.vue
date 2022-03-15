<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">人氣餐廳</h1>

    <hr />
    <div class="card mb-3" style="max-width: 540px; margin: auto">
      <div
        class="row no-gutters"
        v-for="restaurant in restaurantsTop"
        :key="restaurant.id"
      >
        <div class="col-md-4">
          <router-link
            :to="{ name: 'restaurant', params: { id: restaurant.id } }"
          >
            <img class="card-img" :src="restaurant.image | emptyImage" />
          </router-link>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">
              {{ restaurant.name }}
            </h5>
            <span class="badge badge-secondary"
              >收藏數：{{ restaurant.FavoriteCount }}</span
            >
            <p class="card-text">
              {{ restaurant.description }}
            </p>
            <router-link
              :to="{ name: 'restaurant', params: { id: restaurant.id } }"
              class="btn btn-primary mr-2"
              >Show</router-link
            >

            <button
              type="button"
              class="btn btn-danger mr-2"
              v-if="restaurant.isFavorited"
              @click="deleteFavorite(restaurant.id)"
            >
              移除最愛
            </button>
            <button
              type="button"
              class="btn btn-primary"
              v-else
              @click="addFavorite(restaurant.id)"
            >
              加到最愛
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavTabs from "../components/NavTabs.vue";
import { emptyImageFilter } from "../utils/mixins";
import restaurantAPI from "../api/restaurants";
import { Toast } from "../utils/helpers";

export default {
  name: "RestaurantsTop",
  data() {
    return {
      restaurantsTop: [],
    };
  },
  mixins: [emptyImageFilter],
  methods: {
    async fetchTop() {
      try {
        const { data } = await restaurantAPI.getRestaurantTop();
        this.restaurantsTop = data.restaurants;
      } catch (error) {
        console.log("error", error);
        Toast.fire({
          icon: "error",
          title: "",
        });
      }
    },
    async addFavorite(restaurantId) {
      try {
        const { data } = await restaurantAPI.addFavorite({ restaurantId });
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        const restaurant = this.restaurantsTop.find(
          (restaurant) => restaurant.id === restaurantId
        );
        if (restaurant) {
          restaurant.isFavorited = true;
        }
      } catch (error) {
        console.log("error", error);
        Toast.fire({
          icon: "error",
          title: "無法加到最愛，請稍後再試",
        });
      }
    },
    async deleteFavorite(restaurantId) {
      try {
        const { data } = await restaurantAPI.deleteFavorite({ restaurantId });
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        const restaurant = this.restaurantsTop.find(
          (restaurant) => restaurant.id === restaurantId
        );
        if (restaurant) {
          restaurant.isFavorited = false;
        }
      } catch (error) {
        console.log("error", error);
        Toast.fire({
          icon: "error",
          title: "無法移除最愛，請稍後再試",
        });
      }
    },
  },
  created() {
    this.fetchTop();
  },
  components: {
    NavTabs,
  },
};
</script>