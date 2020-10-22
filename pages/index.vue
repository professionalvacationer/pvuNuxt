<template>
  <div id="home" class="pa-0">
    <HomeCarousel />
    <HomeMain />
  </div>
</template>

<script>
import HomeCarousel from '~/components/Home/HomeCarousel.vue'
import HomeMain from '~/components/Home/HomeMain.vue'

export default {
  components: {
    HomeCarousel,
    HomeMain,
  },
  head() {
    return {
      title: 'Home',
    }
  },
}
</script>

<style scoped></style>
