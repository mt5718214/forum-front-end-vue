<template>
  <div class="container py-5">
      <NavTabs />
    <!-- 餐廳類別標籤 -->
    <RestaurantsNavPills :categories="categories"/>

    <div class="row">
      <!-- 餐廳卡片 -->
      <RestaurantCard 
        v-for="restaurant in restaurants" 
        :key="restaurant.id"
        :initial-restaurant="restaurant"
      />
    </div>

    <!-- 分頁標籤 -->
  </div>
</template>

<script>
import NavTabs from '../components/NavTabs.vue'
import RestaurantCard from '../components/RestaurantCard.vue'
import RestaurantsNavPills from '../components/RestaurantsNavPills.vue'
const dummyData = {
  restaurants: [
    {
      "id": 1,
      "name": "Mrs. Florence Erdman",
      "tel": "319.016.6046 x5527",
      "address": "401 Meda Ridge",
      "opening_hours": "08:00",
      "description": "Dicta quia nesciunt a ut dolores id beatae. Doloru",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=47.294678167554",
      "viewCounts": 0,
      "createdAt": "2022-01-14T10:11:33.000Z",
      "updatedAt": "2022-01-14T10:11:33.000Z",
      "CategoryId": 5,
      "Category": {
        "id": 5,
        "name": "素食料理",
        "createdAt": "2022-01-14T10:11:33.000Z",
        "updatedAt": "2022-01-14T10:11:33.000Z"
      },
      isFavorited: false,
      isLiked: false
    },
    {
      "id": 2,
      "name": "Cleora Kuphal",
      "tel": "(764) 972-5228",
      "address": "28341 Ewell Pine",
      "opening_hours": "08:00",
      "description": "temporibus",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=17.229301343747917",
      "viewCounts": 0,
      "createdAt": "2022-01-14T10:11:33.000Z",
      "updatedAt": "2022-01-14T10:11:33.000Z",
      "CategoryId": 3,
      "Category": {
        "id": 3,
        "name": "義大利料理",
        "createdAt": "2022-01-14T10:11:33.000Z",
        "updatedAt": "2022-01-14T10:11:33.000Z"
      },
      isFavorited: false,
      isLiked: false
    },
    {
      "id": 3,
      "name": "Tommie Mayer V",
      "tel": "(050) 366-7856 x5888",
      "address": "182 Michaela Crossroad",
      "opening_hours": "08:00",
      "description": "Dolor ullam a qui. Voluptatum voluptatem aut beata",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=55.8162469792439",
      "viewCounts": 0,
      "createdAt": "2022-01-14T10:11:33.000Z",
      "updatedAt": "2022-01-14T10:11:33.000Z",
      "CategoryId": 4,
      "Category": {
        "id": 4,
        "name": "墨西哥料理",
        "createdAt": "2022-01-14T10:11:33.000Z",
        "updatedAt": "2022-01-14T10:11:33.000Z"
      },
      isFavorited: false,
      isLiked: false
    },
    {
      "id": 4,
      "name": "Bessie Franecki",
      "tel": "641-914-3783 x4929",
      "address": "121 Metz Fork",
      "opening_hours": "08:00",
      "description": "Quia recusandae ut ut et aperiam quam enim quis.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=70.67156534715104",
      "viewCounts": 0,
      "createdAt": "2022-01-14T10:11:33.000Z",
      "updatedAt": "2022-01-14T10:11:33.000Z",
      "CategoryId": 3,
      "Category": {
        "id": 3,
        "name": "義大利料理",
        "createdAt": "2022-01-14T10:11:33.000Z",
        "updatedAt": "2022-01-14T10:11:33.000Z"
      },
      isFavorited: false,
      isLiked: false
    },
    {
      "id": 5,
      "name": "Rafaela Douglas",
      "tel": "1-837-692-8531",
      "address": "65581 Pfeffer Village",
      "opening_hours": "08:00",
      "description": "Reprehenderit vel consectetur sunt consequatur ut ",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=21.87006518631098",
      "viewCounts": 0,
      "createdAt": "2022-01-14T10:11:33.000Z",
      "updatedAt": "2022-01-14T10:11:33.000Z",
      "CategoryId": 1,
      "Category": {
        "id": 1,
        "name": "中式料理",
        "createdAt": "2022-01-14T10:11:33.000Z",
        "updatedAt": "2022-01-14T10:11:33.000Z"
      },
      isFavorited: false,
      isLiked: false
    },
    {
      "id": 6,
      "name": "Etha Beier",
      "tel": "343.046.1769 x806",
      "address": "0279 Wisoky Trafficway",
      "opening_hours": "08:00",
      "description": "laborum",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=5.417586788911977",
      "viewCounts": 0,
      "createdAt": "2022-01-14T10:11:33.000Z",
      "updatedAt": "2022-01-14T10:11:33.000Z",
      "CategoryId": 3,
      "Category": {
        "id": 3,
        "name": "義大利料理",
        "createdAt": "2022-01-14T10:11:33.000Z",
        "updatedAt": "2022-01-14T10:11:33.000Z"
      },
      isFavorited: false,
      isLiked: false
    },
    {
      "id": 7,
      "name": "Felipa Kozey",
      "tel": "530-530-1384 x02864",
      "address": "59888 Franecki Mission",
      "opening_hours": "08:00",
      "description": "Ut sunt harum consectetur laboriosam dolorem sed. ",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=96.52665254905453",
      "viewCounts": 0,
      "createdAt": "2022-01-14T10:11:33.000Z",
      "updatedAt": "2022-01-14T10:11:33.000Z",
      "CategoryId": 2,
      "Category": {
        "id": 2,
        "name": "日本料理",
        "createdAt": "2022-01-14T10:11:33.000Z",
        "updatedAt": "2022-01-14T10:11:33.000Z"
      },
      isFavorited: false,
      isLiked: false
    },
    {
      "id": 8,
      "name": "Mr. Devyn Conn",
      "tel": "1-548-194-0440 x73943",
      "address": "3746 Runte Ridges",
      "opening_hours": "08:00",
      "description": "Quae vel aut illum architecto vel aut qui reprehen",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=44.74470488768259",
      "viewCounts": 0,
      "createdAt": "2022-01-14T10:11:33.000Z",
      "updatedAt": "2022-01-14T10:11:33.000Z",
      "CategoryId": 2,
      "Category": {
        "id": 2,
        "name": "日本料理",
        "createdAt": "2022-01-14T10:11:33.000Z",
        "updatedAt": "2022-01-14T10:11:33.000Z"
      },
      isFavorited: false,
      isLiked: false
    },
    {
      "id": 9,
      "name": "Abigayle Collier I",
      "tel": "(700) 385-2613 x02269",
      "address": "43626 Melany Union",
      "opening_hours": "08:00",
      "description": "Facere veniam laudantium praesentium error consequ",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=20.25489916151253",
      "viewCounts": 0,
      "createdAt": "2022-01-14T10:11:33.000Z",
      "updatedAt": "2022-01-14T10:11:33.000Z",
      "CategoryId": 3,
      "Category": {
        "id": 3,
        "name": "義大利料理",
        "createdAt": "2022-01-14T10:11:33.000Z",
        "updatedAt": "2022-01-14T10:11:33.000Z"
      },
      isFavorited: false,
      isLiked: false
    },
    {
      "id": 10,
      "name": "Raoul Adams",
      "tel": "599-019-5530 x8902",
      "address": "915 Zboncak Ways",
      "opening_hours": "08:00",
      "description": "voluptatum ad voluptatem",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=48.51987100714559",
      "viewCounts": 0,
      "createdAt": "2022-01-14T10:11:33.000Z",
      "updatedAt": "2022-01-14T10:11:33.000Z",
      "CategoryId": 1,
      "Category": {
        "id": 1,
        "name": "中式料理",
        "createdAt": "2022-01-14T10:11:33.000Z",
        "updatedAt": "2022-01-14T10:11:33.000Z"
      },
      isFavorited: false,
      isLiked: false
    }
  ],
  categories: [
    {
      "id": 1,
      "name": "中式料理",
      "createdAt": "2022-01-14T10:11:33.000Z",
      "updatedAt": "2022-01-14T10:11:33.000Z"
    },
    {
      "id": 2,
      "name": "日本料理",
      "createdAt": "2022-01-14T10:11:33.000Z",
      "updatedAt": "2022-01-14T10:11:33.000Z"
    },
    {
      "id": 3,
      "name": "義大利料理",
      "createdAt": "2022-01-14T10:11:33.000Z",
      "updatedAt": "2022-01-14T10:11:33.000Z"
    },
    {
      "id": 4,
      "name": "墨西哥料理",
      "createdAt": "2022-01-14T10:11:33.000Z",
      "updatedAt": "2022-01-14T10:11:33.000Z"
    },
    {
      "id": 5,
      "name": "素食料理",
      "createdAt": "2022-01-14T10:11:33.000Z",
      "updatedAt": "2022-01-14T10:11:33.000Z"
    },
    {
      "id": 6,
      "name": "美式料理",
      "createdAt": "2022-01-14T10:11:33.000Z",
      "updatedAt": "2022-01-14T10:11:33.000Z"
    },
    {
      "id": 7,
      "name": "複合式料理",
      "createdAt": "2022-01-14T10:11:33.000Z",
      "updatedAt": "2022-01-14T10:11:33.000Z"
    }
  ],
  page: 1,
  totalPage: [1, 2, 3, 4, 5],
  prev: 1,
  next: 2,
  categoryId: ''
}
export default {
  data() {
    return {
      restaurants: [],
      categories: [],
      totalPage: [],
      currentPage: 1,
      previousPage: -1,
      nextPage: -1,
      categoryId: -1
    }
  },
  methods: {
    fetchRestaurants() {
      const { restaurants, categories, categoryId, page, totalPage, prev, next} = dummyData
      this.restaurants = restaurants
      this.categories = categories
      this.totalPage = totalPage
      this.previousPage = prev
      this.nextPage = next
      this.currentPage = page
      this.categoryId = categoryId
    }
  },
  created() {
    this.fetchRestaurants()
  },
  components: {
      NavTabs,
      RestaurantCard,
      RestaurantsNavPills
  }
}
</script>