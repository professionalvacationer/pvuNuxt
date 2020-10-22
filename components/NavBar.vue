<template>
  <div id="NavBar">
    <v-navigation-drawer
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
              alt="beach office"
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

              <v-btn
                v-if="$auth.isAuthenticated"
                @click="$store.dispatch('auth/logout')"
              >
                Logout
              </v-btn>
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

      <Login v-if="!$auth.isAuthenticated" />

      <Register v-if="!$auth.isAuthenticated" />

      <v-btn
        v-if="$auth.isAuthenticated"
        class="ml-14"
        text
        dark
        @click="$store.dispatch('auth/logout')"
      >
        Logout
      </v-btn>
    </v-navigation-drawer>
  </div>
</template>

<script>
import Register from '~/components/user/Register.vue'
import Login from '~/components/user/Login.vue'

export default {
  name: 'NavBar',
  components: {
    Register,
    Login,
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
        { icon: 'mdi-face-agent', route: '/services', text: 'Services' },
      ],
      items: [
        {
          icon: 'mdi-apps',
          title: 'Profile',
          to: '/_user',
        },
        {
          icon: 'mdi-notebook-check-outline',
          title: 'Vacations',
          to: '/_user/vacations',
        },
        {
          icon: 'mdi-book-open-variant',
          title: 'Stories',
          to: '/_user/stories',
        },
        {
          icon: 'mdi-exit-run',
          title: 'Plans',
          to: '/_user/plans',
        },
        {
          icon: 'mdi-account-supervisor-circle',
          title: 'Friends',
          to: '/_user/friends',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
    }
  },
}
</script>
