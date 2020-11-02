<template>
  <v-list id="nav_default" flat nav class="px-6">
    <div id="navigation-contact">
      <p class="mb-0">
        <span class="font-weight-bold">Telefon:</span>

        <a
          href="callto:004922466914"
          title="Diese Telefonnummer mit Ihrem Standard VoIP-Programm anrufen"
          >02246 . 69 14</a
        >
      </p>
      <p class="mb-5">
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
    padding: 0 8px;
    span {
      width: 65px;
      display: inline-block;
    }
  }
}
.main-nav {
  padding-bottom: 3em;
  a.v-list-item {
    border-radius: 0;
    color: $primary;
    margin-bottom: 3px !important;
    .v-list-item__content {
      padding: 8px 0 12px 0;
      .v-list-item__title {
        color: $primary;
        font-family: 'Playfair Display SC', sans-serif;
        font-size: 1.6em;
        &::before {
          content: '▸';
          color: #fff;
          display: block;
          position: absolute;
          top: 8px;
          width: 30px;
          height: 1em;
          line-height: 1em;
          left: -40px;
          font-size: 1.1em;
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

@media only screen and (max-width: 599px) {
  #navigation-contact {
    p {
      span {
        width: 100%;
        display: none;
      }
    }
  }
}
</style>
