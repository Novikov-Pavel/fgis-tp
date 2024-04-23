<template>
  <div
    :class="[
      'flex items-end absolute bottom-0 right-0 z-10 bg-white rounded-[6px] text-bannerText',
      'screen320:max-w-[276px] screen320:px-[18px] screen320:py-[14px] screen320:text-[10px] screen320:leading-[11.1px] screen320:mx-[22px] screen320:my-[30px] screen320:gap-[10px] screen320:flex-col',
      'screen1024:min-w-[440px] screen1024:flex-row screen1024:items-center screen1024:px-5 screen1024:mx-6 screen1024:my-[82px]',
      'screen1440:mx-[30px] screen1440:min-w-[456px]',
      'screen1920:text-sm screen1920:leading-[15.54px] screen1920:min-w-[621px] screen1920:my-[104px]'
    ]"
  >
    <p>
      Мы используем файлы Cookies только для персонализации сервисов и повышения удобства работы с
      сайтом. Запретить хранение файлов Cookie можно в настройках браузера. Пожалуйста, ознакомьтесь
      с
      <Modal
        :class="[
          'text-label',
          'screen320:p-4 screen320:gap-3',
          'screen430:w-[389px]',
          'screen1024:p-6 screen1024:gap-5 screen1024:w-[548px]',
          'screen1440:w-[848px]'
        ]"
      >
        <template #DialogTrigger>
          <DialogTrigger as-child>
            <span :class="['text-mainBlue underline cursor-pointer']">
              Политикой использования Cookies
            </span>
          </DialogTrigger>
        </template>
        <template #DialogHeader>
          <h2 :class="['font-bold leading-[17.6px] w-1/2']">
            {{ dataModals[0].title }}
          </h2>
        </template>
        <template #body>
          <p
            v-for="body in dataModals[0].body"
            :key="body"
            :class="[
              'screen320:[&:not(:last-child)]:pb-4 screen320:text-xs screen320:leading-[14.4px]',
              'screen1024:[&:not(:last-child)]:pb-5 screen1024:text-sm screen1024:leading-[16.8px]'
            ]"
          >
            {{ body }}
          </p>
        </template>
      </Modal>
    </p>
    <button
      type="button"
      @click="acceptCookies"
      :class="[
        'bg-mainBlue hover:bg-mainBlueHovered text-white rounded',
        'screen320:px-[14px] screen320:py-[10px]',
        'screen1024:px-3 screen1024:py-[9px]',
        'screen1440:px-4 screen1440:py-[11px]'
      ]"
    >
      Подтвердить
    </button>
  </div>
</template>

<script setup lang="ts">
import posthog from 'posthog-js'
import { DialogTrigger } from '@/components/ui/dialog'
import { Modal } from '@/components'
import { dataModals } from '@/api/dataModal'

const emit = defineEmits<{
  (e: 'hideBanner'): void
}>()
const acceptCookies = () => {
  posthog.opt_in_capturing()
  emit('hideBanner')
}
</script>
