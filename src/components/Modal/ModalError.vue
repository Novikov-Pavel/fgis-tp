<template>
  <div v-if="error" class="font-sans border rounded-xl">
    <Dialog :open="!!error">
      <DialogContent
        not-display-close
        :class="[
          'flex flex-col screen320:p-4 screen320:gap-4 screen320:max-w-[280px] screen320:rounded-lg',
          'screen390:max-w-[326px] screen390:p-5',
          'screen1200:max-w-[400px] screen1200:p-6 screen1200:gap-6',
          'screen1440:max-w-lg'
        ]"
      >
        <div :class="['flex items-start', 'screen320:gap-2', 'screen1200:gap-3']">
          <div>
            <Error
              :class="['screen320:size-7', 'screen1200:size-[42px]', 'screen1440:size-12']"
            />
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
                'font-bold',
                'screen320:text-sm screen320:leading-[16.1px]',
                'screen390:text-base screen390:leading-[18.4px]',
                'screen1200:text-xl screen1200:leading-[23px]',
                'screen1440:text-2xl screen1440:leading-[27.6px]'
              ]"
            >
              Не удалось отправить обращение
            </DialogTitle>
            <DialogDescription
              :class="[
                'screen320:text-xs screen320:leading-[13.8px]',
                'screen1200:text-sm screen1200:leading-[16.1px]',
                'screen1440:text-lg screen1440:leading-[20.7px]'
              ]"
            >
              Повторите попытку позже или обратитесь по номеру телефону, указанному на сайте
            </DialogDescription>
          </DialogHeader>
        </div>
        <div class="flex justify-end">
          <Button
            @click="error = false"
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
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogDescription,
  DialogTitle
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { ref } from 'vue'
import { isError } from '@/api/asking'
import { Error } from '@/assets/images'
const error = ref(isError)
</script>
