<template>
  <footer
    :class="[
      'flex flex-wrap bg-footer text-white py-4 px-[30px] justify-between  w-full absolute bottom-0',
      'screen320:flex-col-reverse screen320:items-start screen320:gap-3 screen320:px-6 screen320:py-4',
      'screen430:gap-5',
      'screen1024:flex-row screen1024:items-center'
    ]"
  >
    <div :class="['flex gap-2 items-center']">
      <FooterLogo :class="['screen320:size-6', 'screen1440:size-9', 'screen1920:size-[42px]']" />
      <div
        :class="[
          'flex flex-col',
          'screen320:text-[10px] screen320:leading-3',
          'screen1440:text-xs screen1440:leading-[14.4px]',
          'screen1920:text-base screen1920:leading-[19.2px]'
        ]"
      >
        <span>Министерство сельского хозяйства РФ {{ year }}</span>
        <address class="not-italic">107996, г. Москва, Орликов переулок, 11/1</address>
      </div>
    </div>
    <div
      :class="[
        'flex gap-[40px] items-center',
        'screen320:text-[10px] screen320:leading-[11px] screen320:flex-row-reverse screen320:gap-4',
        'screen1024:flex-row screen1024:gap-5',
        'screen1440:text-xs screen1440:leading-[13.2px] screen1440:gap-[30px]',
        'screen1920:text-base screen1920:leading-[17.6px] screen1920:gap-10'
      ]"
    >
      <div :class="['flex flex-col gap-2 opacity-0']">
        <a href="tel:+78002226042">8 800 222-60-42</a>
        <a href="tel:+74957409060">+7 (495) 740-90-60</a>
      </div>
      <Modal>
        <template #DialogTrigger>
          <DialogTrigger as-child>
            <Button
              :class="[
                'hover:bg-mainBlueHovered px-[20px] py-[14px] rounded-[6px] bg-transparent border-white border',
                'screen320:text-[10px] screen320:leading-[11px] screen320:px-[18px] screen320:py-[12px]',
                'screen1440:text-xs screen1440:leading-[13.2px]',
                'screen1920:text-base screen1920:leading-[17.6px] screen1920:px-[14px] screen1920:py-[20px]'
              ]"
            >
              Задать вопрос
            </Button>
          </DialogTrigger>
        </template>
      </Modal>
    </div>
  </footer>
</template>

<script setup>
import { useDateFormat, useNow } from '@vueuse/core'
import { Modal } from '@/components/'
import { Button } from '@/components/ui/button/'
import { DialogTrigger } from '@/components/ui/dialog'
import { FooterLogo } from '@/assets/images'

const year = useDateFormat(useNow(), 'YYYYг.')
</script>
