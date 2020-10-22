<template>
  <div class="d-flex">
    <v-row justify="center">
      <v-dialog v-model="dialog" dense persistent max-width="600px">
        <template v-slot:activator="{ on, attrs }">
          <div v-bind="attrs" v-on="on">Register</div>
        </template>
        <v-card class="regCard">
          <v-card-title>
            <span class="headline">Professional Vacationer Registration</span>
          </v-card-title>
          <v-form v-if="step === steps.register" @submit.prevent="register">
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    v-model="registerForm.firstName"
                    type="string"
                    placeholder="First Name"
                    class="form-control"
                    label="First Name*"
                    required
                  />
                  <v-text-field
                    v-model="registerForm.lastName"
                    type="string"
                    placeholder="Last Name"
                    class="form-control"
                    label="Last Name*"
                    required
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    v-model="registerForm.email"
                    type="email"
                    :rules="[registerForm.rules.email]"
                    placeholder="youremail@email.com"
                    class="form-control"
                    label="Email*"
                    required
                  />
                  <v-text-field
                    v-model="registerForm.password"
                    :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                    :rules="[
                      registerForm.rules.password,
                      registerForm.rules.length(6),
                    ]"
                    :type="show ? 'text' : 'password'"
                    placeholder="Password"
                    class="form-control"
                    label="Password*"
                    required
                    @click:append="show = !show"
                  />
                </v-col>
              </v-row>
              <v-btn color="blue darken-1" text @click="dialog = false">
                Not Now
              </v-btn>
              <v-btn color="blue darken-1" text type="submit">Register</v-btn>
            </v-container>
          </v-form>

          <v-form v-else @submit.prevent="confirm">
            <v-container>
              <v-text-field
                v-model="confirmForm.email"
                type="email"
                placeholder="Email"
                class="form-control"
              />
              <v-text-field
                v-model="confirmForm.code"
                placeholder="Code"
                class="form-control"
              />

              <v-btn
                id="confirm"
                type="submit"
                color="blue darken-1"
                @click="dialog = false"
              >
                Confirm
              </v-btn>
            </v-container>
          </v-form>
          <v-row class="ml-7">Have an account?</v-row>
          <v-row id="login" class="ml-10">
            <Login />
          </v-row>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>

<script>
import Login from '~/components/user/Login.vue'
const steps = {
  register: 'REGISTER',
  confirm: 'CONFIRM',
}
export default {
  name: 'Register',
  components: {
    Login,
  },
  props: {},
  data() {
    return {
      dialog: false,
      show: false,
      steps: { ...steps },
      step: steps.register,
      registerForm: {
        email: '',
        password: '',
        firstName: '',
        lastName: '',
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
      confirmForm: {
        email: '',
        code: '',
      },
    }
  },
  methods: {
    async register() {
      try {
        await this.$store.dispatch('auth/register', this.registerForm)
        this.confirmForm.email = this.registerForm.email
        this.step = this.steps.confirm
      } catch (error) {
        console.log({ error })
      }
    },
    async confirm() {
      try {
        await this.$store.dispatch('auth/confirmRegistration', this.confirmForm)
        await this.$store.dispatch('auth/login', this.registerForm)
        this.$router.push('/')
      } catch (error) {
        console.log({ error })
      }
    },
  },
}
</script>

<style scoped>
/* .regCard {
  background: white;
} */

.headline {
  color: black;
}
#login {
  color: blue;
}
</style>
