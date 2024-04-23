<template>
  <div
    :class="
      cn(
        'flex flex-col justify-items-center items-center w-full bg-background p-0 m-0 px-3 py-2 text-sm file:text-sm file:font-medium placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer rounded border border-normal',
        props.class
      )
    "
  >
    <input
      @input="acceptNumber"
      v-model="modelValue"
      :class="cn(['w-full outline-none'])"
      :placeholder="placeholder"
      :id="id"
      :type="type"
      autocomplete="additional-name"
    />
    <Toaster />
  </div>
</template>

<script setup lang="ts">
import { type HTMLAttributes } from 'vue'
import { useVModel } from '@vueuse/core'
import { cn } from '@/lib/utils'
import Toaster from '@/components/ui/toast/Toaster.vue'

const props = defineProps<{
  defaultValue?: string | number
  modelValue?: string | number | any
  class?: HTMLAttributes['class']
  placeholder?: string
  id?: string
  type?: string
  multiple?: boolean
}>()

const emits = defineEmits<{
  (e: 'update:modelValue', payload: string | number | any): void
  (e: 'input', payload: any): void
}>()

const modelValue = useVModel(props, 'modelValue', emits, {
  passive: true,
  defaultValue: props.defaultValue
})

const acceptNumber = () => {
  if (modelValue.value) {
    const x = modelValue.value?.replace(/\D/g, '').match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,4})/)

    props.type === 'tel'
      ? (modelValue.value = !x[2]
          ? x[1] === '8'
            ? '7'
            : x[1] === '9'
              ? `7${x[1]}`
              : x[1]
          : !x[3]
            ? '+' + x[1] + x[2] + x[3] + (x[4] ? '-' + x[4] : '')
            : '+' + x[1] + ' (' + x[2] + ') ' + x[3] + (x[4] ? '-' + x[4] : ''))
      : modelValue.value
  }
}
</script>
