<template>
  <div>
    <h1>Therapien</h1>
    <h2 class="mb-6">
      Als Heilpraktikerin biete ich folgende Therapieformen an
    </h2>
    <p class="pb-6">
      Klicken Sie auf die einzelnen Therapieformen, um mehr zu erfahren.
    </p>
    <h3>Praxisschwerpunkte</h3>
    <v-expansion-panels flat>
      <v-expansion-panel>
        <v-expansion-panel-header class="px-0">
          <strong class="accordion-header pl-4">Bachblütentherapie</strong>
          <template v-slot:actions>
            <v-icon color="#45184a">$expand</v-icon>
          </template>
        </v-expansion-panel-header>
        <v-expansion-panel-content class="px-4">
          <v-container>
            <v-row>
              <v-col>
                <v-img
                  class="mx-auto"
                  src="images/bachblueten.jpg"
                  alt="Bachblüten | Naturheilpraxis Krause-Schäfer Deesem"
                ></v-img>
              </v-col>
            </v-row>
          </v-container>

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
        <v-expansion-panel-header class="px-0">
          <strong class="accordion-header pl-4">Migränebehandlung</strong>
          <template v-slot:actions>
            <v-icon color="#45184a">$expand</v-icon>
          </template>
        </v-expansion-panel-header>
        <v-expansion-panel-content class="px-4">
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
        <v-expansion-panel-header class="px-0">
          <strong class="accordion-header pl-4">Spagyrik</strong>
          <template v-slot:actions>
            <v-icon color="#45184a">$expand</v-icon>
          </template>
        </v-expansion-panel-header>
        <v-expansion-panel-content class="px-4">
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
    <h3 class="pt-12">Weitere Therapien</h3>
    <v-expansion-panels flat>
      <v-expansion-panel>
        <v-expansion-panel-header class="px-0">
          <strong class="accordion-header pl-4">Ausleitende Verfahren</strong>
          <template v-slot:actions>
            <v-icon color="#45184a">$expand</v-icon>
          </template>
        </v-expansion-panel-header>
        <v-expansion-panel-content class="px-4">
          <p>
            . . . sind entschlackende Methoden, die Zellgifte über Haut und Darm
            ausleiten und das Immunsystem und den Organismus anregen.
          </p>
          <p class="mb-0 font-weight-bold">Schröpfen (unblutig)</p>
          <p>
            Schröpfgläser werden an bestimmten Organreflexpunkten am Rücken
            angesetzt. Dadurch werden die entsprechenden Organe aktiviert und
            ein Gleichgewicht wiederhergestellt.
          </p>
          <p class="mb-0 font-weight-bold">Schröpfmassagen</p>
          <p>
            Nach dem Auftragen eines Gleitmittels werden die Schultern und der
            Bereich neben der Wirbelsäule mit einem großen Schröpfkopf
            abgefahren. Dabei kommt es gewollt zu schmerzlosen Mikroverletzungen
            im Gewebe mit dem Ergebnis, dass der Körper im behandelten Bereich
            stärker durchblutet wird und vorhandener Spannungsschmerz rasch
            nachlässt.
          </p>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header class="px-0">
          <strong class="accordion-header pl-4">Body mind centering</strong>
          <template v-slot:actions>
            <v-icon color="#45184a">$expand</v-icon>
          </template>
        </v-expansion-panel-header>
        <v-expansion-panel-content class="px-4">
          <p>
            . . . ist eine Therapieform, die mit der Eigenschwingung jeder
            lebendigen Körperzelle arbeitet. BMC geht dabei weit über die
            Übertragung und den Fluss von Energie mit den Händen hinaus. Der
            Therapeut erspürt jede Gewebeart individuell und regt sie im
            individuellen Körperrhythmus wieder zur Resonanz an.
          </p>
          <p>
            Der Therapeut benötigt ein hohes Maß an anatomischen Kenntnissen und
            Vorstellungskraft, um jederzeit auf die vorhandenen Dissonanzen
            reagieren zu können. Während der Behandlung kann der Patient
            verdrängte, nicht gelöste Erfahrungen im Schonraum der Behandlung
            erleben und neue, adäquate Lösungen für sich ausprobieren.
          </p>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header class="px-0">
          <strong class="accordion-header pl-4">Fußreflexzonenmassage</strong>
          <template v-slot:actions>
            <v-icon color="#45184a">$expand</v-icon>
          </template>
        </v-expansion-panel-header>
        <v-expansion-panel-content class="px-4">
          <v-container>
            <v-row>
              <v-col cols="3" xs="3" sm="3" md="3" lg="3" xl="3">
                <v-img
                  class="mx-auto"
                  src="images/fussflex.jpg"
                  alt="Fußreflexzonenmassage | Naturheilpraxis Krause-Schäfer Deesem"
                ></v-img>
              </v-col>
              <v-col cols="9" xs="9" sm="9" md="9" lg="9" xl="9">
                <p>
                  . . . zählt zu den Umstimmungs- und Ordnungstherapien. Sie
                  bedient sich spezieller Grifftechniken. Dieses Verfahren sorgt
                  für eine bessere Durchblutung und aktiviert fernwirkend über
                  die Akupunktur-Meridiane die entsprechenden Organe.
                </p>
                <p>
                  Ich setze die Fußreflexzonenmassage sowohl bei körperlichen
                  Beschwerden als auch bei Schlafstörungen und Unruhezuständen
                  ein.
                </p>
              </v-col>
            </v-row>
          </v-container>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header class="px-0">
          <strong class="accordion-header pl-4">Homöopathie</strong>
          <template v-slot:actions>
            <v-icon color="#45184a">$expand</v-icon>
          </template>
        </v-expansion-panel-header>
        <v-expansion-panel-content class="px-4">
          <p>
            . . . ist eine spezielle Reiztherapie mit dem Ziel, die selbst
            regulierenden Kräfte des Körpers zu stimulieren. Homöopathie
            funktioniert nach dem Ähnlichkeitsprinzip: »Ähnliches soll durch
            Ähnliches geheilt werden«. Dabei werden Stoffe, die gleiche Symptome
            hervorrufen wie die des Patienten, in einer unterschiedlich hohen
            Potenzierung gegeben. Ich arbeite sowohl mit Einzelmitteln in
            niedrigen und mittleren Potenzen als auch mit Komplexmitteln.
          </p>
          <p>
            Dabei ermittle ich nach der genauen Beschreibung der Symptome eine
            kleine Auswahl von möglichen Mitteln und teste das exakte Mittel,
            die angemessene Potenz und die Einnahmedauer für den einzelnen
            Patienten aus.
          </p>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header class="px-0">
          <strong class="accordion-header pl-4">Living Essences</strong>
          <template v-slot:actions>
            <v-icon color="#45184a">$expand</v-icon>
          </template>
        </v-expansion-panel-header>
        <v-expansion-panel-content class="px-4">
          <p>
            Diese australischen Blüten wurden von Dr. Vasudeva Barnao gefunden
            und erforscht. Er entwickelte gemeinsam mit seiner Ehefrau Kadambii
            auf Grund seiner gemachten Erfahrungen mit diesen Blüten ein breit
            gefächertes Therapiekonzept, das ganz individuell auf die
            Problematik des einzelnen Patienten eingehen kann und erlebte
            negative Strukturen auflöst und zum Verschwinden bringt. Die
            Erfahrung des Neubeginns wird von den Patienten oft sehr
            beeindruckend körperlich erlebt und beschrieben.
          </p>
          <p>
            Anders als bei Bachblüten besteht bei Living Essences die
            Möglichkeit, die Blüten nicht nur einzunehmen, sondern auf
            besonderen Punkten des Körpers anzulegen bzw. aufzutragen, um eine
            Wirkung/Reaktion beim Patienten zu ermöglichen.
          </p>
          <p>
            Diese Blüten sind nur für Patienten geeignet, die bereits
            Erfahrungen in der Arbeit mit Bachblüten gemacht haben. Living
            Essences unterstützen sehr bei der spirituellen Suche, verlangen
            aber vom Patienten ein hohes Maß an Bereitschaft, sich auf den
            aktuellen Prozess und auf eine neue Lösung einzulassen.
          </p>
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header class="px-0">
          <strong class="accordion-header pl-4">Ohr-Akupunktur</strong>
          <template v-slot:actions>
            <v-icon color="#45184a">$expand</v-icon>
          </template>
        </v-expansion-panel-header>
        <v-expansion-panel-content class="px-4">
          <v-container>
            <v-row>
              <v-col cols="3" xs="3" sm="3" md="3" lg="3" xl="3">
                <v-img
                  class="mx-auto"
                  src="images/ohrakupunktur.jpg"
                  alt="Ohrakupunktur | Naturheilpraxis Krause-Schäfer Deesem"
                ></v-img>
              </v-col>

              <v-col cols="9" xs="9" sm="9" md="9" lg="9" xl="9">
                <p>
                  . . . ist ein Teilgebiet der Körperakupunktur. Bei dieser
                  Therapieform werden die Akupunkturnadeln ausschließlich am Ohr
                  gesetzt.
                </p>
                <p>
                  Ich setze die Ohr-Akupunktur zur Raucherentwöhnung und bei
                  bestimmten Schmerzzuständen ein.
                </p>
              </v-col>
            </v-row>
          </v-container>
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header class="px-0">
          <strong class="accordion-header pl-4">Ohrkerzen</strong>
          <template v-slot:actions>
            <v-icon color="#45184a">$expand</v-icon>
          </template>
        </v-expansion-panel-header>
        <v-expansion-panel-content class="px-4">
          <p>
            . . . sind mit Bienenwachs getränkte Leinenröhrchen. Sie werden nur
            bei intaktem Trommelfell eingesetzt. Beim Abbrennen kommt es zu
            einem Kamineffekt, und das Trommelfell wird in Vibration versetzt,
            das sorgt für Entspannung und Wohlbefinden.
          </p>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header class="px-0">
          <strong class="accordion-header pl-4">Raucherentwöhnung</strong>
          <template v-slot:actions>
            <v-icon color="#45184a">$expand</v-icon>
          </template>
        </v-expansion-panel-header>
        <v-expansion-panel-content class="px-4">
          <p>
            . . . erfolgt an mindestens zwei Terminen im Abstand von ein bis
            zwei Wochen. Voraussetzung ist eine Nikotinkarenz von 24 Stunden vor
            Behandlungsbeginn!
          </p>
          <p>
            Zunächst wird mit einem Spirometer das aktuelle Atemzugvolumen
            erfasst. Danach werden die jeweiligen Suchtpunkte am Ohr
            akupunktiert.
            <br />Ihre körperliche Entgiftung unterstütze ich durch eine
            speziell für Sie ausgewählte spagyrische Tropfenmischung, die von
            einer kooperierenden Apotheke hergestellt wird.
          </p>
          <p>
            Zusätzlich gebe ich ein passendes homöopathisches Einzelmittel, um
            Begleiterscheinungen des Nikotinentzugs zu lindern. Außerdem
            unterstütze ich ihre Psyche mit einer individuellen
            Bachblütenmischung. Vitamine und Enzyme unterstützen ebenfalls den
            Entgiftungsprozess.
          </p>
          <p>Diese mehrstündige Behandlung berechne ich mit 250 €</p>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header class="px-0">
          <strong class="accordion-header pl-4">Reiki</strong>
          <template v-slot:actions>
            <v-icon color="#45184a">$expand</v-icon>
          </template>
        </v-expansion-panel-header>
        <v-expansion-panel-content class="px-4">
          <p>
            . . . ist eine Methode des natürlichen, energetischen Heilens, bei
            der positive Lebensenergien fließen, Emotionen harmonisiert werden
            und eine neue Balance erreicht wird.
          </p>
          <p>
            Der Patient spürt bei der Behandlung ein angenehmes Wärmegefühl im
            Körper, oft ein Prickeln im Bereich der aufgelegten Hände.
          </p>
          <p>
            Reiki erzeugt ein Gefühl innerer Zufriedenheit, großer Ruhe und
            tiefer Entspannung. Bei regelmäßiger Behandlung durchläuft der
            Patient einen Prozess emotionaler und physischer Reinigung und
            Klärung. Oftmals ist dieser Vorgang an einem intensiveren
            Stoffwechselgeschehen zu ersehen. Alle Körperflüssigkeiten riechen
            intensiver, und auch zurückgehaltene, unverarbeitete Emotionen
            können sich lösen. Dadurch besteht die Möglichkeit der Bearbeitung
            und Integration von inneren Konflikten.
          </p>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header class="px-0">
          <strong class="accordion-header pl-4">Schüßlersalze</strong>
          <template v-slot:actions>
            <v-icon color="#45184a">$expand</v-icon>
          </template>
        </v-expansion-panel-header>
        <v-expansion-panel-content class="px-4">
          <p>
            . . . sind Mineralsalze in homöopathisch niedrigen Potenzen, welche
            die Funktionsabläufe der Körperzellen wieder ins Gleichgewicht
            bringen.
          </p>
          <p>
            Es handelt sich dabei um Substanzen, die physiologisch im Körper
            vorhanden sind und dann verabreicht werden, wenn ein Mangel
            körperlich erkennbar ist. Durch die homöopathische Potenzierung
            entfalten Schüßlersalze eher eine funktionelle Wirkung im
            Zellstoffwechsel. Die aufbereiteten Mineralsalze werden bereits über
            die Mundschleimhaut in den Organismus aufgenommen und sind somit
            schneller verfügbar und können Störungen des Gleichgewichts zwischen
            dem inneren Milieu der Zellen und den Zellzwischenräumen
            ausgleichen.
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

<style lang="scss">
.accordion-header {
  order: 1;
}

.v-expansion-panel-header--active {
  .accordion-header {
    color: $primary;
  }
}
</style>
