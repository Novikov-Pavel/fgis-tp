import { createApp } from 'vue'
import App from '@/App.vue'
import posthogPlugin from "@/posthog.js"

createApp(App).use(posthogPlugin).mount('#app')
