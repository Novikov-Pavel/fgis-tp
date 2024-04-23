<template>
  <span class="font-sans">
    <Dialog :open="hiddenModal">
      <slot name="DialogTrigger"></slot>
      <DialogContent
        :class="
          cn(
            [
              'screen320:px-5 screen320:py-[24px] screen390:rounded-[6px] overflow-hidden bg-background gap-[20px]',
              'screen390:w-[348px] screen390:px-[24px]',
            ],
            props.class
          )
        "
      >
        <slot name="DialogHeader">
          <DialogHeader>
            <DialogTitle
              :class="[
                'text-label',
                'screen320:text-lg screen320:leading-[18.9px] screen320:font-bold',
                'screen1440:text-[22px] screen1440:leading-[24.2px]'
              ]"
            >
              Ваше обращение
            </DialogTitle>
          </DialogHeader>
        </slot>
        <ScrollArea
          :class="[
            'screen320:h-[401px]',
            'screen390:h-[627px]',
            'screen430:h-[684px]',
            'screen1024:h-[452px]',
            'screen1440:h-[572px]',
            'screen1920:h-[712px]',
            'screen2048:h-[888px]'
          ]"
        >
          <slot name="body">
            <form
              @submit="onSubmit"
              method="post"
              id="formElem"
              :class="'flex flex-col gap-y-[14px]'"
            >
              <FormField
                v-for="form in forms"
                :key="form.id"
                :name="form.id"
                v-slot="{ componentField, value, errorMessage }"
              >
                <FormItem :class="['flex', 'flex-col', 'items-start']">
                  <FormLabel :for="form.id">
                    <template #img>
                      <div
                        :class="[
                          'flex justify-between items-center text-label text-sm leading-[16.8px]'
                        ]"
                      >
                        {{ form.label }}
                        <div v-if="value || errorMessage">
                          <Error v-if="errorMessage" :class="['text-error size-4']" />
                          <Done v-else :class="['size-4']" />
                        </div>
                      </div>
                      <div
                        v-if="form.description"
                        :class="[
                          'flex gap-[10px] text-[10px] leading-3 text-normal mt-1 mb-[10px]'
                        ]"
                      >
                        <span>{{ form.description?.limitFiles }}</span>
                        <span>{{ form.description?.limitMb }}</span>
                      </div>
                    </template>
                    <FormControl>
                      <Input
                        v-if="
                          form.id !== FormsE.description &&
                          form.id !== FormsE.dropzoneFile &&
                          form.id !== FormsE.region &&
                          form.id !== FormsE.kindActivity
                        "
                        v-bind="componentField"
                        :id="form.id"
                        :type="form.type"
                        :placeholder="form.placeholder"
                        :class="[
                          'placeholder-placeholder',
                          'text-sm',
                          'leading-[16.8px]',
                          form.id === FormsE.dropzoneFile
                            ? 'border-hidden p-0'
                            : 'bg-background border-solid',
                          errorMessage ? 'text-error' : 'text-main',
                          errorMessage && 'border-error'
                        ]"
                      >
                      </Input>
                      <File
                        v-if="form.id === FormsE.dropzoneFile"
                        multiple
                        v-bind="componentField"
                        :id="form.id"
                      />
                      <Textarea
                        v-if="form.id === FormsE.description"
                        v-bind="componentField"
                        :type="form.type"
                        :id="form.id"
                        :placeholder="form.placeholder"
                        :class="[
                          errorMessage ? 'text-error' : 'text-main',
                          errorMessage ? 'border-error' : 'border-normal'
                        ]"
                      />
                      <Popover
                        v-if="form.id === FormsE.region || form.id === FormsE.kindActivity"
                        :component-field="componentField.modelValue"
                        :form="form"
                        :value="value"
                        :setFieldValue="setFieldValue"
                        :class="[errorMessage ? 'border-error' : 'border-normal']"
                      />
                    </FormControl>
                  </FormLabel>
                </FormItem>
              </FormField>
              <FormField
                type="checkbox"
                :name="FormsE.isPersonalData"
                v-slot="{ value, handleChange, componentField }"
              >
                <FormItem :class="['flex gap-[10px]']">
                  <FormControl>
                    <Checkbox
                      v-bind="componentField"
                      :id="FormsE.isPersonalData"
                      :checked="value"
                      @update:checked="handleChange"
                    />
                  </FormControl>
                  <FormLabel :for="FormsE.isPersonalData">
                    Даю согласие на обработку своих персональных данных
                  </FormLabel>
                </FormItem>
              </FormField>
              <Captcha @update:model-value="(code) => (captcha = code)" />
              <DialogFooter>
                <Button
                  type="submit"
                  :class="[
                    'bg-mainBlue hover:bg-mainBlueHovered rounded py-[10px] px-4 font-bold text-sm text-background'
                  ]"
                >
                  Отправить форму
                </Button>
              </DialogFooter>
            </form>
          </slot>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  </span>
</template>

<script setup lang="ts">
import { ref, type HTMLAttributes } from 'vue'
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from '@/components/ui/dialog'
import { Input, File } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form'
import { Textarea } from '@/components/ui/textarea'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Checkbox } from '@/components/ui/checkbox'
import { Popover, Captcha } from '@/components'
import { cn } from '@/lib/utils'
import { FormsE } from './types'
import { Error, Done } from '@/assets/images'
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import { z } from 'zod'
import { postUrl, isError, res } from '@/api/asking'
import { forms } from '@/api/dataModal'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()

const captcha = ref()

const validationSchema = toTypedSchema(
  z.object({
    name: z.string().min(1),
    email: z.string().email(),
    phone: z.string().min(1),
    organization: z.string().min(1),
    inn: z.string().min(1),
    kpp: z.string().min(1),
    region: z.string().min(1),
    kindActivity: z.string().min(1),
    title: z.string().min(1),
    description: z.string().min(1),
    isPersonalData: z.boolean().refine((isPersonalData) => isPersonalData),
    code: z.optional(z.string()).refine((code) => code === captcha.value),
    dropzoneFile: z.any()
  })
)

const { handleSubmit, setFieldValue, resetForm } = useForm({
  validationSchema,
  keepValuesOnUnmount: true,
  initialValues: {},
  validateOnMount: true
})

const hiddenModal = ref()

const onSubmit = handleSubmit(
  (values) => {
    const formData = new FormData()
    if (values.dropzoneFile) {
      values.dropzoneFile?.forEach((file: File) => {
        formData.append(file.name, file)
      })
      delete values.dropzoneFile
    }
    values.code = undefined

    formData.append('data', JSON.stringify(values, null, 2))
    postUrl(formData)
    if (res || isError) hiddenModal.value = false
    if (res) resetForm()
  },
  ({ errors }) => {
    const arrFormsE = Object.keys(FormsE)
    const errorsArray = Object.keys(errors)
    const sortedErrorsArray = errorsArray.sort(
      (a, b) => arrFormsE.indexOf(a) - arrFormsE.indexOf(b)
    )
    const firstError = sortedErrorsArray[0]

    const el: HTMLElement | null = document.querySelector(`[id="${firstError}"]`)
    el?.scrollIntoView({ block: 'end', inline: 'nearest', behavior: 'smooth' })
    el?.focus()
  }
)
</script>
