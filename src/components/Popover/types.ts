import type { HTMLAttributes } from "vue"
import type { FormI } from "@/components/Modal/types"

export interface PopoverProps {
  form: FormI
  value?: string 
  setFieldValue: any
  componentField: any
  class?: HTMLAttributes['class']
}
