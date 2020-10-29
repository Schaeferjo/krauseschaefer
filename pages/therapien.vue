<template>
  <div>
    <h1>Therapien</h1>
    <h2>Als Heilpraktikerin biete ich folgende Therapieformen an:</h2>
    <p class="pb-6">
      Klicken Sie auf die einzelnen Therapieformen, um mehr zu erfahren.
    </p>

    <h3>Praxisschwerpunkte</h3>

    <v-expansion-panels flat>
      <v-expansion-panel>
        <v-expansion-panel-header>
          <strong>Bachblütentherapie</strong>
          <template v-slot:actions>
            <v-icon color="#45184a">$expand</v-icon>
          </template>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <p>. . . ist die bekannteste und älteste Blütentherapie.</p>
          <p>
            Benannt ist sie nach ihrem Begründer, dem englischen Arzt Edward
            Bach. Sie ist eine der Homöopathie ähnliche feinstoffliche Methode.
          </p>
          <p>
            In einem ausführlichen Gespräch werden vom Patienten selbst die
            entsprechenden Blütenessenzen ausgewählt und von mir als Therapeutin
            mit einer individuell erstellten Tropfenanzahl zusammengestellt.
            Diese Mischung wird über mehrere Wochen eingenommen und ermöglicht
            eine harmonischere Lebensführung. Vorhandene körperliche oder
            seelische Symptome, die durch mangelnde Beachtung der Befindlichkeit
            auftreten, gehen zurück, weil sie verstanden wurden und nicht mehr
            notwendig sind.
          </p>
          <p>
            Mit diesen Blüten kann man sowohl aktuelle Themen ansprechen als
            auch konstitutionell arbeiten. Bachblüten sind auch für Kinder
            besonders geeignet und effektiv.
          </p>
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header>
          <strong>Migränebehandlung</strong>
          <template v-slot:actions>
            <v-icon color="#45184a">$expand</v-icon>
          </template>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <p>
            Migräne behandle ich seit vielen Jahren mit individuell
            ausgetesteten spagyrischen Mischungen. Die Behandlung erstreckt sich
            über mindestens ein halbes Jahr und erfordert 2-4-wöchtentliche
            Termine, an denen die Tropfenanzahl und die Mischungsinhalte immer
            wieder neu überprüft werden.
          </p>
          <p>
            Eine kooperierende Apotheke stellt die Arznei sorgfältig zusammen.
          </p>
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header>
          <strong>Spagyrik</strong>
          <template v-slot:actions>
            <v-icon color="#45184a">$expand</v-icon>
          </template>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <p>
            (Spagyrik = aus dem Griechischen, bedeutet trennen und wieder
            zusammenführen)
          </p>
          <p>
            . . . stärkt die Selbstheilungskräfte auf körperlicher, geistiger
            und seelischer Ebene und verbessert den Energiefluss des Patienten.
          </p>
          <p>
            Durch Stärkung der positiven Energie balancieren sich die
            Körperebenen ein. Damit werden Symptome nicht unterdrückt oder
            verschoben, sondern ursächlich erfasst, aufgelöst und somit früher
            oder später überflüssig.
          </p>
          <p>
            Es gibt rund 100 spagyrisch aufbereitete Einzelessenzen, die
            entweder oral eingenommen oder aufgetragen werden. Ausgesuchte,
            frische und komplette Pflanzen aus biologischem Anbau werden einer
            alkoholischen Gärung unterzogen, hierdurch werden die Wirkstoffe gut
            aufgeschlossen. Anschließend wird destilliert, um die ätherischen
            Öle zu gewinnen. Der Rest des Pflanzenbreies wird getrocknet,
            gepresst und verascht. Nun können die Mineralien gewonnen werden.
            Während der Dauer eines Mondzyklus werden die chemisch veränderten
            Einzelkomponenten wieder zusammengefügt und vermischt.
          </p>
          <p>
            Entsprechend dem Krankheitsbild werden für jeden Patienten Essenzen
            individuell ausgewählt, dosiert, ausgetestet und von einer
            kooperierenden Apotheke zu einer gebrauchsfertigen Mischung
            zusammengefügt. Diese Mischungen finden ihre Anwendung sowohl bei
            akuten als auch bei chronischen Erkrankungen.
          </p>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Therapien',
    }
  },
}
</script>
