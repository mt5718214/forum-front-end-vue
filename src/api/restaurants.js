import { apiHelper } from '../utils/helpers'
const getToken = () => localStorage.getItem('token')

export default {
  getRestaurants({ page, categoryId }) {
    const searchParams = new URLSearchParams({ page, categoryId })

    return apiHelper.get(`/restaurants?${searchParams.toString()}`, {
      headers: {
        Authorization: `Bearer ${getToken()}`
      }
    })
  },

  getDetail({ restaurantId }) {
    return apiHelper.get(`/restaurants/${restaurantId}`, {
      headers: {
        Authorization: `Bearer ${getToken()}`
      }
    })
  },

  getRestaurantsFeeds() {
    return apiHelper.get('/restaurants/feeds', {
      headers: {
        Authorization: `Bearer ${getToken()}`
      }
    })
  },

  getRestaurantTop() {
    return apiHelper.get('/restaurants/top', {
      headers: {
        Authorization: `Bearer ${getToken()}`
      }
    })
  },

  addFavorite({ restaurantId }) {
    return apiHelper.post(`/favorite/${restaurantId}`, null, {
      headers: {
        Authorization: `Bearer ${getToken()}`
      }
    })
  },

  deleteFavorite({ restaurantId }) {
    return apiHelper.delete(`/favorite/${restaurantId}`, {
      headers: {
        Authorization: `Bearer ${getToken()}`
      }
    })
  }
}