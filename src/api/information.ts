import { encode } from 'js-base64'
import { ref } from 'vue'
import { baseUrl } from './asking'
import { useDateFormat, useFetch } from '@vueuse/core'
interface notificationsI {
  title?: string
  date?: string
  description?: Array<string>
  url?: string
}

const news = [
  {
    title: 'Важная информация',
    date: '16.02.2024г.',
    description: [
      'Уважаемые пользователи!',
      'Для вашей корректной работы и минимизации вопросов связанных с использованием ФГИС ТП рекомендуем ознакомиться с инструкциями, которые доступны по данной ссылке'
    ],
    url: 'Пользовательские инструкции'
  }
]

export const get = 'information/news'
export const notifications = ref<Array<notificationsI>>(news)

const userName = import.meta.env.VITE_USERNAME
const password = import.meta.env.VITE_PASSWORD

export const headers = new Headers()
headers.set('Authorization', 'Basic ' + encode(`${userName}:${password}`))
headers.set('Content-Type', 'application/json')

const getNews = async () => {
  const { data } = useFetch(`${baseUrl}/${get}`, {
    beforeFetch({ options }) {
      options.headers = headers
      return { options }
    },
    afterFetch({ data }) {
      data.forEach((item: notificationsI) => {
        item.date = useDateFormat(item.date, 'DD.MM.YYYYг.').value
        notifications.value.push(item)
      })
      return { data }
    },
    onFetchError({ error }) {
      console.error('error', error)
      return { error }
    },
  })
    .get()
    .json()
  return data
}
getNews()
