<script lang="ts" setup>
import type { HTMLAttributes } from 'vue'
import type { LabelProps } from 'radix-vue'
import { useFormField } from './useFormField'
import { cn } from '@/lib/utils'
import { Label } from '@/components/ui/label'

const props = defineProps<LabelProps & { class?: HTMLAttributes['class'] }>()

const { error } = useFormField()
</script>

<template>
  <div :class="['flex flex-col w-full gap-y-[6px]']">
    <slot name="img" />
    <Label :class="cn(error && 'text-error', props.class)" :for="props.for">
      <slot name="default" />
    </Label>
  </div>
</template>
