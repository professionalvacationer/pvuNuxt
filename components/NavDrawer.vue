<template>
  <div>
    <v-navigation-drawer
      v-if="$auth.isAuthenticated"
      v-model="drawer"
      class="pa-0 ma-0"
      color="#2C3A47"
      dark
      permanent
      :mini-variant="miniVariant"
      fixed
      app
    >
      <v-list>
        <v-list-item class="px-2 pt-2">
          <v-list-item-avatar @click.stop="miniVariant = !miniVariant">
            <v-img
              :src="require('~/assets/scuba-dive-ok.jpg')"
              alt="profie"
              class="mx-auto clickable"
            />
          </v-list-item-avatar>

          <v-list-item-title class="ml-4 text-capitalize">
            Welcome Username!
          </v-list-item-title>
        </v-list-item>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
          shaped
          active-class="cyan--text"
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      value: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Profile',
          to: '/profile',
        },
        {
          icon: 'mdi-notebook-check-outline',
          title: 'MyVacations',
          to: '/myVacations',
        },
        {
          icon: 'mdi-book-open-variant',
          title: 'MyStories',
          to: '/myStories',
        },
        {
          icon: 'mdi-exit-run',
          title: 'MyPlans',
          to: '/myPlans',
        },
        {
          icon: 'mdi-account-supervisor-circle',
          title: 'MyFriends',
          to: '/myFriends',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
    }
  },
}
</script>
