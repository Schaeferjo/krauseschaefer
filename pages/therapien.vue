<template>
  <div>
    <h1>Therapien | Naturheilpraxis</h1>
    <h2>Als Heilpraktikerin biete ich folgende Therapieformen an:</h2>
    <p>Klicken Sie auf die einzelnen Therapieformen, um mehr zu erfahren.</p>

    <h3>Praxisschwerpunkte</h3>

    <v-expansion-panels flat>
      <v-expansion-panel v-for="(item, i) in 5" :key="i">
        <v-expansion-panel-header>Bachblütentherapie</v-expansion-panel-header>
        <v-expansion-panel-content>
          . . . ist die bekannteste und älteste Blütentherapie. Bachblüten
          Benannt ist sie nach ihrem Begründer, dem englischen Arzt Edward Bach.
          Sie ist eine der Homöopathie ähnliche feinstoffliche Methode. In einem
          ausführlichen Gespräch werden vom Patienten selbst die entsprechenden
          Blütenessenzen ausgewählt und von mir als Therapeutin mit einer
          individuell erstellten Tropfenanzahl zusammengestellt. Diese Mischung
          wird über mehrere Wochen eingenommen und ermöglicht eine harmonischere
          Lebensführung. Vorhandene körperliche oder seelische Symptome, die
          durch mangelnde Beachtung der Befindlichkeit auftreten, gehen zurück,
          weil sie verstanden wurden und nicht mehr notwendig sind. Mit diesen
          Blüten kann man sowohl aktuelle Themen ansprechen als auch
          konstitutionell arbeiten. Bachblüten sind auch für Kinder besonders
          geeignet und effektiv.
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>
