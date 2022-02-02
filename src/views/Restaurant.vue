<template>
  <div class="container py-5">
    <!-- 餐廳資訊頁 RestaurantDetail -->
    <RestaurantDetail 
      :initial-restaurant="restaurant"
    />
    <hr>
    <!-- 餐廳評論 RestaurantComments -->
    <RestaurantComments 
      :restaurant-comments="restaurantComments"
      @after-delete-comment="afterDeleteComment"
    />
    <!-- 新增評論 CreateComment -->
    <CreateComment 
      :restaurantId="restaurant.id"
      @after-create-comment="afterCreateComment"
    />
  </div>
</template>

<script>
import RestaurantDetail from '../components/RestaurantDetail.vue'
import RestaurantComments from '../components/RestaurantComments.vue'
import CreateComment from '../components/CreateComment.vue'
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
    "updatedAt": "2022-01-17T03:21:11.715Z",
    "CategoryId": 5,
    "Category": {
      "id": 5,
      "name": "素食料理",
      "createdAt": "2022-01-14T10:11:33.000Z",
      "updatedAt": "2022-01-14T10:11:33.000Z"
    },
    "FavoritedUsers": [],
    "LikedUsers": [],
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
    ],
    "isFavorited": false,
    "isLiked": false
  }
}

const dummyUser = {
  currentUser: {
    id: 1,
    name: '管理者',
    email: 'root@example.com',
    image: 'https://i.pravatar.cc/300',
    isAdmin: true
  },
  isAuthenticated: true
}

export default {
  data() {
    return {
      restaurant: {
        id: -1,
        name: '',
        categoryName: '',
        image: '',
        openingHours: '',
        tel: '',
        address: '',
        description: '',
        isFavorited: false,
        isLiked: false
      },
      restaurantComments: [],
      currentUser: dummyUser.currentUser
    }
  },
  created() {
    const { id } = this.$route.params
    this.fetchRestaurant(id)
  },
  methods: {
    fetchRestaurant(restaurantId) {
      restaurantId
      this.restaurant = {
        id: dummyData.restaurant.id,
        name: dummyData.restaurant.name,
        categoryName: dummyData.restaurant.Category.name ?? '未分類',
        image: dummyData.restaurant.image,
        openingHours: dummyData.restaurant.opening_hours,
        tel: dummyData.restaurant.tel,
        address: dummyData.restaurant.address,
        description: dummyData.restaurant.description,
        isFavorited: dummyData.isFavorited,
        isLiked: dummyData.isLiked,
      }

      this.restaurantComments = dummyData.restaurant.Comments
    },
    afterDeleteComment(commentId) {
      console.log('afterDeleteComment', commentId)

      this.restaurantComments = this.restaurantComments.filter(comment => comment.id !== commentId)
    },
    afterCreateComment(payload) {
      const { id, restaurantId, text } = payload
      this.restaurantComments.push({
        id,
        RestaurantId :restaurantId,
        text,
        createdAt: new Date(),
        User: {
          id: this.currentUser.id,
          name: this.currentUser.name
        }
      })
    }
  },
  components: {
    RestaurantDetail,
    RestaurantComments,
    CreateComment
  }
}
</script>