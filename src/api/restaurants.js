import { apiHelper } from '../utils/helpers'

export default {
  getRestaurants({ page, categoryId }) {
    const searchParams = new URLSearchParams({ page, categoryId })

    return apiHelper.get(`/restaurants?${searchParams.toString()}`)
  },

  getDetail({ restaurantId }) {
    return apiHelper.get(`/restaurants/${restaurantId}`)
  },

  getRestaurantsFeeds() {
    return apiHelper.get('/restaurants/feeds')
  },

  getRestaurantTop() {
    return apiHelper.get('/restaurants/top')
  },

  addFavorite({ restaurantId }) {
    return apiHelper.post(`/favorite/${restaurantId}`, null)
  },

  deleteFavorite({ restaurantId }) {
    return apiHelper.delete(`/favorite/${restaurantId}`)
  }
}