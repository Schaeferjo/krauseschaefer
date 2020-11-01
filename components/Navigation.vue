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
          title: 'Kurse',
          to: '/kurse',
        },
        {
          title: 'Über mich',
          to: '/uebermich',
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
  a.v-list-item {
    border-radius: 0;
    color: $primary;
    .v-list-item__content {
      .v-list-item__title {
        color: $primary;
        font-family: 'Playfair Display SC', sans-serif;
        font-size: 1.8em;
        &::before {
          content: '▸';
          color: #fff;
          display: block;
          position: absolute;
          top: 0;
          width: 30px;
          height: 1em;
          line-height: 1.3em;
          left: -40px;
          font-size: 1.3em;
          -webkit-transition: all 0.3s ease-in-out;
          -moz-transition: all 0.3s ease-in-out;
          -o-transition: all 0.3s ease-in-out;
          transition: all 0.3s ease-in-out;
        }
        &:hover::before {
          left: -25px;
          color: #ccc;
        }
      }
    }
    &.v-list-item--active {
      background-color: $primary;
      .v-list-item__content {
        .v-list-item__title {
          color: #fff;
          &::before {
            display: none;
          }
        }
      }
    }
  }

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
