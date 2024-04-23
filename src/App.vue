<template>
  <div :class="['overflow-hidden h-screen bg-bg [&_*]:outline-none']">
    <Header :class="['screen320:w-full w-1/3 flex']" />
    <div
      :class="[
        'screen320:flex screen320:flex-col-reverse',
        'screen1024:flex-row bg-no-repeat bg-cover bg-left-bottom'
      ]"
    >
      <Sidebar :class="['pt-[28px] bg-white']" />
      <Authorized
        :class="[
          'flex justify-center items-center',
          'screen320:mt-4 screen320:mb-[45px]',
          'screen390:mt-[46px] screen390:mb-[130px]',
          'screen1024:mx-auto screen1024:mt-[-73px]'
        ]"
      />
    </div>
    <Footer />
    <CookieBanner v-if="showBanner" @hideBanner="showBanner = false" />
    <ModalSuccess />
    <ModalError />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {
  Authorized,
  CookieBanner,
  Sidebar,
  Footer,
  ModalSuccess,
  ModalError,
  Header
} from '@/components'
import posthog from 'posthog-js'

const showBanner = ref(!posthog.has_opted_in_capturing())
</script>

<style lang="scss">
@import '@/assets/index.css';
</style>
