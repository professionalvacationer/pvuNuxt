<template>
  <v-app style="-webkit-app-region: drag default">
    <v-main>
      <NavBar />
      <nuxt />
    </v-main>
    <v-btn
      v-scroll="onScroll"
      bottom
      color="pink"
      dark
      fab
      fixed
      right
      class="clickable"
      @click="toTop"
    >
      <v-icon>mdi-chevron-up</v-icon>
    </v-btn>
    <v-footer app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import NavBar from '~/components/Navbar.vue'

export default {
  components: {
    NavBar,
  },
  methods: {
    onScroll(e) {
      if (typeof window === 'undefined') return
      const top = window.pageYOffset || e.target.scrollTop || 0
      this.fab = top > 20
    },

    toTop() {
      this.$vuetify.goTo(0)
    },
  },
  head() {
    return {
      titleTemplate: '%s - Professional Vacationers Unlimited',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Professional Vacationers Unlimited is the top destination for vacation information information. Professional Vacationers Unlimited - PVU - operates as a non-profit organization that aims to create a network which binds cultures, philosophies, and ideals through education and experiences. We have a passion for sustainable and conservative toursim practices and make a constant effort to providing our users a path to familiarize themselves with the means in an exciting, yet beneficial way. By providing a path to familiarize vacationers and those interested in the matter, with the areas they hope to explore, will make for greater experiences for everyone. Taking some time to know before you go will best prepare you for the adventures that await. Likewise, gaining knowledge of your surroundings will create a cohesive environment. ',
        },
      ],
    }
  },
}
</script>

<style scoped>
.defAvatar {
  pointer-events: all;
}
.clickable {
  -webkit-app-region: no-drag;
}
::-webkit-scrollbar {
  width: 12px;
}
::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
}
::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
}
#title {
  color: white;
  text-decoration-line: none;
}
</style>
