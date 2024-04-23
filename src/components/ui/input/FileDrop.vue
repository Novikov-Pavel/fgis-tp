<template>
  <div
    @drop.prevent="onDrop"
    @dragenter.prevent
    @dragover.prevent
    :class="
      cn(
        'flex flex-col justify-items-center items-center w-full bg-background p-0 m-0 text-sm file:text-sm file:font-medium placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50',
        props.class
      )
    "
  >
    <slot>
      <div :class="['flex flex-col gap-[10px] w-full']">
        <div
          :class="[
            'flex flex-col items-center justify-center text-xs h-[84px] bg-[#EDF3FA] border-dashed rounded border border-normal file:p-0'
          ]"
        >
          <File />
          <p :class="['text-normal']">
            <span :class="['text-mainBlue']">Выберите </span>
            или перетащите
          </p>
          <p :class="['text-normal']">сюда файлы</p>
        </div>
        <div class="flex flex-col gap-1">
          <div
            v-for="fileName in uploadInfo"
            :key="fileName"
            :class="[
              'rounded border gap-1 border-normal p-[6px] flex justify-between items-center bg-[#EDF3FA]'
            ]"
          >
            <div class="flex flex-row break-all gap-1">
              <div><Sheet /></div>
              <span>{{ fileName }}</span>
            </div>
            <div>
              <Error
                @click.prevent="() => onDelete(fileName)"
                :class="['text-normal cursor-pointer']"
              />
            </div>
          </div>
        </div>
      </div>
    </slot>
    <input
      @change="handleUpload"
      :multiple="multiple"
      :class="cn(['w-full outline-none bg-background hidden'])"
      :id="id"
      type="file"
    />
    <Toaster />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, type HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'
import { Error, File, Sheet } from '@/assets/images'
import { useToast } from '@/components/ui/toast/use-toast'
import Toaster from '@/components/ui/toast/Toaster.vue'

const props = defineProps<{
  class?: HTMLAttributes['class']
  id?: string
  multiple?: boolean
}>()

const emits = defineEmits<{
  (e: 'update:modelValue', payload: string | number | any): void
  (e: 'input', payload: any): void
}>()

const { toast } = useToast()
const files = ref<Array<File>>([])

const onDrop = (event: DragEvent) => {
  files.value = Array.from(event.dataTransfer?.files || [])
  files.value = toMatch(files.value)
  files.value = tooBig(files.value)
  emits('input', files.value)
}

const onDelete = (fileName: string) => {
  files.value.splice(
    files.value.findIndex((file: File) => file.name === fileName),
    1
  )
  emits('input', files.value)
}

const uploadInfo = computed(() => {
  return files.value && files.value.map((file: File) => file.name)
})

const tooBig = (arr: File[]) => {
  if (!arr.every((file) => file.size < 20_971_520)) {
    toast({
      description: 'Нельзя добавить файл с размером больше 20МБ'
    })
    arr = arr.filter((file) => file.size < 20_971_520)
  }
  return arr
}

interface InputFileEvent extends Event {
  target: HTMLInputElement
}

const isInputFileEvent = (event: Event): event is InputFileEvent => {
  return 'files' in (event.target || {})
}

const toMatch = (arr: File[]) => {
  if (arr.length > 5) {
    toast({
      description: 'Нельзя добавить больше 5 файлов'
    })
    return (arr = arr.slice(0, 5))
  }
  return arr
}

const handleUpload = (event: Event) => {
  if (!isInputFileEvent(event)) return

  files.value = Array.from(event.target.files || []) || []

  files.value = toMatch(files.value)
  files.value = tooBig(files.value)
  emits('input', files.value)
}
</script>
