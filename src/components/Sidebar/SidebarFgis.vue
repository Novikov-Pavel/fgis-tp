<template>
  <div
    :class="[
      'h-screen',
      'screen320:w-full screen320:rounded-xl screen320:bg-white/70 screen320:pt-4',
      'screen390:pt-6',
      'screen1024:rounded-none screen1024:bg-white/100 screen1024:w-1/3 screen1024:flex screen1024:flex-col screen1024:gap-4 screen1024:h-screen',
      'screen1200:gap-6',
      'screen1440:gap-[28px] screen1440:pt-6',
      'screen1920:pt-[28px] screen1920:[30px] screen1920:gap-9'
    ]"
  >
    <p
      :class="[
        'text-mainBlue font-bold hidden',
        'screen1024:text-xs screen1024:leading-[14.4px] screen1024:block screen1024:pl-6 screen1024:pr-[22px]',
        'screen1200:pr-6',
        'screen1440:text-sm screen1440:leading-[16.8px] screen1440:pl-[30px] screen1440:pr-12',
        'screen1920:text-lg screen1920:leading-[21.6px]'
      ]"
    >
      Федеральная государственная информационная система территориального планирования (ФГИС ТП)
    </p>
    <div :class="['flex flex-col', 'screen320:mx-5', 'screen1024:mr-[26px] screen1024:ml-0']">
      <ScrollArea :class="['screen320:h-[129px]', 'screen390:h-[278px]', 'screen430:h-[315px]']">
        <div
          v-for="notification in notifications"
          :key="notification.title"
          :class="[
            'flex gap-2',
            'screen320:bg-infos screen320:pt-3 screen320:pb-[6px] screen320:px-[14px] screen320:rounded-[9px] screen320:mb-2',
            'screen1024:bg-infos screen1024:pl-6 screen1024:rounded-r-[20px] screen1024:mb-3',
            'screen1440:mb-4',
            'screen1920:mb-[20px]'
          ]"
        >
          <div>
            <Information :class="['screen320:size-[15px]', 'screen1920:size-5']" />
          </div>
          <div class="flex flex-col">
            <span
              :class="[
                'font-bold text-mainBlue',
                'screen320:text-xs screen320:leading-[13.2px]',
                'screen1440:text-sm screen1440:leading-[15.4px]',
                'screen1920:text-[20px] screen1920:leading-[22px]'
              ]"
            >
              {{ notification.title }}
            </span>
            <span
              :class="[
                'text-date pt-[2px] pb-4',
                'screen320:text-[10px] screen320:leading-[11px]',
                'screen1440:text-xs screen1440:leading-[13.2px]',
                'screen1920:text-sm screen1920:leading-[15.4px]'
              ]"
            >
              {{ notification.date }}
            </span>
            <div :class="['gap-1 flex flex-col']">
              <span
                v-for="description in notification.description"
                :key="description[1]"
                :class="[
                  'text-main leading-[17.6px]',
                  'screen320:text-[10px] screen320:leading-[11px]',
                  'screen1440:text-xs screen1440:leading-[13.2px]',
                  'screen1920:text-base screen1920:leading-[17.6px]'
                ]"
              >
                {{ description }}
              </span>
            </div>
            <a
              @click.prevent
              href=""
              :class="[
                'underline text-mainBlue text-base leading-[17.6px] mt-2',
                'screen320:text-[10px] screen1024:leading-[11px]',
                'screen1440:text-xs screen1440:leading-[13.2px]',
                'screen1920:text-base screen1920:leading-[17.6px]'
              ]"
            >
              {{ notification.url }}
            </a>
          </div>
        </div>
      </ScrollArea>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ScrollArea } from '@/components/ui/scroll-area'
import { notifications } from '@/api/information'
import { Information } from '@/assets/images'
</script>
