<template>
  <div class="container py-5">
    <div>
      <h1>{{ restaurant.name }}</h1>
      <span class="badge badge-secondary mt-1 mb-3">
        {{ restaurant.categoryName }}
      </span>
    </div>

    <hr>

    <ul>
      <li>評論數： {{ restaurant.commentsLength }} </li>
      <li>瀏覽次數： {{ restaurant.viewCounts }} </li>
    </ul>

    <button
      type="button"
      class="btn btn-link"
      @click="$router.back()"
    >
      回上一頁
    </button>
  </div>
</template>

<script>
const dummyData = {
  "restaurant": {
    "id": 1,
    "name": "Mrs. Florence Erdman",
    "tel": "319.016.6046 x5527",
    "address": "401 Meda Ridge",
    "opening_hours": "08:00",
    "description": "Dicta quia nesciunt a ut dolores id beatae. Dolorum est et fuga omnis sint quos dolorum. Quidem sapiente reiciendis eaque praesentium neque deserunt recusandae.",
    "image": "https://loremflickr.com/320/240/restaurant,food/?random=47.294678167554",
    "viewCounts": 4,
    "createdAt": "2022-01-14T10:11:33.000Z",
    "updatedAt": "2022-01-17T03:21:11.000Z",
    "CategoryId": 5,
    "Category": {
      "id": 5,
      "name": "素食料理",
      "createdAt": "2022-01-14T10:11:33.000Z",
      "updatedAt": "2022-01-14T10:11:33.000Z"
    },
    "Comments": [
      {
        "id": 1,
        "text": "Asperiores commodi voluptatem.",
        "UserId": 3,
        "RestaurantId": 1,
        "createdAt": "2022-01-14T10:11:33.000Z",
        "updatedAt": "2022-01-14T10:11:33.000Z",
        "User": {
          "id": 3,
          "name": "user2",
          "email": "user2@example.com",
          "password": "$2a$10$1kmMuIhz9Iv5eYOUIZFLx.D5fzu1gn8khoDlrq5lgJyHcuicGq4AG",
          "isAdmin": false,
          "image": null,
          "createdAt": "2022-01-14T10:11:33.000Z",
          "updatedAt": "2022-01-14T10:11:33.000Z"
        }
      },
      {
        "id": 51,
        "text": "Ratione cum consequuntur.",
        "UserId": 1,
        "RestaurantId": 1,
        "createdAt": "2022-01-14T10:11:33.000Z",
        "updatedAt": "2022-01-14T10:11:33.000Z",
        "User": {
          "id": 1,
          "name": "root",
          "email": "root@example.com",
          "password": "$2a$10$Uim7q15P7OVma61/ExL/heqfoFPmwkln1zZI0WP6CWcdcTKZ8YYfK",
          "isAdmin": true,
          "image": null,
          "createdAt": "2022-01-14T10:11:33.000Z",
          "updatedAt": "2022-01-14T10:11:33.000Z"
        }
      },
      {
        "id": 101,
        "text": "Eveniet vel cumque voluptas ut eum occaecati.",
        "UserId": 2,
        "RestaurantId": 1,
        "createdAt": "2022-01-14T10:11:33.000Z",
        "updatedAt": "2022-01-14T10:11:33.000Z",
        "User": {
          "id": 2,
          "name": "user1",
          "email": "user1@example.com",
          "password": "$2a$10$XhQPgnmozqTFXVzWJkv//.SypTpxxFho7AldEuVA29Vw61m9/Q4KK",
          "isAdmin": false,
          "image": null,
          "createdAt": "2022-01-14T10:11:33.000Z",
          "updatedAt": "2022-01-14T10:11:33.000Z"
        }
      }
    ]
  }
}

export default {
    name: 'restaurantDashboard',
    data() {
        return {
            restaurant: {
                id: -1,
                name: '',
                categoryName: '',
                commentsLength: 0,
                viewCounts: 0
            }
        }
    },
    methods: {
        fetchRestaurant() {
            const { id, name, Category, Comments, viewCounts } = dummyData.restaurant
            this.restaurant = {
                id,
                name,
                categoryName: Category.name,
                commentsLength: Comments.length,
                viewCounts
            }
        }
    },
    created() {
        this.fetchRestaurant()
    }
}
</script>