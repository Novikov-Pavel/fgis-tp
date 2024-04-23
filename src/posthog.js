import posthog from 'posthog-js'
const VITE_POSTHOG_KEY = import.meta.env.VITE_POSTHOG_KEY

export default {
  install(app) {
    app.config.globalProperties.$posthog = posthog.init(VITE_POSTHOG_KEY, {
      api_host: 'https://app.posthog.com'
    })
  }
}
