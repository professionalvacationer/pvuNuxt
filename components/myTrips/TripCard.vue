<template>
  <v-row>
    <v-col cols="12" lg="3" md="4" sm="6" xs="11">
      <v-card>
        <v-row>
          <v-col cols="3">
            <v-card class="d-flex" flat>
              <v-img
                contain
                :src="require('~/assets/pvulogodark.png')"
                alt="PVU Logo"
                height="50"
                width="50"
                class="mx-auto"
              />
            </v-card>
          </v-col>
          <v-col class="ml-1" cols="6">
            <v-list-item-title class="d-flex align-baseline text-wrap text-h6">
              {{ trip.title }}
            </v-list-item-title>
          </v-col>
          <v-col cols="2"></v-col>
        </v-row>

        <v-row class="d-flex">
          <v-col cols="3">
            <v-card flat class="align-start mt-n2 ml-2">
              <v-img
                height="60"
                :src="require('~/assets/coconutstanding1.png')"
                alt="beach office"
                class="mx-auto"
              />
            </v-card>
          </v-col>
          <v-col class="pt-n2 mb-0" cols="6">
            <v-card flat>
              <v-list-item-subtitle>by Devin Shook</v-list-item-subtitle>
              <v-list-item-subtitle>9/10/2020</v-list-item-subtitle>
            </v-card>
          </v-col>
          <v-col cols="3"></v-col>
        </v-row>

        <v-expansion-panels flat>
          <v-expansion-panel>
            <v-expansion-panel-header>
              Trip Rating
              <v-progress-linear color="cyan" height="15" value="91" striped>
                9.1/10
              </v-progress-linear>
            </v-expansion-panel-header>

            <v-expansion-panel-content>
              Food
              <v-progress-linear
                color="yellow"
                height="15"
                buffer-value="100"
                value="70"
                striped
              >
                7.5/10
              </v-progress-linear>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>

        <v-img :src="require('~/assets/boatfood1.png')" />
        <v-card-subtitle class="font-weight-bold">Overview</v-card-subtitle>
        <v-card-text>{{ trip.overview }}</v-card-text>

        <v-card-actions>
          Tags:
          <a>
            {{ trip.tags }}
            #PVU
          </a>
        </v-card-actions>

        <v-card-actions>
          <v-btn text color="deep-purple accent-4">Story</v-btn>
          <v-spacer></v-spacer>
          <v-btn text color="deep-purple accent-4">Itinerary</v-btn>

          <v-btn icon>
            <v-icon>mdi-heart</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>mdi-share-variant</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    trip: Object,
  },
  data: () => ({
    trip: [
      {
        TripId: 2342,
        title: 'Islands of the Philippines',
        overview: `Philippinos are friendly, bubbly, and great company! Add in endless beautiful scenery combined
                with fair priced trips allowed for endless things to do.  Although thefood can be rather hit or miss, overall
                this was an incredible trip! Tagay!`,
        tags: ['Phil', 'Trip'],
      },
      {
        tripId: 54234,
        title: 'Who are you',
        overview: 'I am me',
        tags: ['aslkjfd'],
      },
    ],
  }),
}
</script>
