<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">
      人氣餐廳
    </h1>

    <hr>
    <div
      class="card mb-3"
      style="max-width: 540px;margin: auto;"
    >
      <div class="row no-gutters" v-for="restaurant in restaurantsTop" :key="restaurant.id">
        <div class="col-md-4">
          <a href="#">
            <img
              class="card-img"
              :src="restaurant.image"
            >
          </a>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">
              {{ restaurant.name }}
            </h5>
            <span class="badge badge-secondary">收藏數：{{ restaurant.FavoriteCount}}</span>
            <p class="card-text">
              {{ restaurant.description }}
            </p>
            <a
              href="#"
              class="btn btn-primary mr-2"
            >Show</a>

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
import NavTabs from '../components/NavTabs.vue'

const dummyData = {
  "restaurants": [
    {
      "id": 50,
      "name": "Rahsaan Mohr",
      "tel": "027.742.2828 x2771",
      "address": "035 Emil Place",
      "opening_hours": "08:00",
      "description": "Ipsam totam nesciunt corrupti.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=73.14353949661196",
      "viewCounts": 0,
      "createdAt": "2022-01-14T10:11:33.000Z",
      "updatedAt": "2022-01-14T10:11:33.000Z",
      "CategoryId": 5,
      "FavoritedUsers": [],
      "isFavorited": false,
      "FavoriteCount": 1
    },
    {
      "id": 49,
      "name": "Walton Stokes",
      "tel": "(087) 213-6412 x168",
      "address": "4996 Justus Underpass",
      "opening_hours": "08:00",
      "description": "Nam ut praesentium repudiandae aut praesentium sim",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=79.68796131341065",
      "viewCounts": 0,
      "createdAt": "2022-01-14T10:11:33.000Z",
      "updatedAt": "2022-01-14T10:11:33.000Z",
      "CategoryId": 4,
      "FavoritedUsers": [],
      "isFavorited": false,
      "FavoriteCount": 0
    },
    {
      "id": 48,
      "name": "Richmond Kautzer",
      "tel": "673-534-0606 x2015",
      "address": "698 Audra Turnpike",
      "opening_hours": "08:00",
      "description": "Quia tenetur assumenda quia et consequatur iure at",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=74.37491286216071",
      "viewCounts": 0,
      "createdAt": "2022-01-14T10:11:33.000Z",
      "updatedAt": "2022-01-14T10:11:33.000Z",
      "CategoryId": 4,
      "FavoritedUsers": [],
      "isFavorited": false,
      "FavoriteCount": 0
    },
    {
      "id": 47,
      "name": "Thora Willms",
      "tel": "606-257-5891",
      "address": "529 Luna Hills",
      "opening_hours": "08:00",
      "description": "Sit nulla sit officiis enim consequuntur ad non pr",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=6.1942059124344695",
      "viewCounts": 0,
      "createdAt": "2022-01-14T10:11:33.000Z",
      "updatedAt": "2022-01-14T10:11:33.000Z",
      "CategoryId": 2,
      "FavoritedUsers": [],
      "isFavorited": false,
      "FavoriteCount": 0
    },
    {
      "id": 46,
      "name": "Angela Batz",
      "tel": "423-142-5230 x356",
      "address": "7663 Terence Passage",
      "opening_hours": "08:00",
      "description": "et",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=74.35582646999626",
      "viewCounts": 0,
      "createdAt": "2022-01-14T10:11:33.000Z",
      "updatedAt": "2022-01-14T10:11:33.000Z",
      "CategoryId": 1,
      "FavoritedUsers": [],
      "isFavorited": false,
      "FavoriteCount": 0
    },
    {
      "id": 45,
      "name": "Johnpaul Willms",
      "tel": "(782) 243-1904 x8098",
      "address": "3042 Strosin Expressway",
      "opening_hours": "08:00",
      "description": "dolor",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=25.836601445917772",
      "viewCounts": 0,
      "createdAt": "2022-01-14T10:11:33.000Z",
      "updatedAt": "2022-01-14T10:11:33.000Z",
      "CategoryId": 1,
      "FavoritedUsers": [],
      "isFavorited": false,
      "FavoriteCount": 0
    },
    {
      "id": 44,
      "name": "Theodora Veum",
      "tel": "1-343-661-6962 x5723",
      "address": "9853 Zemlak Islands",
      "opening_hours": "08:00",
      "description": "Similique odit maxime maxime ea cum nam aperiam.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=68.07841385771425",
      "viewCounts": 0,
      "createdAt": "2022-01-14T10:11:33.000Z",
      "updatedAt": "2022-01-14T10:11:33.000Z",
      "CategoryId": 5,
      "FavoritedUsers": [],
      "isFavorited": false,
      "FavoriteCount": 0
    },
    {
      "id": 43,
      "name": "Selena Bartell",
      "tel": "623.972.5896",
      "address": "68711 Ryan Squares",
      "opening_hours": "08:00",
      "description": "minus et sed",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=16.68556701850603",
      "viewCounts": 0,
      "createdAt": "2022-01-14T10:11:33.000Z",
      "updatedAt": "2022-01-14T10:11:33.000Z",
      "CategoryId": 4,
      "FavoritedUsers": [],
      "isFavorited": false,
      "FavoriteCount": 0
    },
    {
      "id": 42,
      "name": "Dasia Schroeder",
      "tel": "755.136.9321 x320",
      "address": "188 Homenick Glens",
      "opening_hours": "08:00",
      "description": "qui quisquam illum",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=10.24951056182628",
      "viewCounts": 0,
      "createdAt": "2022-01-14T10:11:33.000Z",
      "updatedAt": "2022-01-14T10:11:33.000Z",
      "CategoryId": 5,
      "FavoritedUsers": [],
      "isFavorited": false,
      "FavoriteCount": 0
    },
    {
      "id": 41,
      "name": "Camilla D'Amore Sr.",
      "tel": "1-476-120-3479",
      "address": "06857 Harris Coves",
      "opening_hours": "08:00",
      "description": "fugit similique ipsa",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=38.291757009523494",
      "viewCounts": 0,
      "createdAt": "2022-01-14T10:11:33.000Z",
      "updatedAt": "2022-01-14T10:11:33.000Z",
      "CategoryId": 2,
      "FavoritedUsers": [],
      "isFavorited": false,
      "FavoriteCount": 0
    }
  ]
}

export default {
    name: 'RestaurantsTop',
    data() {
      return {
        restaurantsTop: []
      }
    },
    methods: {
      fetchTop() {
        this.restaurantsTop = dummyData.restaurants
      },
      addFavorite(restaurantId) {
        const data = this.restaurantsTop.find(restaurant => restaurant.id === restaurantId)
        if(data) {
          data.isFavorited = true
        }
      },
      deleteFavorite(restaurantId) {
        const data = this.restaurantsTop.find(restaurant => restaurant.id === restaurantId)
        if(data) {
          data.isFavorited = false
        }
      }
    },
    created() {
      this.fetchTop()
    },
    components: {
        NavTabs
    }
}
</script>