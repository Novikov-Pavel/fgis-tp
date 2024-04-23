<template>
  <div :class="['flex flex-col cursor-pointer gap-[6px]']" :onClick="refresh">
    <canvas id="canvas" ref="canvasRef" width="200" height="50" class="bg-slate-100" />
    <Button
      type="button"
      :class="[
        'text-mainBlue text-left border-none bg-transparent hover:bg-transparent flex items-center justify-start gap-2 font-bold p-0'
      ]"
    >
      <template #left><Update /></template>
      Обновить картинку
    </Button>
  </div>
  <FormField v-slot="{ value, componentField, errorMessage }" name="code">
    <FormItem>
      <label for="code" :class="['flex flex-col gap-[6px]']">
        <div class="flex justify-between items-center">
          Какой код на картинке?
          <div v-if="value || errorMessage">
            <Error v-if="errorMessage" :class="['text-error size-4']" />
            <Done v-else :class="['size-4']" />
          </div>
        </div>
        <FormControl>
          <Input
            type="text"
            id="code"
            v-bind="componentField"
            placeholder="Введите код с картинки"
            :class="[errorMessage && 'border-error']"
          />
        </FormControl>
      </label>
    </FormItem>
  </FormField>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useVModel } from '@vueuse/core'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { FormControl, FormField, FormItem } from '@/components/ui/form'
import { Error, Done, Update } from '@/assets/images'

const props = defineProps<{
  modelValue?: string
}>()
const emit = defineEmits(['update:modelValue'])

const captcha = useVModel(props, 'modelValue', emit)
const canvasRef = ref<HTMLCanvasElement | null>(null)

const textGenerator = () => {
  const characters = 'ABCDEFGHJKMNOPQRSTUVWXYZabcdefghjkmnopqrstuvwxyz023456789'
  let result = ''
  for (let i = 0; i < 5; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length))
  }
  return result
}

const randomNumber = (min: number, max: number) => Math.floor(Math.random() * (max - min) + min)

const drawCaptcha = (text: string) => {
  //The getContext() function returns the drawing context that has all the drawing properties and functions needed to draw on canvas
  let ctx = canvasRef.value?.getContext?.('2d')
  if (!ctx) return
  //clear canvas
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
  //space between letters
  const letterSpace = 150 / text.length
  //loop through string
  for (let i = 0; i < text.length; i++) {
    //Define initial space on X axis
    const xInitialSpace = 25
    //Set font for canvas element
    ctx.font = '20px Arial'
    //set text color
    ctx.fillStyle = '#020817'
    ctx.fillText(text[i], xInitialSpace + i * letterSpace, randomNumber(25, 40), 100)
  }
}

const refresh = () => {
  let generate = textGenerator()
  generate = [...generate].sort(() => Math.random() - 0.5).join('')
  drawCaptcha(generate)
  captcha.value = generate
}

onMounted(() => {
  refresh()
})
</script>
