<template>
  <div>
    <div
      :class="[
        'text-center bg-white rounded-[10px]',
        'screen1920:py-[60px] screen1920:px-20',
        'screen1440:py-10 screen1440:px-[50px]',
        'screen1024:py-[30px]',
        'screen430:py-[35px] screen430:px-10',
        'screen320:py-5 screen320:px-[18px]'
      ]"
    >
      <h2
        :class="[
          'font-bold text-main',
          'screen1920:text-[32px] screen1920:leading-[35.2px]',
          'screen1440:text-[24px] screen1440:leading-[26.4px]',
          'screen430:text-[20px] screen430:leading-[22px]',
          'screen320:text-lg screen320:leading-[19.8px]'
        ]"
      >
        Авторизуйтесь в системе
      </h2>
      <div
        :class="[
          'text-[#636569]',
          'screen1920:text-[22px] screen1920:leading-[24.42px] screen1920:mt-3 screen1920:mb-10',
          'screen1440:text-base screen1440:leading-[17.76px] screen1440:mt-2 screen1440:mb-[30px]',
          'screen1024:mb-6',
          'screen430:text-[14px] screen430:leading-[15.54px] screen430:mb-5',
          'screen320:text-xs screen320:leading-[13.32px] screen320:mt-2 screen320:mb-4'
        ]"
      >
        <p>Авторизация происходит через систему ЕСИА.</p>
        <p>Убедитесь, что вводите верные данные</p>
      </div>
      <a :href="authorizationUrl">
        <Button
          type="submit"
          :class="[
            'flex w-full hover:bg-transparent bg-transparent rounded border-2 border-mainBlue font-bold text-mainBlue',
            'screen1920:text-[20px] screen1920:leading-[25px] screen1920:py-4 screen1920:px-20',
            'screen1440:text-base screen1440:leading-5 screen1440:py-3 screen1440:px-[46px]',
            'screen1024:py-[9px] screen1024:px-[38px]',
            'screen430:text-sm screen430:leading-[17.5px] screen430:px-8',
            'screen320:text-xs screen320:leading-[15px] screen320:py-[10px] screen320:px-4 gap-[6px]'
          ]"
        >
          <template #left>
            <gosuslugi :class="['screen320:w-6 screen320:h-[26px]']" />
          </template>
          Войти через Госуслуги (ЕСИА)
        </Button>
      </a>
      <div
        :class="[
          'flex justify-center text-placeholder',
          'screen320:flex-col screen320:gap-1 screen320:text-[10px] screen320:leading-[11.5px] screen320:mt-2',
          'screen430:mt-[6px] screen430:gap-5 screen430:flex-row',
          'screen1920:text-[14px] screen1920:leading-[16.1px] screen1920:mt-3'
        ]"
      >
        <Modal
          v-for="data in dataModals"
          :key="data.title"
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
              <button>{{ data.button }}</button>
            </DialogTrigger>
          </template>
          <template #DialogHeader>
            <h2 :class="['font-bold leading-[17.6px]']">
              {{ data.title }}
            </h2>
          </template>
          <template #body>
            <p
              v-for="body in data.body"
              :key="body"
              :class="[
                'screen320:[&:not(:last-child)]:pb-4 screen320:text-xs screen320:leading-[14.4px]',
                'screen1024:[&:not(:last-child)]:pb-5 screen1024:text-sm screen1024:leading-[16.8px],'
              ]"
            >
              {{ body }}
            </p>
          </template>
        </Modal>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { DialogTrigger } from '@/components/ui/dialog'
import { Modal } from '@/components'
import { gosuslugi } from '@/assets/images'
import { dataModals } from '@/api/dataModal'

const authorizationUrl = import.meta.env.VITE_AUTHORIZATION_URL
</script>
