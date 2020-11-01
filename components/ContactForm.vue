<template>
  <v-alert v-if="success" outlined type="success">
    Vielen Dank für Ihre Nachricht!
  </v-alert>
  <v-form v-else ref="form" v-model="valid" @submit.prevent="submit">
    <h2>Nutzen Sie das Kontaktformular</h2>
    <v-row>
      <v-col>
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
      <v-col>
        <v-text-field
          v-model="formData.email"
          type="email"
          :rules="emailRules"
          label="E-mail"
          required
          filled
        ></v-text-field>
      </v-col>

      <v-col>
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
      <v-col>
        <v-textarea
          v-model="formData.message"
          label="Nachricht"
          :rules="existRules"
          placeholder="Ihre Nachricht, die an info@krause-schaefer.de geschickt werden soll"
          rows="3"
          required
          filled
        ></v-textarea>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-checkbox v-model="checkbox" :rules="agbRules" required>
          <template v-slot:label>
            <div>
              Ich habe die
              <nuxt-link to="/agb">Allgemeinen Geschäftsbedingungen</nuxt-link
              >&nbsp;und die
              <nuxt-link to="/datenschutz">Datenschutzerklärung</nuxt-link
              >&nbsp;gelesen und stimme beiden zu.
            </div>
          </template>
        </v-checkbox>
      </v-col>
    </v-row>

    <v-alert v-if="error" text type="error" class="font-weight-bold">
      Ups, da ist etwas schief gelaufen. Bitte versuchen Sie es erneut und wenn
      das Problem weiterhin besteht, kontaktieren Sie mich bitte per E-Mail an
      <a href="mailto:info@krause-schaefer.de">info@krause-schaefer.de</a>.
    </v-alert>

    <v-row>
      <v-col>
        <v-btn
          color="primary"
          type="submit"
          large
          :disabled="!valid"
          :loading="loading"
        >
          Nachricht versenden
        </v-btn>
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
import axios from 'axios'

const existRules = [(v) => !!v || 'muss angegeben werden']
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
    agbRules: [(v) => !!v || 'Sie müssen zustimmen um fortzufahren'],
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
  },
}
</script>
