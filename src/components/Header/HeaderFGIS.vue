<template>
  <a
    @click.prevent
    href="/"
    :class="[
      'flex items-center gap-4 pt-[40px]',
      'screen320:gap-[10px] screen320:justify-center screen320:px-0',
      'screen1024:w-1/3 screen1024:bg-white screen1024:justify-normal screen1024:pl-6'
    ]"
  >
    <Logo
      :class="[
        'screen320:size-[33px] screen320:fill-white',
        'screen1024:fill-[url(#a)]',
        'screen1440:size-10',
        'screen1920:size-[54px]'
      ]"
    />
    <p>Министерство экономического развития Российской Федерации</p>
  </a>
</template>

<script setup lang="ts">
import { Logo } from '@/assets/images'
</script>
