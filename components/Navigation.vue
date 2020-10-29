<template>
  <v-list id="nav_default" flat nav class="px-6">
    <div id="navigation-contact">
      <p>
        <span class="font-weight-bold">Telefon:</span>

        <a
          href="callto:004922466914"
          title="Diese Telefonnummer mit Ihrem Standard VoIP-Programm anrufen"
          >02246 . 69 14</a
        >
      </p>
      <p>
        <span class="font-weight-bold">E-Mail:</span>

        <a
          href="mailto:info@krause-schaefer.de"
          title="E-Mail mit Ihrem Standard Mailprogramm schreiben"
          >info@krause-schaefer.de</a
        >
      </p>
    </div>

    <v-list class="main-nav">
      <v-list-item
        v-for="(item, i) in items"
        :key="i"
        :to="item.to"
        router
        exact
      >
        <v-list-item-content>
          <v-list-item-title v-text="item.title" />
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-list>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title: 'Start',
          to: '/',
        },
        {
          title: 'Therapien',
          to: '/therapien',
        },
        {
          title: 'Kontakt',
          to: '/kontakt',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
#navigation-contact {
  p {
    span {
      width: 70px;
      display: inline-block;
    }
  }
}
.main-nav {
  &::before,
  &::after {
    content: '';
    width: 100%;
    height: 10px;
    display: block;
    background-image: url('/images/hr_custom.svg');
    background-repeat: repeat-x;
  }
}
</style>
