<template>
  <Popover v-model:open="openPopover">
    <PopoverTrigger as-child>
      <Button
        @click="() => (value = '')"
        variant="outline"
        role="combobox"
        :id="form.id"
        :aria-expanded="openPopover"
        :class="[
          cn(
            'w-full',
            'border-solid',
            'border',
            'py-2',
            'px-3',
            'rounded',
            'justify-between',
            'items-center',
            'bg-background',
            'hover:bg-background',
            'font-normal',
            'flex',
            componentField ? 'text-label' : 'text-placeholder',
            props.class
          )
        ]"
      >
        {{
          componentField
            ? form.list?.find((e) => e.value === componentField)?.label
            : form?.placeholder
        }}
        <ChevronDown />
      </Button>
    </PopoverTrigger>
    <PopoverContent :class="['screen320:w-[280px]', 'screen390:w-[300px]', 'screen1440:w-[340px]']">
      <Command v-model="value">
        <CommandInput :class="['text-placeholder']" placeholder="Поиск" />
        <CommandEmpty>{{
          form.id === FormsE.region ? 'Нет регионов' : 'Нет видов деятельности'
        }}</CommandEmpty>
        <CommandList>
          <CommandGroup>
            <ScrollArea class="h-56">
              <CommandItem
                v-for="item in form?.list"
                :key="item.value"
                :value="item.label || ''"
                @select="
                  () => {
                    setFieldValue(form.id, item.value)
                    openPopover = false
                  }
                "
                :class="{ 'bg-stateChecked': componentField === item.value }"
              >
                {{ item.label }}
              </CommandItem>
            </ScrollArea>
          </CommandGroup>
        </CommandList>
      </Command>
    </PopoverContent>
  </Popover>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { cn } from '@/lib/utils'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Button } from '@/components/ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList
} from '@/components/ui/command'
import { ChevronDown } from '@/assets/images'
import type { PopoverProps } from '@/components/Popover/types'
import { FormsE } from '@/components/Modal/types'

const props = defineProps<PopoverProps>()
const openPopover = ref<boolean>(false)
const value = props.value
</script>
