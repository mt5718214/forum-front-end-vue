<template>
    <div class="card">
        <div class="card-header">
            <strong>{{followers.length}}</strong> followers (追蹤者)
        </div>
        <div class="card-body">
            <router-link :to="{name: 'user', params: { id: follower.id }}" v-for="follower in followers" :key="follower.id">
                <img :src="follower.image" width="60" height="60" class="avatar">
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'userFollowersCard',
    props: {
        initialFollowers: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            followers: this.initialFollowers
        }
    }
}
</script>