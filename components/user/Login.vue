<template>
  <div class="d-flex">
    <v-row justify="center">
      <v-dialog v-model="dialog" dense persistent max-width="600px">
        <template v-slot:activator="{ on, attrs }">
          <div id="Login" v-bind="attrs" v-on="on">Login</div>
        </template>
        <v-card>
          <v-card-title>
            <span class="headline">Professional Vacationer Login</span>
          </v-card-title>
          <v-form @submit.prevent="login">
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    v-model="form.email"
                    :rules="[form.rules.email]"
                    label="Email*"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    v-model="form.password"
                    :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                    :rules="[form.rules.password, form.rules.length(6)]"
                    :type="show ? 'text' : 'password'"
                    label="Password*"
                    required
                    @click:append="show = !show"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>
            <small>*indicates required field</small>
            <v-btn color="blue darken-1" text @click="dialog = false">
              Not Now
            </v-btn>
            <v-btn color="blue darken-1" text type="submit">Login</v-btn>
          </v-form>
          <v-dialog
            v-model="form.dialog"
            absolute
            max-width="400"
            persistent
          ></v-dialog>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'Register',
  props: {},
  data() {
    return {
      dialog: false,
      show: false,
      form: {
        dialog: false,
        email: null,
        password: null,
        rules: {
          email: (v) => !!(v || '').match(/@/) || 'Please enter a valid email',
          length: (len) => (v) =>
            (v || '').length >= len ||
            `Invalid character length, required ${len}`,
          password: (v) =>
            !!(v || '').match(
              /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(_|[^\w])).+$/
            ) ||
            'Password must contain an upper case letter, a numeric character, and a special character',
          required: (v) => !!v || 'This field is required',
        },
      },
    }
  },
  methods: {
    async login() {
      try {
        await this.$store.dispatch('auth/login', this.form)
        this.$router.push('/')
      } catch (error) {
        console.log({ error })
      }
    },
  },
}
</script>

<style scoped></style>
