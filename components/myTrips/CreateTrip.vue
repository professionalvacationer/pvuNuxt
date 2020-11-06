<template>
  <div id="app">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="cyan" dark v-bind="attrs" v-on="on">
          Create New Trip +
        </v-btn>
      </template>
      <v-card class="mx-auto">
        <v-card color="cyan" class="d-flex justify-center">
          <v-card-title>Create a Trip!</v-card-title>
        </v-card>
        <v-form @submit.prevent="createTrip">
          <v-row>
            <v-col cols="2">
              <v-card :disabled="true" flat class="ml-2">
                <v-img
                  height="50"
                  width="30"
                  :src="require('~/assets/pvulogodark.png')"
                  alt="beach office"
                  class="mx-auto"
                />
              </v-card>
            </v-col>
            <v-col cols="7">
              <v-card flat>
                <v-text-field
                  v-model.trim="form.title"
                  label="*Title*"
                  required
                ></v-text-field>
              </v-card>
            </v-col>
            <v-col cols="3"></v-col>
          </v-row>

          <v-row>
            <v-col cols="2">
              <v-card flat class="align-start mt-n2 ml-2">
                <v-avatar>
                  <v-img
                    height="60"
                    :src="require('~/assets/coconutstanding1.png')"
                    alt="beach office"
                    class="mx-auto"
                  />
                </v-avatar>
              </v-card>
            </v-col>
            <v-col cols="7">
              <v-card flat>
                <v-list-item-subtitle>
                  by {{ $auth.email }}
                </v-list-item-subtitle>
                <v-list-item-subtitle>
                  {{ new Date().toLocaleDateString() }}
                </v-list-item-subtitle>
              </v-card>
            </v-col>
            <v-col cols="3"></v-col>
          </v-row>

          <v-card>
            Budget:
            <v-text-field v-model.trim="form.budget" required></v-text-field>
          </v-card>

          <v-card>
            Duration:
            <v-text-field v-model.trim="form.duration" required></v-text-field>
          </v-card>

          <v-card class="pa-2">
            Overview:
            <v-textarea
              v-model.trim="form.overview"
              rows="2"
              auto-grow
              value="Insert a brief overview of your trip ratings here!"
            ></v-textarea>
          </v-card>

          <v-card>
            Tags:
            <v-text-field v-model.trim="form.tags" required></v-text-field>
          </v-card>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="dialog = false">
              Not Now
            </v-btn>
            <v-btn
              color="blue darken-1"
              text
              type="submit"
              @click="dialog = false"
            >
              Create
            </v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: 'CreateTrip',

  data: () => ({
    dialog: false,
    form: {
      title: '',
      overview: '',
      tags: '',
      budget: '',
      duration: '',
      overallRating: '',
      story: '',
    },
  }),
  methods: {
    async createTrip() {
      try {
        await this.$store.dispatch('api/createTrip', this.getPayload())
        this.$router.push('/')
      } catch (error) {
        console.log({ error })
      }
    },
    getPayload() {
      return {
        ...this.form,
        authorId: this.$auth.id,
        createdAt: Date.now(),
      }
    },
  },
}
</script>

<style scoped>
.highRating {
  background-color: cyan;
}
.midHighRating {
  background-color: green;
}
.midRating {
  background-color: yellow;
}
.lowRating {
  background-color: red;
}
</style>
