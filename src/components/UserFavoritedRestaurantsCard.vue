<template>
  <div class="card">
    <div class="card-header">
      <strong>{{ favoritedRestaurantsArray.length }}</strong> 收藏的餐廳
    </div>
    <div class="card-body">
      <router-link
        v-for="restaurant in favoritedRestaurantsArray"
        :key="restaurant.id"
        :to="{ name: 'restaurant', params: { id: restaurant.id } }"
      >
        <img
          :src="restaurant.image | emptyImage"
          width="60"
          height="60"
          class="avatar"
        />
      </router-link>
    </div>
  </div>
</template>

<script>
import { emptyImageFilter } from "../utils/mixins";
export default {
  name: "userFavoritedRestaurantsCard",
  props: {
    favoritedRestaurants: {
      type: Array,
      required: true,
    },
  },
  mixins: [emptyImageFilter],
  data() {
    return {
      favoritedRestaurantsArray: this.favoritedRestaurants,
    };
  },
  watch: {
    favoritedRestaurants(newValue) {
      this.favoritedRestaurantsArray = {
        ...newValue,
      };
    },
  },
};
</script>