import type { resI } from '@/components/Modal/types'
import { useFetch } from '@vueuse/core'
import { encode } from 'js-base64'
import { ref } from 'vue'

export const post = 'asking/askings'

export const baseUrl = import.meta.env.VITE_BASE_URL_API
const userName = import.meta.env.VITE_USERNAME
const password = import.meta.env.VITE_PASSWORD

export const headers = new Headers()
headers.set('Authorization', 'Basic ' + encode(`${userName}:${password}`))

export const res = ref<resI>()
export const isError = ref<boolean>()

export const postUrl = async (formData: FormData) => {
  const { data } = useFetch(`${baseUrl}/${post}`, {
    beforeFetch({ options }) {
      options.headers = headers
      options.body = formData
      return { options }
    },
    onFetchError({ error }) {
      isError.value = true
      console.error('error', error)
      return { error }
    },
    afterFetch({ data }) {
      res.value = data
      return { data }
    }
  })
    .post()
    .json()
  return data
}
