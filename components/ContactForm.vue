<template>
  <v-alert v-if="success" type="success" class="message_sent">
    <h2 class="white--text font-weight-bold mt-n1 mb-0">Gesendet</h2>
    <p>
      Vielen Dank für Ihre Nachricht. Ich werde mich zeitnah bei Ihnen melden.
    </p>
    <p>
      <v-btn
        depressed
        class="font-weight-bold"
        color="white success--text"
        @click="to"
        >Okay</v-btn
      >
    </p>
  </v-alert>
  <v-form v-else ref="form" v-model="valid" @submit.prevent="submit">
    <v-row>
      <v-col cols="12" xs="12" sm="12" md="12" lg="12" xl="12">
        <v-text-field
          v-model="formData.name"
          :rules="existRules"
          label="Vor- und Nachname"
          required
          filled
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" xs="12" sm="6" md="6" lg="6" xl="6">
        <v-text-field
          v-model="formData.email"
          type="email"
          :rules="emailRules"
          label="E-Mail"
          required
          filled
        ></v-text-field>
      </v-col>

      <v-col cols="12" xs="12" sm="6" md="6" lg="6" xl="6">
        <v-text-field
          v-model="formData.phoneNumber"
          type="tel"
          :rules="phoneNumberRules"
          label="Telefonnummer"
          required
          filled
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" xs="12" sm="12" md="12" lg="12" xl="12">
        <v-textarea
          v-model="formData.message"
          label="Ihre Nachricht"
          :rules="existRules"
          rows="3"
          required
          filled
        ></v-textarea>
        <p>
          <v-checkbox v-model="checkbox" :rules="datenschutzRules" required>
            <template v-slot:label>
              <span color="red">
                Ich habe die&nbsp;
                <nuxt-link to="/datenschutz">Datenschutzerklärung</nuxt-link
                >&nbsp;gelesen und stimme dieser zu.
              </span>
            </template>
          </v-checkbox>
        </p>
      </v-col>
    </v-row>

    <v-alert v-if="error" text type="error">
      <h2 class="error--text font-weight-bold mt-n1 mb-0">Fehler!</h2>
      Ups, da ist etwas schief gelaufen. Bitte versuchen Sie es erneut und wenn
      das Problem weiterhin besteht, kontaktieren Sie mich bitte per E-Mail an
      <a href="mailto:info@krause-schaefer.de">info@krause-schaefer.de</a>.
    </v-alert>

    <v-row>
      <v-col cols="12" xs="12" sm="12" md="12" lg="12" xl="12">
        <v-btn
          color="primary"
          type="submit"
          class="font-weight-bold"
          large
          :disabled="!valid"
          :loading="loading"
          >Nachricht versenden</v-btn
        >
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
import axios from 'axios'

const existRules = [(v) => !!v || 'Pflichtfeld']
const encodeData = (data) => {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&')
}
const axiosConfig = {
  header: { 'Content-Type': 'application/x-www-form-urlencoded' },
}

export default {
  data: () => ({
    valid: true,
    error: false,
    success: false,
    loading: false,
    formData: {
      name: '',
      message: '',
      email: '',
      phoneNumber: '',
    },
    checkbox: false,
    existRules,
    emailRules: [
      ...existRules,
      (v) => /.+@.+\..+/.test(v) || 'muss gültig sein',
    ],
    phoneNumberRules: [
      ...existRules,
      (v) =>
        /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s./0-9]*$/g.test(v) ||
        'muss gültig sein',
    ],
    datenschutzRules: [(v) => !!v || 'Sie müssen zustimmen um fortzufahren'],
  }),

  methods: {
    async submit() {
      this.loading = true
      try {
        await axios.post(
          '/',
          encodeData({
            'form-name': 'contact-request',
            ...this.formData,
          }),
          axiosConfig
        )
        this.success = true
      } catch (err) {
        // eslint-disable-next-line no-console
        console.log(err)
        this.error = true
      } finally {
        this.loading = false
      }
    },
    to() {
      this.$router.go('/kontakt')
    },
  },
}
</script>

<style lang="scss" scoped>
.message_sent {
  &::before {
    content: '';
    width: 0;
    height: 0;
    display: inline-block;
    position: absolute;
    bottom: -15px;
    left: 15px;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-top: 20px solid #2e7d32;
    -webkit-transform: rotate(135deg);
    -moz-transform: rotate(135deg);
    transform: rotate(135deg);
  }
}
</style>
