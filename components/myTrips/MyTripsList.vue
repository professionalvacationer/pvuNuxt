<template>
  <div id="myTrips">
    <v-card
      flat
      class="d-flex justify-center text-center text-h4 mx-auto mt-2 mb-8"
      width="50%"
    >
      My Trips!
    </v-card>
    <v-toolbar
      flat
      class="justify-content-space-between mx-auto mb-0 pb-0"
      width="100%"
    >
      <v-row>
        <v-col cols="3">
          <v-card flat class="text-end">
            <CreateTrip />
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-card class="d-flex justify-center" flat>
            <v-text-field
              append-icon="mdi-magnify"
              label="Search My Trips"
            ></v-text-field>
          </v-card>
        </v-col>
        <v-col cols="3">
          <v-card flat width="50%">
            <v-select label="Sort By" :items="items">Sort By</v-select>
          </v-card>
        </v-col>
      </v-row>
    </v-toolbar>
    <v-row>
      <TripCard v-for="trip in trips" :key="trip.id" :trip="trip" />
    </v-row>
  </div>
</template>

<script>
import CreateTrip from '~/components/myTrips/CreateTrip'
import TripCard from '~/components/myTrips/TripCard.vue'

export default {
  components: {
    CreateTrip,
    TripCard,
  },
  data: () => ({
    dialog: false,
    items: ['Created On', 'Title'],
    trips: [],
  }),
}
</script>
