<template>
  <div>
    <h1>Über mich</h1>
    <h2 class="mb-6">Wissenswertes über meine Person</h2>
    <p>geboren 1956, verheiratet, zwei Söhne.</p>

    <v-container>
      <v-row>
        <v-col cols="12" xs="12" sm="12" md="12" lg="12" xl="12">
          <v-img
            src="images/rose_krause_schaefer.jpg"
            alt="Heilpraktikerin Rose Krause-Schäfer aus Lohmar - Deesem"
            class="py-12 mx-auto"
            max-width="600px"
          ></v-img>
        </v-col>
      </v-row>
      <v-row class="pt-8">
        <v-col cols="12" xs="12" sm="6" md="6" lg="6" xl="6">
          <h3 class="pb-3">Beruflicher Werdegang</h3>
          <ul>
            <li>Erzieherin</li>
            <li>Kindergartenleiterin bis 1981</li>
            <li>Fachabitur 1982</li>
            <li>Freischaffende Keramikerin</li>
            <li>Heilpraktikerschule F. Kasack, Much 1993 bis 1997</li>
            <li>
              Erlaubnis zur Führung der Berufbezeichnung »Heilpraktikerin« seit
              dem 12. November 1997 durch das Gesundheitsamt Siegburg
            </li>
            <li>Niederlassung 1. Juni 1998</li>
            <li>
              Mitglied im Berufs- und Fachverband »Freie Heilpraktiker e.V.«
            </li>
            <li>Regelmäßige Fortbildungen und Schulungen</li>
          </ul>
        </v-col>
        <v-col cols="12" xs="12" sm="6" md="6" lg="6" xl="6">
          <h3 class="pb-3">Lebensarbeitsschwerpunkte</h3>
          <ul>
            <li>Individuelle spirituelle Suche und Entfaltung</li>
            <li>Offenheit für Neubegegnungen und Sehweisen</li>
            <li>Emotionale Kompetenz und Selbstverantwortung</li>
            <li>Frustrationstoleranz und Humor</li>
            <li>
              Vertrauen in die geistige Führung und in die Eingebundenheit in
              ein großes Ganzes
            </li>
          </ul>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Über mich',
    }
  },
}
</script>
