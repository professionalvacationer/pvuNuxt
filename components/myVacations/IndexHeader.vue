<template>
  <div id="tabNav">
    <v-row>
      <img
        src="~/assets/pvulogodark.png"
        alt="PVU Logo"
        height="150"
        width="90"
        class="mx-auto pa-2"
      />
    </v-row>
    <v-card>
      <v-card class="d-flex justify-space-around" tile>
        <v-card-title>
          <a id="title" class="text-h3" href="/myVacations">My Vacations</a>
        </v-card-title>
      </v-card>

      <v-tabs color="white" dark grow background-color="#2C3A47">
        <v-tab
          v-for="(tab, index) in tabs"
          :key="index"
          color="white"
          active-class="cyan"
          @click="selectedTab = tab.name"
        >
          <v-icon class="mr-2">{{ tab.icon }}</v-icon>
          {{ tab.name }}
        </v-tab>
      </v-tabs>
      <slot></slot>
    </v-card>
    <MyTripsList v-show="selectedTab === 'My Trips'" />
    <MyItinerariesList v-show="selectedTab === 'My Itineraries'" />
  </div>
</template>

<script>
import MyTripsList from '~/components/myTrips/MyTripsList.vue'
import MyItinerariesList from '~/components/myItineraries/MyItinerariesList.vue'

export default {
  components: {
    MyTripsList,
    MyItinerariesList,
  },
  data: () => ({
    name: '',
    icon: '',
    route: '',
    tabs: [
      {
        name: 'My Trips',
        icon: 'mdi-mushroom-outline',
      },
      {
        name: 'My Itineraries',
        icon: 'mdi-notebook-check-outline',
      },
    ],
    selectedTab: 'My Trips',
  }),
}
</script>

<style scoped>
#title {
  color: black;
  text-decoration: none;
}
</style>
