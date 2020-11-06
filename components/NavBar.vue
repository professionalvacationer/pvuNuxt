<template>
  <div id="NavBar">
    <NavDrawer />

    <!-- APPP BAR STARTS HERE!!!!!!!! -->
    <!-- APPP BAR STARTS HERE!!!!!!!! -->
    <!-- APPP BAR STARTS HERE!!!!!!!! -->
    <!-- APPP BAR STARTS HERE!!!!!!!! -->
    <!-- APPP BAR STARTS HERE!!!!!!!! -->
    <!-- APPP BAR STARTS HERE!!!!!!!! -->

    <v-app-bar :clipped-left="clipped" fixed dark app color="#2C3A47">
      <v-row>
        <v-col cols="12" xl="2" lg="2" md="2">
          <v-img
            src="/pvulogo1.png"
            alt="PVU Logo"
            max-width="34"
            max-height="52"
            class="clickable"
          />
        </v-col>

        <!-- NAVBAR CENTER CONTENT STARTS HERE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! -->
        <!-- NAVBAR CENTER CONTENT STARTS HERE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! -->
        <!-- NAVBAR CENTER CONTENT STARTS HERE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! -->
        <!-- NAVBAR CENTER CONTENT STARTS HERE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! -->
        <v-col cols="12" xl="8" lg="8" md="8" class="hidden-sm-and-down">
          <v-card color="#2C3A47" flat>
            <v-list
              color="#2C3A47"
              shaped
              flat
              text
              class="d-flex align-center pa-0 clickable"
            >
              <template v-for="item in navItems">
                <v-list-item
                  :key="item.text"
                  v-model="value"
                  active-class="cyan--text"
                  class="hidden-sm-and-down"
                  route
                  :to="item.route"
                >
                  <v-list-item-action>
                    <v-icon>{{ item.icon }}</v-icon>
                  </v-list-item-action>
                </v-list-item>
              </template>
            </v-list>
          </v-card>
        </v-col>

        <!-- RIGHT SIDE CONTENT STARTS HERE!!!!!!!!!!!!!!!! -->
        <!-- RIGHT SIDE CONTENT STARTS HERE!!!!!!!!!!!!!!!! -->
        <!-- RIGHT SIDE CONTENT STARTS HERE!!!!!!!!!!!!!!!! -->
        <!-- RIGHT SIDE CONTENT STARTS HERE!!!!!!!!!!!!!!!! -->
        <v-col cols="12" xl="2" lg="2" md="2" class="hidden-sm-and-down">
          <v-row>
            <v-col>
              <Login v-if="!$auth.isAuthenticated" />
            </v-col>
            <v-col>
              <Register v-if="!$auth.isAuthenticated" />
              <Logout v-else />
            </v-col>
          </v-row>
        </v-col>
      </v-row>

      <!-- SMALL SCREEN NAV DRAWER!!!!!!!! -->
      <!-- SMALL SCREEN NAV DRAWER!!!!!!!! -->
      <!-- SMALL SCREEN NAV DRAWER!!!!!!!! -->
      <!-- SMALL SCREEN NAV DRAWER!!!!!!!! -->
      <!-- SMALL SCREEN NAV DRAWER!!!!!!!! -->
      <v-btn class="hidden-md-and-up" @click.stop="drawer = !drawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      class="hidden-md-and-up"
      fixed
      color="#2C3A47"
      temporary
      floating
      right
    >
      <template v-for="item in navItems">
        <v-list-item
          :key="item.text"
          v-model="value"
          active-class="orange--text"
          shaped
          route
          :to="item.route"
          dark
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-title>{{ item.text }}</v-list-item-title>
        </v-list-item>
      </template>
      <Login v-if="!$auth.isAuthenticated" id="login" />

      <Register v-if="!$auth.isAuthenticated" id="register" />

      <Logout v-if="$auth.isAuthenticated" class="ml-14" />
    </v-navigation-drawer>
  </div>
</template>

<script>
import Register from '~/components/user/Register.vue'
import Login from '~/components/user/Login.vue'
import Logout from '~/components/user/Logout.vue'
import NavDrawer from '~/components/NavDrawer.vue'

export default {
  name: 'NavBar',
  components: {
    Register,
    Login,
    Logout,
    NavDrawer,
  },
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      value: false,
      navItems: [
        { icon: 'mdi-home', route: '/', text: 'Home' },
        {
          icon: 'mdi-account-group-outline',
          route: '/vacationers',
          text: 'Vacationers',
        },
        { icon: 'mdi-sofa-outline', route: '/proLounge', text: 'Pro Lounge' },
        {
          icon: 'mdi-head-lightbulb-outline',
          route: '/infoarea',
          text: 'Info Area',
        },
        { icon: 'mdi-face-agent', route: '/proServices', text: 'Pro Services' },
      ],
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

<style scoped>
#login {
  color: white;
}

#register {
  color: white;
}
</style>
