<template>
  <div id="myItineraries">
    <v-card
      flat
      class="d-flex justify-center text-center text-h4 mx-auto mt-2 mb-8"
      width="50%"
    >
      My Itineraries!
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
      <v-col cols="12">
        <v-card flat>
          <v-card-text v-if="!trips" class="d-flex justify-center no-results">
            You currently do not have any trips saved. Click "Create New Trip"
            to get started sharing your trips!
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import CreateTrip from '~/components/myTrips/CreateTrip'

export default {
  components: {
    CreateTrip,
  },
  data: () => ({
    dialog: false,
    items: ['Created On', 'Title'],
    trips: [
      {
        title: 'Islands of the Philippines',
        overview:
          'Philippinos are friendly, bubbly, and great company! The food is very hit or miss. With endless beautiful scenery combined with fair priced trips allowed for endless things to do. Overall this was an incredible trip! Tagay!',
        tags: [
          '#Philippines',
          '#islands',
          '#diving',
          '#climbing',
          '#boattours',
          'PVU',
        ],
      },
    ],
  }),
}
</script>
