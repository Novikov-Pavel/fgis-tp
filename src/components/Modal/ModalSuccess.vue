<template>
  <div v-if="isOpen?.response" class="font-sans border rounded-xl">
    <Dialog :open="!!isOpen?.response">
      <DialogContent
        not-display-close
        :class="[
          'flex flex-col shadow-modalSent screen320:p-4 screen320:gap-4 screen320:max-w-[280px] screen320:rounded-lg',
          'screen390:max-w-[326px] screen390:p-5',
          'screen1200:max-w-[400px] screen1200:p-6 screen1200:gap-6',
          'screen1440:max-w-[476px] screen1440:p-[30px] screen1440:gap-[30px]'
        ]"
      >
        <div :class="['flex items-start', 'screen320:gap-2', 'screen1200:gap-3']">
          <div>
            <Sent :class="['screen320:size-8', 'screen1200:size-[42px]', 'screen1440:size-12']" />
          </div>
          <DialogHeader
            :class="[
              'text-main',
              'screen320:gap-y-2',
              'screen1200:gap-y-[10px]',
              'screen1440:gap-y-3'
            ]"
          >
            <DialogTitle
              :class="[
                'font-bold whitespace-nowrap',
                'screen320:text-sm screen320:leading-[16.1px]',
                'screen390:text-base screen390:leading-[18.4px]',
                'screen1200:text-xl screen1200:leading-[23px]',
                'screen1440:text-2xl screen1440:leading-[27.6px]'
              ]"
            >
              Ваше обращение отправлено
            </DialogTitle>
            <DialogDescription
              :class="[
                'screen320:text-xs screen320:leading-[13.8px]',
                'screen1200:text-sm screen1200:leading-[16.1px]',
                'screen1440:text-lg screen1440:leading-[20.7px]'
              ]"
            >
              Номер обращения {{ res?.response }}
            </DialogDescription>
          </DialogHeader>
        </div>
        <div class="flex justify-end">
          <Button
            @click="isOpen.response = ''"
            :class="[
              'bg-mainBlue hover:bg-mainBlueHovered px-4 py-[6px] rounded border-none font-bold text-white',
              'screen320:text-xs screen320:leading-[12.6px]',
              'screen1200:text-sm screen1200:leading-[14.7px]'
            ]"
          >
            Закрыть
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogDescription,
  DialogTitle
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { res } from '@/api/asking'
import { Sent } from '@/assets/images'
const isOpen = ref(res)
</script>
