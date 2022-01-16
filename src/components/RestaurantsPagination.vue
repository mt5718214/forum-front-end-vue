<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination">
      <!-- 前一頁 previousPage -->
      <li :class="['page-link', { disabled: currentPage === 1 } ]">
        <router-link
          
          aria-label="Previous"
          :to="{ name: 'restaurants', query: { categoryId, page: previousPage }}"
        >
          <span aria-hidden="true">&laquo;</span>
        </router-link>
      </li>

      <!-- 頁碼 -->
      <li 
        :class="['page-item', { active: currentPage === page } ]"
        v-for="page in totalPage" :key="page"
      >
        <router-link
          class="page-link"
          :to="{ name: 'restaurants', query: { categoryId, page } }"
        >
          {{page}}
        </router-link>
      </li>

      <!-- 後一頁 nextPage -->
      <li class="page-item">
        <router-link
          :class="['page-link', { disabled: currentPage === totalPage.length } ]"
          aria-label="Next"
          :to="{ name: 'restaurants', query: { categoryId, page: nextPage } }"
        >
          <span aria-hidden="true">&raquo;</span>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
    props: {
        categoryId: {
            type: [Number, String],
            default: ''
        },
        currentPage: {
            type: Number,
            default: 1
        },
        totalPage: {
            type: Array,
            require: true
        },
        previousPage: {
            type: Number,
            required: true
        },
        nextPage: {
            type: Number,
            required: true
        }
    }
}
</script>